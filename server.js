const express = require("express");
const odbc = require("odbc");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// IMPORTANT: full connection string needed, not file name
const connectionString = 
  "Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=C:\\Users\\450 G3\\Desktop\\database\\Group23D-GYM.accdb;";

// TEST SERVER
app.get("/", (req, res) => {
  res.send("Server is running");
});

// ======================================================
// GET USERS
// ======================================================
app.get("/users", async (req, res) => {
  try {
    const db = await odbc.connect(connectionString);
    const data = await db.query("SELECT * FROM Users");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ======================================================
// INSERT A NEW MEMBER
// ======================================================
app.post("/members", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const db = await odbc.connect(connectionString);

    const sql = `
      INSERT INTO Members (fullName, Email, Password)
      VALUES (?, ?, ?)
    `;

    await db.query(sql, [name, email, password]);

    res.json({ message: "Member added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ======================================================
// UPDATE MEMBER BY ID
// ======================================================
app.put("/members/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;

  try {
    const db = await odbc.connect(connectionString);

    const sql = `
      UPDATE Members
      SET fullName = ?, Email = ?, Password = ?
      WHERE ID = ?
    `;

    await db.query(sql, [name, email, password, id]);

    res.json({ message: "Member updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ======================================================
// LOGIN FUNCTIONALITY
// ======================================================
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await odbc.connect(connectionString);

    const sql = `
      SELECT * FROM Users
      WHERE Email = ? AND Password = ?
    `;

    const result = await db.query(sql, [email, password]);

    if (result.length === 0) {
      return res.json({ success: false, message: "Invalid login" });
    }

    res.json({ success: true, user: result[0] });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
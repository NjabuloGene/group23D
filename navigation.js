 // Load user data from localStorage
        function loadUserData() {
            const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
            
            // Update profile information
            document.getElementById('username').textContent = userData.name || 'Member';
            document.getElementById('name').textContent = userData.name || 'Not set';
            document.getElementById('email').textContent = userData.email || 'Not set';
            document.getElementById('member-since').textContent = userData.memberSince || '2024';
            
            // Update membership information
            document.getElementById('membership-type').textContent = userData.membershipType || 'Basic';
            document.getElementById('expiry-date').textContent = userData.expiryDate || 'N/A';
            document.getElementById('status').textContent = userData.status || 'Active';
        }

        // Navigation functionality
        function initNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.section');
            
            // Show first section by default
            if (sections.length > 0) {
                sections[0].style.display = 'block';
            }
            
            // Add active class to first nav link
            if (navLinks.length > 0) {
                navLinks[0].classList.add('active');
            }
            
            // Add click event to each navigation link
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    navLinks.forEach(l => l.classList.remove('active'));
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Hide all sections
                    sections.forEach(section => {
                        section.style.display = 'none';
                    });
                    
                    // Show the selected section
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.style.display = 'block';
                    }
                });
            });
        }

        // Edit profile functionality
        function initEditProfile() {
            const editBtn = document.getElementById('edit-profile');
            
            editBtn.addEventListener('click', function() {
                const name = prompt('Enter new name:', document.getElementById('name').textContent);
                const email = prompt('Enter new email:', document.getElementById('email').textContent);
                
                if (name && email) {
                    // Update display
                    document.getElementById('name').textContent = name;
                    document.getElementById('email').textContent = email;
                    document.getElementById('username').textContent = name;
                    
                    // Update localStorage
                    const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');
                    userData.name = name;
                    userData.email = email;
                    localStorage.setItem('currentUser', JSON.stringify(userData));
                    
                    alert('Profile updated successfully!');
                }
            });
        }

        // Upgrade membership functionality
        function initUpgradeMembership() {
            const upgradeBtn = document.getElementById('upgrade-membership');
            
            upgradeBtn.addEventListener('click', function() {
                alert('Upgrade feature coming soon! Contact our team for premium membership options.');
            });
        }

        // Check if user is logged in
        function checkAuth() {
            const currentUser = localStorage.getItem('currentUser');
            if (!currentUser) {
                // Create a demo user for testing
                const demoUser = {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    membershipType: 'Premium',
                    expiryDate: '31 December 2025',
                    status: 'Active',
                    memberSince: '2024'
                };
                localStorage.setItem('currentUser', JSON.stringify(demoUser));
            }
        }

        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
            checkAuth();
            loadUserData();
            initNavigation();
            initEditProfile();
            initUpgradeMembership();
        });

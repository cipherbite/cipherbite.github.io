// Function executed on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    animateOnScroll();
    
    // Smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Dynamic skills counter
    setupSkillsCounter();
    
    // Contact form validation
    setupContactForm();

    // Dark/light mode toggle
    setupDarkModeToggle();
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.section, .skill-category, .project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.innerHTML = `
        .hidden {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .appear {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// Set up smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Set up skills counter with progress bars
function setupSkillsCounter() {
    // Add percentage data attributes to skill elements
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category, index) => {
        // Sample percentage values for skills
        const percentValues = [95, 85, 75];
        
        // Create progress bar for each category
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        
        const progressIndicator = document.createElement('div');
        progressIndicator.className = 'progress-indicator';
        progressIndicator.style.width = '0%';
        
        const progressText = document.createElement('div');
        progressText.className = 'progress-text';
        progressText.textContent = '0%';
        
        progressBar.appendChild(progressIndicator);
        progressBar.appendChild(progressText);
        category.appendChild(progressBar);
        
        // Set data-percent attribute
        const percent = percentValues[index % percentValues.length];
        category.setAttribute('data-percent', percent);
    });
    
    // Add CSS for progress bars
    const style = document.createElement('style');
    style.innerHTML = `
        .progress-bar {
            width: 100%;
            height: 8px;
            background-color: #eee;
            border-radius: 4px;
            margin-top: 15px;
            position: relative;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .progress-indicator {
            height: 100%;
            background-color: var(--accent-color);
            border-radius: 4px;
            transition: width 1.5s ease-in-out;
        }
        
        .progress-text {
            position: absolute;
            right: 0;
            top: -20px;
            font-size: 0.8rem;
            transition: all 1.5s ease-in-out;
        }
    `;
    document.head.appendChild(style);
    
    // Animate progress bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const category = entry.target;
                const percent = category.getAttribute('data-percent');
                const progressIndicator = category.querySelector('.progress-indicator');
                const progressText = category.querySelector('.progress-text');
                
                progressIndicator.style.width = `${percent}%`;
                progressText.textContent = `${percent}%`;
                
                observer.unobserve(category);
            }
        });
    }, { threshold: 0.5 });
    
    skillCategories.forEach(category => {
        observer.observe(category);
    });
}

// Set up contact form validation
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Validate form
            let valid = true;
            let errorMessage = '';
            
            if (!formValues.name || formValues.name.trim() === '') {
                valid = false;
                errorMessage += 'Name is required. ';
            }
            
            if (!formValues.email || !isValidEmail(formValues.email)) {
                valid = false;
                errorMessage += 'Valid email is required. ';
            }
            
            if (!formValues.message || formValues.message.trim() === '') {
                valid = false;
                errorMessage += 'Message is required.';
            }
            
            // Display error or confirmation
            if (valid) {
                // Here you would add code to send the form
                showNotification('Thank you for your message! We will be in touch soon.', 'success');
                contactForm.reset();
            } else {
                showNotification(errorMessage, 'error');
            }
        });
    }
    
    // Helper function for email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Function to display notifications
    function showNotification(message, type) {
        // Remove existing notification if present
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Add to DOM
        document.body.appendChild(notification);
        
        // Add CSS for notifications
        const style = document.createElement('style');
        style.innerHTML = `
            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 4px;
                color: white;
                font-weight: 500;
                z-index: 1000;
                animation: slideIn 0.3s forwards, fadeOut 0.5s 3.5s forwards;
                border: 1px solid rgba(0, 0, 0, 0.2);
            }
            
            .success {
                background-color: #2ecc71;
            }
            
            .error {
                background-color: #e74c3c;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; visibility: hidden; }
            }
        `;
        document.head.appendChild(style);
        
        // Remove notification after 4 seconds
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }
}

// Set up dark/light mode toggle
function setupDarkModeToggle() {
    // Add toggle switch to interface
    const header = document.querySelector('header .container');
    
    if (header) {
        const darkModeToggle = document.createElement('button');
        darkModeToggle.className = 'dark-mode-toggle';
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeToggle.title = 'Toggle Dark Mode';
        
        header.appendChild(darkModeToggle);
        
        // Add CSS for toggle
        const style = document.createElement('style');
        style.innerHTML = `
            .dark-mode-toggle {
                background: none;
                border: none;
                cursor: pointer;
                color: var(--text-color);
                font-size: 1.2rem;
                transition: color 0.3s;
                padding: 5px;
            }
            
            .dark-mode-toggle:hover {
                color: var(--accent-color);
            }
            
            body.dark-mode {
                --bg-color: #1a1a1a;
                --text-color: #f0f0f0;
                --light-color: #2a2a2a;
                --dark-color: #0f0f0f;
                --shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
            }
            
            body.dark-mode .project-card h3,
            body.dark-mode .skill-category h3 {
                color: var(--text-color);
            }
            
            body.dark-mode .project-card p,
            body.dark-mode .hero p {
                color: #aaa;
            }
            
            body.dark-mode .dark-mode-toggle i {
                content: '\\f185'; /* Sun icon */
            }
        `;
        document.head.appendChild(style);
        
        // Handle toggle click
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Change icon based on mode
            const icon = this.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
        
        // Check user's saved preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            const icon = darkModeToggle.querySelector('i');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

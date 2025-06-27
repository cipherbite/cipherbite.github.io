// Portfolio Script - Cybersecurity Focus
// Responsive navigation and project showcase functionality

document.addEventListener('DOMContentLoaded', function() {
    // Project data structure based on your directory structure
    const projects = {
        forensic: [
            {
                name: 'Advanced Steganography Detection',
                slug: 'advanced-steganography-detection',
                description: 'Zaawansowane narzędzie do wykrywania ukrytych danych w obrazach i plikach multimedialnych',
                tags: ['Steganografia', 'Forensics', 'Image Analysis'],
                difficulty: 'Advanced'
            },
            {
                name: 'Container Memory Forensics',
                slug: 'container-memory-forensics',
                description: 'Analiza pamięci kontenerów Docker w celu wykrycia zagrożeń i artefaktów',
                tags: ['Docker', 'Memory Analysis', 'Containerization'],
                difficulty: 'Expert'
            },
            {
                name: 'DNS Exfiltration Detector',
                slug: 'dns-exfiltration-detector',
                description: 'System wykrywania eksfiltracji danych przez tunelowanie DNS',
                tags: ['DNS', 'Network Security', 'Data Exfiltration'],
                difficulty: 'Intermediate'
            },
            {
                name: 'Forensic Metadata Harvester',
                slug: 'forensic-metadata-harvester',
                description: 'Narzędzie do zbierania i analizy metadanych z różnych typów plików',
                tags: ['Metadata', 'File Analysis', 'OSINT'],
                difficulty: 'Intermediate'
            },
            {
                name: 'Post-Breach Identity Forensics',
                slug: 'post-breach-identity-forensics',
                description: 'Analiza tożsamości i działań po naruszeniu bezpieczeństwa',
                tags: ['Identity', 'Incident Response', 'Breach Analysis'],
                difficulty: 'Advanced'
            }
        ],
        iam: [
            {
                name: 'Active Directory Compromise Lab',
                slug: 'active-directory-compromise-lab',
                description: 'Laboratorium symulujące kompromitację Active Directory',
                tags: ['Active Directory', 'Red Team', 'Windows Security'],
                difficulty: 'Advanced'
            },
            {
                name: 'Authentication Protocol Fuzzer',
                slug: 'authentication-protocol-fuzzer',
                description: 'Fuzzer do testowania protokołów uwierzytelniania',
                tags: ['Authentication', 'Fuzzing', 'Protocol Security'],
                difficulty: 'Expert'
            },
            {
                name: 'Behavioral Web Application Firewall',
                slug: 'behavioral-web-application-firewall',
                description: 'WAF oparty na analizie behawioralnej użytkowników',
                tags: ['WAF', 'Behavioral Analysis', 'Web Security'],
                difficulty: 'Advanced'
            },
            {
                name: 'Bluetooth LE Security Scanner',
                slug: 'bluetooth-le-security-scanner',
                description: 'Skaner bezpieczeństwa dla urządzeń Bluetooth Low Energy',
                tags: ['Bluetooth', 'IoT Security', 'Wireless'],
                difficulty: 'Intermediate'
            },
            {
                name: 'Cloud Identity Breach Simulator',
                slug: 'cloud-identity-breach-simulator',
                description: 'Symulator naruszenia tożsamości w środowisku chmurowym',
                tags: ['Cloud Security', 'Identity Management', 'Simulation'],
                difficulty: 'Advanced'
            },
            {
                name: 'Zero Trust Bypass Research',
                slug: 'zero-trust-bypass-research',
                description: 'Badania nad metodami omijania architektury Zero Trust',
                tags: ['Zero Trust', 'Research', 'Security Architecture'],
                difficulty: 'Expert'
            }
        ]
    };

    // Initialize the application
    init();

    function init() {
        setupNavigation();
        setupProjectFilters();
        renderProjects();
        setupScrollEffects();
        setupTypingAnimation();
        setupMatrixBackground();
    }

    // Navigation functionality
    function setupNavigation() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                this.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            });
        });
    }

    // Project filtering functionality
    function setupProjectFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                filterProjects(filter);
            });
        });
    }

    // Render projects in the DOM
    function renderProjects() {
        const projectsContainer = document.querySelector('.projects-grid');
        if (!projectsContainer) return;

        const allProjects = [...projects.forensic, ...projects.iam];
        
        projectsContainer.innerHTML = allProjects.map(project => {
            const category = projects.forensic.includes(project) ? 'forensic' : 'iam';
            return createProjectCard(project, category);
        }).join('');

        // Add click events to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                const projectSlug = this.dataset.project;
                const category = this.dataset.category;
                openProjectDetails(projectSlug, category);
            });
        });
    }

    // Create project card HTML
    function createProjectCard(project, category) {
        const difficultyColor = {
            'Intermediate': '#4CAF50',
            'Advanced': '#FF9800',
            'Expert': '#F44336'
        };

        return `
            <div class="project-card" data-project="${project.slug}" data-category="${category}">
                <div class="project-header">
                    <h3 class="project-title">${project.name}</h3>
                    <span class="difficulty-badge" style="background-color: ${difficultyColor[project.difficulty]}">
                        ${project.difficulty}
                    </span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-category">${category.toUpperCase()}</div>
            </div>
        `;
    }

    // Filter projects by category
    function filterProjects(filter) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const category = card.dataset.category;
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Open project details (navigate to project page)
    function openProjectDetails(projectSlug, category) {
        const categoryFolder = category === 'forensic' ? 'FORENSIC_PROJECTS' : 'IAM_PROJECTS';
        window.location.href = `./${categoryFolder}/${projectSlug}/index.html`;
    }

    // Scroll effects
    function setupScrollEffects() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        // Intersection Observer for section highlighting
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => {
            observer.observe(section);
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-bg');
            
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    // Typing animation for hero section
    function setupTypingAnimation() {
        const typewriterElement = document.querySelector('.typewriter');
        if (!typewriterElement) return;

        const texts = [
            'Cybersecurity Researcher',
            'Digital Forensics Expert',
            'Security Tool Developer',
            'Threat Hunter'
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentText = texts[textIndex];
            
            if (!isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(typeWriter, 2000); // Pause before deleting
                    return;
                }
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
            }
            
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeWriter, speed);
        }

        typeWriter();
    }

    // Matrix-style background animation
    function setupMatrixBackground() {
        const canvas = document.getElementById('matrix-bg');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Matrix characters
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const charArray = chars.split('');
        
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = `${fontSize}px monospace`;
            
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(drawMatrix, 35);
    }

    // Skills progress animation
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillsSection = document.querySelector('#skills');
        
        if (!skillsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const percentage = bar.dataset.percentage;
                        bar.style.width = percentage + '%';
                    });
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }

    // Contact form handling
    function setupContactForm() {
        const contactForm = document.querySelector('#contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Contact form submitted:', data);
            
            // Show success message
            showNotification('Wiadomość została wysłana!', 'success');
            
            // Reset form
            this.reset();
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Initialize additional features
    animateSkills();
    setupContactForm();

    // Console easter egg
    console.log(`
    ╔═══════════════════════════════════════╗
    ║        Welcome to CipherBite          ║
    ║     Cybersecurity Portfolio           ║
    ║                                       ║
    ║     Interested in the code?           ║
    ║     Check out the repository!         ║
    ╚═══════════════════════════════════════╝
    `);
});

// Global utility functions
window.CipherBite = {
    // Encode text to base64 (for fun)
    encode: function(text) {
        return btoa(text);
    },
    
    // Decode base64 text
    decode: function(encodedText) {
        return atob(encodedText);
    },
    
    // Generate random hex string (like a hash)
    generateHash: function(length = 32) {
        const chars = '0123456789abcdef';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
};

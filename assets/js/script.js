document.addEventListener('DOMContentLoaded', function() {
    // ---------- Płynne przewijanie dla linków kotwicznych ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Pomiń jeśli to tylko '#'
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Uwzględnij wysokość stałego nagłówka
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Dodatkowy margines
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---------- Animacje przy przewijaniu dla sekcji ----------
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Specjalne animacje dla kart projektów
                const projectCards = entry.target.querySelectorAll('.project-card');
                if (projectCards.length) {
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }

                // Animacje dla highlightów
                const highlights = entry.target.querySelectorAll('.highlight');
                if (highlights.length) {
                    highlights.forEach((highlight, index) => {
                        setTimeout(() => {
                            highlight.style.opacity = '1';
                            highlight.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }

                // Animacje dla skill categories
                const skillCategories = entry.target.querySelectorAll('.skill-category');
                if (skillCategories.length) {
                    skillCategories.forEach((category, index) => {
                        setTimeout(() => {
                            category.style.opacity = '1';
                            category.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });

    // Obserwuj wszystkie sekcje
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // ---------- Przycisk przewijania do góry ----------
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }

        // Parallax effect dla hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ---------- Efekt pisania dla hero tekstu ----------
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // ---------- Efekty hover dla kart projektów ----------
    document.querySelectorAll('.project-card').forEach(card => {
        // Hover effect jest już obsługiwany przez CSS, ale dodajemy focus dla dostępności
        card.addEventListener('focus', function() {
            this.querySelector('.project-overlay').style.opacity = '1';
        });
        
        card.addEventListener('blur', function() {
            this.querySelector('.project-overlay').style.opacity = '0';
        });
    });

    // ---------- Animacja tagów umiejętności przy hover ----------
    document.querySelectorAll('.skill-tags span, .project-tags span').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ---------- Menu mobilne ----------
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
            
            // Zmień ikonę
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Zamknij menu po kliknięciu w link
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // ---------- Efekt "glow" dla przycisków przy hover ----------
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ---------- Lazy loading dla obrazów ----------
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // ---------- Animacja liczników (jeśli są) ----------
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const increment = target / 200;
                
                function updateCount() {
                    const count = +counter.innerText;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target;
                    }
                }
                
                updateCount();
                counterObserver.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => counterObserver.observe(counter));

    // ---------- Cybersecurity terminal effect ----------
    const createTerminalEffect = () => {
        const terminals = document.querySelectorAll('.terminal-text');
        terminals.forEach(terminal => {
            const text = terminal.textContent;
            terminal.textContent = '';
            
            [...text].forEach((char, i) => {
                setTimeout(() => {
                    terminal.textContent += char;
                }, i * 50);
            });
        });
    };

    // Uruchom efekt terminala jeśli są elementy
    if (document.querySelectorAll('.terminal-text').length > 0) {
        createTerminalEffect();
    }

    // ---------- Inicjalizacja dodatkowych animacji ----------
    // Dodaj klasy do elementów przed animacją
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    document.querySelectorAll('.highlight').forEach(highlight => {
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateY(20px)';
        highlight.style.transition = 'all 0.5s ease-out';
    });

    document.querySelectorAll('.skill-category').forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'all 0.5s ease-out';
    });

    // ---------- Konsolowa wiadomość dla rekruterów ----------
    console.log('%c🔒 Welcome to my Cybersecurity Portfolio! 🔒', 
        'color: #00d4ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);');
    console.log('%cInterested in the code? Let\'s talk! 💻', 
        'color: #00ff88; font-size: 16px;');
    console.log('%cEmail: david.dylag@protonmail.com', 
        'color: #a8b2c7; font-size: 14px;');
});

// Funkcja uruchamiana po załadowaniu DOM
document.addEventListener('DOMContentLoaded', function() {
    // Animacja pojawiania się elementów po załadowaniu strony
    animateOnScroll();
    
    // Obsługa płynnego przewijania dla linków nawigacyjnych
    setupSmoothScrolling();
    
    // Dynamiczny licznik umiejętności
    setupSkillsCounter();
    
    // Walidacja formularza kontaktowego
    setupContactForm();

    // Przełączanie trybu ciemnego/jasnego
    setupDarkModeToggle();
});

// Funkcja animacji elementów podczas przewijania
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
    
    // Dodaj style CSS dla animacji
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

// Funkcja płynnego przewijania dla linków nawigacyjnych
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

// Funkcja licznika umiejętności
function setupSkillsCounter() {
    // Dodajemy atrybuty data-percent do elementów umiejętności
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category, index) => {
        // Przykładowe wartości procentowe dla umiejętności
        const percentValues = [95, 85, 75];
        
        // Tworzymy pasek postępu dla każdej kategorii
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
        
        // Ustaw atrybut data-percent
        const percent = percentValues[index % percentValues.length];
        category.setAttribute('data-percent', percent);
    });
    
    // Dodajemy style CSS dla pasków postępu
    const style = document.createElement('style');
    style.innerHTML = `
        .progress-bar {
            width: 100%;
            height: 8px;
            background-color: #eee;
            border-radius: 4px;
            margin-top: 15px;
            position: relative;
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
    
    // Animujemy paski postępu przy przewijaniu
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

// Funkcja walidacji formularza kontaktowego
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Zbieranie danych z formularza
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Walidacja formularza
            let valid = true;
            let errorMessage = '';
            
            if (!formValues.name || formValues.name.trim() === '') {
                valid = false;
                errorMessage += 'Imię jest wymagane. ';
            }
            
            if (!formValues.email || !isValidEmail(formValues.email)) {
                valid = false;
                errorMessage += 'Podaj poprawny adres email. ';
            }
            
            if (!formValues.message || formValues.message.trim() === '') {
                valid = false;
                errorMessage += 'Wiadomość jest wymagana.';
            }
            
            // Wyświetlanie wiadomości o błędach lub potwierdzenia
            if (valid) {
                // Tutaj można dodać kod do wysyłania formularza
                showNotification('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.', 'success');
                contactForm.reset();
            } else {
                showNotification(errorMessage, 'error');
            }
        });
    }
    
    // Funkcja pomocnicza do walidacji e-mail
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Funkcja wyświetlająca powiadomienia
    function showNotification(message, type) {
        // Sprawdź, czy istnieje już powiadomienie i usuń je
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Stwórz nowe powiadomienie
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Dodaj do DOM
        document.body.appendChild(notification);
        
        // Dodaj style CSS dla powiadomień
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
        
        // Usuń powiadomienie po 4 sekundach
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }
}

// Funkcja przełączania trybu ciemnego/jasnego
function setupDarkModeToggle() {
    // Dodaj przełącznik do interfejsu
    const header = document.querySelector('header .container');
    
    if (header) {
        const darkModeToggle = document.createElement('button');
        darkModeToggle.className = 'dark-mode-toggle';
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeToggle.title = 'Przełącz tryb ciemny';
        
        header.appendChild(darkModeToggle);
        
        // Dodaj style CSS dla przełącznika
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
                content: '\\f185'; /* Ikona słońca */
            }
        `;
        document.head.appendChild(style);
        
        // Obsługa kliknięcia przełącznika
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Zmień ikonę w zależności od trybu
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
        
        // Sprawdź zapisane preferencje użytkownika
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            const icon = darkModeToggle.querySelector('i');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

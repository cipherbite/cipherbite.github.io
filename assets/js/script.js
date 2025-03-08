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
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
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
                
                // Animuj paski umiejętności
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                if (skillBars.length) {
                    skillBars.forEach((bar, index) => {
                        setTimeout(() => {
                            const width = bar.getAttribute('data-width');
                            bar.style.width = width;
                        }, index * 100);
                    });
                }
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' });

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
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ---------- Inicjalizacja formularza kontaktowego ----------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Tutaj możesz dodać kod do obsługi wysyłania formularza
            // np. użycie fetch API do wysłania danych na backend
            
            // Przykład:
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Formularz wysłany:', formValues);
            
            // Pokaż potwierdzenie
            alert('Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.');
            this.reset();
        });
    }

    // ---------- Efekty hover dla kart projektów ----------
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.project-overlay').style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.project-overlay').style.opacity = '0';
        });
    });
});

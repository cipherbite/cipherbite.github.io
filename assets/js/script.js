// Płynne przewijanie dla linków kotwicznych
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Zapobiegaj domyślnemu zachowaniu linku
        const targetId = this.getAttribute('href'); // Pobierz ID docelowej sekcji
        const targetElement = document.querySelector(targetId); // Znajdź element docelowy
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Płynne przewijanie
            });
        }
    });
});

// Animacje przy przewijaniu dla sekcji
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Dodaj klasę 'animate' do widocznej sekcji
        }
    });
}, { threshold: 0.3 }); // Uruchom animację, gdy 30% sekcji jest widoczne

// Obserwuj wszystkie sekcje z klasą 'section'
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

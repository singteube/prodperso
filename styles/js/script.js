document.addEventListener('DOMContentLoaded', () => {
    // Carousel logic
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    if (images.length > 0) {
        images[0].classList.add('active');
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000);
    }

    // Form validation and send
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Veuillez entrer un email valide.');
            return;
        }
        // Simulate sending message
        alert('Message envoyé avec succès !');
        form.reset();
    });
    

    // Fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

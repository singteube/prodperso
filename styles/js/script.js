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

    // Initialize EmailJS (replace with your public key)
    emailjs.init('O2kJCxMXN7meRP5HX');

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
        // Send email
        emailjs.send('service_xvvty4o', 'template_6puvel5', {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'singteubeleuferbe@gmail.com'
        }).then(() => {
            alert('Message envoyé avec succès !');
            form.reset();
        }, (error) => {
            alert('Erreur lors de l\'envoi: ' + error.text);
        });
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

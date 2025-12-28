// Lopenyet Frontend App
// PT. Lopenyet - Aplikasi Cinta-Cintaan

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Lopenyet App Initialized!');
    
    // Start Button Handler
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            alert('Selamat datang di Lopenyet! 💕\nFitur ini masih dalam pengembangan.');
        });
    }

    // Feature Cards Animation
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });
});

// TODO: Fitur yang akan dikembangkan
// - [ ] Fitur komentar pada status
// - [ ] Sistem like dan match
// - [ ] Chat real-time
// - [ ] Profile settings

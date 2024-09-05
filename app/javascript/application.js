// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// app/javascript/packs/application.js or similar file
document.addEventListener('DOMContentLoaded', () => {
    function toggleDetails(card) {
        const details = card.querySelector('.card-details');
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block'; // Show details
        } else {
            details.style.display = 'none'; // Hide details
        }
    }

    // Attach the toggleDetails function to all cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => toggleDetails(card));
    });
});

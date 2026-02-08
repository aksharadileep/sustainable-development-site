// Fix for Learn More button functionality
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.goal-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const goalNumber = this.getAttribute('data-goal');
            const infoSection = document.getElementById(`goal-info-${goalNumber}`);
            const icon = this.querySelector('i');
            
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle active class on info section
            infoSection.classList.toggle('active');
            
            // Change button text
            const buttonText = this.querySelector('span');
            if (infoSection.classList.contains('active')) {
                buttonText.textContent = 'Show Less';
            } else {
                buttonText.textContent = 'Learn More';
            }
        });
    });
    
    // If images don't load, show fallback with goal number
    const images = document.querySelectorAll('.goal-img');
    images.forEach(img => {
        img.onerror = function() {
            this.style.display = 'none';
            const goalHeader = this.closest('.goal-header');
            const goalNumber = goalHeader.querySelector('.goal-number').textContent;
            const fallbackDiv = document.createElement('div');
            fallbackDiv.className = 'image-fallback';
            fallbackDiv.style.cssText = `
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #4CAF50, #2E7D32);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 3rem;
                font-weight: bold;
            `;
            fallbackDiv.textContent = goalNumber;
            goalHeader.appendChild(fallbackDiv);
        };
    });
});
// JavaScript to add counter effect to multiple counters
document.addEventListener("DOMContentLoaded", function () {
    // Function to create a counter effect
    function animateCounter(counterId, target, speed) {
        const counterElement = document.getElementById(counterId);
        let count = 0;

        const updateCounter = () => {
            if (count < target) {
                count++;
                counterElement.innerText = `${count}+`;
                setTimeout(updateCounter, speed);
            } else {
                counterElement.innerText = `${target}+`;
            }
        };

        updateCounter();
    }
    // Start counters with their respective targets and speed
    animateCounter('counter1', 8, 300);   // Years of experience
    animateCounter('counter2', 500, 30);  // Clients over the world
    animateCounter('counter3', 600, 30);  // Positive reviews
});

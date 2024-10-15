let cookingInterval;
let currentStep = 0;

function toggleIngredients() {
    const ingredients = document.querySelector('.ingredients');
    ingredients.classList.toggle('hidden');
}

function toggleSteps() {
    const steps = document.querySelector('.steps');
    steps.classList.toggle('hidden');
}

function startCooking() {
    const steps = document.querySelectorAll('.steps li');
    const progressBar = document.getElementById('progress-bar');
    const stopButton = document.querySelector('.stop-button');
    const startButton = document.querySelector('.start-button');

    currentStep = 0;
    progressBar.style.width = '0%';
    stopButton.classList.remove('hidden');
    startButton.classList.add('hidden');

    cookingInterval = setInterval(() => {
        if (currentStep < steps.length) {
            steps[currentStep].style.color = '#4caf50';
            currentStep++;
            progressBar.style.width = `${(currentStep / steps.length) * 100}%`;
        } else {
            clearInterval(cookingInterval);
            stopButton.classList.add('hidden');
            startButton.classList.remove('hidden');
        }
    }, 2000); // Simulates a step every 2 seconds
}

function stopCooking() {
    const progressBar = document.getElementById('progress-bar');
    const stopButton = document.querySelector('.stop-button');
    const startButton = document.querySelector('.start-button');

    clearInterval(cookingInterval);
    stopButton.classList.add('hidden');
    startButton.classList.remove('hidden');

    // Reset progress and steps
    progressBar.style.width = '0%';
    currentStep = 0;
    const steps = document.querySelectorAll('.steps li');
    steps.forEach(step => (step.style.color = ''));
}

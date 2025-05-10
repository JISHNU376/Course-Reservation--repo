document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('student-reservation-form');
    const steps = document.querySelectorAll('.form-step');
    const stepIndicators = document.querySelectorAll('.step');
    const nextBtns = document.querySelectorAll('.next-step');
    const prevBtns = document.querySelectorAll('.prev-step');
    const reviewContainer = document.getElementById('review-details');
    const successMsg = document.getElementById('reservation-success');
    const errorMsg = document.getElementById('reservation-error');

    let currentStep = 0;

    // Show only the current step, hide others
    function showStep(index) {
        steps.forEach((step, i) => {
            step.style.display = i === index ? 'block' : 'none';    // show only active step
            step.classList.toggle('active', i === index);           // optional: add/remove 'active' on step container
            stepIndicators[i].classList.toggle('active', i === index); // highlight current indicator
        });
    }

    // Validate inputs in the current step
    function validateStep(index) {
        const inputs = steps[index].querySelectorAll('input, select, textarea');
        for (let input of inputs) {
            if (!input.checkValidity()) {
                input.reportValidity();
                return false;
            }
        }
        return true;
    }

    // Populate review summary
    function populateReview() {
        const formData = new FormData(form);
        let summaryHtml = '<ul>';
        for (let [key, value] of formData.entries()) {
            const labelElem = form.querySelector(`[name="${key}"]`);
            if (labelElem) {
                const label = labelElem.closest('.form-group')?.querySelector('label')?.textContent || key;
                summaryHtml += `<li><strong>${label}:</strong> ${value}</li>`;
            }
        }
        summaryHtml += '</ul>';
        reviewContainer.innerHTML = summaryHtml;
    }

    // Next buttons
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    showStep(currentStep);
                    if (currentStep === steps.length - 1) { // last step (confirmation)
                        populateReview();
                    }
                }
            }
        });
    });

    // Previous buttons
    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        try {
            console.log('Reservation submitted');
            successMsg.classList.add('active');
            errorMsg.classList.remove('active');
            form.reset();
            currentStep = 0;
            showStep(currentStep);
        } catch (error) {
            console.error('Submission failed', error);
            successMsg.classList.remove('active');
            errorMsg.classList.add('active');
        }
    });

    // Initialize first step
    showStep(currentStep);
});

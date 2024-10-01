// Select elements
const resumeBtn = document.getElementById('resume-btn');
const resumeUpload = document.getElementById('resume-upload');
const applyBtn = document.getElementById('apply-btn');
const applicantCount = document.getElementById('applicant-count');

resumeBtn.addEventListener('click', () => {
    resumeUpload.click();
});

resumeUpload.addEventListener('change', () => {
    if (resumeUpload.files.length > 0) {
        applyBtn.disabled = false;
        applyBtn.style.backgroundColor = '#dc3545'; // McDonald's red
    }
});

applyBtn.addEventListener('click', () => {
    if (resumeUpload.files.length > 0) {
        applyBtn.textContent = 'Applied';
        applyBtn.disabled = true;
        applyBtn.classList.remove('apply-btn');
        applyBtn.classList.add('applied-btn');

        let currentCount = parseInt(applicantCount.textContent);
        applicantCount.textContent = currentCount + 1;
    }
});

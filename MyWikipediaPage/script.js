const careerToggle = document.getElementById('career-toggle');
const careerSublist = document.getElementById('career-sublist');
const arrow = document.getElementById('arrow');

careerToggle.addEventListener('click', function() {
    careerSublist.classList.toggle('hidden');
    arrow.classList.toggle('down');
});
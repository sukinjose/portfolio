document.addEventListener('DOMContentLoaded', () => {
    let typingtxt = document.querySelector('.inc');
    let designation = ['Frontend Developer', 'Python Developer', 'Solution Architect'];
    let arrayIndex = 1;

    function ChangingTXT() {
        if (typingtxt) {
            typingtxt.innerHTML = designation[arrayIndex];
            arrayIndex = (arrayIndex + 1) % designation.length;
        } else {
            console.error('Element with class "inc" not found');
        }
    }

    ChangingTXT();
    setInterval(ChangingTXT, 5000);
});




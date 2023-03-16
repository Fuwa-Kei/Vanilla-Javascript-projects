const checkboxes = document.querySelectorAll('input')
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    // Check if they had the shift key down & checkbox they checked 
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween; 
            }
            // Only check the boxes that 'inBetween' was true for 
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }


    lastChecked = this 
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));



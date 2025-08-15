const buttonTwo = document.getElementById('button2');
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('emailError');
const emailData = document.getElementById('email-data');
const cardOne = document.getElementById('card1');
const cardTwo = document.getElementById('card2');


function validateEmail(e) {
    e.preventDefault();   
    
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if(emailInput.value.match(emailRegex)) {
        cardOne.style.display = 'none';
        cardTwo.style.display = 'flex';
        emailData.textContent = emailInput.value;
        
    } else {       
        emailError.style.display = 'block';
        emailInput.style.borderColor = 'var(--primary-color)';
        emailInput.style.color = 'var(--primary-color)';
        emailInput.style.backgroundColor = 'var(--primary-shade)';          
    }
}

function backHome(e) {

    let w = document.documentElement.clientWidth || window.innerWidth;    
    const desktopWidth = 1024; 
    
    if(w < desktopWidth) {
        emailInput.value = '';
        cardOne.style.display = 'grid';
        cardTwo.style.display = 'none';
        emailError.style.display = 'none';
        emailInput.style.borderColor = 'var(--neutral1)';
        emailInput.style.backgroundColor = 'var(--neutral2)';
    } else {
        emailInput.value = '';
        cardOne.style.display = 'inline-flex';
        cardTwo.style.display = 'none';
        emailError.style.display = 'none';
        emailInput.style.color = 'var(--neutral1)';
        emailInput.style.borderColor = 'var(--neutral1)';
        emailInput.style.backgroundColor = 'var(--neutral2)';
    }  
}

emailForm.addEventListener('submit', validateEmail);
buttonTwo.addEventListener('click', backHome);
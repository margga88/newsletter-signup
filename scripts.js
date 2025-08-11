const buttonTwo = document.getElementById('button2');
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('emailError');
const cardOne = document.getElementById('card1');
const cardTwo = document.getElementById('card2');

function validateEmail(e) {
    e.preventDefault();   
    
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if(emailInput.value.match(emailRegex)) {
        cardOne.style.display = 'none';
        cardTwo.style.display = 'flex';                             
            
    } else {       
        emailError.style.display = 'block';
        emailInput.style.borderColor = 'var(--primary-red)'; 
        emailInput.style.backgroundColor = 'var(--primary-red)';          
    }
}

function backHome(e) {
    emailInput.value = '';
    cardOne.style.display = 'grid';
    cardTwo.style.display = 'none';  
}

emailForm.addEventListener('submit', validateEmail);
buttonTwo.addEventListener('click', backHome);








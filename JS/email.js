let email = document.querySelector('input')
let submit = document.querySelector('#btn')
let text = document.querySelector('.text-error')
let img = document.querySelector('.error')
let html  = document.querySelector('html')

submit.addEventListener('click', e =>{
    e.preventDefault()

    email.onfocus = removed

    //clean input
    function removed(){
        img.style.display = 'none'
        text.innerHTML = ''
        
    }
    
    let emailValue = email.value

    if(emailValue == ''){

        text.innerHTML = 'Empty field'
        email.classList = 'focus'
        img.style.display = 'block'


    }else if(!email.checkValidity()){
        
        text.innerHTML = 'Please provide a valid email'
        email.classList = 'focus'
        img.style.display = 'block'

    }else if(email.checkValidity()){

        text.innerHTML = 'Email valid thank you'
        text.classList = 'text-sucess'
        img.style.display = 'none'
        email.classList = 'sucess'
        html.classList = 'html-sucess'

        setTimeout( () => {
            
            location.reload(1);
            
        }, 5000);

    };

});
let accCreator = document.querySelector('.accCreator')
let frstName = document.querySelector('.frstName')
let scndName = document.querySelector('.scndName')
let mail = document.querySelector('.mail')
let male = document.querySelector('#male')
let pos = document.querySelector('#pos')
let privacy = document.querySelector('#privacy')
let signIn = document.querySelector('.signIn')
let accShow = document.querySelector('.accShow')
let avatarBack = document.querySelector('.avatarBack')
let loginAcc = document.querySelector('.loginAcc')
let mailAcc = document.querySelector('.mailAcc')
let positionAcc = document.querySelector('.positionAcc')
let signOut = document.querySelector('.signOut')
let privacyText = document.querySelector('.privacyText')

signIn.addEventListener('click', event => {
    event.preventDefault()


    if(privacy.checked == false){

    }else{
        accShow.style.display = "block"
        accCreator.style.display = "none"

        loginAcc.innerHTML = frstName.value + " " + scndName.value;
        mailAcc.innerHTML = mail.value;
        if(male.checked == false){
            avatarBack.style.backgroundImage = 'url("./woman.png")'
        };
        positionAcc.innerHTML = pos.value;
    }

})

signOut.addEventListener('click', () =>{
    window.location.reload();
})

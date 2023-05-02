let editBtn = document.querySelector('.editBtn')
let editInput = document.querySelector('.editInput')
let styleBtn = document.querySelector('.styleBtn')
let styleField = document.querySelector('.styleField')
let addBtn = document.querySelector('.addBtn')
let saveBtn = document.querySelector('.saveBtn')
let textField = document.querySelector('.textField')
let radio12 = document.querySelector('.a12px');   
let radio14 = document.querySelector('.a14px')
let radio16 = document.querySelector('.a16px')
let radio18 = document.querySelector('.a18px')
let radio20 = document.querySelector('.a20px')
let colorText = document.querySelector('.colorText')
let colorTextBtn = document.querySelector('.colorTextBtn')
let colorBack = document.querySelector('.colorBack')
let colorBackBtn = document.querySelector('.colorBackBtn')
let redText = document.querySelector('.redText')
let blackText = document.querySelector('.blackText')
let greenText = document.querySelector('.greenText')
let blueText = document.querySelector('.blueText')
let redBack = document.querySelector('.redBack')
let greyBack = document.querySelector('.greyBack')
let greenBack = document.querySelector('.greenBack')
let blueBack = document.querySelector('.blueBack')
let boldFont = document.querySelector('#boldFont')
let cursiveFont = document.querySelector('#cursiveFont')
let selectFont = document.querySelector('#selectFont')

editBtn.addEventListener('click', () =>{
    editInput.style.display = 'inline'
    addBtn.style.display = 'inline'
    saveBtn.style.display = 'inline'
    styleField.style.display = 'none'
    editInput.value = textField.innerHTML
});

styleBtn.addEventListener('click', () =>{
    editInput.style.display = 'none'
    addBtn.style.display = 'none'
    saveBtn.style.display = 'none'
    styleField.style.display = 'inline'
});

saveBtn.addEventListener("click", event =>  {
    event.preventDefault()
    textField.innerHTML = editInput.value;
});

addBtn.addEventListener("click", function(event){
    event.preventDefault()
});

radio12.addEventListener('click', ()=>{
    textField.style.fontSize = "12px"
})
radio14.addEventListener('click', ()=>{
    textField.style.fontSize = "14px"
})
radio16.addEventListener('click', ()=>{
    textField.style.fontSize = "16px"
})
radio18.addEventListener('click', ()=>{
    textField.style.fontSize = "18px"
})
radio20.addEventListener('click', ()=>{
    textField.style.fontSize = "20px"
})

colorTextBtn.addEventListener('click', () => {
    colorText.style.display = "inline"
    colorBack.style.display = "none"
    event.preventDefault()
})
colorBackBtn.addEventListener('click', () => {
    colorBack.style.display = "inline"
    colorText.style.display = "none"
    event.preventDefault()
})

redText.addEventListener('click', () =>{
    textField.style.color = 'red'
    colorText.style.display = 'none'
})
blackText.addEventListener('click', () =>{
    textField.style.color = 'black'
    colorText.style.display = 'none'
})
greenText.addEventListener('click', () =>{
    textField.style.color = 'green'
    colorText.style.display = 'none'
})
blueText.addEventListener('click', () =>{
    textField.style.color = 'blue'
    colorText.style.display = 'none'
})
redBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'red'
    colorBack.style.display = 'none'
})
greyBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'rgb(211, 211, 211)'
    colorBack.style.display = 'none'
})
blueBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'blue'
    colorBack.style.display = 'none'
})
greenBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'green'
    colorBack.style.display = 'none'
})

boldFont.addEventListener('click', () =>{
    if(boldFont.checked == true){
        textField.style.fontWeight = '700'
    }else if(boldFont.checked == false){
        textField.style.fontWeight = '400'
    }
});

cursiveFont.addEventListener('click', () =>{
    if(cursiveFont.checked == true){
        textField.style.fontStyle = 'italic'
    }else if(cursiveFont.checked == false){
        textField.style.fontStyle = ''
    }
})

function selectTextFonts(abc){
    if (abc.value = 'sans-serif'){
        textField.style.fontFamily = 'sans-serif'

    }else if(abc.value = 'fantasy'){
        textField.style.fontFamily = 'fantasy'
    }else{
        textField.style.fontFamily = ''
    }
};

let colorTextField = document.querySelector('.colorTextField')
let colorBackField = document.querySelector('.colorBackField')
let textField = document.querySelector('.textField')
let editorField = document.querySelector('.editorField')
let editorOpen = document.querySelector('.editorOpen')
let b = document.querySelector('.b')
let i = document.querySelector('.i')
let u = document.querySelector('.u')
let s = document.querySelector('.s')
let leftAlign = document.querySelector('.leftAlign')
let middleAlign = document.querySelector('.middleAlign')
let rightAlign = document.querySelector('.rightAlign')
let textFontFamily = document.querySelector('#fontFamily')
let textFontSize = document.querySelector('#textFontSize')
let textColor = document.querySelector('.textColor')
let backColor = document.querySelector('.backColor')
let lockLogin = document.querySelector('.lockLogin')
let closeColor = document.querySelector('.closeColor')
let closeBack = document.querySelector('.closeBack')
let redText = document.querySelector('.redText')
let greenText = document.querySelector('.greenText')
let blackText = document.querySelector('.blackText')
let whiteText = document.querySelector('.whiteText')
let blueText = document.querySelector('.blueText')
let yellowText = document.querySelector('.yellowText')
let greyText = document.querySelector('.greyText')
let brownText = document.querySelector('.brownText')
let redBack = document.querySelector('.redBack')
let greenBack = document.querySelector('.greenBack')
let blackBack = document.querySelector('.blackBack')
let whiteBack = document.querySelector('.whiteBack')
let blueBack = document.querySelector('.blueBack')
let yellowBack = document.querySelector('.yellowBack')
let greyBack = document.querySelector('.greyBack')
let brownBack = document.querySelector('.brownBack')
let colorsBack = document.querySelector('.colorsBack')
let imagesBack = document.querySelector('.imagesBack')
let filesBack = document.querySelector('.filesBack')
let btnColor = document.querySelector('.btnColor')
let btnImg = document.querySelector('.btnImg')
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')
let img5 = document.querySelector('.img5')
let img6 = document.querySelector('.img6')
let buttonField = document.querySelector('.buttonField')
let changeText = document.querySelector('.changeText')
let save = document.querySelector('.save')
let tables = document.querySelector('.tables')
let createTable = document.querySelector('.createTable')
let closeTable = document.querySelector('.closeTable')
let saveTable = document.querySelector('.saveTable')
let resetTable = document.querySelector('.resetTable')
let trCount = document.querySelector('.trCount')
let tdCount = document.querySelector('.tdCount')
let tdWidth = document.querySelector('.tdWidth')
let tdHeight = document.querySelector('.tdHeight')
let tdBorder = document.querySelector('.tdBorder')
let tdBorderStyle = document.querySelector('.tdBorderStyle')
let tdBorderColor = document.querySelector('.tdBorderColor')
let listDot = document.querySelector('.listDot')
let listDotCreator = document.querySelector('.listDotCreator')
let btnSaveDot = document.querySelector('.btnSaveDot')
let liDotNumber = document.querySelector('.liDotNumber')
let listDotStyle = document.querySelector('.listDotStyle')
let closeLiDot = document.querySelector('.closeLiDot')
let list123 = document.querySelector('.list123')
let list123Creator = document.querySelector('.list123Creator')
let btnSave123 = document.querySelector('.btnSave123')
let li123Number = document.querySelector('.li123Number')
let list123Style = document.querySelector('.list123Style')
let closeLi123 = document.querySelector('.closeLi123')



b.addEventListener('click', () =>{
    if(textField.style.fontWeight == '400'){
        textField.style.fontWeight = '700'
    }else{
        textField.style.fontWeight = '400'
    }
})

var clickCounter = 1;
i.addEventListener('click', () =>{
    if (clickCounter == 1){
        textField.style.fontStyle = 'italic'
        clickCounter++;
    }
    else if (clickCounter == 2){
        textField.style.fontStyle = ''
        clickCounter -= 1;
    }
})

var clickCounter2 = 1;
u.addEventListener('click', () =>{
    if (clickCounter2 == 1){
        textField.style.textDecorationLine = 'underline'
        clickCounter2++;
    }
    else if (clickCounter2 == 2){
        textField.style.textDecorationLine = 'none'
        clickCounter2 -= 1;
    }
})

var clickCounter3 = 1;
s.addEventListener('click', () =>{
    if (clickCounter3 == 1){
        textField.style.textDecorationLine = 'line-through'
        clickCounter3++;
    }
    else if (clickCounter3 == 2){
        textField.style.textDecorationLine = ''
        clickCounter3 -= 1;
    }
})

leftAlign.addEventListener('click', () => {
    textField.style.textAlign = 'left'
})
middleAlign.addEventListener('click', () => {
    textField.style.textAlign = 'center'
})
rightAlign.addEventListener('click', () => {
    textField.style.textAlign = 'right'
})

textFontSize.addEventListener('change', () =>{
    
    if (textFontSize.value == '12'){
        textField.style.fontSize = '12px'
    }
    else if (textFontSize.value == '14'){
        textField.style.fontSize = '14px'
    }
    else if (textFontSize.value == '16'){
        textField.style.fontSize = '16px'
    }
    else if (textFontSize.value == '18'){
        textField.style.fontSize = '18px'
    }
    else if (textFontSize.value == '20'){
        textField.style.fontSize = '20px'
    }
    else if (textFontSize.value == '22'){
        textField.style.fontSize = '22px'
    }
    else if (textFontSize.value == '24'){
        textField.style.fontSize = '24px'
    }
})

textColor.addEventListener('click', () => {
    colorTextField.style.display = "inline"
    editorField.style.filter = 'brightness(50%)'
})

closeColor.addEventListener('click', () => {
    colorTextField.style.display = "none"
    colorBackField.style.display = "none"
    editorField.style.filter = 'brightness(100%)'
})

backColor.addEventListener('click', () => {
    colorBackField.style.display = "inline"
    editorField.style.filter = 'brightness(50%)'
})

closeBack.addEventListener('click', () => {
    colorBackField.style.display = "none"
    colorTextField.style.display = "none"
    editorField.style.filter = 'brightness(100%)'
})

redText.addEventListener('click', () =>{
    textField.style.color = 'red'
})
greenText.addEventListener('click', () =>{
    textField.style.color = 'green'
})
blackText.addEventListener('click', () =>{
    textField.style.color = 'black'
})
whiteText.addEventListener('click', () =>{
    textField.style.color = 'white'
})
blueText.addEventListener('click', () =>{
    textField.style.color = 'blue'
})
yellowText.addEventListener('click', () =>{
    textField.style.color = 'yellow'
})
greyText.addEventListener('click', () =>{
    textField.style.color = 'grey'
})
brownText.addEventListener('click', () =>{
    textField.style.color = 'brown'
})

redBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'red'
    textField.style.backgroundImage = 'none'
})
greenBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'green'
    textField.style.backgroundImage = 'none'
})
blackBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'black'
    textField.style.backgroundImage = 'none'
})
whiteBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'white'
    textField.style.backgroundImage = 'none'
})
blueBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'blue'
    textField.style.backgroundImage = 'none'
})
yellowBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'yellow'
    textField.style.backgroundImage = 'none'
})
greyBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'grey'
    textField.style.backgroundImage = 'none'
})
brownBack.addEventListener('click', () =>{
    textField.style.backgroundColor = 'brown'
    textField.style.backgroundImage = 'none'
})

img1.addEventListener('click', () => {
    textField.style.backgroundImage = 'url(img1.jpg)'
    textField.style.backgroundColor = 'none'
})
img2.addEventListener('click', () => {
    textField.style.backgroundImage = 'url(img2.jpg)'
    textField.style.backgroundColor = 'none'
})
img3.addEventListener('click', () => {
    textField.style.backgroundImage = 'url(img3.jpg)'
    textField.style.backgroundColor = 'none'
})
img4.addEventListener('click', () => {
    textField.style.backgroundImage = 'url(img4.jpg)'

})
img5.addEventListener('click', () => {
    textField.style.backgroundImage = 'url(img5.jpg)'
    textField.style.backgroundColor = 'none'
})
img6.addEventListener('click', () => {
    textField.style.backgroundImage = 'url(img6.jpg)'
    textField.style.backgroundColor = 'none'
})

colorsBack.addEventListener('click', () => {
    redBack.style.display = 'inline-flex'
    greenBack.style.display = 'inline-flex'
    blackBack.style.display = 'inline-flex'
    whiteBack.style.display = 'inline-flex'
    blueBack.style.display = 'inline-flex'
    yellowBack.style.display = 'inline-flex'
    greyBack.style.display = 'inline-flex'
    brownBack.style.display = 'inline-flex'
    img1.style.display = 'none'
    img2.style.display = 'none'
    img3.style.display = 'none'
    img4.style.display = 'none'
    img5.style.display = 'none'
    img6.style.display = 'none'
    colorsBack.style.borderBottom = '2px solid rgb(228, 228, 228)'
    colorsBack.style.outline = '5px solid rgb(228, 228, 228)'
    imagesBack.style.borderBottom = '2px solid rgb(138, 138, 138)'
    imagesBack.style.outline = '0'
})
imagesBack.addEventListener('click', () => {
    redBack.style.display = 'none'
    greenBack.style.display = 'none'
    blackBack.style.display = 'none'
    whiteBack.style.display = 'none'
    blueBack.style.display = 'none'
    yellowBack.style.display = 'none'
    greyBack.style.display = 'none'
    brownBack.style.display = 'none'
    img1.style.display = 'inline-flex'
    img2.style.display = 'inline-flex'
    img3.style.display = 'inline-flex'
    img4.style.display = 'inline-flex'
    img5.style.display = 'inline-flex'
    img6.style.display = 'inline-flex'
    imagesBack.style.borderBottom = '2px solid rgb(228, 228, 228)'
    imagesBack.style.outline = '5px solid rgb(228, 228, 228)'
    colorsBack.style.borderBottom = '2px solid rgb(138, 138, 138)'
    colorsBack.style.outline = '0'
})

editorOpen.addEventListener('click', () =>{
    editorField.style.display = 'none'
    textField.style.display = 'none'
    changeText.style.display = 'inline'
    buttonField.style.display = 'inline-flex'
    changeText.value = textField.innerHTML
})

save.addEventListener('click', event =>{ 
    event.preventDefault()
    textField.innerHTML = changeText.value;  
    editorField.style.display = 'inline-flex'
    textField.style.display = 'inline'
    changeText.style.display = 'none'
    buttonField.style.display = 'none'  
})

tables.addEventListener('click', () => {
    createTable.style.display = 'inline'
})

closeTable.addEventListener('click', () => {
    createTable.style.display = "none"
})

saveTable.addEventListener('click', () => {
    x = trCount.value;
    y = tdCount.value;
    wdt = tdWidth.value;
    const tableCreator = document.createElement('table');
    for(let i=0; i<x; i++){
        const tr = tableCreator.insertRow()
        for(let j = 0; j < y; j++){
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(`TD`));
            td.style.width = wdt
        }
    }
    textField.appendChild(tableCreator);
    changeText.value = textField.innerHTML
})



listDot.addEventListener('click', () => {
    listDotCreator.style.display = 'inline'
})

btnSaveDot.addEventListener('click', event => {

    event.preventDefault;
    const dotLiCreator = document.createElement('ul');
    var li = document.createElement("li");
    liDotCount = liDotNumber.value; 

    for(let g=0; g<liDotCount; g++){
        let g1 = g+1
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("item" + g1));
        dotLiCreator.appendChild(li);
    }
    if(listDotStyle.value == 'square'){
        dotLiCreator.style.listStyleType = 'square'
    }else if(listDotStyle.value == 'disc'){
        dotLiCreator.style.listStyleType = 'circle'
    }
    
    

    textField.appendChild(dotLiCreator)
    changeText.value = textField.innerHTML
})

closeLiDot.addEventListener('click', () => {
    listDotCreator.style.display = 'none'
})



list123.addEventListener('click', () => {
    list123Creator.style.display = 'inline'
})

btnSave123.addEventListener('click', event => {

    event.preventDefault;
    const LiCreator = document.createElement('ol');
    var li = document.createElement("li");
    li123Count = li123Number.value; 

    for(let g=0; g<li123Count; g++){
        let g1 = g+1
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("item" + g1));
        LiCreator.appendChild(li);
    }
    if(list123Style.value == 'roman'){
        LiCreator.style.listStyleType = 'upper-roman'
    }
    

    textField.appendChild(LiCreator)
    changeText.value = textField.innerHTML
    
})

closeLi123.addEventListener('click', () => {
    list123Creator.style.display = 'none'
})

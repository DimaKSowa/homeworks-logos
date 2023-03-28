// let colorTxt = document.querySelector('.colorTxt');
// let colorBox = document.querySelector('.colorBox');
// let red = document.querySelector('.red');
// let green = document.querySelector('.green');
// let blue = document.querySelector('.blue');
// let yellow = document.querySelector('.yellow');

// let imageTxt = document.querySelector('.imageTxt');
// let imageBox = document.querySelector('.imageBox');
// let img1 = document.querySelector('.img1');
// let img2 = document.querySelector('.img2');
// let img3 = document.querySelector('.img3');
// let img4 = document.querySelector('.img4');

// colorTxt.addEventListener('click', () =>{
//     colorBox.style.display = "inline";
//     imageBox.style.display = "none";
// });

// red.addEventListener('click', () =>{
//     document.body.style.backgroundColor = "red";
//     document.body.style.backgroundImage = 'none'
// });
// green.addEventListener('click', () =>{
//     document.body.style.backgroundImage = 'none'
//     document.body.style.backgroundColor = "green";
// });
// blue.addEventListener('click', () =>{
//     document.body.style.backgroundColor = "blue";
//     document.body.style.backgroundImage = 'none'
// });
// yellow.addEventListener('click', () =>{
//     document.body.style.backgroundColor = "yellow";
//     document.body.style.backgroundImage = 'none'
// });

// imageTxt.addEventListener('click', () =>{
//     colorBox.style.display = "none";
//     imageBox.style.display = "inline";
// });
// img1.addEventListener('click', () =>{

//     document.body.style.backgroundImage = "url('https://i.redd.it/g2jff9yl5mz51.jpg')"
// });
// img2.addEventListener('click', () =>{

//     document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDyQ-F6UgjzRcvcWkPVxkzL3zkFpLZVU2eg&usqp=CAU')"
// });
// img3.addEventListener('click', () =>{

//     document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJQKfihaFabhk4elnux7gOUL-gnAdm24kMg&usqp=CAU')"
// });
// img4.addEventListener('click', () =>{

//     document.body.style.backgroundImage = "url('https://img3.akspic.ru/crops/0/1/0/7/4/147010/147010-estetika-pastel-rozovyj-kuchevoe_oblako-oblako-1920x1080.jpg')"
// });
let textField = document.querySelector('#textField')
let a192 = document.querySelector('.a192');
let a1 = document.querySelector('.a1')
let a2 = document.querySelector('.a2')
let a3 = document.querySelector('.a3')
let a4 = document.querySelector('.a4')
let a5 = document.querySelector('.a5')
let a6 = document.querySelector('.a6')
let a7 = document.querySelector('.a7')
let a8 = document.querySelector('.a8')
let a9 = document.querySelector('.a9')
let a0 = document.querySelector('.a0')
let aEq = document.querySelector('.aEq')
let back = document.querySelector('.back')
let space = document.querySelector('.space')
let shift = document.querySelector('.shift')
let aq = document.querySelector('.aq')
let aw = document.querySelector('.aw')
let enter = document.querySelector('.enter')

fieldValue = document.getElementById("textField")

function deleteLett(abc){
    abc.innerHTML = abc.textContent.split("").slice(0, -1).join("")
    return abc;
}



document.addEventListener('keydown', event => {
    if(event.keyCode === 49){
        a1.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("1")
    };
    if(event.keyCode === 50){
        a2.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("2")
    };
    if(event.keyCode === 51){
        a3.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("3")
    };
    if(event.keyCode === 52){
        a4.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("4")
        
    };
    if(event.keyCode === 53){
        a5.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("5")
    };
    if(event.keyCode === 54){
        a6.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("6")
    };
    if(event.keyCode === 55){
        a7.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("7")
    };
    if(event.keyCode === 56){
        a8.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("8")
    };
    if(event.keyCode === 57){
        a9.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("9")
    };
    if(event.keyCode === 48){
        a0.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("0")
    };
    if(event.keyCode === 187){
        aEq.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("=")
    };
    if(event.keyCode === 189){
        aEq.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("-")
    };
    if(event.keyCode === 8){
        back.style.backgroundColor = "rgb(100, 100, 100)"
        deleteLett(textField);
    }
    if(event.keyCode === 32){
        space.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append(" ")
    }
    if(event.keyCode === 16){
        shift.style.backgroundColor = "rgb(100, 100, 100)"
        
    }
    if(event.keyCode === 81){
        aq.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("q")
    }
    if(event.keyCode === 87){
        aw.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("w")
    }
    if(event.keyCode === 13){
        enter.style.backgroundColor = "rgb(100, 100, 100)"
        textField.append("\n")
    }
});




document.addEventListener('keyup', event => {
    if(event.keyCode === 49){
        a1.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 50){
        a2.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 51){
        a3.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 52){
        a4.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 53){
        a5.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 54){
        a6.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 55){
        a7.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 56){
        a8.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 57){
        a9.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 48){
        a0.style.backgroundColor = "rgb(183, 182, 182)"
    };
    if(event.keyCode === 8){
        back.style.backgroundColor = "rgb(183, 182, 182)"
    }
    if(event.keyCode === 32){
        space.style.backgroundColor = "rgb(183, 182, 182)"
    }
    if(event.keyCode === 81){
        aq.style.backgroundColor = "rgb(183, 182, 182)"
    }
    if(event.keyCode === 87){
        aw.style.backgroundColor = "rgb(183, 182, 182)"
    }
    if(event.keyCode === 16){
        shift.style.backgroundColor = "rgb(183, 182, 182)"   
    }
    if(event.keyCode === 13){
        enter.style.backgroundColor = "rgb(183, 182, 182)"   
    }
});
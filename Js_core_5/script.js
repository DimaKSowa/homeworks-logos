// завдяння 1

let blockColor = document.querySelector('.block')

let i = 0;
blockColor.addEventListener('mouseover',() =>{
    i++;
    colorBlock(blockColor);
    });
blockColor.addEventListener('mouseout',() => {
    blockColor.style.backgroundColor = "purple";
} );

function colorBlock(abc) {
    if (i == 1){
        abc.style.backgroundColor = 'yellow';
    }else if (i == 2){
        abc.style.backgroundColor = 'green';
    }else{
        abc.style.backgroundColor = 'red';
        i -= 3;
    }
}

//завдання 2

let secret = document.querySelector('.secret')
let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2')
let text3 = document.querySelector('.text3')

console.dir(secret)

secret.addEventListener('mouseover', () =>{
    secret.style.backgroundColor = "yellow"
    text2.style.display = "inline"
    text1.style.display = "none"
});
secret.addEventListener('mouseout', () =>{
    secret.style.backgroundColor = "purple"
    text1.style.display = "inline"
    text2.style.display = "none"
});

secret.addEventListener('mousedown', () =>{
    secret.style.backgroundColor = "black"
    text3.style.display = "inline"
    text2.style.display = "none"
});

secret.addEventListener('mouseup', () =>{
    secret.style.backgroundColor = "yellow"
    text2.style.display = "inline"
    text3.style.display = "none"
});

// завдання 3

let img = document.querySelector('.img');

img.addEventListener('click', ()=>{
    img.style.backgroundImage.url = addImg();// як вставити картинку на сайт через промт
});

function addImg(abc){
    abc = prompt("Picture url");
}

// завдання 4

let red = document.querySelector('.red');
let grey = document.querySelector('.grey');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');
let purple = document.querySelector('.purple');
let button = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     red.style.color.toggle = "red"
// });

button.forEach(btn =>{ //у мене помилка btn.forEach is not a function
    btn.addEventListener('click', () => {
        btn.style.color = "red"
    })
})
let screen = document.getElementById('screen');
let btn = document.querySelectorAll('button');

for(item of btn){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        switch(buttonText){
            case 'RESET':
                screen.value = '';
                break;
            case "DEL":
                if(screen.value)
                    screen.value = screen.value.slice(0,-1);
                break;
            case "=":
                screen.value = eval(screen.value);
                break;
                case "x":
                buttonText = '*';
                screen.value += buttonText;
                // screen.value = screenValue;
                break;
            default:
                screen.value += buttonText;
        }
    })
}

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let toogle = document.getElementsByClassName('dot');

two.addEventListener('click', ()=>{
    let body = document.querySelector('body');
    body.classList.add('active1');
    body.classList.remove('active2');
})

one.addEventListener('click', ()=>{
    let body = document.querySelector('body');
    body.classList.remove('active1');
    body.classList.remove('active2');
})

three.addEventListener('click', ()=>{
    let body = document.querySelector('body');
    body.classList.add('active2');
    body.classList.remove('active1');
})


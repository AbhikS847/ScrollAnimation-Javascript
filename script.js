const container = document.querySelector('.container');

for(i=0;i<=10;i++){
    const content = document.createElement('h2');
    
    content.className = "box";
    
    content.innerHTML = "Content";
        container.append(content);
    }

const boxes = document.querySelectorAll('.box');

const checkBoxes = () =>{

    const triggerBottom = window.innerHeight/5*4;

    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop <triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }

    })
}

window.addEventListener('scroll',checkBoxes);






buttons = document.querySelectorAll(".drum");
keysPress=["w","a","s","d","j","k",'l']
au_files=["tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3","kick-bass.mp3","crash.mp3","snare.mp3"];
document.addEventListener("keypress",function (Event) {
    console.log(Event.key);
})
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click",function () {
        //alert("Button "+(index+1)+"!") ;
        var audio1= new Audio("./sounds/"+au_files[index]);
        audio1.play();}
        //console.log();
)

        }
        document.addEventListener("keypress",function (Event) {
            makeSound(Event.key);
        })

function makeSound(x){
    switch (x) {
        case keysPress[0]:
            var audio1= new Audio("./sounds/"+au_files[0]);
            audio1.play();
            break;
    
        case keysPress[1]:
            var audio1= new Audio("./sounds/"+au_files[1]);
            audio1.play();
            break;
    
        case keysPress[2]:
            var audio1= new Audio("./sounds/"+au_files[2]);
            audio1.play();
            break;
    
        case keysPress[3]:
            var audio1= new Audio("./sounds/"+au_files[3]);
            audio1.play();
            break;
    
        case keysPress[4]:
            var audio1= new Audio("./sounds/"+au_files[4]);
            audio1.play();
            break;
    
        case keysPress[5]:
            var audio1= new Audio("./sounds/"+au_files[5]);
            audio1.play();
            break;
    
        case keysPress[6]:
            var audio1= new Audio("./sounds/"+au_files[6]);
            audio1.play();
            break;
    
        default:
            break;
    }
}
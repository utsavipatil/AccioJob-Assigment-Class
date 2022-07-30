const btn = document.querySelectorAll('.btn');
// console.log(btn);

const stopSounds = () =>{
    btn.forEach((button) => {
        const sound = document.getElementById(button.innerText);
        console.log(sound);
        sound.pause();
        sound.cuurentTime = 0; //Restart time
    });
};

let currentClickedBtn;

const playSound = () =>{
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            stopSounds();
            console.log(button.innerText);
            document.getElementById(button.innerText).play();
        });
    });
};

playSound();

//Use QuerySelector => Generate Array but getElementsByClassName/Id generates Objects so need to convert into Array

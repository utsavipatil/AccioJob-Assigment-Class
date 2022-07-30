const stopwatch = document.getElementById('time');

let startTime, elapsedTime = 0 , stopwatchInterval;

//Update Time function
const updateTime = (elapsedTime) =>{
    let hh = elapsedTime / 3600000;
    let hrs = Math.floor(elapsedTime / 3600000); // Hours
    let hres;
    if(hrs < 10){
        hres = `0${hrs.toString()}`;
    }else{
        hres = `${hrs.toString()}`;
    }

    let mm = (hh - hrs)*60;
    let min = Math.floor(mm); //Minutes
    let mres;
    if(min < 10){
        mres = `0${min.toString()}`;
    }else{
        mres = `${min.toString()}`;
    }

    let ss = (mm - min) * 60 ;
    let sec = Math.floor(ss); //Seconds
    let sres;
    if(sec < 10){
        sres = `0${sec.toString()}`;
    }else{
        sres = `${sec.toString()}`;
    }

    let ms = (ss-sec) * 1000;
    let miliSec = Math.floor(ms);
    let mlres;

    stopwatch.innerText = `${hres}:${mres}:${sres}:${miliSec.toString()}`;
};

//Start Function
const startStopwatch= () => {
    startTime = Date.now() - elapsedTime;
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    
    stopwatchInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        updateTime(elapsedTime);
    }, 1); //Runs Every Miliseconds
};

//Stop Function
const stopStopwatch = () => {
    clearInterval(stopwatchInterval);
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
};

//Reset Function
const resetStopwatch = () => { 
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
    clearInterval(stopwatchInterval);
    stopwatch.innerText = "00:00:00:000";
    elapsedTime = 0;
};

//Got all buttons
const playBtn = document.querySelector('.playBtnImg');
const pauseBtn = document.querySelector('.pauseBtnImg');
const resetBtn = document.querySelector('.resetBtnImg');

//Add Event Listeners
playBtn.addEventListener('click' , startStopwatch);
pauseBtn.addEventListener('click' , stopStopwatch);
resetBtn.addEventListener('click' , resetStopwatch);



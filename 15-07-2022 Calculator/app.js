let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map(button => {
    button.addEventListener('click' , (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            
            case '←': /* ALT + 27 */
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;

            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = 'Unaccepted Expression!';
                }
                break;

            default:
                display.innerText += e.target.innerText;
                break;
        }
    });
});
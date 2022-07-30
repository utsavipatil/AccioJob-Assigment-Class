let para = document.getElementsByTagName("p");
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let operator = document.getElementById("Operators");
let result = document.getElementById("result");

function calculateMyResult(){
    let num1 = Number(input1.value); //Convert value String to Number
    let num2 = Number(input2.value);

    if (operator.value === "/" && num2 == 0){
        // alert("You can not perform this operations !!!!!!!!!!!");
        result.innerText = "You can not perform this operations !!!!!!!!!!!";
        return;
    }

    switch (operator.value) {
        case "+" : 
            result.innerText = "Answer = " + (num1 + num2);
            break;
        
        case "-" : 
        result.innerText = "Answer = " + (num1 - num2);
            break;

        case "*" : 
        result.innerText = "Answer = " + (num1 * num2);
            break;
        
        case "/" : 
        result.innerText = "Answer = " + (num1 / num2);
            break;

        default:
            break;
    }
}

console.log(para);

function changeText(){
    para[0].innerText = "Bye";
    para[1].innerText = "AccioJob";
    para[2].innerText = "Working";
    para[4].style.color = "red";
}
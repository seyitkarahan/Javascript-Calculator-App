/* Calculator App */


let i = 1;
while (true) {
    i++;
    let number1 = Number(prompt("Enter a number-1: "));
    let number2 = Number(prompt("Enter a number-2: "));
    
    let option = prompt("+, -, *, / Select a shape for processing: ");
    
    switch (option) {
        case "+":
            console.log(number1 + number2);
            break;
        
        case "-":
            console.log(number1 - number2);
            break;
        
        case "*":
            console.log(number1 * number2);
            break;
        
        case "/":
            console.log(number1 / number2);
            break;
        
        default:
            alert("enter a valid operation!..");
            break;
    }
}
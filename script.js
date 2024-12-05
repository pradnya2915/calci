let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
// Array.from they convert button into array 
let buttonsArray=Array.from(buttons);

let string='';
let string1='';
let string2='';

buttonsArray.forEach(btn=>{
    btn.addEventListener('click',(event)=>{
        if(event.target.innerHTML =='DEL'){
            // count string by index values
            string=string.substring(0,string.length-1);
            display.value=string;

        }else if(event.target.innerHTML =='AC'){
            string='';
            display.value=string;

        // } else if (event.target.innerHTML == '%') {
        //     // Handle the "%" operation
        //     if (string && /\d$/.test(string)) {
        //         // If the last character is a number, append the "%" symbol
        //         string += '%';  // Display it as X%

        //         // Convert the percentage operation into a calculable format
        //         // Let's assume the user inputs "500%10"
        //         let parts = string.split('%'); // Split into [500, 10]
        //         let firstValue = parseFloat(parts[0]);
        //         let secondValue = parseFloat(parts[1]);

        //         // Calculate percentage: (500 * 10) / 100
        //         let result = (firstValue * secondValue) / 100;
                
        //         // Display the result
        //         display.value = result;
        //         string = result.toString();  // Update the string to show result

        //     }
        }else if(event.target.innerHTML == '='){
            // eval convert string into number
            string=eval(string);
            display.value=string;
        }
        else{
            string +=event.target.innerHTML;
            display.value=string;
        }
    })
})
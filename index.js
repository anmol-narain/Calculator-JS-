let displayScreen = document.getElementById('displayScreen');
buttons = document.querySelectorAll('button');
let answer = "";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        // grab the text inside the button first
        buttonText = e.target.innerText;
        console.log("You just clicked ", buttonText);

        if(buttonText == 'X'){
            buttonText = '*';
            answer += buttonText;
            displayScreen.value = answer; 
        }
        else if (buttonText == 'C'){
            answer = "";
            displayScreen.value = answer;
        }
        else if (buttonText == '='){
            displayScreen.value = eval(answer);
        }
        else{
            answer += buttonText; 
            displayScreen.value = answer;
        }
    })
}

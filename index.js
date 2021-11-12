let displayScreen = document.getElementById('displayScreen');
buttons = document.querySelectorAll('button');
let answer = "";
let finalAns = "";
let buttonArray = [];
for(item of buttons){
    item.addEventListener('click', (e)=>{
        // grab the text inside the button first
        buttonText = e.target.innerText;
        // if(buttonText !== 'DEL'){
        //     buttonArray.push(buttonText);
        // }
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
            finalAns = eval(answer);
            displayScreen.value = finalAns;
        }
        else if(buttonText == 'DEL'){
            answer = answer.slice(0, -1);
            displayScreen.value = answer;
        }
        else{
            answer += buttonText; 
            displayScreen.value = answer;
        }
    })
}


// Toogle Mode

var count=0;
var toggleMode = document.getElementsByClassName("toggle-btn");
 
toggleMode[0].addEventListener('click', function(){

    if(count%2===0)
    {
        document.getElementsByClassName('moon')[0].style.color ="#62646c";
        document.getElementsByClassName('sun')[0].style.color ="#dee6ff";
        document.getElementsByClassName('calculator-container')[0].style.backgroundColor ="white";
        // document.getElementsByClassName('calculator-button-section')[0].style.backgroundColor ="#fcfcff";
        document.getElementsByClassName('calculator-button-section')[0].style.backgroundColor ="white";

        var elements = document.querySelectorAll('.row');
        for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "white";
        elements[i].style.border = 'none';
        document.querySelector('input').style.color ="#1B2F38";
        
        }
        var elements = document.querySelectorAll('.buttons');
        for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#c3eaff";
        elements[i].style.color = "#1b2f38";

        
        }
        

        document.getElementsByClassName('ac')[0].style.backgroundColor ="#ffd5d8";
        document.getElementsByClassName('ac')[0].style.color ="#fc4552";
        document.getElementsByClassName('back')[0].style.backgroundColor ="#ffd5d8";
        document.getElementsByClassName('back')[0].style.color ="#fc4552";
        var elements = document.querySelectorAll('.opt');
        for (var i = 0; i < elements.length; i++) {
        
        elements[i].style.backgroundColor ="#ffd0fd";
        elements[i].style.color ="#f967f3";

        
        }
        
        document.getElementsByClassName('equal')[0].style.backgroundColor ="#adf9e7";
        document.getElementsByClassName('equal')[0].style.color ="#7a79b";
        
        count++;
       
    }
    else
    {

        // DarkMode

        // console.log('darkmode');
        document.getElementsByClassName('moon')[0].style.color ="#dee6ff";
        document.getElementsByClassName('sun')[0].style.color ="#62646c";
        document.getElementsByClassName('calculator-container')[0].style.backgroundColor ="#0c1118";
        // document.getElementsByClassName('calculator-button-section')[0].style.backgroundColor ="#fcfcff";
        document.getElementsByClassName('calculator-button-section')[0].style.backgroundColor ="#2a2d37";

        var elements = document.querySelectorAll('.row');
        for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#071115";
        elements[i].style.border = 'none';
        document.querySelector('input').style.color ="#dee6ff";
        
        }
        var elements = document.querySelectorAll('.buttons');
        for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#1b2f38";
        elements[i].style.color = "#dee6ff";

        
        }
        

        document.getElementsByClassName('ac')[0].style.backgroundColor ="#2d191e";
        document.getElementsByClassName('ac')[0].style.color ="#bc3740";
        document.getElementsByClassName('back')[0].style.backgroundColor ="#2d191e";
        document.getElementsByClassName('back')[0].style.color ="#bc3740";
        var elements = document.querySelectorAll('.opt');
        for (var i = 0; i < elements.length; i++) {
        
        elements[i].style.backgroundColor ="#2b1d35";
        elements[i].style.color ="#a5009f";

        
        }
        
        document.getElementsByClassName('equal')[0].style.backgroundColor ="#202f21";
        document.getElementsByClassName('equal')[0].style.color ="#ffd0fd";
        
        count++;
        
    }
}) ;



        // Calculator


var btns = document.getElementsByClassName("buttons");


let string ="";
let prevNum ="";

Array.from(btns).forEach((button)=>{
    button.addEventListener('click', (e)=>{
       
        if(e.target.dataset.value == '='){
            if(string != ""){
                string = eval(string);
                if(string === Infinity){
                    document.querySelector('input').value = string;

                }
                else{
                    const len = String(string).match(/\d/g).length
                    if(len >=15){
                        string = parseFloat(string).toFixed(2)
                        document.querySelector('input').value = string;
                    }
                
                    else{
                    
                    document.querySelector('input').value = string;
                    }
                }
            }
            
        }
        
        else if(e.target.dataset.value == "ac" ){
            string ="";
            document.querySelector('input').value = string;

           
        }
        else if(e.target.dataset.value =="back"){

            string = string.slice(0, -1);
            document.querySelector('input').value = string;


        }
        else if(e.target.dataset.value =="."){
            if(string != ""){
            string = string + e.target.dataset.value;
            document.querySelector('input').value = string;

            }

        }
        else if(e.target.dataset.value =="+-"){
            if(string != ""){
                string = -string;
                document.querySelector('input').value = string;

            }

        }

        else if(e.target.dataset.value =="+"){
            if(string != ""){
                string = string + e.target.dataset.value;
                document.querySelector('input').value = string;
            }

        }
        else if(e.target.dataset.value =="-"){
            if(string != ""){
                string = string + e.target.dataset.value;
                document.querySelector('input').value = string;
            }

        }
        else if(e.target.dataset.value =="*"){
            if(string != ""){
                string = string + e.target.dataset.value;
                document.querySelector('input').value = string;
            }

        }
        else if(e.target.dataset.value =="/"){
            if(string != ""){
                string = string + e.target.dataset.value;
                document.querySelector('input').value = string;
            }

        }
        else if(e.target.dataset.value =="%"){
            if(string != ""){
                string = string + e.target.dataset.value;
                document.querySelector('input').value = string;
            }

        }

        else{

            
            prevNum = e.target.dataset.value;
            string = string + e.target.dataset.value;
            document.querySelector('input').value = string;
            let number = string.length;
            if(number >=10){
                
                document.querySelector('input').style.fontSize = "1.9rem"
            }
            else{
                document.querySelector('input').style.fontSize = "2.5rem"

            }

        }
    })
});

// for(var i=0; i<btns.length; i++){
//     btns[i].addEventListener('click', function(){
//         var string = this.getAttribute('data-value');
//         if(string == '+'){
//             operator = '+';
//             operand1 = parseFloat(display.textContent);
//         }
        
//         else if(string ){
//             display.innerText += string;
//             var number = display.innerText.toString().length;
//             console.log("number",display.innerText);
//             if(number>=10){
//                 document.getElementById('display').style.fontSize = "2rem"
//             }
//         }
//         else(string == '='){
//             operand2 = parseFloat(display.textContent);
//         }
//     })
// }



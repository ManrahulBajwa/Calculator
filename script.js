var screen = document.getElementById("screen");

function addval(num){
    screen.value += num;
}

function backspace(){
    var backspaced = screen.value.substr(0 , screen.value.length -1);
    screen.value = backspaced;
   
};

function calc(){
    var screenval = eval(screen.value);
   if(screen.value == ""){
    screen.value = "";
   }else{
    screen.value = screenval
   }
};
                                        
function clearit(){
    screen.value = "";
};


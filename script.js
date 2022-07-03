$(document).ready(function(){


$("#secondary_theme").on("click" , function(){
        $(".top_themeBar button").css("font-weight" , "500" );
        $(this).css({
            "background" : "#111f5b",
            "font-weight" : "600"
        });
        $("body").css("background" , "linear-gradient(120deg , rgb(255 85 85) , rgb(244 255 148))");
        $("button").css("background" , "rgb(255 60 60)") ;
        $("#equalto").css("background" , "rgb(253 115 193)");
    })
});

$("#primary_theme").on("click" , function(){
        $(".top_themeBar button").css("font-weight" , "500" );
        $(this).css({
            "background" : "#111f5b",
            "font-weight" : "600"
        });
        $("body").css("background" , "linear-gradient(120deg , rgb(255, 158, 239) , rgb(144, 144, 252))");
        $("button").css("background" , "rgb(8, 105, 216)") ;
        $("#equalto").css("background" , "rgb(2, 196, 28)");
});



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



var primary_theme_btn = document.getElementById("primary_theme") ;
var secondary_theme_btn = document.getElementById("secondary_theme") ;


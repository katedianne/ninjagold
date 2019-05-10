var coins;
var gold = 0;
$(document).ready(function(){
    
    




    $("#cave").click(function(){
        coins=  parseInt($("#gold").text()) +5;
        var value = parseInt($("#moves").text()) - 1;
        if(value>=0){
            $(".platform").css({"margin-left": "0px", "margin-top": "70px", "margin-bottom":"70px"});
            $(".casino").css("margin-left", "120px");
            alert("You found a gold!\n+ 5 gold");
            $("#gold").text(coins).css('color', 'green');
            $("#totalgains").text(coins).css('color', 'green');
            $(".all").append("<li>&nbsp; Cave &nbsp;/&nbsp;"+coins+"&nbsp;/&nbsp;5&nbsp;/&nbsp;0  </li>").css('color', 'green');
            $(".losses").append("<li>&nbsp; Cave &nbsp;/&nbsp;0  </li>").css('color', 'black');
            $(".gains").append("<li>&nbsp; Cave &nbsp;/&nbsp;5  </li>").css('color', 'green');
            $("#moves").text(value);
            status();
        }else{
            alert("Game Over");
            $("#moves").text(0);
        }
    });
    
    $("#house").click(function(){
        
        if(Math.random() < 0.8) {
            coins=  parseInt($("#gold").text()) +10;
            var value = parseInt($("#moves").text()) - 1;
            if (value>=0) {
                $(".platform").css({"margin-top": "0px", "margin-bottom": "140px", "margin-left": "50px"});
                $(".casino").css("margin-left", "70px");
                $("#gold").text(coins).css('color', 'green');
                $("#totalgains").text(coins).css('color', 'green');
                alert("You found a gold!\n+ 10 gold");
                $(".all").append("<li>&nbsp; House &nbsp;/&nbsp;"+coins+"&nbsp;/&nbsp;10&nbsp;/&nbsp;0  </li>").css('color', 'green');
                $(".losses").append("<li>&nbsp; House &nbsp;/&nbsp;0  </li>").css('color', 'green');
                $(".gains").append("<li>&nbsp; House &nbsp;/&nbsp;10  </li>").css('color', 'green');
                $("#moves").text(value);
                status();
            } else {
                alert("Game Over");
                $("#moves").text(0);
            }
        } else {
            coins=  parseInt($("#gold").text()) +0;
            var value = parseInt($("#moves").text()) - 1;
            if (value>=0) {
                $(".platform").css({"margin-top": "0px", "margin-bottom": "140px", "margin-left": "50px"});
                $(".casino").css("margin-left", "70px");
                alert("You came back empty handed.");
                $("#gold").css('color', 'black');
                $("#totalgains").text(coins).css('color', 'green');
                $(".all").append("<li>&nbsp; House &nbsp;/&nbsp;"+coins+"&nbsp;/&nbsp;0&nbsp;/&nbsp;0  </li>").css('color', 'black');
                $(".losses").append("<li>&nbsp; House &nbsp;/&nbsp;0  </li>").css('color', 'green');
                $(".gains").append("<li>&nbsp; House &nbsp;/&nbsp;0  </li>").css('color', 'black');
                $("#moves").text(value);
                status();
            } else {
                alert("Game Over");
                $("#moves").text(0);
            }
            
            
        }   
    });

    $("#goldmine").click(function(){
        
        if(Math.random() < 0.8) {
            var value = parseInt($("#moves").text()) - 1;
            if (value>=0) {
                $(".platform").css({"margin-top": "140px", "margin-left": "50px", "margin-bottom": "0px"});
                $(".casino").css("margin-left", "70px");
                var min = 1;var max = 25;
                var coins = Math.floor(Math.random() * (max - min + 1) + min);
                currentcoins=  parseInt($("#gold").text()) +coins;
                alert("You found a gold!\n+ "+coins + " gold");
                $("#gold").text(currentcoins).css('color', 'green');
                $("#totalgains").text(currentcoins).css('color', 'green');
                $(".all").append("<li>&nbsp; Goldmine &nbsp;/&nbsp;"+currentcoins+"&nbsp;/&nbsp;"+coins+"&nbsp;/&nbsp;0  </li>").css('color', 'green');
                $(".losses").append("<li>&nbsp; Goldmine &nbsp;/&nbsp;0  </li>").css('color', 'green');
                $(".gains").append("<li>&nbsp; Goldmine &nbsp;/&nbsp;"+coins+"  </li>").css('color', 'green');
                $("#moves").text(value);
                status();
            } else {
                alert("Game Over");
                $("#moves").text(0);
            }
        } else {
            var value = parseInt($("#moves").text()) - 1;
            if (value>=0) {
                $(".platform").css({"margin-top": "140px", "margin-left": "50px", "margin-bottom": "0px"});
                $(".casino").css("margin-left", "70px");
                currentcoins=  parseInt($("#gold").text()) +0;
                alert("You came back empty handed.");
                $("#gold").css('color', 'black');
                $("#totalgains").text(currentcoins).css('color', 'green');
                $(".all").append("<li>&nbsp; Goldmine &nbsp;/&nbsp;"+currentcoins+"&nbsp;/&nbsp;0&nbsp;/&nbsp;0  </li>").css('color', 'black');
                $(".losses").append("<li>&nbsp; Goldmine &nbsp;/&nbsp;0  </li>").css('color', 'black');
                $(".gains").append("<li>&nbsp; Goldmine &nbsp;/&nbsp;0  </li>").css('color', 'black');
                $("#moves").text(value);
                status();
            } else {
                alert("Game Over");
                $("#moves").text(0);
            }
        
        }   
    });
    
    $("#casino").click(function(){
       //probability
        
       var min = 40;var max = 50;
       var coins = Math.floor(Math.random() * (max - min + 1) + min);
       if(Math.random() < 0.5) {
            var value = parseInt($("#moves").text()) - 1;
            if (value>=0) {
                $(".platform").css({"margin-top": "70px", "margin-left": "100px", "margin-bottom": "70px"});
                $(".casino").css("margin-left", "20px");
                alert("You won a gold!\n+ "+coins + " gold");
                currentcoins=  parseInt($("#gold").text()) +coins;
                $("#gold").text(currentcoins).css('color', 'green');
                $("#totalgains").text(currentcoins).css('color', 'green');
                $(".all").append("<li>&nbsp; Casino &nbsp;/&nbsp;"+currentcoins+"&nbsp;/&nbsp;"+coins+"&nbsp;/&nbsp;0  </li>").css('color', 'green');
                $(".losses").append("<li>&nbsp; Casino &nbsp;/&nbsp;0  </li>").css('color', 'black');
                $(".gains").append("<li>&nbsp; Casino &nbsp;/&nbsp;"+coins+"  </li>").css('color', 'green');
                $("#moves").text(value);
                status();
            } else {
                alert("Game Over");
                $("#moves").text(0);
            } 
        } else {
            
            var value = parseInt($("#moves").text()) - 1;
            if (value>=0) {
                $(".platform").css({"margin-top": "70px", "margin-left": "100px", "margin-bottom": "70px"});
                $(".casino").css("margin-left", "20px");
                alert("You lost a gold :(\n- "+coins + " gold");
                currentcoins=  parseInt($("#gold").text()) -coins;
                $("#gold").text(currentcoins).css('color', 'red');
                $("#totallosses").text(coins).css('color', 'red');
                $(".all").append("<li>&nbsp; Casino &nbsp;/&nbsp;"+currentcoins+"&nbsp;/&nbsp; 0 &nbsp;/&nbsp;"+coins+"</li>").css('color', 'red');
                $(".losses").append("<li>&nbsp; Casino &nbsp;/&nbsp;"+coins+"  </li>").css('color', 'black');
                $(".gains").append("<li>&nbsp; Casino &nbsp;/&nbsp;0  </li>").css('color', 'green');
                $("#moves").text(value);
                status();
            } else {
                alert("Game Over");
                $("#moves").text(0);
            }
            
             
        }   
    });


    function logArrayElements(element, index, array) {
        console.log('a[' + index + '] = ' + element);
    }

    function status(){
        if (currentcoins>= 250 && value >0) {
        alert("CONGRATULATIONS! You have won the Game.");
        disablebuttons();
        }
        }
        
        function finish() {
        if(gold >=250){
        alert("CONGRATULATIONS! You have won the Game.");
        }
        else{
        alert("Game Over"); 
        if(confirm( "Try Again? Press OK") == true) {
        window.location.href = "index.html";
        }
        }
        disablebuttons();
        }

    
  });

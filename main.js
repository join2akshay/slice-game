var playing = false;
var score;
var life;
var lifeleft;
var step;
var action;
var fruit = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
$(document).ready(function () {

    $("#start").click(function () {
        if (playing == true) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            $("#scorevalue").html(score);
            lifeleft = 3;
            life(lifeleft);
            $("#start").html("Reset Game");
            startAction();
            $("#fruit1").mouseover(function(){
                score++;
                $("#scorevalue").html(score);
                $("#sound")[0].play();
                clearInterval(action);
                $("#fruit1").hide("explode",450)
                setTimeout(startAction,500);
            });

        }
    });
});

function life(lifeleft) {
    $("#life").empty();
    console.log("final "+lifeleft)
    for (i = 0; i < lifeleft; i++) {
        $("#life").append('<img src="images/heart.png" class="life"></img>');
    }
}

function startAction() {
    //$("#main").append('<img src="images/apple.png"></img>')
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({
        'left': Math.round(605 * Math.random()),
        'top': -50
    });
    step = 1 + Math.round(5 * Math.random());
    action = setInterval(function () {
        $("#fruit1").css('top', $("#fruit1").position().top + step);
            if($("#fruit1").position().top>$("#main").height())
            {
                if(lifeleft>1)
                {
                    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({
        'left': Math.round(605 * Math.random()),
        'top': -50
    });
    step = 1 + Math.round(5 * Math.random());
    lifeleft--;
    console.log(lifeleft);
    life(lifeleft);
                }else
                {
                   // console.log("over");
    
   // playing=false;
    $("#start").html("Start Game");
    $("#over").show();
    $("#over").html('<p>GAME OVER </p> <p>Your score is '+score+'</p>');
                  stopAction();
}
            }
    
    
    }, 10);
}

function chooseFruit() {
    $("#fruit1").attr('src', 'images/' + fruit[Math.round(8 * Math.random())] + '.png');
}


function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
    $("#life").hide();
}


var playing=false;
var score;
var life;
var lifeleft;
$(document).ready(function(){

  $("#start").click(function(){
      if(playing==true)
         {
             location.reload();
         } else
         {
             playing = true;
             score=0;
             $("#scorevalue").html(score);
           lifeleft=3;
             life(lifeleft);
             life();
             $("#start").html("Reset Game");

         }
  });
});

function life(lifeleft)
{
    for(i=0;i<lifeleft;i++)
    {
        $("#life").append('<img src="images/heart.png" class="life"></img>');
    }
}

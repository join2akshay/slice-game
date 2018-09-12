
var playing=false;
var score;
var life;
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
             life();
             $("#start").html("Reset Game");

         }
  });
});

function life()
{
    for(i=0;i<3;i++)
    {
        $("#life").append(" x ");
    }
}

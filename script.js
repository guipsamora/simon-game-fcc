// contains all infos about the game, the computer and human serie and the sounds
var game = {
   computerSerie : [],
   humanSerie : [],
   round: 0,
   modeStrict: false,
   sounds: [
      "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
      "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", 
      "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", 
      "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
   ],
   turn: 0,
   on_off: false,
}

$(document).ready(function(){

   // if the start button is clicked then the gameOrder function is called 
   $("#start_button").click(function(){
      game.on_off = !game.on_off;

      if(game.on_off){
         gameOrder();
      }
   });

   function gameOrder(){
      // writes the number of rounds the user got right
      document.getElementById("turn").innerHTML = game.round;

      if(game.turn === 0){
         computerRound();
         animate(game.computerSerie);
         gameOrder();

      } else if(game.turn % 2 !== 0){
         
         var compLenght = game.computerSerie.length;
         var humanLength = game.humanSerie.length;
         var i = 0;

         if(humanLength < compLenght){

         // this gets the value the user clicked on the element (1 = green / 2 = red / 3 = yellow / 4 = blue)
            $(".square").click(function(e){
               e.stopImmediatePropagation();
               // console.log("I fired.")
               var squareNum = $(this).data("title");
               var squareId = event.target.id;

               game.humanSerie.push(squareNum);

               // calls the ligthUp and playSound functions according to the number of the square
               switch (squareNum){
                  case 1:
                     lightUp(squareNum);
                     playSound(squareNum);
                     break;
                  case 2:
                     lightUp(squareNum);
                     playSound(squareNum);
                     break;
                  case 3:
                     lightUp(squareNum);
                     playSound(squareNum);
                     break;
                  case 4:
                     lightUp(squareNum);
                     playSound(squareNum);
                     break;
               }

               compLenght = game.computerSerie.length;
               humanLength = game.humanSerie.length;

               // checks if the human got the same serie that the computer had
               if(game.humanSerie[i] === game.computerSerie[i]){
                  i++
                  if(humanLength === compLenght){ //if it is right then the humanSerie restarts and the user got a round
                     game.humanSerie = [];
                     game.turn++
                     gameOrder();
                     i = 0;
                  }
               } else if(game.humanSerie[i] !== game.computerSerie[i]) {
                  game.computerSerie = [];
                  game.humanSerie = [];
                  game.round = 0;
                  game.turn = 0;
                  gameOrder();
               }
            }); 
         }
      } else {
         game.round++
         animate(game.computerSerie);
         computerRound();
         gameOrder();
      }
   }
})

// gives random value to the computerSerie array
function computerRound(){
   var random = Math.floor(Math.random() * 4) + 1;
   game.computerSerie.push(random);
   game.turn++
}

// lights up the block by adding a class then removes the class after 350ms
function lightUp(squareNum) {
   var $tile = $('[data-title=' + squareNum + ']').addClass('light');
   window.setTimeout(function() {
      $tile.removeClass('light');
   }, 350);
}

// that plays the sound of the respective square
function playSound(squareNum){
   var snd = new Audio(game.sounds[squareNum - 1]);
   snd.play();
}

// does the whole array animation (lights and sound) when it is the computer turn
function animate(sequence) {
   var i = 0;

   var interval = setInterval(function() {
      lightUp(sequence[i]);//calls lightUp function

      //plays the sound
      var snd = new Audio(game.sounds[sequence[i]-1]);
      snd.play();

        i++;
        if (i >= sequence.length) {
           clearInterval(interval);
        }
   }, 1200);
}
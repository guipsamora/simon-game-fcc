// contains all infos about the game, the computer and human serie and 
var game = {
   computerSerie : [],
   humanSerie : [],
   round: 0,
   modeStrict : false,
   sounds : [
      "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
      "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", 
      "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", 
      "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
   ],
   turn : 0
}



$(document).ready(function(){

   // $("#start_button").click(){

   // }
   // if()

   // this gets the value the user clicked on the element (1 = green / 2 = red / 3 = yellow / 4 = blue)
   $(".square").click(function(e){
      var squareNumber = $(this).data("title")
      game.humanSerie.push(squareNumber);
      switch (squareNumber){
         case 1:
            var snd = new Audio(game.sounds[0]);
            snd.play();
            break;
         case 2:
            var snd = new Audio(game.sounds[1]);
            snd.play();
            break;   
         case 3:
            var snd = new Audio(game.sounds[2]);
            snd.play();
            break;
         case 4:
            var snd = new Audio(game.sounds[3]);
            snd.play();
            break;
      }
      console.log(game.humanSerie)
   });



   function gameOrder(){

   //    if(game.round === 0){
   //       startGame()
   //    } else {
   //       nextRound()
   //    }

   //    gameOrder()

   // }
   
// gameOrder();
   }



})

// stars the game off
function startGame(){
   var random = Math.floor(Math.random() * 4)
   game.computerSerie.push(random);

   console.log(game.computerSerie)
}

// as soon as the 
function nextRound(){
   var random = Math.floor(Math.random() * 4)
   game.computerSerie.push(random);
   console.log(game.computerSerie)
}

// checks if the human got the same serie that the computer had
// function checkSerie(){
//    var computer = game.computerSerie;
//    var human = game.humanSerie;
//    for (var i = 0; i < currentGame.length; i++) {
//       if(human[i] === computer[i]){
//          console.log("ok")
//       } else {
//          console.log("faileddd")
//       }
//    };

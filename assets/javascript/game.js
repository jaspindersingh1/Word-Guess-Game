var wordList = ["hongkong", "singapore", "bangkok", "london", "paris", "macau", "newyorkcity", "shenzhen",  "dubai", "seoul", "rome", "phuket", "guangzhou", "newdehli", "goa", "miami", "prague", "shanghai", "lasvegas", "milan", "barcelona", "moscow"
   ]
   
   var chosenWord = "";
   var letterInChosenWord = [];
   var numBlanks = 0;
   var blanksAndSuccesses = [];
   var wrongGuesses = [];
   
   var winCounter = 0;
   var lossCounter = 1;
   var numGuesses = 15;
   
   function startGame(){
   /*
   1. computer chooses a word from word list
   2. computer breaks down that random word as letters and replace them with
   underscores _
   3. add those underscores to the HTML to display to the player
   4. numguesses always equals 15, and blankandsuccess is an empty array, 
   and wronggueses is empty as well.
   */
   wrongGuesses = [];
   console.log("this is wrong guesses in startGame", wrongGuesses);
   numGuesses = 15;
   blanksAndSuccesses = [];
   
   
   chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
   lettersInChosenWord = chosenWord.split("");
   numBlanks = lettersInChosenWord.length;
   console.log(chosenWord);
   console.log(numBlanks)
   
   for(var i = 0; i < numBlanks; i++){
       blanksAndSuccesses.push("_");
   }
   console.log(blanksAndSuccesses);
   document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
   document.getElementById('guesses-left').innerHTML = numGuesses;
   
   
   
   }
   
   
   function checkLetters(letter){
       /*
       1. Compare the letter the user picks matches any of the letters in the word
       2. I want a conditional statement to determine if the letter the user picked
       is in the word. If so, do something, if not, do something else
       3. If the user is wrong we want to decrease the numGuesses variables by one
       */
   
       var letterInWord = false;
   
       for(var i = 0; i < numBlanks; i++){
           if(chosenWord[i] === letter){
               letterInWord = true;
   
           }
       }
   
       if(letterInWord){
           for(i = 0; i < numBlanks; i++){
               if(chosenWord[i] === letter){
               blanksAndSuccesses[i] = letter;
   
           }
   
           }
       }else{
           numGuesses --;
           wrongGuesses.push(letter)
       }
   
       /*
       to check if a letter is already in the wrong guesses array. What we want to do
       is set up an if/else conditional that will run a for loop that will iterate over
       all the letters and then use the if/else to check if it it already exists.
       */
   
   
   }
   
   
   function roundComplete(){
       /*
       1. Its going to update the HTML with letters that are in the word
       2. Its going to update the HTML with guesses we have left
       3. Its going to update the HTML to show the wrong guesses
       4. Its going to determine whether the use won the game or not
       */
   
       document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
       document.getElementById('guesses-left').innerHTML = numGuesses;
       document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");
   
   
       // if(blanksAndSuccesses.indexOf(letter >= 1)){
       //     console.log(letter)
       // }
       console.log(lettersInChosenWord);
       console.log(blanksAndSuccesses);
       if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
           winCounter++;
           alert("You win!!");
           document.getElementById('win-counter').innerHTML = winCounter;
           startGame();
       }else if(numGuesses === 0){
           document.getElementById('loss-counter').innerHTML  = lossCounter ++;
           document.getElementById('wrong-guesses').innerHTML = "";
           alert("you don't have any more guesses");        
           startGame();
       }
   
   
   
   
   }
   startGame();
   document.onkeyup = function(event){
       /*
       1. its going to take in the letter that we type in
       2. its going to pass it through the CheckLetter function 
       */
       var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
       console.log("this is the letter we typed", letterGuessed)
       checkLetters(letterGuessed)
       roundComplete();
   
   
   }


// FIRST WAY!!!

    // BELOW IS THE OLD WAY I MADE THE GAME. INITIALLY, THE GAME WAS WORKING BUT AS ALERTS AND PROMPTS ON THE SCREEN. THEN, I TRIED TO ADD FUNCTIONS AND THINGS WERE MESSING UP.

// source for the code
    // https://www.youtube.com/watch?v=XQEfWd1lh4Q - this will be used for the button on the page. When the button is clicked randomly select a word

// how to show a random word on your html page https://stackoverflow.com/questions/33857365/getting-a-random-word-to-display-on-page-load-with-javascript
// i can only use parts of this 

// https://www.youtube.com/watch?v=PhKQFUJuArs how to show random items on html 

// array with all the cities to guess 
        
    // var cities = ["hongkong", "singapore", "bangkok", "london", "paris", "macau", "newyorkcity", "shenzhen",  "dubai", "seoul", "rome", "phuket", "guangzhou", "newdehli", "goa", "miami", "prague", "shanghai", "lasvegas", "milan", "barcelona", "moscow"];

    // function selectedWord() {
    
    //     // choose a random word from above array
    //     var word = Math.floor(Math.random() * cities.length);
    //     // document.getElementById("game").innerHTML = cities[word];
       
    //     // var answerArray = [];
    //     // for (var i = 0; i < cities[word].length; i++) {
    //     //     answerArray[i] = "_";            
    //     // console.log(answerArray);
    //     }

    //     // write to the DOM
    //     guessWord = document.createElement("div");
    //     guessWord.textContent = answerArray.join(" ");
        
    
    

    // // create the answer array

    //     var answerArray = [];
    //     for (var i = 0; i < cities.length; i++) {
    //         answerArray[i] = "_";            
    //     }

    //     var remainingLetters = word.length;

    // // game loop

    //     while (remainingLetters > 0) {

    //         alert(answerArray.join(" "));

    //         // get a guess from the player
    //         var guess = prompt("guess a letter or click cancel to stop");

    //         if (guess === null) {
    //             break;
    //         } else if (guess.length !== 1) {
    //             alert("enter a letter");
    //         } else {
    //             for (var j = 0; j < cities.length; j++){
    //                 if (word[j] === guess) {
    //                     answerArray[j] = guess;
    //                     remainingLetters--;
    //                 }
    //             }
    //         }

    //     }


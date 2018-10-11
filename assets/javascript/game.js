// source for the code
    // https://www.youtube.com/watch?v=XQEfWd1lh4Q - this will be used for the button on the page. When the button is clicked randomly select a word

    // how to show a random word on your html page
    // https://stackoverflow.com/questions/33857365/getting-a-random-word-to-display-on-page-load-with-javascript
    // i can only use parts of this 

    // array with all the cities to guess
        
        var cities = ["hongkong", "singapore", "bangkok", "london", "paris", "macau", "newyorkcity", "shenzhen",  "dubai", "seoul", "rome", "phuket", "guangzhou", "newdehli", "goa", "miami", "prague", "shanghai", "lasvegas", "milan", "barcelona", "moscow"];

    // choose a random word from above array

        var word = cities[Math.floor(Math.random() * cities.length)];

    // create the answer array

        var answerArray = [];
        for (var i = 0; i < cities.length; i++) {
            answerArray[i] = "_";
        }

        var remainingLetters = word.length;

    // game loop

        while (remainingLetters > 0) {

            // alert(answerArray.join(" "));
            document.getElementById("game")

            // get a guess from the player
            var guess = prompt("guess a letter or click cancel to stop");

            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert("enter a letter");
            } else {
                for (var j = 0; j < cities.length; j++){
                    if (word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters--;
                    }
                }
            }

        }
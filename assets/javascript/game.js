


// user choices

// var userChoices = ["a","b","c","d","e","f","g","h","i","j","k","l",'m',"n","o","p","q","r","s","t","u","v","w","x","y","z"];

// check which key was pressed
document.onkeyup = function(event) {
    // determine which key was pressed.
    var userGuess = event.key;

    // array with all the cities to guess
    var cities = ["HongKong", "Singapore", "Bangkok", "London", "Paris", "Macau", "NewYorkCity", "Shenzhen", "KualaLumpur", "Antalya", "Istanbul", "Dubai", "Seoul", "Rome", "Phuket", "Guangzhou", "Mecca", "Pattaya", "Taipei", "Miami", "Prague", "Shanghai", "LasVegas", "Milan", "Barcelona", "Moscow", "Amsterdam", "Vienna", "Venice", "LosAngeles", "Lima", "Tokyo", "Johannesburg", "Beijing", "Sofia", "Orlando", "Berlin", "Budapest", "HoChiMinhCity", "Florence", "Madrid", "Warsaw", "Doha", "Nairobi", "Delhi", "Mumbai", "Chennai", "MexicoCity", "Dublin", "SanFrancisco", "Hangzhou", "Denpasar", "SaintPetersburg", "Mugla", "Brussels", "Burgas", "Munich", "Zhuhai", "Sydney", "Edirne", "Toronto", "Lisbon", "Cancun", "Buenos Aires", "Cairo", "PuntaCana", "Suzhou", "Djerba", "Agra", "Krakow", "Bucharest", "SiemReap", "Jaipur", "Honolulu", "Manama", "Dammam", "Hanoi", "AndorraLaVella", "Nice", "Zurich"];

    // randomly choose the cities above for the user to guess
    var guessWord = cities[Math.floor(Math.random() * cities.length)];

    // this will select a word and show it on the html
    // var wordSelected = document.getElementById("game");
    // wordSelected.innerHTML = guessWord;

    // answer area
    var answerField = [];
    
    // for loop to select how many underscore depending on the word
    for (var i = 0; i < guessWord.length; i++) {
        answerField[i] = "_";
    }
    
    // again this will show the empty space above
    // var wordSelected = document.getElementById("game");
    //     wordSelected.innerHTML = answerField;

    // crate var to keep track of letter that remain to be guessed
    var remainingLetters = guessWord.length;

    // game loop, show progress to the user, get a guess from player
    // the remaining letter is greater than zero so the user can keep guessing letters
    if (remainingLetters > 0) {
        var playerProgress = document.getElementById("game");
        // join property will get rid of the comma that was coming up
        playerProgress.innerHTML = answerField.join(" ");

        var playerGuess = document.userGuess;
        // this should display the letter on the screen.    
        playerGuess.innerHTML = answerField;
       
    }

}   

// created a p tag in the html file to display what choice was made
// create a var that will hold reference to the html of choice made
// var userChoiceText = document.getElementById("userChoice-text");





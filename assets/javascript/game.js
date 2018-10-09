
// array with all the cities

var cities = ["HongKong", "Singapore", "Bangkok", "London", "Paris", "Macau", "NewYorkCity", "Shenzhen", "KualaLumpur", "Antalya", "Istanbul", "Dubai", "Seoul", "Rome", "Phuket", "Guangzhou", "Mecca", "Pattaya", "Taipei", "Miami", "Prague", "Shanghai", "LasVegas", "Milan", "Barcelona", "Moscow", "Amsterdam", "Vienna", "Venice", "LosAngeles", "Lima", "Tokyo", "Johannesburg", "Beijing", "Sofia", "Orlando", "Berlin", "Budapest", "HoChiMinhCity", "Florence", "Madrid", "Warsaw", "Doha", "Nairobi", "Delhi", "Mumbai", "Chennai", "MexicoCity", "Dublin", "SanFrancisco", "Hangzhou", "Denpasar", "SaintPetersburg", "Mugla", "Brussels", "Burgas", "Munich", "Zhuhai", "Sydney", "Edirne", "Toronto", "Lisbon", "Cancun", "Buenos Aires", "Cairo", "PuntaCana", "Suzhou", "Djerba", "Agra", "Krakow", "Bucharest", "SiemReap", "Jaipur", "Honolulu", "Manama", "Dammam", "Hanoi", "AndorraLaVella", "Nice", "Zurich"];

// user choices

// var userChoices = ["a","b","c","d","e","f","g","h","i","j","k","l",'m',"n","o","p","q","r","s","t","u","v","w","x","y","z"];

// check which key was pressed
document.onkeyup = function(event) {
    // determine which key was pressed.
    var userGuess = event.key;

    
}   

// created a p tag in the html file to display what choice was made
// create a var that will hold reference to the html of choice made
var userChoiceText = document.getElementById("userChoice-text");

// randomly choose the cities above for the user to guess
var guessWord = cities[Math.floor(Math.random() * cities.length)];



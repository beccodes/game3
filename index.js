  let quotes = [
  "A chef.",
  "A doctor.",
  "Santa Claus.",
  "A piece of ham.",
  "A jam jar.",
  "An apple.",
  "A banana.",
  "Spiderman.",
  "A potato.",
  "A camel.",
  "A dog.",
  "A mouse.",
  "An alien.",
  "A fish.",
  "A tomato.",
  "A zombie.",
  "A squirrel.",
  "The Eiffel Tower.",
  "Dwight from The Office.",
  "Spongebob Squarepants.",
  "Eric Cartman.",
  "Mickey Mouse.",
  "Shrek.",
  "A pizza.",
  "Bart Simpson.",
  "Pikachu.",
  "A robot.",
  "A dildo.",
  "A clown.",
  "Pacman.",
  "A skeleton.",
  "Harry Potter.",
  "Grandma."
];

document.getElementById("quoteContainer").addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = randomQuote;
});

  let quotes2 = [
    "Hungover.",
    "Doing MDMDA.",
    "Handcuffed to the bed.",
    "In sexy lingerie.",
    "Singing.",
    "Drinking beer.",
    "Eating a bowl of spaghetti.",
    "Attacking someone.",
    "Holding a rabbit.",
    "Playing the drums.",
    "Playing the guitar.",
    "Playing frisbee.",
    "At the hairdressers.",
    "In a supermarket.",
    "Walking a dog.",
    "At a sex party.",
    "Hoovering up.",
    "At a nightclub.",
    "Getting cummed on.",
    "Ejaculating.",
    "With a huge dick.",
    "With boobs.",
    "Relaxing at the beach.",
    "Walking a dog.",
    "Having a panic attack.",
    "Falling down a waterfall.",
    "Smoking weed.",
    "Getting their nails done.",
    "On a rollercoaster.",
    "In Egypt.",
    "Getting attacked by a pigeon.",
    "Having a shower.",
    "Going swimming.",
    "In Paris.",
    "Taking a bath.",
    "Doing LSD.",
    "Getting a haircut.",
    "In an elevator.",
    "Dressed up as a cat.",
    "Dressed as a pirate.",
    "At a house party.",
    "Watching porn.",
    "Playing videogames.",
    "Being squeezed."
];

document.getElementById("quoteContainer2").addEventListener("click", function() {
  let randomQuote2 = quotes2[Math.floor(Math.random() * quotes2.length)];
  document.getElementById("quote2").innerHTML = randomQuote2;
});

  let easy = [
  "Close your eyes for the first 10 seconds.",
  "Your team has to also say the word 'fish'",
  "Your team has to also say the word 'underwear'",
  "Your team has to also say the word 'sad'",
  "Your team has to also say the word 'happy'",
  "Your team has to also say the word 'angry'",
  "Your team has to also say the word 'fireworks'",
  "Your team has to also say the word 'rain'",
  "Your team has to also say the word 'bomb'",
  "Your team has to also say the word 'small'",
  "Your team has to also say the word 'bread'",
  "Your team has to also say the word 'lamp'",
  "Your team has to also say the word 'ears'",
  "Your team has to also say the word 'teeth'",
  "Use the bottom of a glass to draw a circle. You can only draw inside this circle."
];

document.getElementById("easy").addEventListener("click", function() {
  let randomQuote = easy[Math.floor(Math.random() * easy.length)];
  document.getElementById("easy1").innerHTML = randomQuote;
});

 let advanced = [
  "You must draw with your non-dominant hand.",
  "Only one teammate can guess what you're drawing. Pick who!",
  "The opposing team gets to choose an additional word to include.",
  "Your team has to also say the word 'thin'",
  "Your team has to also say the word 'fat'",
  "Your team has to also say the word 'ugly'",
  "Your team has to also say the word 'hairy'",
  "Your team has to also say the word 'dead'",
  "Your team has to also say the word 'Italian'",
  "Your team has to also say the word 'laughing'",
  "Your team has to also say the words 'on fire'",
  "Your team has to also say the word 'whiskers'",
  "Your team has to also say the word 'tail'",
  "Your team has to also say the word 'spotty'",
  "Your team has to also say the word 'dinosaur'",
  "Your team has to also say the word 'wig'"
];

document.getElementById("advanced").addEventListener("click", function() {
  let randomQuote = advanced[Math.floor(Math.random() * advanced.length)];
  document.getElementById("advanced1").innerHTML = randomQuote;
});

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let audio = new Audio('meow.wav'); 

let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        }

        let minString = minute;
        let secString = second;
        let countString = count;

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }
        
        if (second === 45) { audio.play(); }
        
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        setTimeout(stopWatch, 10);
    }
    
    function reload(){
        location.reload();
    }



var buttonColor = ["green", "red", "yellow", "blue"]
var gamePattern = [];
var userClickedPattern = [];
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);
    flash(randomChosenColor);
    var colorSound = new Audio("./sounds/" + randomChosenColor + ".mp3");
    colorSound.play();
    level ++;
    $("h1").text("Level " + level);
    userClickedPattern.length = 0;
    return randomChosenColor;
}

function flash(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function() {
        $("#" + color).removeClass("pressed");
    }, 100)
}

$(".btn").click(function(event) {
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    checkAnswer();
    switch (event.target.id) {
        case "green":
            playSound("green");
            animation("green");
            break;
            
        case "red":
            playSound("red");
            animation("red");
            
            break;
        case "yellow":
            playSound("yellow");
            animation("yellow");
            
            break;
        case "blue":
            playSound("blue");
            animation("blue");
            
            break;
    
        default:
            break;
    }
})

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animation(name) {
    $("#" + name).addClass("pressed");
    setTimeout(function() {
        $("#" + name).removeClass("pressed");
    }, 100)
}



function checkAnswer() {
    var index = userClickedPattern.length - 1;
    if (userClickedPattern[index] !== gamePattern[index]) {
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 100)
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("h1").text("Hehe, you lose. Try again by pressing any key~");
        gamePattern.length = 0;
        var start = false;
        level = 0;
        $("body").keydown(function() { 
            if (!start) {
                nextSequence();
                start = true;
    }

    })

    }

    if (userClickedPattern[index] === gamePattern[index] && index === gamePattern.length - 1) {
        setTimeout(nextSequence, 500);
}}

function restart() {
    
    var start = false;
    $("body").keydown(function (){
        if (!start) {
            nextSequence();
            start = true;
        }
    })
}

var start = false;
var level = 0;
$("body").keydown(function() { 
    if (!start) {
        nextSequence();
        start = true;
    }

    })





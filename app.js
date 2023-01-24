let home = 0
let away = 0

function homeClick(){
    home++
    drawHomeScore()
}

function homeClickMinus(){
    if(home > 0){
    home--
    } else{
        home = 0
    }
    drawHomeScore()
}

function homeClickThree(){
    home += 3
    drawHomeScore()
}

function homeClickMinusThree(){
    if(home >= 3){
    home -= 3
    } else{
    home = 0
    }
    drawHomeScore()
}

function awayClick(){
    away++
    drawAwayScore()
}

function awayClickMinus(){
    if(away > 0){
    away--
    } else{
        away = 0
    }
    drawAwayScore()
}

function awayClickThree(){
    away += 3
    drawAwayScore()
}

function awayClickMinusThree(){
    if(away > 3){
    away -= 3
    } else{
        away = 0
    }
    drawAwayScore()
}

function drawHomeScore(){
    document.getElementById("home-score").innerText = home
}

function drawAwayScore(){
    document.getElementById("away-score").innerText = away
}

function resetScore(){
    home = 0
    away = 0 
    document.getElementById("home-score").innerText = home
    document.getElementById("away-score").innerText = away
}
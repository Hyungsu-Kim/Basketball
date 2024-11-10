let homeCount=0
let guestCount=0
let scoreN = document.getElementById("num1")
let scoreN2 = document.getElementById("num2")

function homeBtn1() {
    homeCount += 1
    scoreN.textContent = homeCount
    updateHighlight()
}

function homeBtn2() {
    homeCount += 2
    scoreN.textContent = homeCount
    updateHighlight()
}

function homeBtn3() {
    homeCount += 3
    scoreN.textContent = homeCount
    updateHighlight()
}

function guestBtn1() {
    guestCount += 1
    scoreN2.textContent = guestCount
    updateHighlight()
}

function guestBtn2() {
    guestCount += 2
    scoreN2.textContent = guestCount
    updateHighlight()
}

function guestBtn3() {
    guestCount += 3
    scoreN2.textContent = guestCount
    updateHighlight()
}

function Restart() {
    homeCount=0
    guestCount=0
    scoreN.textContent = 0
    scoreN2.textContent = 0
    updateHighlight()
}

function updateHighlight() {
    if (homeCount > guestCount) {
        scoreN.classList.add("highlight")
        scoreN2.classList.remove("highlight")
    } else if (guestCount > homeCount) {
        scoreN.classList.remove("highlight")
        scoreN2.classList.add("highlight")
    } else {
        scoreN.classList.remove("highlight")
        scoreN2.classList.remove("highlight")
    }

}
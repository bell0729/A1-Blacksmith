// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.
const forge = document.querySelector("#forge")
const heatCount = document.querySelector("#heat-value")
const swordCount = document.querySelector("#sword-count")
const status = document.querySelector("#forge-status")
const $image = document.querySelector("#forge-image")
const $log = document.querySelector("#action-message")
const $heading = document.querySelector("#forge-heading")
const forgeTop = document.querySelector(".forge-top")
// 2. Create the two state variables: heat and swords made.
let heat = 20
let sword = 0
status.textContent = "Too cold to craft"
forgeTop.classList.remove("is-cold", "is-ready", "is-roaring")
// 3. Write getForgeStatus(heatValue). Return the correct status string.

function getForgeStatus(heatValue){
    if (heatValue < 30){
        return "Too cold to craft"
    }
    else if(heatValue < 70 && heatValue >= 30){
        return "Ready to forge"
    }
    else{
        return "Roaring fire. Keep crafting!"
    }
}
// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
function updateForge(){
    const heatTxt = getForgeStatus(heat)
    status.textContent = heatTxt
    heatCount.textContent = heat
    swordCount.textContent = sword
    if(heat < 30){
        $image.setAttribute("src", "assets/forge-cold.svg")
        $image.setAttribute("alt", "A stone forge")
        forgeTop.classList.add("is-cold")

    }
    else if(heat < 70 && heat >= 30){
        $image.setAttribute("src", "assets/forge-ready.svg")
        $image.setAttribute("alt", "A stone forge with a small fire inside")
        forgeTop.classList.add("is-ready")
    }
    else{
        $image.setAttribute("src", "assets/forge-roaring.svg")
        $image.setAttribute("alt", "A stone forge with a large fire inside")
        forgeTop.classList.add("is-roaring")
    }
}
// 5. Write resetForge(). Restore the state, message, and display.
function resetForge(){
    heat = 20
    sword = 0
    $log.textContent = "Welcome to the forge. Add heat to begin."
    updateForge()
}
// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount){
    heat += amount
    if(heat > 100){
        heat = 100
    }
    if (heat < 0){
        heat = 0
    }
    $log.textContent = ("You heated the forge to " + heat)
    updateForge()
}
// 7. Write makeSword(). Handle both success and insufficient heat.
function makeSword(){
    if (heat > 29){
        heat -= 30
        sword++
        $log.textContent = ("You made a sword. You have " + heat + " heat left")
    }
    else{
        $log.textContent = "You don't have enough heat to make a sword"
    }
    forgeTop.classList.remove("is-cold", "is-ready", "is-roaring")
    updateForge()
}
// 8. Call resetForge() once to start the game.
resetForge()
// Use the tests in ASSIGNMENT.md to check your work.

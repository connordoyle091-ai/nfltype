const button = document.getElementById("myButton");
button.addEventListener("click", whenButtonClicked);
function whenButtonClicked () {
    console.log("button was clicked")
}
function timesButtonClicked(nums) {
    if(nums > 10){
        console.log("Quit it")
    }
}
timesButtonClicked(whenButtonClicked())
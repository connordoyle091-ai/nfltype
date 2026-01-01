const button = document.getElementById("myButton");
function whenButtonClicked () {
    if(button.addEventListener("click")){
        console.log("button was clicked")
    }
}
whenButtonClicked()
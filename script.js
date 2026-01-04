const btn = document.getElementById("myButton");
btn.addEventListener("click", whenButtonClicked);
let count = 0
function whenButtonClicked () {
    count ++
    console.log("button was clicked")
    if(count > 10){
        console.log("Quit it")
    }
}

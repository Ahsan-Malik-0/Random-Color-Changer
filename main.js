const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let color = document.querySelector("#color");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomValue()];
    }
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
})

randomValue = () => {
    return Math.floor(Math.random() * hex.length);
}


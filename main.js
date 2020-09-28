let button = document.querySelector("button");
let main = document.querySelector("#reasons");

let castleReasons = [
    "of aliens",
    "of mutant cows",
    "of that one time at band camp",
    "Locke and his obsession with slugs",
    "those pesky romans",
    "something to do with trebuchets or something"
]



function addInfo(){
    let index = castleReasons.length;
    let randomNumber = Math.floor(Math.random() * index);
    main.innerText=`${castleReasons[randomNumber]}`;
}

button.addEventListener("click", addInfo);
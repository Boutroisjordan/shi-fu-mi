let shifumi = ["shi", "fu", "mi"];
let response;

function getValue(){
    let bot = shifumi[Math.round(Math.random() * 2)];
    let input = document.getElementById("text").value;
    response = input;
    play(response, bot);
}


// window.prompt('Shi, Fu, Mi ?');

function play(response, bot) {

    if (response == shifumi[0]) { // pierre
        if (bot == shifumi[1]) {
            console.log("Perdu ! La pierre se fait recouvrir par la feuille")
        } else if (bot == shifumi[2]) {
            console.log("Gagner ! La pierre casse les ciseaux")
        } else if (bot == shifumi[0]) {
            console.log("égalité!")
            play();
        }    
    } else if (response == shifumi[1]) { // feuille
        if (bot == shifumi[0]) {
            console.log("Gagner! La feuille recouvre la pierre")
        } else if (bot == shifumi[1]) {
            console.log("égalité")
            play();
        } else if (bot == shifumi[2]){
            console.log("Perdu ! La feuille se fait découper par le ciseaux")
        }

    } else if (response == shifumi[2]) {
        if (bot == shifumi[0]) {
            console.log("Perdu! Les ciseaux se font casser par la pierre")
        } else if (bot == shifumi[1]) {
            console.log("Gagner ! le ciseaux découpe la feuille !")
        } else if (bot == shifumi[2]){
            console.log("égalité")
            play();
        }
    }
}




// document.getElementById('tonId').src = "image" + Math.floor(Math.random() * nbImage) + ".png";
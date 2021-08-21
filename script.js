
let buttons = document.querySelectorAll("button");
const length = buttons.length;
for (let i = 0; i < length; i++) {
    buttons[i].addEventListener("click", handle);
  }


function handle(event) {
    const value = event.target.value;
    console.log(value)
    
  }

//Math function 
let add = (a, b) => a + b 
let substract = (a, b) => a - b 
let multiply = (a, b) => a * b
let divide = (a, b) => a / b



/* 
Comment effectuer un calcul genre 10 + 20 ? 

- Quand j'appuie une touche, affiche la touche a l'écran.
    x Afficher la touche dans le console.log
    - Afficher la touche à l'écran.
    - Lier ces touches aux inputs des functions
    
- Quand je clique sur Equal montre le resultat. 
    - Prendre les deux inputs.
    - Les calculer (faire des functions x/-/+/).
    - Retourner le resultat à l'écran.

- Quand je clique sur ESC, effacer. 
*/
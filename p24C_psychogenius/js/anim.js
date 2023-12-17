const bubbles = document.querySelectorAll('.psycho_item');
console.log(bubbles);

bubbles.forEach((bubble, index) =>{
    const colorMutation = Math.floor(280 - (index*(280/bubbles.length)));
    const shade = "hsl("+colorMutation+", 100%, 50%)";
    bubble.style.backgroundColor= shade;
});
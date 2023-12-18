// Condicional: Bloque de código que se ejecuta si se cumple una condición.
//       -if( condición ){ código }
//        else { código }

// FALSY VALUES:
// false, 0, "", '', undefined, null, NaN
//      -Todo lo demás: true

const numberDeaths = document.querySelector('input')
const btnCalculo = document.querySelector('button')
const resultSlot = document.querySelector('.result')

btnCalculo.addEventListener('click', function() {

    

    
    
    
     switch (numberDeaths.value) {
         case "0":
             resultSlot.innerHTML = "This is a comedy, and not even a funny one.";
             break;
         case "1":
             resultSlot.innerHTML = "Mildly funnier comedy. I approve.";
             break;
         case "2":
             resultSlot.innerHTML = "Is this a comedy? Is it a problem play? Is anyone getting married?";
             break;
         case "3":
             resultSlot.innerHTML = "Problem play territory. Or perhaps historical.";
             break;
         case "4":
             resultSlot.innerHTML = "Mild (read: lame) tragedy territory. Could use a bit more violence.";
             break;
         case "5":
             resultSlot.innerHTML = "Entering the regular tragedy zone, but it still could do better.";
             break;
         case "6":
             resultSlot.innerHTML = "A soft tragedy. Not especially cathartic, though.";
             break;
         case "7":
             resultSlot.innerHTML = "Your run of the mill tragedy. AN elegant, subdued number. Doesn't betray excessive bloodthirst.";
             break;
         case "8":
              resultSlot.innerHTML = "The beginning of the great tragedy leagues. A perfectly respectable number of casualties for the fatal flaws of mankind.";
             break;
         default:
             resultSlot.innerHTML = "Titus Andronicus, that u?"
             break;
     }



    // if(numberDeaths.value == 0) {
    // resultSlot.innerHTML = "This is a comedy, and not even a funny one.";
        // } else if (numberDeaths.value == 1) {
    // resultSlot.innerHTML = "Either a comedy... or a problem play. Is anyone getting married?";
        // } else if (numberDeaths.value > 1 && numberDeaths.value < 5) {
    // resultSlot.innerHTML = "You are probably looking a problem play, or a very mild (read: lame) tragedy.";
        // } else if (numberDeaths.value > 4 && numberDeaths.value < 10) {
    // resultSlot.innerHTML = "Common tragedy range, nothing specially remarkable here. People die all the time.";
        // } else {
    // resultSlot.innerHTML = "Titus Andronicus is that u?";
        // }

    // (numberDeaths.value == 0) ? resultSlot.innerHTML = "Comedy gold!": resultSlot.innerHTML = "Problematic. Cancelled."
})
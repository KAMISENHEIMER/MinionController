acBox = document.getElementById("ac");
amountBox = document.getElementById("amount");
statblockBox = document.getElementById("statblock");
resultsText = document.getElementById("results");
hitsText = document.getElementById("hits");
damageText = document.getElementById("damage");


function roll(num, dice) {
    sum=0;
    for (let i=0; i<num; i++) {
        sum += Math.floor(Math.random()*(dice)+1);
    }
    console.log("ROLLED A "+sum);
    return sum;
}

function d20() {
    return Math.floor(Math.random()*20+1); 
}

function rollDamage(dice) {
    sum = 0;
    for (const die of dice) {
        diceTemp = die.split("d");
        sum+=roll(parseInt(diceTemp[0]),parseInt(diceTemp[1]));
    }
    return sum;
}

function addModifiers(mods) {
    sum = 0;
    for (const mod of mods) {
        sum+=parseInt(mod);
    }
    return sum;
}

function calculate() {
    
    console.log("STARTING CALCULATION")
    
    ac = acBox.value;
    amount = amountBox.value;
    statblock = statblocks[statblockBox.selectedIndex]
    
    let hits = 0;
    let crits = 0;
    let critfails = 0;
    let damage = 0;
    
    
    
    for (i=0; i<amount; i++) {
        rolled = d20();
        console.log("ROLLED A "+rolled+" TO HIT")
        if (rolled == 20) {
            //crit
            console.log("CRIT")
            damage += rollDamage(statblock.damageDie);
            damage += rollDamage(statblock.damageDie);
            damage += addModifiers(statblock.damageMods);
            hits++;
            crits++;
        } else if (rolled == 1) {
            console.log("CRITFAIL")
            //critfail
            critfails++;
        } else if (rolled+parseInt(statblock.tohit)>=ac) {
            //hit
            console.log("HIT")
            damage += rollDamage(statblock.damageDie);
            damage += addModifiers(statblock.damageMods);
            hits++;
        }
    }
    
    hitsText.textContent = "Hits: " + hits;
    damageText.textContent = "Damage: " + damage;

}



const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', calculate);

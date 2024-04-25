acBox = document.getElementById("ac");
amountBox = document.getElementById("amount");
statblockBox = document.getElementById("statblock");
resultsText = document.getElementById("results");
hitsText = document.getElementById("hits");
damageText = document.getElementById("damage");


function roll(num, dice) {
    sum=0;
    for (i=0; i<num; i++) {
        sum += Math.floor(Math.random()*(dice)+1);
    }
    return sum;
}

function calculate() {
    
    ac = acBox.value;
    amount = amountBox.value;
    statblock = statblocks[statblockBox.selectedIndex]
    
    roll1 = roll(2,6);
    roll2 = roll(2,6);
    
    hitsText.textContent = "Hits: " + roll1;
    damageText.textContent = "Damage: " + roll2;

}



const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', calculate);

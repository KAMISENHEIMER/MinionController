acBox = document.getElementById("ac");
amountBox = document.getElementById("amount");
statblockBox = document.getElementById("statblock");


function calculate() {
    
    ac = acBox.value;
    amount = amountBox.value;
    statblock = statblocks[statblockBox.selectedIndex]
        
    
    
}



const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', calculate);

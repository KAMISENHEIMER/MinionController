//creates statblock class
class Statblock {
    constructor(name, tohit, damage) {
        this.name = name;
        this.tohit = tohit;
        this.damage = damage;
    }
}

//add statblocks here

zombie = new Statblock("Zombie", "+3", "1d6+1");
skeleton = new Statblock("Skeleton", "+4", "1d6+2");
undeadbeast = new Statblock("Undead Beast", "+2", "1d4");


const statblocks = [zombie, skeleton, undeadbeast];

//loads statblocks into drop down
var statblocksdropdown = document.getElementById("statblock");
for (const statblock of statblocks) {
    var option = document.createElement("option");
    option.text = statblock.name;
    statblocksdropdown.add(option);
}
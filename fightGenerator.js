/* TODO:
    generate a string output of a random sentence describing a
    battle between 2 actors
*/

const combatants = ['Ogre', 'Troll', 'Wench', 'Squirrel', 'Baby', 'Land Shark', 'Judge Fredd'];
const arenas = ['a meadow', 'a hidden cave', 'a costa parkinglot', 'the lazer tag centre', 'a disneyland torture chamber'];

const determineWinner = () =>
{
    return Math.floor(Math.random());
}
const messageGenerator = () =>
{
    let randomArena = arenas[Math.floor(Math.random()*arenas.length -1)];
    let randomCombatant1 = combatants[Math.floor(Math.random()*combatants.length -1)];
    let randomCombatant2 = combatants[Math.floor(Math.random()*combatants.length -1)];
    let winner;

    determineWinner() ? winner = randomCombatant1 : winner = randomCombatant2;

    let message = `You find yourself at ${randomArena}\nOn your right a few feet away you see a ${randomCombatant1}
looking angrily ahead.\nIt is glowering at a ${randomCombatant2}. The creatures move towards each other..\n*Bam* *Waaaaaaaaa* *SMASH*!\n
The enemy is crushed! The ${winner} stands victorious, covered in the gore of its foe.`;
    
    return message;
}

const printMessage = () =>
{
    console.log(messageGenerator())
}

printMessage();

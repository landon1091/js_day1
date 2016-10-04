console.log('THE TALLEST MOUNTAIN');

let mountain = [100, 50, 245, 43, 900];
let highest = 0;
for (let i = 0; i < mountain.length; i++) {
    if (mountain[i] > highest) {
        highest = mountain[i];
        // console.log(mountain[i]);    
    }
}

console.log(highest);



// 1. what to do at the beginning 
// 2. continue running as long as (boolean)
// 3. what to do after every iteration


console.log('HANGMAN LITE');

let word = 'hangman'
let letter = 'g'
let times = 0
for (let i = 0; i < word.length; i++) {
    
    if (letter === word[i]) {
        times = times + 1;     
} 
}
if (times === 0) {
    console.log('Nope, that letter does not exist in my word.'); 
}else{ 
    console.log('Yeah ' + letter + ' exists ' + times +' times in my word.');
}
 



console.log('CHEROKEE HARE');

let startingpopulation = 200;
let birthrate = 0.1
let numberofweeks = 6;


function x (birthrate, numberofweeks){
let spaghetti = startingpopulation * birthrate
return startingpopulation + spaghetti * numberofweeks
}
console.log("There will be " + x(birthrate, numberofweeks) + " Cherokee Hares after " + numberofweeks + " weeks." )





console.log('CHANGE MACHINE')
function changestuffs(){
    let amount = [25, 10, 5, 1]
    let change = [45]
for (let i = 0; i < amount.length; i = i + 1){
    if (change > amount[i])
        return "$" + amount[i] + "in change";
}
}
     

     console.log ('PALINDROME');
function palindrome(str) {
    let len = str.length;
    for ( let i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
    
 
console.log(palindrome("racecar"))





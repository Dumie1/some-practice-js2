let numOne = document.getElementById('num-one');
let numTwo = document.getElementById('num-two');
let addSum = document.getElementById('add-sum');

numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);

// create a function (apply DRY concept);
function add() {
    let one = parseFloat(numOne.value) || 0;
    let two = parseFloat(numTwo.value) || 0;
    let sum = one + two; 
    addSum.innerHTML =  'Sum is : ' +sum;
}


/* references below:
https://www.youtube.com/watch?v=e57ReoUn6kM
*/
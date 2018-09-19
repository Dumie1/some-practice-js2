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




var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
    var allImages = document.querySelectorAll("img");

    for (var i = 0; i < allImages.length; i++) {
        allImages[i].className = "hide";
    }

    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    if (pic.className === "hide") {
        pic.className = "";
    } else {
        pic.className = "hide";
    }
}

/* references below:
https://www.youtube.com/watch?v=e57ReoUn6kM
https://www.youtube.com/redirect?event=video_description&v=e57ReoUn6kM&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FEvents&redir_token=-COitRX-nIQAwEz8IVv3PhG-DYJ8MTUzNzQ3MTEzMkAxNTM3Mzg0NzMy
*/
//take data from imputs, put into array, make radom choice from that array and display in results box. 


//empty array of choices

var choices = [];

function answer() {
    event.preventDefault();
    //choices
    var choice1 = document.getElementById("choice1").value;
    var choice2 = document.getElementById("choice2").value;
    var choice3 = document.getElementById("choice3").value;

    //push to array
    choices.push(choice1, choice2, choice3);

    //make random choice
    var random = choices[Math.floor(Math.random() * choices.length)];

    console.log(random);

    //display on HTML
    document.getElementById("Decisions").innerHTML = random;
  	

};
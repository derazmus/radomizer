

//create input fields

// function addInputFields(){
//     event.preventDefault();

//     //grab number from text field
//     var numberDecisions = document.getElementById("number").value;
//     console.log(numberDecisions);

//     //create that number of input fields in the proper div
//     var div = document.createElement('div')

// }

function changeIt() {
    event.preventDefault();

    var i = 1;
    choiceDiv.innerHTML = choiceDiv.innerHTML + "<input type = 'text' name = 'choice'>"
}

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
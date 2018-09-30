
// empty array for options to go into

var list = [];

// aread where options are going to be displayed
var areaToDisplay = document.getElementById("itemsList");

function addToList() {
    event.preventDefault();

    //grab what is typed into input

    var text = document.getElementById("options").value;

    //push what is typed into input into the list array
    list.push(text);
    //display what is in the list array on screen in the set area
    areaToDisplay.innerHTML = list

    //console.log(list);

    }

function changeIt(){
    event.preventDefault();
    //randomly select item from list array
    var random = list[Math.floor(Math.random() * list.length)];
    //display on sceen in set area
    document.getElementById("Decisions").innerHTML = random;
}

   
    
        
   

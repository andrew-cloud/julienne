// sets first recipe step
var current_step = 0;
// sets second recipes step
var next_step = 1;
// gets current step element
var current_step_text = document.getElementById("current-step");
// gets next step element
var next_step_text = document.getElementById("next-step");

// test recipe
var recipe = [
	"In a small bowl, combine cinnamon, nutmeg, and sugar and set aside briefly.",
	"Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate.",
	"In a 10-inch or 12-inch skillet, melt butter over medium heat.",
	"Dip bread in egg mixture.",
	"Fry slices until golden brown, then flip to cook the other side.",
	"Serve with syrup.",
	"Fin."
];

// set current step text
function updateCurrentStep() {
current_step_text.innerHTML = recipe[current_step];
}

// set next step text
function updateNextStep() {
next_step_text.innerHTML = recipe[next_step];
}

/*
function getSteps() {
	getElementByID.
}
*/

// moves to the next steps
function nextSteps() {
	current_step = current_step + 1;
	next_step = next_step + 1;
}

// moves to previous steps
function previousSteps() {
	current_step = current_step - 1;
	next_step = next_step - 1;
}

// checks to see if there's a previous step
function isTherePreviousStep() {
	if ((recipe[(current_step - 1)]) == undefined) {
		return false;
	}
	else {
		return true;
	}	
}

// checks to see if there's a next step
function isThereNextStep() {
	if ((recipe[(next_step + 1)]) == undefined) {
		return false;
	}
	else {
		return true;
	}	
}

// updates step text
function updateStepsText(){
	updateCurrentStep();
	updateNextStep();
}

// sets the initial steps for the recipe
updateStepsText();

// goes to next step
function goToNextStep() {
	nextSteps();
	updateStepsText();
	console.log("hi");
}

// goes to previous step
function goToPreviousStep() {
	previousSteps();
	updateStepsText();
	console.log("hey");
}

// right arrow keys moves steps forward and back
window.addEventListener('keydown', function(e) {
	console.log(e.keyCode);
	if (e.keyCode == `39` && isThereNextStep()) {
		goToNextStep();
	}
	if (e.keyCode == `37` && isTherePreviousStep()) {
		goToPreviousStep();
	}
})

//ANNYANG!

if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function() { alert('Hello world!'); }
  };

  var commands_next = {
    'next': function() {goToNextStep()}
  };

var commands_back = {
    'back': function() {goToPreviousStep()}
  };
 

  // Add our commands to annyang
  //annyang.addCommands(commands);
  annyang.addCommands(commands_next);
  annyang.addCommands(commands_back);

  // Start listening.
  annyang.start({ autoRestart: true, continuous: false });
}
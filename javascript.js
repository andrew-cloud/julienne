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
	"step1",
	"step2",
	"step3",
	"step4",
	"step5"
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

// right arrow keys moves steps forward and back
window.addEventListener('keydown', function(e) {
	console.log(e.keyCode);
	if (e.keyCode == `39` && isThereNextStep()) {
		nextSteps();
		updateStepsText();
		console.log("hi");
	}
	if (e.keyCode == `37` && isTherePreviousStep()) {
		previousSteps();
		updateStepsText();
		console.log("hey");
	}
})
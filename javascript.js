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

// updates step text
function updateStepsText(){
	updateCurrentStep();
	updateNextStep();
}

updateStepsText();
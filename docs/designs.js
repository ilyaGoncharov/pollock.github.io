// Chrome input bug remove tip developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number

// Add cool styles 
// Increase Usability 
// Upload to GitHub

// Review https://review.udacity.com/#!/rubrics/641/view
// Review https://classroom.udacity.com/courses/ud304-emea/lessons/e36fd33e-774c-4f31-a935-5e41bc8d57a6/concepts/ee0628a5-b4df-44b3-bb29-a25c2f1dd4cd

// pollock.lab project 
// https://www.brettstiller.com/javascript-pollock/
// https://www.jackson-pollock.org/autumn-rhythm.jsp

// Adding variable for Grid Sizes, Canvas 
var log = 0,
	grid = false,
	inputHeight,
	inputWidth,
	colorPicker,
	pixelCanvas;


function makeGrid() {
	// Draw Grid using unput values

	/*for (var ii = 0; ii < inputHeight; ii++) {
		pixelCanvas.append("<tr>");
		pixelCanvas.find("tr").addClass("trow");
		for (var iii = 0; iii < inputWidth; iii++) {
			pixelCanvas.find(".trow").last().append("<td>");
			pixelCanvas.find("td").addClass("tdata");
		};
		log++;
	};*/

	var ii = 0;
	var	iii = 0; 

	while (ii < inputHeight) {
		pixelCanvas.append("<tr>");
		pixelCanvas.find("tr").addClass("trow");
		ii++;	
	};

	while (iii < inputWidth) {
		pixelCanvas.find(".trow").append("<td>");
		pixelCanvas.find("td").addClass("tdata");
		iii++;
	};

	grid = true;

	log++;
}

// When size is submitted by the user, call makeGrid()
$("input[type|='submit']").on("click", function pixelArtApp(e) {
	// Stopping page reload 
	e.preventDefault();
	
	log++;

	// Taking inputHeight input value 
	inputHeight = $("#inputHeight").val();
	// Testing inputHeight input value 
	/*console.log(inputHeight);*/

	// Taking inputHeight input value 
	inputWidth = $("#inputWidth").val();
	// Testing inputHeight input value 
	/*console.log(inputWidth);*/

	log++;


	// Create Grid 
	// Select div for Grid 
	pixelCanvas = $("#pixelCanvas");

	// Check whether Grid was created
	grid === false ? makeGrid() : alert("one would be enough i guess");


	// Hide Submit button after execution to prevent further submissions 
	/*while (grid) {
		$(this).attr('type', 'hidden');
	}
	*/

	$(".colors").on("click", function Color() {
		// Take color value
		var color = $(this).css("background-color");
		$("#colorPicker").val() = color; 
	});	

	// Change cell background color 
	$(".tdata").on("mouseenter mouseleave", function changeColor() {
		// Take colorPicker value
		colorPicker = $("#colorPicker").val();

		// Change cell background color with taken data
		$(this).css("background", colorPicker);
	});

	console.log(log);
}); 


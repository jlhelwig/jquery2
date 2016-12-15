/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***

// now what?
=======================================================
*/

// Add your JS here.
"use strict"

$(document).ready(function() {


//1.

$(".alertme").click(function(){
  alert("jQuery seems easy so far!")
});




// $(".button-get").click(function() {
//     alert($(".interactive-paragraph").css("font-size"));
//   });
// <p>1. When this button below is clicked, call an alert box using jQuery that says, &quot;jQuery seems easy so far!&quot;. </p>
// <button class="alertme">Call Alert</button>
// <hr>
//2.
$(".clickme").click(function(){
 $(".clickme").text("I was clicked");
});


// <p>2. When this button below is clicked, change the text on the button to say &quot;I was clicked&quot;. </p>
// <button class="clickme">Click Me</button>
// <hr>
//3.

$(".addStyle").click(function(){
$("button").addClass("buttonStyle");
});
// <p>3. When this button below is clicked, add the pre-made CSS class style called 'buttonStyle' to it every button on this page.</p>
// <button class="addStyle">Click Me</button>
// <hr>
//4.
$(".addDifferentStyle").click(function(){
$(".addDifferentStyle").addClass("addUniqueStyle");
});
// <p>4. When this button below is clicked, add the pre-made CSS class style called 'addUniqueStyle' to only  the following button and not any of the other buttons. Hint: You'll need to use dot notion to target this unique button and it's class. </p>
// <button class="addDifferentStyle">Click Me</button>
// <hr>

//5.
$(".removeBtn").click(function(){
        $("button").removeClass("buttonStyle");
        $("button").removeClass("addUniqueStyle");
    });
//This won't show anything since there is no addStyle or addDifferentStyle in the classes
// $(".removeBtn").click(function(){
    //     $("button").removeClass("addStyle");
    //     $("button").removeClass("addDifferentStyle");
    // });

// <p>5. Remove the classes on all of the buttons (both .addStyle and .addDifferentStyle)</p>
// <button class="removeBtn">Click Me</button>
// <hr>
//6.
// $(".clickToggle").addClass("buttonStyle");
$(".clickToggle").click(function(){
$(".clickToggle").toggleClass("buttonStyle");
});
// <p>6. By clicking the button, toggle (add and remove) the class buttonStyle on only this button.</p>
// <button class="clickToggle">Click Me</button>
// <hr>
//7.
$(".squareBtn").click(function(){
  $(".square").hide();
});

// <p>7. Hide the square when the button is clicked.</p>
// <button class="squareBtn">Hide the Square</button>
// <div class="square"></div>
// <hr>
//8.
$(".circle").click(function(){
  $(".circle").hide();
});

// <p>8. Hide the circle when it is clicked.</p>
// <div class="circle"></div>
// <hr>
//9.
$(".toggleRedSquare").click(function(){
  // $(".redSquare").hide();
  $(".redSquare").toggle(1500);
});

// <p>9. Toggle the red square when the button is clicked and animate it in and out over 1.5 seconds.</p>
// <button class="toggleRedSquare">Toggle the red square</button>
// <div class="redSquare"></div>
});  // Close: $(document).ready(function() {



//Persistent data structures for efficient immutablity

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife";
    solved = true;
    suspect = "Mr. Parkes";
} else if (room === "gallery") {
    weapon = "trophy"
    solved = true;
    suspect = "Ms. Van Cleve";
} else if (room == "ballroom") {
    weapon = "poison";
    solved = true;
    suspect = "Mr. Kalehoff";
} else {
    weapon = "pool stick";
    solved = true;
    suspect = "Mrs. Sparr";

}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}


/*

Array Loops
Once the data is in the array, you want to be able to efficiently access
 and manipulate each element in the array without writing repetitive code for each element.

For instance, if this was our original donuts array:

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
and we decided to make all the same donut types, but only sell them as donut holes instead, we could write the following code:

donuts[0] += " hole";
donuts[1] += " hole";
donuts[2] += " hole";
donuts array: ["jelly donut hole", "chocolate donut hole", "glazed donut hole"]

But remember, you have another powerful tool at your disposal, loops!

To loop through an array, you can use a variable to represent the index in the array,
and then loop over that index to perform whatever manipulations your heart desires.

*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

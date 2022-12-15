// now create a function for converting temprature

function convert(){
    // now getting ids of INPUT and RESULT box
    var fahrenheit_no = document.getElementById("input").value;
    var result_box = document.getElementById("result");

    // now create a logic for fahrenheit to celsius conversion
    var result = (fahrenheit_no - 32 ) * 5/9; // Formula for F to C 
    // now put this reult into result box
    // too much digit after point lets fix this
    var new_result = result.toFixed(2);
    result_box.innerText = "Temprature in Celsius is " + new_result + "C";
    // now test this
}
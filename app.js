
// // calculater functionality

// //yaha (num) ma hum value received kar rahe hai jo onclick pa function call karte waqt dia tha.

// function addition(num) {
//     var inputBox = document.getElementById("inputBox")  // id ki madad sa value get karna ka lia
//     // console.log("inputBox", inputBox.value) // .value sirf input value ka lia is tamal hota hai.


//     inputBox.value += num   // += value ko concate karna ka lia istamal hota hai. agar sirf = use karen ga to who value ko replice kar da ga phochli value se.

// }



// // eval  calculation ka result deta hai.Jab aap eval ka istemal karte hain, to woh di gayi string expression ko 
// // evaluate kar ke uska result return karta hai.Yani agar aap koi mathematical expression 
// // ya calculation eval ke andar likhte hain, to eval us expression ko calculate kar ke uska 
// // result de dega.Jaise agar aap eval("2 + 3") likhte hain, to yeh 2 + 3 ko calculate kar ke 5 return karega.

// function result() {
//     var inputBox = document.getElementById("inputBox")
//     inputBox.value = eval(inputBox.value)

// }




// function clearall() {
//     var inputBox = document.getElementById("inputBox")
//     inputBox.value = "";

// }


// function singleClear() {
//     var inputBox = document.getElementById("inputBox")
//     inputBox.value = inputBox.value.slice(0, -1)
// }


var resultDisplayed = false; // ek global variable hai jo track karta hai ki kya result display ho chuka hai ya nahi.


function addition(num) {
    var inputBox = document.getElementById("inputBox");
    if (resultDisplayed) {
        inputBox.value = ''; // Clear input box if result is displayed
        resultDisplayed = false; // Reset resultDisplayed flag
    }
    inputBox.value += num; // Append clicked button's value to input box
}

function result() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = eval(inputBox.value);
    resultDisplayed = true; // Set resultDisplayed flag
}

function clearall() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = "";
}

function singleClear() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = inputBox.value.slice(0, -1);
}





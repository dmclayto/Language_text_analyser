

// function to alert for text input
function textAlert(inputText) {
   
    let words = [
        ""
 
    ]

    if(words.includes(inputText)) {
        alert("Please include text!");
     
    }
    else alert("Text analysing!");
}




// function to valiadte text input

function checkForName(){
    const error = document.getElementById('error');
const text = document.getElementById("name").value;
    if(text.length == 0 ){
        error.innerHTML = "Text is required!"
        return false;
    };
    if (!text.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        error.innerHTML = "Text successfully entered for analyzing"
        return false;

    }
 
}

export { textAlert, checkForName};
//export {checkForName};
var calcDisplay = ""

function btnClick(e) {
    if  (e == "1" || e == "2" || e == "3" || e == "4" || e == "7" || e == "/" || e == "*") {
    if ( e == "AC") {
        calcDisplay =""
    } else {
    calcDisplay = calcDisplay + e;
    console.log(calcDisplay);
    }

    document.getElementById("display").value = calcDisplay;
    } else {
        console.log("input harus berupa bla3");
    }
}

document.getElementById("display").addEventListener('input', function displayChange() {
    console.log(this.value)
    let e = this.value;

let chars = /^[0-9]+$/

    if (chars.test(e)) {
        console.log("digits")
    } else {
        alert("not digits")
    }

    
})

// if  (e == "1" || e == "2" || e == "3" || e == "4" || e == "7" || e == "/" || e == "*")
   // {

   // } else {
   //     console.log("error")
   // }


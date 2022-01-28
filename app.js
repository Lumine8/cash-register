var bill = document.querySelector("#bill")
var cash = document.querySelector("#cash")
var check = document.querySelector("#check")
var message = document.querySelector("#error")
var notes = document.querySelectorAll(".number-notes")
var availablenotes = [1000, 500, 200, 100, 50, 10, 5, 1]

function billsandcashamount(){
    hideMessage()
    if (bill.value>0){
        if(cash.value >= bill.value){
            var amnttoreturn = cash.value -  bill.value;
                changenumber(amnttoreturn);
        }else{
            showMessage("Not enough Cash")
        }
    }  
    else{
        showMessage("Invalid Bill")
    }

}

function changenumber(amnttoreturn){
    for(var i = 0; i < availablenotes.length; i++){

        var displaynotes = Math.floor(amnttoreturn / availablenotes[i]);
        amnttoreturn = amnttoreturn % availablenotes[i];
        notes[i].innerText = displaynotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}
function showMessage(msg){
    message.style.display = "Block";
    message.innerText = msg;
}

check.addEventListener("click", billsandcashamount)
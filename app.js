var bill = document.querySelector("#bill")
var cash = document.querySelector("#cash")
var check = document.querySelector("#check")
var message = document.querySelector("#error")
var notes = document.querySelectorAll(".number-notes")
var availablenotes = [1000, 500, 200, 100, 50, 10, 5, 1]

check.addEventListener("click", billsandcashamount)

function billsandcashamount(){
    
    if (bill.value>0){
        if(cash.value >= bill.value){

            var amnttoreturn = parseInt(cash.value -  bill.value);

            for(var i = 0; i < availablenotes.length; i++){
                var displaynotes = Math.floor(amnttoreturn / availablenotes[i]);
                console.log(displaynotes)
                amnttoreturn = amnttoreturn % availablenotes[i];
                notes[i].innerText = displaynotes;
                console.log(amnttoreturn)
            }
        }else{
            message.innerText = "Not enough Cash"
        }
    }  
    else{
        message.innerText = "Invalid Bill"
    }
}
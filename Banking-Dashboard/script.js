let balance=1000;

function updateBalance(){
    document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
    
}

function deposite(){
    console.log("Clicked");
    
    const depositAmount = parseFloat(document.getElementById("deposit").value);
    
    if(depositAmount>0){
        balance = (balance + depositAmount);
        updateBalance();
        document.getElementById("deposit").value = "";
    }
}

function withdraw(){
    const withdrawAmount = parseFloat(document.getElementById("withdraw").value);
    if(!isNaN(withdrawAmount) && withdrawAmount > 0){
        if(withdrawAmount <= balance){
            balance = balance - withdrawAmount;
            updateBalance();
        }
        else{
            alert("Insufficient Balance!!")
        }
        document.getElementById("withdraw").value="";
    }
}

updateBalance();

/*eslint-env browser*/


// First Way User Name Entry
/*
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var bankAccount = function (initialBalance) {
    "use strict";
    var name = initialBalance,
        balance = 0,
        show;
    show = function (displayMessage) {
        $("show").innerHTML = displayMessage;
    };
    return {
        cardOwner: function () {
            return name;
        },
        getBalance: function () {
            return balance;
        },
        deposit: function (depositAmount) {
            balance += depositAmount;
            show(name + " your account balance is " + balance);
        },
        withdrawal: function (amount) {
            if (amount > balance) {
                window.alert("Your account balance is " + balance + " you must withdrawal withing your balance.");
            } else {
                balance -= amount;
                show(name + " your account balance is " + balance);
            }
        }
    };
};

window.addEventListener("load", function () {
    "use strict";
    var bank;
    
    $("name").addEventListener("click", function () {
        var userName = window.prompt("Please Enter Name.");
        bank = bankAccount(userName);
        
    });
    
    $("deposit").addEventListener("click", function () {
        var userDeposit = parseInt(window.prompt("How much do you want to deposit"), 10);
        bank.deposit(userDeposit);
        
    });
    
    $("withdrawal").addEventListener("click", function () {
        var userWithdrawal = parseInt(window.prompt("How much do you want to withdrawal"), 10);
        bank.withdrawal(userWithdrawal);
        
    });
   
});
*/


// Second Way No User Name Entry


var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var bankAccount = function (initialBalance) {
    "use strict";
    var name = initialBalance,
        balance = 0,
        show;
    show = function (displayMessage) {
        $("show").innerHTML = displayMessage;
    };
    return {
        cardOwner: function (manny) {
            name = manny;
            return name;
        },
        getBalance: function () {
            return balance;
        },
        deposit: function (depositAmount) {
            balance += depositAmount;
            show(name + " your account balance is " + balance);
        },
        withdrawal: function (amount) {
            if (amount > balance) {
                window.alert("Your account balance is " + balance + " you must withdrawal withing your balance.");
            } else {
                balance -= amount;
                show(name + " your account balance is " + balance);
            }
        }
    };
};

window.addEventListener("load", function () {
    "use strict";
    var carlosAccount = bankAccount("Carlos Coy");
    
    $("deposit").addEventListener("click", function () {
        var userDeposit = parseInt(window.prompt("How much do you want to deposit"), 10);
        carlosAccount.deposit(userDeposit);
        
    });
    
    $("withdrawal").addEventListener("click", function () {
        var userWithdrawal = parseInt(window.prompt("How much do you want to withdrawal"), 10);
        carlosAccount.withdrawal(userWithdrawal);
        
    });
   
});

//https://lazamar.github.io/closures-private-variables-and-methods-in-javascript/

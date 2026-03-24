document.getElementById("Button1").addEventListener("click", something)

function something() {
    try {
        let principleLoanAmount = Number(prompt("Initial Loan amount (numeric, no commas)"));
        let downPayment = Number(prompt("What percent was the down payment(anual percentage rate, or APR)"))
        let loanTerm = Number(prompt("Loan term in years (must be 15 or 30)"));

        if (!principleLoanAmount || !monthlyInterestRate || !totalMonths) {
            throw "Must be 15 or 30";
            return error
        }

        
        let monthlyPayment = ((monthlyInterestRate * principalLoanAmount) / (1 - Math.pow(1 + monthlyInterestRate, -totalMonths))).toFixed(2);

        let totalInterestPaid = (monthlyPayment * totalMonths) - principleLoanAmount


    } catch (error) {
        alert("error")
    }
}
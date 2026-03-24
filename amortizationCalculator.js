document.getElementById("Button1").addEventListener("click", something)

function something() {
    try {
        let loanAmount = Number(prompt("Initial Loan amount (numeric, no commas)"));
        let downPayment = Number(prompt("What percent was the down payment(anual percentage rate, or APR)"))
        let loanTerm = Number(prompt("Loan term in years (must be 15 or 30)"));

        if (!principleLoanAmount || !monthlyInterestRate || !loanTerm || loanTerm != 15||30) {
            throw "error";
            
        }

        let principalLoanAmount = loanAmount - downPayment;
        const anualInterestRate = 0.0575;
        let monthlyInterestRate = anualInterestRate / 12;

        let monthlyPayment = ((monthlyInterestRate * principalLoanAmount) / (1 - Math.pow(1 + monthlyInterestRate, -totalMonths))).toFixed(2);
        let totalInterestPaid = (monthlyPayment * totalMonths) - principleLoanAmount;
        let totalLoanCost = principalLoanAmount + totalInterest
        let currentLoan = totalLoanCost - totalInterestPaid

        let p = document.createAttribute("p");
        p.textContent = "month: " + i + ": Payment"

        p.textContent = "Morgage Term:"+ loanTerm;
        resultsDiv.a
        
        for (let i = 0; i<loanTerm*12; i++) {
            totalLoanCost - monthlyPayment;        
        }

    } catch (error) {
        alert("error")
    }
}
const readline  = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const CalculateCompoundInterest = () => {
    rl.question('enter pricipal',(p) =>{
        rl.question('enter rate',(r)=>{
            rl.question('enter time',(t)=>{
                p=parseFloat(p);
                r=parseFloat(r);
                t=parseFloat(t);
                const compoundedInterest = p * (Math.pow((1 + r / 100), t) - 1);
    console.log(compoundedInterest);
            });
        });
    });
    
}

CalculateCompoundInterest();

// arrow function
// const CalculateCompoundInterest = (principal, rate, time) => {
//     const compoundedInterest = principal * (Math.pow((1 + rate / 100), time) - 1);
//     return compoundedInterest;
// };

// // Example usage:
// const principalAmount = 1000; // initial principal amount
// const annualInterestRate = 5; // annual interest rate in percentage
// const timePeriod = 2; // time period in years

// const compoundInterest = CalculateCompoundInterest(principalAmount, annualInterestRate, timePeriod);
// console.log('Compound Interest:', compoundInterest);

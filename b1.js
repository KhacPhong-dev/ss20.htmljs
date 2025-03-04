 function sumOfNumbers(N) {
    let sum = 0;
    if (N < 1 ) {
        console.log("Invalid input. N must be greater than or equal to 1.");
        return false; 
    }else if (isNaN(N)) {
        console.log("Invalid input. N must be a number.");
        return false; 
    }
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;

}

let n = +prompt("Enter a number: ");
let result = sumOfNumbers(n);
if (result !== false) {
    console.log("The sum of the first " + n + " natural numbers is: " + result); 
}else if (result === false){
    console.log(result); 
}

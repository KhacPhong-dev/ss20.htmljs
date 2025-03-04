 function sumofNumbers(N) {
    let sum = 0;
    if (N < 1 ) {
        console.log("Invalid input. N phải lớn hơn 1.");
        return false; 
    }else if (isNaN(N)) {
        console.log("Invalid input. N phải là số.");
        return false; 
    }
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;

}

let n = +prompt("Enter a number: ");
let result = sumofNumbers(n);
if (result !== false) {
    console.log(result); 
}else if (result === false){
    console.log(result); 
}

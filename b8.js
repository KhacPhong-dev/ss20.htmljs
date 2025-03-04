let n = +prompt("Nhập vào số nguyên tố: ");
let count = 0;
let num = 2;
let result = "";
if (n < 1) {
    console.log("Invalid input. N must be greater than or equal to 1.");

}else if (isNaN(n)) {
    console.log("Invalid input. N must be a number."); 
}else{
    while (count < n) {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += num + " ";
            count++;
        }
        num++;
    
    }
    
    console.log(result); 
}

let n = +prompt("Nhập vào một số nguyên dương: ");
let result = "";
if (n < 1) {
    result = "Invalid input. N must be greater than or equal to 1.";

}else if (isNaN(n)) {
    result = "Invalid input. N must be a number."; 
}else {
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            result += i + ", ";
        }
    } 
}
console.log(result);

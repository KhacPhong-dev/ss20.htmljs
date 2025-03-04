let n = +prompt("Nhập vào một số nguyên dương: ");
let result = "";
if (n < 1) {
    result = "Invalid input. N lớn hơn 1.";

}else if (isNaN(n)) {
    result = "Invalid input. N phải là số."; 
}else {
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            result += i + ", ";
        }
    } 
}
console.log(result);

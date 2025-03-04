let num = +prompt("Nhập vào số nguyên: ");
let isPrime = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }else{
        isPrime = true; 
    }

}
if (isPrime) {
    console.log(num + " là số nguyên tố"); 
}else{
    console.log(num + " không phải là số nguyên tố"); 
}
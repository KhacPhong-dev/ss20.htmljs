let a = +prompt("Nhập vào số a: ");
let b = +prompt("Nhập vào số b: ");
let result = 1;
if (isNaN(a) || isNaN(b)) {
    console.log("Invalid input. a và b phải là số.");
}else if {b < 1) {
    console.log("Invalid input. a và b lớn hơn 1."); 
}else {
    for (let i = 1; i <= b; i++) {
        result *= a;
    
    }
    console.log(a + "^" + b + " = " + result);     
}

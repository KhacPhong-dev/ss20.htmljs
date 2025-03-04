let n = +prompt("Nhập vào số số fibonacci sẽ hiển thị: ");
let f0 = 1;
let f1 = 1;
let fn = 0;
let result = "";
if (n < 1) {
    console.log("Invalid input. N lớn hơn 1.");

}else if (isNaN(n)) {
    console.log("Invalid input. N phải là số."); 
}else {
    for (let i = 0; i < n; i++) {
        if (i == 0 || i == 1) {
            fn = 1; 
        }
        else {
            fn = f0 + f1;
            f0 = f1;
            f1 = fn; 
        }
        result += fn + " ";
        
    
    }
    console.log(result); 
}


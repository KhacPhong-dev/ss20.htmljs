
let n = prompt("Nhập vào một số nguyên dương: ");
let result = ""+n;
let len = result.length;
let check = true;
if (n < 0 || isNaN(n)) {
    console.log("Số vừa nhập không hợp lệ");
    
}else {
    for (let i = 0; i < len/2; i++) {
        if (result[i] != result[len-i-1]) {
            check = false;
            break;
        }
        else{
            check = true; 
        }
    }
    if (check) {
        console.log( n+" Là số đối xứng");
    }
    else{
        console.log(n+ " Không phải số đối xứng"); 
    } 
}
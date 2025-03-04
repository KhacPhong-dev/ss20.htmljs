
let str = prompt("Nhập vào một chuỗi bất kỳ: ");
let char = prompt("Nhập vào một ký tự bất kỳ: ");
let result = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
        result += str[i] + ", ";
    }
}
if (result == "") {
    console.log("Không tìm thấy ký tự " + char + " trong chuỗi " + str); 
}else{
    console.log("Tìm thấy ký tự " + char + " trong chuỗi " + str); 
}
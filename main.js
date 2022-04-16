// boolean: true/false

var isstatus = false;

// các loại toán tử
// * Phép so sánh bằng == (so sánh giá trị)
var number_1 = "5";
var number_2 = 5;

//var result_12 = number_1 == number_2;
console.log(number_1 == number_2);

// * Phép so sánh === (so sách giá trị & kiểu dữ liệu)
var number_3 = "10";
var number_4 = 10;
console.log(number_3 === number_4);

// * Phép so sánh khác != 
var number_5 = 10;
var number_6 = 10;
console.log(number_5 != number_6);

// * Phép so sánh khác !==
var number_7 = 10;
var number_8 = "10";
console.log(number_7 !== number_8);

// * Phép so sánh lớn >
var number_9 = 10;
var number_10 = 10;
console.log(number_9 > number_10);

// * Phép so sánh lớn hoặc bằng >=
var number_11 = 10;
var number__12 = 10;
console.log(number_11 >= number__12);

// * Phép so sánh bé <
var number_13 = 10;
var number_14 = 19;
console.log(number_13 < number_14);

// * Phép so sánh bé <=
var number_15 = 10;
var number_16 = 19;
console.log(number_15 <= number_16);


/* Logic */
// Toán tử và && chỉ cần 1 cái false thì sẽ false hết
var bt_1 = true;
var bt_2 = true;
var bt_3 = false;
console.log(bt_1 && bt_2 && bt_3);
console.log(5<2 && 10>1 && 4!=1);

// Toán tử hoặc || chỉ cần 1 cái true thì sẽ true hết
var bt_4 = true;
var bt_5 = false;
var bt_6 = false;
console.log(bt_4 || bt_5 || bt_6);
console.log(5<2 || 10>1 || 4!=1 && 1>100);


// Toán tử phủ định !
var isloop = true;
console.log(!isloop);


/* Cấu trúc điểu kiện */
if(1==1) {
    //hành động
    console.log("dk dung");
}

// chuyển số âm sang dương
// giả sử
// -5 => 5
// -10 => 10
var d = -5;
if(d < 0) {
    d = -d;
    console.log(d);
}

/** thẻ tín dụng
* giả sử 
* - mua đôi giày 10.000.000
* - cuối tháng trả 5.000.000
* - nợ bank 5.000.000 
* - tỷ lệ phạt 1.5%: 1.5/100 = 0.015
* - phạt 5.000.000 * 0.015 = 75.000
*/
var muonBank = 10000000;
var traBank = 5000000;
var tyLeBank = 0.015;
var tienPhat = 0;
var balance = muonBank - traBank; 
if(balance > 0) {
    tienPhat= balance * tyLeBank;
    console.log("Số tiền phạt là: " + tienPhat);
}


// IF ELSE
if(1>9) {
    // hành động 1
    console.log("hành động 1");
} else {
    // hành động 2
    console.log("hành động 2");
}

// Toán tử 3 ngôi
// Biểu thức điều kiện ? "hành động 1" : "hành động 2"
10 > 9 ? console.log("hành động 1") : console.log("hành động 2");


// tìm số lớn nhất trong 2 số
// giả sử
// sothu1 = 10
// sothu2 = 5
// => SLN là số thứ 1
// * Đầu vào
// sothu1 = 10
// sothu2 = 5
// sln = 0
// * Xử lý
// nếu sothu1 lớn hơn sothu2 => kết quả là sothu1
// ngược lại là sothu2
// * Đầu ra
// log sln
var sothu1 = 1;
var sothu2 = 5;
var sln = 0;
if(sothu1 > sothu2) {
    sln = sothu1;
} else {
    sln = sothu2;
}
console.log("Số lớn nhất là: " + sln);


/* Tính lương
 - Giả sử 
soGioLam: 40
luongTheoGio: 100000
overTime
tongLuong: 0
Nếu soGioLam <= 40  thì tongLuong = soGioLam * luongTheoGio
Nếu soGioLam > 40  thì tongLuong = 40 * luongTheoGio + ((soGioLam - 40) * 1.5 * luongTheoGio)
*/
var soGioLam = 50;
var luongTheoGio = 100000;
var overTime = 1.5;
var tongLuong = 0;
var gioChuan = 40;
if(soGioLam < gioChuan) {
    tongLuong = soGioLam * luongTheoGio;
} else {
    tongLuong = gioChuan * luongTheoGio + (soGioLam - gioChuan) * overTime * luongTheoGio;
}
console.log("Tổng lương là: " + tongLuong);


// if else if
// Giả sử : dạy bé đọc số
// + number = 1
// Nếu như number == 1
// => "đây là số 1"
// + number = 2
// Ngược lại number == 2
// => "đây là số 2"
// + number = 3
// Nếu như number == 3
// => "đây là số 3"
// Ngược lại " không biết đọc"
var number = 4;
if(number === 1) {
    console.log("đây là số 1");
} else if(number === 2) {
    console.log("đây là số 2");
} else if(number === 3) {
    console.log("đây là số 3");
} else {
    console.log("không biết đọc");
}

/* Shop
 - Giả sử
 ten: Coca
 soLuong: 50
 donGia: 1
 tongTienGiam: 0

 Nếu sl < 50
    tongTien = soLuong * donGia
 Nếu 50 <= sl <= 100
    tongTien = (49*donGia) + (sl-49)*donGia*0.92
 Nếu sl > 100
    tongTien = (49*donGia) + 50*donGia*0.92 + (sl-100)*donGia*0.88
*/
var donGia = 1;
var soLuong = 50;
 var tongTien = 0;
if(soLuong >= 50 && soLuong <= 100) {
    tongTien = 49*donGia + (soLuong-49)*donGia*0.92;
} else if(soLuong > 100) {
    tongTien =  49*donGia + 50*donGia*0.92 + (soLuong-100)*donGia*0.88;
} else {
    tongTien = soLuong * donGia;
}
console.log("Tổng tiền là: " + tongTien);
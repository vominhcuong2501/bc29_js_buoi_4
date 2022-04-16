/*Mô hình 3 khối bài tập 1
 + Đầu vào
     giả sử nhập số nguyên
    soThu1
    soThu2 
    soThu3

 + Xử lý
    Nếu sothu1 lớn hơn sothu2 và sothu2 lớn hơn sothu3
 => số tăng dần là sothu3 < sothu2 < sothu1
    Nếu sothu1 lớn hơn sothu3 và sothu3 lớn hơn sothu2
 => số tăng dần là sothu2 < sothu3 < sothu1
    Nếu sothu2 lớn hơn sothu1 và sothu1 lớn hơn sothu3
 => số tăng dần là sothu3 < sothu1 < sothu2
    Nếu sothu2 lớn hơn sothu3 và sothu3 lớn hơn sothu1
 => số tăng dần là sothu1 < sothu3 < sothu2
    Nếu sothu3 lớn hơn sothu2 và sothu2 lớn hơn sothu1
 => số tăng dần là sothu1 < sothu2 < sothu3
    Còn lại nếu sothu3 lớn hơn sothu1 và sothu1 lớn hơn sothu2
 => số tăng dần là sothu2 < sothu1 < sothu3

 + Đầu ra
*/
document.getElementById("xuatTangDan").onclick = function() {
    var soThu1 = document.getElementById("soThu1").value*1;
    var soThu2 = document.getElementById("soThu2").value*1;
    var soThu3 = document.getElementById("soThu3").value*1;
    var result = 0 ;
    if(soThu1 > soThu2 && soThu2 > soThu3) {
        result = "Số tăng dần là: " + soThu3 + " đến " + soThu2 + " đến " + soThu1 ;
    } else if(soThu1 > soThu3 && soThu3 > soThu2) {
        result = "Số tăng dần là: " + soThu2 + " đến " + soThu3 + " đến " + soThu1 ;
    } else if(soThu2 > soThu1 && soThu1 > soThu3) {
        result = "Số tăng dần là: " + soThu3 + " đến " + soThu1 + " đến " + soThu2 ;
    } else if(soThu2 > soThu3 && soThu3 > soThu1) {
        result = "Số tăng dần là: " + soThu1 + " đến " + soThu3 + " đến " + soThu2 ;
    } else if(soThu3 > soThu2 && soThu2 > soThu1) {
        result = "Số tăng dần là: " + soThu1 + " đến " + soThu2 + " đến " + soThu3 ;
    } else {
        result = "Số tăng dần là: " + soThu2 + " đến " + soThu1 + " đến " + soThu3 ;
    }
    console.log(result);
    document.getElementById("thongbao").innerHTML = result;
    document.getElementById("thongbao").classList.add("alert-success");
}

/*Mô hình 3 khối bài tập 2
 + Đầu vào
    giả sử nhập tên người dùng là
    B: bố
    M: mẹ
    A: anh trai
    E: em gái 
 + Xử lý
    Nếu là B => xuất lời chào bố
    tương tự mẹ , anh trai, em gái
 + Đầu ra
*/
document.getElementById("xuatLoiChao").onclick = function() {
    var ten = document.getElementById("user").value;
    var result = 0;
    if(ten == "B") {
        result = "Xin chào bố";
    } else if(ten == "M" ) {
        result = "Xin chào mẹ";
    } else if(ten == "A" ) {
        result = "Xin chào anh trai";
    } else if(ten == "") {
        result = "Xin hãy nhập tên";
    } else {
        result = "Xin chào em gái";
    }
    document.getElementById("thongbao1").innerHTML = result;
    document.getElementById("thongbao1").classList.add("alert-success");
}


/*Mô hình 3 khối bài tập 1
 + Đầu vào
    giả sử nhập số nguyên
    so1
    so2 
    so3

 + Xử lý
    Nếu so1 chia 2 mà số dư khác 0 là số lẻ, ngược lại số dư = 0 là số chẵn
    Nếu so2 chia 2 mà số dư khác 0 là số lẻ, ngược lại số dư = 0 là số chẵn
    Nếu so3 chia 2 mà số dư khác 0 là số lẻ, ngược lại số dư = 0 là số chẵn
 + Đầu ra
*/
document.getElementById("xuatSo").onclick = function() {
    var so1 = document.getElementById("so1").value*1;
    var so2 = document.getElementById("so2").value*1;
    var so3 = document.getElementById("so3").value*1;
    var result = 0;
    if(so1%2==0 && so2%2==0 && so3%2==0) {
        result = "Có 3 số chẵn";
    } else if(so1%2!=0 && so2%2!=0 && so3%2!=0) {
        result = "Có 3 số lẻ";
    } else if (so1%2==0 && so2%2!=0 && so3%2!=0) {
        result = " Có 1 số chẵn 2 sô lẻ"
    } else if (so1%2==0 && so2%2==0 && so3%2!=0) {
        result = " Có 2 số chẵn 1 sô lẻ"
    } else if (so1%2==0 && so2%2!=0 && so3%2==0) {
        result = " Có 2 số chẵn 1 sô lẻ"
    } else if (so1%2!=0 && so2%2==0 && so3%2!=0) {
        result = " Có 1 số chẵn 2 sô lẻ"
    } else if (so1%2!=0 && so2%2==0 && so3%2==0) {
        result = " Có 2 số chẵn 1 sô lẻ"
    } else if (so1%2!=0 && so2%2!=0 && so3%2==0) {
        result = " Có 1 số chẵn 2 sô lẻ"
    }
    document.getElementById("thongbao2").innerHTML = result;
    document.getElementById("thongbao2").classList.add("alert-success");
}

/*Mô hình 3 khối bài tập 3
 + Đầu vào
     giả sử nhập canh hình tam giác
    a
    b 
    c

 + Xử lý
    nếu a bằng b và khác c => tam giác cân
    nếu a bằng b và bằng c => tam giac đều
    nếu a*a + b*b bằng c*c => tam giác vuông
 + Đầu ra
*/
document.getElementById("XuatLoaiTamGiac").onclick = function() {
    var canh1 =document.getElementById("canh1").value*1;
    var canh2 =document.getElementById("canh2").value*1;
    var canh3 =document.getElementById("canh3").value*1;
    var result = 0;
    if(canh1 == canh2 && canh1 != canh3) {
        result = "Tam giác cân";
    } else if(canh1 == canh2 && canh1 == canh3) {
        result = "Tam giác đều";
    } else if(canh1*canh1 + canh2*canh2 == canh3*canh3) {
        result = "Tam giác vuông"
    }
    document.getElementById("thongbao3").innerHTML = result;
    document.getElementById("thongbao3").classList.add("alert-success");
}
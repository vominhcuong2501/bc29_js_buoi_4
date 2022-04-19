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
    } else if(soThu3 > soThu1 && soThu2 < soThu1) {
        result = "Số tăng dần là: " + soThu2 + " đến " + soThu1 + " đến " + soThu3 ;
    } else if(soThu1 == soThu2 && soThu2 < soThu3) {
        result = "Số tăng dần là: "+ soThu2 + " đến " + soThu3 ;
    } else if(soThu1 == soThu3 && soThu2 > soThu3) {
        result = "Số tăng dần là: "+ soThu3 + " đến " + soThu2 ;
    } else if(soThu3 == soThu2 && soThu2 < soThu1) {
        result = "Số tăng dần là: "+ soThu2 + " đến " + soThu1 ;
    } else {
        result = "Ba số bằng nhau";
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
        result = "bố";
    } else if(ten == "M" ) {
        result = "mẹ";
    } else if(ten == "A" ) {
        result = "anh trai";
    } else if(ten == "E") {
        result = "em gái";
    } else if(ten == "" || ten != "B" || ten != "M" || ten != "A" || ten != "E") {
        result = "Xin hãy nhập thông tin";
    }
    document.getElementById("thongbao1").innerHTML = "Xin chào " + result;
    document.getElementById("thongbao1").classList.add("alert-success");
}


/*Mô hình 3 khối bài tập 3
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

/*Mô hình 3 khối bài tập 4
 + Đầu vào
     giả sử nhập canh hình tam giác
    canh1
    canh2
    canh3

 + Xử lý
    nếu canh1 bằng canh2 và khác canh3 => tam giác cân
    nếu canh1 bằng canh2 và bằng canh3 => tam giac đều
    nếu canh1*canh1 + canh2*canh2 bằng canh3*canh3 => tam giác vuông
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
    } else {
        result = "Không xác định"
    }
    document.getElementById("thongbao3").innerHTML = result;
    document.getElementById("thongbao3").classList.add("alert-success");
}

/*Mô hình 3 khối bài tập 1 nâng cao
 + Đầu vào
     giả sử nhập ngày tháng năm vào xuất ra ngày kế tiếp
    ngay 
    thang
    nam

 + Xử lý
    nếu nhập ngaỳ 1 tháng 1 năm 1 => tiến lên 1 ngày là ngày 2 tháng 1 năm 1 nhưng dựa vào số ngày tối đa trong tháng (ví dụ tháng 1 có 31 ngày)
 + Đầu ra
*/
document.getElementById("xuatNgaySau").onclick = function() {
    var ngay = document.getElementById("ngay").value*1;
    var thang = document.getElementById("thang").value*1;
    var nam = document.getElementById("nam").value*1;
    result = 0;
    if( ngay =="" || thang == "" || nam == "") {
        result = "Xin nhập đầy đủ ngày tháng năm";        
    } else if(ngay < 31 && thang ==1 ) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam;
    } else if( ngay == 31 && thang == 1) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    } else if( ngay < 28 && thang == 2) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 28 && thang == 2) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    } else if( ngay < 31 && thang == 3) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 31 && thang == 3) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    }else if( ngay < 30 && thang == 4) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 30 && thang == 4) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    }else if( ngay < 31 && thang == 5) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 31 && thang == 5) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    }else if( ngay < 30 && thang == 6) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 30 && thang == 6) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    }else if( ngay < 31 && thang == 7) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 31 && thang == 7) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    }else if( ngay < 31 && thang == 8) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 31 && thang == 8) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    }else if( ngay < 30 && thang == 9) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 30 && thang == 9) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    }else if( ngay < 31 && thang == 10) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 31 && thang == 10) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    }else if( ngay < 30 && thang == 11) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 30 && thang == 11) {
        result = "Ngày: "+ 1 + " tháng: " + (thang + 1) + " năm: "+ nam; 
    }else if( ngay < 31 && thang == 12) {
        result = "Ngày: "+ (ngay + 1)+ " tháng: " + thang + " năm: "+ nam; 
    } else if( ngay == 31 && thang == 12) {
        result = "Ngày: "+ 1 + " tháng: " + 1 + " năm: "+ (nam + 1); 
    }
    document.getElementById("thongbao4").innerHTML = result;
    document.getElementById("thongbao4").classList.add("alert-success");
}

/*Mô hình 3 khối bài tập 1 nâng cao
 + Đầu vào
     giả sử nhập day month year vào xuất ra ngày trước đó
    day
    month
    year

 + Xử lý
    nếu nhập ngaỳ 1 tháng 1 năm 1 => lùi đi một ngày là ngày 31 tháng 12 năm 0 nhưng dựa vào số ngày tối đa trong tháng (ví dụ tháng 1 có 31 ngày)
 + Đầu ra
*/
document.getElementById("xuatNgayTruoc").onclick = function() {
    var day = document.getElementById("day").value*1;
    var month = document.getElementById("month").value*1;
    var year = document.getElementById("year").value*1;
    result = 0;
    if( day =="" || month == "" || year == "") {
        result = "Xin nhập đầy đủ ngày tháng năm";        
    } else if(1 < day && day <= 31 && month == 1) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 1) {
        result = "Day: "+ 31 + " month "+ 12 + " year " + (year - 1)
    } else if(1 < day && day <= 28 && month == 2) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 2) {
        result = "Day: "+ 31 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 31 && month == 3) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 3) {
        result = "Day: "+ 28 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 30 && month == 4) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 4) {
        result = "Day: "+ 31 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 31 && month == 5) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 5) {
        result = "Day: "+ 30 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 30 && month == 6) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 6) {
        result = "Day: "+ 31 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 31 && month == 7) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 7) {
        result = "Day: "+ 30 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 31 && month == 8) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 8) {
        result = "Day: "+ 31 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 30 && month == 9) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 9) {
        result = "Day: "+ 31 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 31 && month == 10) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 10) {
        result = "Day: "+ 30 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 30 && month == 11) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 11) {
        result = "Day: "+ 31 + " month "+ (month - 1) + " year " + year;
    } else if(1 < day && day <= 31 && month == 12) {
        result = "Day: "+ (day - 1) + " month "+ month + " year "+ year;
    } else if( day == 1 && month == 12) {
        result = "Day: "+ 30 + " month "+ (month - 1) + " year " + year;
    }
    document.getElementById("thongbao5").innerHTML = result;
    document.getElementById("thongbao5").classList.add("alert-success");
}

/*Mô hình 3 khối bài tập 2 nâng cao
 + Đầu vào
     giả sử nhập thang năm xuất ra tháng đó có bao nhieu ngày
    Thang
    Nam

 + Xử lý
    nếu nhập tháng 1 => có 31 ngày
    nhập tháng 2 => có 28 ngày 
    nếu là năm nhuận thì số năm chia 4 có phần dư bằng 0 thì tháng 2 có 29 ngày, khác 0 thì 28 ngày
 + Đầu ra
*/
document.getElementById("xuatNgay").onclick = function() {
    var Thang = document.getElementById("Thang").value*1;
    var Nam = document.getElementById("Nam").value*1;
    var result = 0;
    if( Thang == 1 || Thang == 3 || Thang == 5 || Thang == 7 || Thang == 8 || Thang == 10 || Thang == 12 ) {
        result = 31;
    } else if( (Nam%4) == 0 && Thang == 2) {
        result = 29;
    } else if( Thang == 2) {
        result = 28;
    } else if( Thang == 4 || Thang == 6 || Thang == 9 || Thang == 11) {
        result = 30;
    }else (
        result = "Xin hãy nhập số thàng và năm"
    )
    document.getElementById("thongbao6").innerHTML = "Số ngày của tháng là: "+ result;
    document.getElementById("thongbao6").classList.add("alert-success");
}

/*Mô hình 3 khối bài tập 3 nâng cao
 + Đầu vào
    giả sử nhập số nguyên có 3 chữ số
    soNguyen   

 + Xử lý
    nếu nhập 111 => xuất ra cách đọc
 + Đầu ra
*/
document.getElementById("xuatCachDoc").onclick = function() {
    var soNguyen = document.getElementById("soNguyen").value*1;
    var hangTram = Math.floor(soNguyen/100);
    var hangChuc = Math.floor(soNguyen%100/10);
    var hangDV = soNguyen%10;
    var result = 0;
    if(soNguyen <= 999 
        && hangChuc != 0 
        && hangChuc != 1 
        && hangDV != 0) {
        result = "Cách đọc là "+ hangTram+ " trăm "+ hangChuc+ " mươi "+ hangDV;
    } else if(soNguyen <= 999 
        && hangChuc == 1
        && hangChuc != 0  
        && hangDV != 0) {
        result = "Cách đọc là "+ hangTram+ " trăm "+ " mười "+ hangDV;    
    } else if(soNguyen <= 999 
        && hangChuc == 0 
        && hangChuc != 1 
        && hangDV != 0) {
        result = "Cách đọc là "+ hangTram+ " trăm " + " linh "+ hangDV;    
    } else if(soNguyen <= 999
        && hangChuc != 0 
        && hangChuc != 1 
        && hangDV == 0) {
        result = "Cách đọc là "+ hangTram+ " trăm "+ hangChuc+ " mươi";    
    } else if(soNguyen <= 999
        && hangDV != 0 ) {
        result = "Cách đọc là " + hangDV;    
        } 
    document.getElementById("thongbao7").innerHTML = result;
    document.getElementById("thongbao7").classList.add("alert-success");
}

/*Mô hình 3 khối bài tập 4 nâng cao
 + Đầu vào
    giả sử
        tọa độ của trường học theo trục x và y là 0,0
        nhập tọa độ và tên của 3 sinh viên
            Hải(xH,yH)
            Phúc(xP,yP)
            Trường(xT,yT)
        
 + Xử lý
    áp dụng định lý pitago cho tam giác vuông => tính chiều dài xa nhất với trường
 + Đầu ra
*/
document.getElementById("xuatToaDo").onclick = function() {
    var xH = document.getElementById("xH").value*1;
    var yH = document.getElementById("yH").value*1;
    var toaDoHai = xH*xH + yH*yH;

    var xP = document.getElementById("xP").value*1;
    var yP = document.getElementById("yP").value*1;
    var toaDoPhuc = xP*xP + yP*yP;

    var xT = document.getElementById("xT").value*1;
    var yT = document.getElementById("yT").value*1;
    var toaDoTruong = xT*xT + yT*yT;
    var result=0;
    if(toaDoHai > toaDoPhuc && toaDoHai > toaDoTruong) {
        result = "Sinh viên Hải ở xa trường nhất";
    } else if(toaDoPhuc > toaDoHai && toaDoPhuc > toaDoTruong) {
        result = "Sinh viên Phúc ở xa trường nhất";
    } else if(toaDoTruong > toaDoHai && toaDoTruong > toaDoPhuc) {
        result = "Sinh viên Trường ở xa trường nhất";
    }
    document.getElementById("thongbao8").innerHTML= result;
    console.log(result);
}

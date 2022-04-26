function getID(id) {
    return document.getElementById(id)
}

// Bài tập 1
/*
    - Input: 
        + Nhập ngày, tháng, năm
    - Xử lý: 
        + Nhập số ngày làm 
        + Lương nhân viên = lương 1 ngày * số ngày làm 
    - Output: Tiền lương nhân viên
*/

// Kiểm tra năm nhuận
var nhuan = function (y) {
    return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0);
}

// Hàm đếm số ngày trong tháng
var soNgayTrongThang = function (m, y) {
    switch (m) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            {
                return 31;
            }
        case 2:
            {
                if (nhuan(y)) {
                    return 29;
                }
                return 28;
            }
        case 4: case 6: case 9: case 11:
            {
                return 30;
            }
    }
}

// Hàm kiểm tra xem ngày trước đó
function lastDay(y, m, d) {
    var year = y;
    var month = m;
    var day = d;

    if (y > 0 && m > 0 && m < 13 && d > 0 && d <= (soNgayTrongThang(m, y))) {
        day = d - 1;

        if (m != 1 && d == 1) {
            //trường hơp 1: tháng nhập vào là 2,4,6,8,9,11 thì ngày trước đó sẽ là ngày 31 tháng trước đó
            if (m == 2 || m == 4 || m == 6 || m == 8 || m == 9 || m == 11) {
                day = 31;
                month = m - 1;
            }

            //trường hơp 2: tháng nhập vào là tháng 3 thì ngày trước đó là ngày 29 nếu năm nhuận và 28 nếu không nhuận
            if (m == 3) {
                if (nhuan(y)) {
                    day = 29;
                    month = m - 1;
                }
                else {
                    day = 28;
                    month = m - 1;
                }
            }

            //trường hơp 3: tháng nhập vào là tháng 5,7,10,12 thì ngày trước đó sẽ là 30
            if (m == 5 || m == 7 || m == 10 || m == 12) {
                day = 30;
                month = m - 1;
            }

            //nếu tháng nhập vào là tháng 1 và ngày 1 thì ngày tháng năm trước đó sẽ là ngày 31 tháng 12 năm trước đó
            else if (m == 1 && d == 1) {
                day = 31;
                year = y - 1;
                month = 12;
            }
        }
    }
    console.log(`Ngày trước đó: ${day} - ${month} - ${year}`);

};

lastDay(2016, 3, 1);




// Hàm kiểm tra ngày tiếp theo
function nextDay(y, m, d) {
    var year = y;
    var month = m;
    var day = d;

    if (y > 0 && m > 0 && m < 13 && d > 0 && d <= (soNgayTrongThang(m, y))) {
        day = d + 1;

        // //nếu tháng nhập vào không phải tháng 12 và số ngày bằng số ngày tối đa của tháng thì ta tăng tháng lên 1 và ngày = 1
        if (m != 12 && d == soNgayTrongThang(m, y)) {
            day = 1;
            month = m + 1
        }
        //nếu tháng nhập vào là tháng 12 và số ngày bằng số ngày bằng 31 thì ta tăng tháng, năm lên 1 và ngày sẽ bằng 1
        else if (m == 12 && d == soNgayTrongThang(m, y)) {
            day = 1;
            year = y + 1;
            month = 1;
        }
        else if (m == 2) {
            //nếu tháng nhập vào là tháng 2 và năm nhuận thì ngày tối đa sẽ là 29
            if (nhuan(y)) {
                //nếu người dùng nhập vào ngày 29 thì ta tăng tháng lên 1 và ngày bằng 1
                if (d == 29) {
                    day = 1;
                    month = m + 1;
                }
            }
            //ngược lại nếu tháng 2 và không phải năm nhuận thì tháng 2 có 28 ngày
            else {
                //nếu người dùng nhập vào ngày 28 thì tăng tháng lên 1 và ngày bằng 1
                if (d == 28) {
                    day = 1;
                    month = m + 1;
                }
            }
        }
        console.log(`Ngày sau đó: ${day} - ${month} - ${year}`);
    };
}
nextDay(2022, 2, 28);

// **********************************************************************************************
// Bài tập thêm 2 - số ngày trong tháng
var nhuan = function (y) {
    return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0);
}

// Hàm đếm số ngày trong tháng
var soNgayTrongThang = function (m, y) {
    switch (m) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            {
                return 31;
            }
        case 2:
            {
                if (nhuan(y)) {
                    return 29;
                }
                return 28;
            }
        case 4: case 6: case 9: case 11:
            {
                return 30;
            }
    }
}
console.log(soNgayTrongThang(2, 2016));

// *************************************************************************************
// Bài tập thêm 3 - đọc số
function read(num) {
    switch (num) {
        case 0:
            return " ";
        case 1:
            return " một";
        case 2:
            return " hai";
        case 3:
            return " ba";
        case 4:
            return " bốn";
        case 5:
            return " năm";
        case 6:
            return " sáu";
        case 7:
            return " bảy";
        case 8:
            return " tám";
        case 9:
            return " chín";
    }
}

getID("btn-read").onclick = function() {
    var number = getID("nhapSo").value;
    var hangTram = Math.floor(number/100);
    var hangDV = number % 10;
    var hangChuc = (number - (hangTram * 100) - hangDV) / 10;

    var stringTram = "";
    var stringChuc = "";
    var stringDV = "";

    stringTram = read(hangTram) + " trăm";

    if (hangChuc == 0) {
        stringChuc = " lẻ";
    } else if (hangChuc == 1) {
        stringChuc = read(hangChuc) + " mười";
    } else {
        stringChuc = read(hangChuc) + " mươi";
    }

    if (hangDV == 5) {
        stringDV = " lăm"
    } else if (hangDV == 1) {
        stringDV = " mốt"
    } else {
        stringDV = read(hangDV);
    }

    if (hangChuc == 1 && hangDV == 1) {
        stringChuc = " mười";
        stringDV = " một";
    }

    if (hangChuc == 1) {
        stringChuc = " mười";
    }
    var readNumber = getID("inResult").innerHTML = `${stringTram}${stringChuc}${stringDV}`;
    
}

// **********************************************************************************************

// Bài tập thêm 4 - tìm sinh viên xa trường nhất
// Khoảng cách từ các vị trí đến trường học
var toaDo1 = 0;
var toaDo2 = 0;
var toaDo3 = 0;

getID("btn-toaDo").onclick = function() {
    var hs1 = getID("ten-1").value;
    var x_hs1 = parseFloat(getID("x-1").value);
    var y_hs1 = parseFloat(getID("y-1").value);
    
    var hs2 = getID("ten-2").value;
    var x_hs2 = parseFloat(getID("x-2").value);
    var y_hs2 = parseFloat(getID("y-2").value);
    
    var hs3 = getID("ten-3").value;
    var x_hs3 = parseFloat(getID("x-3").value);
    var y_hs3 = parseFloat(getID("y-3").value);

    var x_truong = parseFloat(getID("x-4").value);
    var y_truong = parseFloat(getID("y-4").value);
    
    var ketqua = getID("ketQua");
    // Tính khoảng cách từ điểm trường đến 3 điểm 
    toaDo1 = Math.sqrt(Math.pow((x_truong - x_hs1), 2) + Math.pow((y_truong - y_hs1), 2));


    toaDo2 =  Math.sqrt(Math.pow((x_truong - x_hs2), 2) + Math.pow((y_truong - y_hs2), 2));


    toaDo3 =  Math.sqrt(Math.pow((x_truong - x_hs3), 2) + Math.pow((y_truong - y_hs3), 2));


    // Điều kiện để xét học sinh nào xa trường 
    if (toaDo1 >= toaDo2 && toaDo1 >= toaDo3) {
        ketqua.innerHTML = `Sinh viên ${hs1} xa trường nhất với đoạn đường ${toaDo1.toFixed(2)}m`;
    } else if (toaDo2 >= toaDo1 && toaDo2 >= toaDo3) {
        ketqua.innerHTML = `Sinh viên ${hs2} xa trường nhất với đoạn đường ${toaDo2.toFixed(2)}m`;
    } else if (toaDo3 >= toaDo1 && toaDo3 >= toaDo2) {
        ketqua.innerHTML = `Sinh viên ${hs3} xa trường nhất với đoạn đường ${toaDo3.toFixed(2)}m`;
    }
    
}

// function tinhDoDai(x_hs1, y_hs1, x_hs2, y_hs2, x_hs3, y_hs3, x_truong, y_truong) {
//     toaDo1 = Math.sqrt(Math.pow((x_truong - x_hs1), 2) + Math.pow((y_truong - y_hs1), 2));


//     toaDo2 =  Math.sqrt(Math.pow((x_truong - x_hs2), 2) + Math.pow((y_truong - y_hs2), 2));


//     toaDo3 =  Math.sqrt(Math.pow((x_truong - x_hs3), 2) + Math.pow((y_truong - y_hs3), 2));


//     toaDo1 = toaDo1.toFixed(2);
//     toaDo2 = toaDo2.toFixed(2);
//     toaDo3 = toaDo3.toFixed(2);
//     console.log(toaDo1, toaDo2, toaDo3);
// }
// tinhDoDai(1,2,4,5,6,7,10,12);
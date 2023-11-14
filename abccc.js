//Nhập vào điểm giữa kỳ, cuối kỳ, cuối kỳ hệ số 2
//đưa ra kết luận không đạt, đạt, tốt
let diemGK = +prompt("diem cuoi giua ky");
let diemCK = +prompt("diem cuoi ky");
let diemCk2 = (diemCK + diemGK * 2) / 3
let ketqua;
if (diemCk2 < 5) {
    ketqua = "khongdat";
} else if (5 < diemCk2 && diemCk2 < 8) {
    ketqua = "đạt";
} else {
    ketqua = "tốt";
}
document.write(ketqua);
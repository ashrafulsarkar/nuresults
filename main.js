/*
  Copyright (c) 2020 Ashraful Sarkar Authors (https://github.com/ashrafulsarkar)
  Licensed under MIT (https://github.com/ashrafulsarkar/nuresult/blob/master/LICENSE)
*/

document.querySelector("#year").addEventListener("change", function myfunction() {
    year = document.querySelector("#year").value;
});

function result_show() {
    var roll_number = document.querySelector("#roll").value;
    var reg_no = document.querySelector("#reg").value;
    var exam_year = document.querySelector("#exam_year").value;
    var letters_code = document.querySelector("#letterCode").value;
    var selectedValue = document.querySelector("#year").value;
    if (selectedValue == "select") {
        alert("Please Select Honours Year");
    }else if (year == "fourth" && roll_number == "" || year == "final" && roll_number == "") {
        alert("Please Enter Your Roll");
        document.getElementById('roll').focus();
    }else if (reg_no == "") {
        alert("Please Enter Your Registraion");
        document.getElementById('reg').focus();
    }else if (exam_year == "") {
        alert("Please Select Year");
        document.getElementById('exam_year').focus();
    }else if (letters_code == "") {
        alert("Please input Captcha Code");
        document.getElementById('letterCode').focus();
    }else{
        var url = 'http://www.nu.ac.bd/results/honours/' + year + '_year_result_show.php?roll_number=' + roll_number + '&reg_no=' + reg_no + '&exam_year=' + exam_year + '&letters_code=' + letters_code;
        window.open(url, '_blank', 'height=750,width=780,left=130, top=5,resizable=yes, scrollbars');
    }
    
}

function refreshCaptcha() {
    document.querySelector("#captchaimg").setAttribute("src", "http://www.nu.ac.bd/results/captcha_code_file.php");
}

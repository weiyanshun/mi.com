window.onload = function() {
    var phone = document.querySelector('#phone');
    var password = document.querySelector('#password');
    // var confirm = document.querySelector('#confirm_password');
    var submit = document.querySelector('#submit');
    var result = document.querySelectorAll('.p')

    var count = "";
    var reg1 = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
    var reg2 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;




    phone.onchange = function() {
        result[0].innerHTML = reg1.test(this.value) ? '√' : '×';
        if (result[0].innerHTML == '√') {
            result[0].dataset.flag = true;
        } else if (result[0].innerHTML == '×') {
            alert('请输入正确的手机号');
        }
    }


    password.onchange = function() {
        result[1].innerHTML = reg2.test(this.value) ? '√' : '×';
        if (result[1].innerHTML == '√') {
            result[1].dataset.flag = true;
        }
        for (var i = 0; i < result.length; i++) {
            result[i].dataset.flag === true;
            count++;
        }
        if (count === 2) {
            submit.removeAttribute('disabled');
            submit.classList.replace('sm', 'submit');
        }
    }

}
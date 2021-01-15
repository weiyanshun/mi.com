import './library/jquery.js';

// 表单验证
// 注册页面
// 验证信息有 
// 用户名 字母数字下划线 必须以字母开头 长度6-16位
// 密码   任意字符 长度 6-16位
// 确认密码 与密码相同
// 邮箱   验证邮箱格式
// 手机号  验证手机号

$(function() {
    // var phone = document.querySelector('#phone');
    // var password = document.querySelector('#password');
    // var confirm = document.querySelector('#confirm_password');
    // var submit = document.querySelector('#submit');
    // var result = document.querySelectorAll('.p')


    var count = '';
    var result = $('.p');
    var submit = $('#submit');
    var reg1 = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
    var reg2 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    var reg3 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;



    // phone.onchange = function() {
    //         result[0].innerHTML = reg1.test(this.value) ? '√' : '×';
    //         if (result[0].innerHTML == '√') {
    //             result[0].dataset.flag = true;
    //         }
    //     }
    $('#phone').on('chang', function() {
        result[0].innerHTML = reg1.test(this.value) ? '√' : '×';
        if (result[0].innerHTML == '√') {
            result[0].dataset.flag = true;
        }
    });

    // password.onchange = function() {
    //         result[1].innerHTML = reg2.test(this.value) ? '√' : '×';
    //         if (result[1].innerHTML == '√') {
    //             result[1].dataset.flag = true;
    //         }

    //     }
    $('#password').on('chang', function() {
        result[1].innerHTML = reg2.test(this.value) ? '√' : '×';
        if (result[1].innerHTML == '√') {
            result[1].dataset.flag = true;
        }
    });

    // confirm.onchange = function() {
    //     if (result[1].value == result[2].value) {
    //         result[2].innerHTML = reg3.test(this.value) ? '√' : '×';
    //     }
    //     if (result[2].innerHTML == '√') {
    //         result[2].dataset.flag = true;
    //     }

    //     for (var i = 0; i < result.length; i++) {
    //         result[i].dataset.flag === true;
    //         count++;
    //     }
    //     console.log(count);
    //     if (count === 3) {
    //         submit.removeAttribute('disabled');
    //     }
    // }

    $('#confirm_password').on('change', function() {
        if (result[1].value == result[2].value) {
            result[2].innerHTML = reg3.test(this.value) ? '√' : '×';
        }
        if (result[2].innerHTML == '√') {
            result[2].dataset.flag = true;
        }

        for (var i = 0; i < result.length; i++) {
            result[i].dataset.flag === true;
            count++;
        }
        console.log(count);
        if (count === 3) {
            submit.removeAttribute('disabled');
        }
    });

});
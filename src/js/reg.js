import './library/jquery.js';

// 表单验证
// 用户名 字母数字下划线 必须以字母开头 长度6-16位
// 密码   任意字符 长度 6-16位
// 确认密码要与密码相同

window.onload = function() {
    var phone = document.querySelector('#phone');
    var password = document.querySelector('#password');
    var confirm = document.querySelector('#confirm_password');
    var submit = document.querySelector('#submit');
    var result = document.querySelectorAll('.p')


    var count = 0;
    // var result = $('.p');
    var reg1 = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
    var reg2 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    var reg3 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;

    phone.onchange = function() {
            result[0].innerHTML = reg1.test(this.value) ? '√' : '×';
            // console.log(result[0].innerHTML);
            if (result[0].innerHTML == '√') {
                result[0].dataset.flag = true;
            } else if (result[0].innerHTML == '×') {
                alert('请输入正确的手机号');
            }

        }
        // $('#phone').on('chang', function() {
        //     result[0].innerHTML = reg1.test(this.value) ? '√' : '×';
        //     if (result[0].innerHTML == '√') {
        //         result[0].dataset.flag = true;
        //     }
        // });

    password.onchange = function() {
            result[1].innerHTML = reg2.test(this.value) ? '√' : '×';
            if (result[1].innerHTML == '√') {
                result[1].dataset.flag = true;
            } else if (result[0].innerHTML == '×') {
                alert('密码强度低，请重新输入');
            }
        }
        // $('#password').on('chang', function() {
        //     result[1].innerHTML = reg2.test(this.value) ? '√' : '×';
        //     if (result[1].innerHTML == '√') {
        //         result[1].dataset.flag = true;
        //     }
        // });

    confirm.onchange = function() {
        if (password.value == confirm.value) {
            if(reg3.test(this.value)){
                result[2].innerHTML='√';
            } else{
                result[2].innerHTML='×';
            } 
        }else{
            result[2].innerHTML='×';
        }
        if (result[2].innerHTML == '√') {
            result[2].dataset.flag = true;
        }
        for (var i = 0; i < $(".p").length; i++) {
            console.log($(".p")[i]);
            console.log($($(".p")[i]).attr("data-flag"));
            console.log($($(".p")[i]).attr("data-flag") =='true');
            if ($($(".p")[i]).attr("data-flag") =='true') {
                count++                
            };
        };
       console.log(count);
        if (count === 3) {
            submit.removeAttribute('disabled');
            submit.classList.replace('submit1', 'submit');
        }
    }


    // $('#confirm_password').on('change', function() {
    //     if (result[1].value == result[2].value) {
    //         result[2].innerHTML = reg3.test(this.value) ? '√' : '×';
    //     }
    //     if (result[2].innerHTML == '√') {
    //         result[2].dataset.flag = true;
    //     }
    // });

}
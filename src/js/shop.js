import './library/jquery.js';
import { cookie } from './library/cookie.js';

let shop = cookie.get('shop');

if (shop) {
    shop = JSON.parse(shop); // 有cookie数据才需要转换

    let idList = shop.map(elm => elm.id).join(); // 获得所有id

    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: {
            idList
        },
        dataType: "json",
        success: function(res) {
            let temp = '';
            let car = '';
            let bar = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);

                // 让ajax获得的数据结果id与cookie中的id  一一对应
                // 索引不同

                // 从购物车的cookie数据中去选择当前遍历的数据
                let arr = shop.filter(val => val.id == elm.id);

                car = `
                <div class="cart-top">
                <div class="ch">
                    <input type="checkbox" id="pro-1"> 全选</div>
                <div class="phone-img"></div>
                <div class="itname">
                    商品名称
                </div>
                <div class="price">
                    单价
                </div>
                <div class="num">
                    数量
                </div>
                <div class="tot">
                    小计
                </div>
                <div class="act">
                    操作
                </div>
                </div>
                `;

                temp += `<div class="cart">
                <div class="ch"><input type="checkbox" id="pro-1"></div>
                <div class="phone-img">
                    <img width=80 height=80 src="../${picture[0].src}" alt="">
                </div>
                <div class="itname">
                ${(elm.h3)+(elm.title)}
                </div>
                <div class="price">
                ${parseFloat(elm.price).toFixed(2)}
                </div>
                <div class="p-num">
                ${arr[0].num}
                </div>
                <div class="tot">
                ${(elm.price*arr[0].num).toFixed(2)}
                </div>
                <div class="act">
                    <a href="javascript:;" class="del" data-id="${elm.id}" style="font-size: 20px;">×</a>
                </div>
                </div>
                <div class="cart-bar clear">
                <div class="section-left">
                    <a href="https://list.mi.com/0" class="shopping">继续购物</a>
                    <span class="ping">
                        共<i>${arr[0].num}</i>件商品, 已选择<i>${arr[0].num}</i>件
                    </span>
                </div>
                <a href="" class="count">去结算</a>
                <span class="number">
                        合计 : <em>${(elm.price*arr[0].num).toFixed(2)}</em> 元
                    </span>
                </div>
                `;

            });
            $('.shopcar').append(car, temp).find('.del').on('click', function() {
                let shop2 = shop.filter(el => el.id != $(this).attr('data-id')); // 获得id不匹配的元素
                cookie.set('shop', JSON.stringify(shop2), 1); // 将不匹配的元素从新写进cookie
                location.reload();
            });
        }
    });

}

$(function() {
    $('.ch').find('input:checkbox').on('click', function() {

        if ($(this).prop('checked')) {

        }
    })
});
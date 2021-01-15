import './library/jquery.js';
import { cookie } from './library/cookie.js';
let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(res) {
        let picture = JSON.parse(res.picture);

        let tp = `<h2>${res.h3}</h2>`;
        $('.h2').append(tp);

        let temp = `
            <div class="img-left">
            <div class="img">
                <img src="../${picture[1].src}" alt="">
            </div>
            </div>
            <div class="con-right">
            <h2>${res.h3}</h2>
            <p class="vip">
                <strong>「购机享多看阅读免费VIP季卡；1.1-1.12购机得2倍米金；+1元得200G云空间月卡」</strong>
                <em>${res.title}</em>
            </p>
            <p class="ziying">
                小米自营
            </p>
            <span class="pic">${res.price}元</span>
            <div class="line"></div>
            <div class="address">
                    <i class="iconfont">&#xe613;</i>
                    <span>北京 &nbsp&nbsp北京市 &nbsp&nbsp海淀区 &nbsp&nbsp清河街道</span>&nbsp&nbsp
                    <strong style="color: #ff6700;">修改</strong>
                    <em style="color: #ff6700;display: block;">有现货</em>
                </div>
                <div class="mai ">
                    <div class="ban clear"><span>${res.h3}</span><i>${res.price}元</i></div>

                    <div class="qian">
                        总计: ${res.price}元
                    </div>
                </div>
                <div class="shopcar clear">
                    <a href="./shop.html" class="join " id="addItem">加入购物车</a>
                    <input type="number" value="1" min="1" max="${res.num}" id="num">
                    <a href="" class="love"><i class="iconfont icon-heart"></i> 喜欢</a>
                    
                </div>
                <div class="sale">
                    <span>
                    <a href="javascript:void(0);" class="support">
                        <i class="iconfont icon-duihaocheckmark17"></i>
                        <em>小米自营</em>
                    </a>
                </span>
                    <span>
                    <a href="javascript:void(0);" title="由小米发货" class="support">
                        <i class="iconfont icon-duihaocheckmark17"></i>
                        <em>小米发货</em>
                    </a>
                </span>
                    <span>
                    <a href="javascript:void(0);" class="support">
                        <i class="iconfont icon-duihaocheckmark17"></i>
                        <em>7天无理由退货</em>
                    </a>
                </span>
                    <span>
                    <a href="javascript:void(0);" title="" class="support">
                        <i class="iconfont icon-duihaocheckmark17"></i>
                        <em>企业信息</em>
                    </a>
                </span>
                    <span>
                    <a href="javascript:void(0);" title="" class="support">
                        <i class="iconfont icon-duihaocheckmark17"></i>
                        <em>运费说明</em>
                    </a>
                </span>

                    <span>
                    <a href="https://m.mi.com/aftersale/policy/34" target="_blank" class="support">
                        <i class="iconfont icon-duihaocheckmark17"></i>
                        <em>售后服务政策</em>
                    </a>
                </span>

                    <span>
                    <a href="https://s1.mi.com/m/faq/giving/index.html?project_id=44" class="support">
                    <i class="iconfont icon-duihaocheckmark17"></i>
                    <em>7天价格保护</em>
                </a>
               </span>

                </div>
            </div>
        
           
            `;

        $('.main').append(temp).find('#addItem').on('click', function() {
            addItem(res.id, res.price, $('#num').val());
        });
    }
});
console.log(cookie);

function addItem(id, price, num) {
    let shop = cookie.get('shop'); // 获得cookie数据
    let product = {
        id,
        price,
        num
    };

    if (shop) { // 判断购物车是否有添加过数据
        shop = JSON.parse(shop); //将JSON字符串转回数组
        console.log(typeof(shop));
        // 判断购物车中是否存在该商品
        if (shop.some(elm => elm.id == id)) {
            // 修改数量
            shop.forEach(el => {
                el.id == id ? el.num = num : null;
            });
        } else {
            shop.push(product);
        }

    } else {
        shop = []; // 初始没有数据 初始化一个空数组
        shop.push(product); // 将第一个商品添加进数组
    }


    cookie.set('shop', JSON.stringify(shop), 1);

}
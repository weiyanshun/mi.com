import './library/jquery.js';

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
            <span>${res.price}元</span>
            <div class="line"></div>
            </div>
            `;
        $('.main').append(temp);
    }
});
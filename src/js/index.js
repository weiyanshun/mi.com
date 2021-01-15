import './library/jquery.js';

$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function(res) {
        let temp = '';
        res.forEach((elm, i) => {
            let picture = JSON.parse(elm.picture);
            console.log(picture);
            temp += `<li class="shuju">
            <a href="./product.html?id=${elm.id}">
                <img src="../${picture[0].src} " alt="">
                <h3>${elm.h3.slice(0,11)+' ...'}</h3>
                <p class="desc">${elm.title.slice(0,20)+' ...'}</p>
                <p class="price"><span>${elm.price}</span>元<span>起</span></p>
            </a>
        </li>`;

        });

        $('.shujuku').append(temp);
    }
});
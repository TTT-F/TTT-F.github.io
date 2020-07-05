// var cartArr = []
// var total = 0

var cartArr = [{


        a: '#',
        img: './images/3RC2092100010_s_1.jpg',
        proName: {
            sale: '	 [促销]',
            saleTitl: ' Tre端午放价 ',
            brand: ' TRENDIANO ',
            name: '【端午放价 1件5.6折】宽松连帽短袖风衣外套',
            proNum: '货号： 3RC2092100010'
        },
        color: '白色',
        size: 'M',
        price: 509,
        num: 1,
        count: 509,

    },
    {
        a: '#',
        img: './images/3RC1400270090_s_1.jpg',
        proName: {
            sale: '	 [促销]',
            saleTitl: ' Tre端午放价 ',
            brand: ' TRENDIANO ',
            name: '【端午放价 1件5.6折】中长款连帽棉质棉衣男',
            proNum: '货号：3RC1400270090'
        },
        color: '黑色',
        size: 'M',
        price: 949,
        num: 1,
        count: 949
    },
    {
        a: '#',
        img: './images/3RC2091840000_s_1.jpg',
        proName: {
            sale: '	 [促销]',
            saleTitl: ' Tre端午放价 ',
            brand: ' TRENDIANO ',



            name: '【端午放价 1件5.6折】满幅印花连帽风衣外套',
            proNum: '货号：3RC2091840000'
        },
        color: '白色',
        size: 'L',
        price: 449,
        num: 1,
        count: 449
    },
    {
        a: '#',
        img: './images/3RC2012590000_s_1.jpg',
        proName: {
            sale: '	 [促销]',
            saleTitl: ' Tre端午放价 ',
            brand: ' TRENDIANO ',



            name: '衬衣刺绣标语长袖衬衫',
            proNum: '货号：3RC2012590000'
        },
        color: '白色',
        size: 'M',
        price: 699,
        num: 1,
        count: 699
    }, {
        a: '#',
        img: './images/3RC1400270010_s_1.jpg',
        proName: {
            sale: '	 [促销]',
            saleTitl: ' Tre端午放价 ',
            brand: ' TRENDIANO ',
            name: '【端午放价 1件5.6折】中长款连帽棉质棉衣男',
            proNum: '货号：3RA1518160560'
        },
        color: '米白',
        size: 'L',
        price: 1690,
        num: 1,
        count: 1690
    }
]

// function getLocalStorage() {

//     cartArrStr = localStorage.getItem('cartArr')
//     if (cartArrStr !== '') {
//         cartArr = JSON.parse(cartArrStr)
//             // localStorage.clear()

//     }
//     // cartArr = JSON.parse(JSON.stringify(cartArr2))

// }
// getLocalStorage();

function ifEmpty() {
    if (cartArr === null || cartArr.length === 0) {
        $('.empty').css("display", 'block')
        $('.has').css("display", 'none')
        $('.page-num').css("display", 'none')
        $('.choose-item').css("display", 'none')
            // total = cartArr.length
        $('.total-count').css("display", 'none')
        $('.head-cart span').text(cartArr.length)
    } else {
        $('.has').css("display", 'block')
        $('.empty').css("display", 'none')
        $('.page-num').css("display", 'block')
        $('.choose-item').css("display", 'block')
            // total = cartArr.length
        $('.total-count').css("display", 'block')
        addTr()
    }
}
ifEmpty()

function addTr() {
    console.log(cartArr)
    for (var i = 0; i < cartArr.length; i++) {
        var tr = $(`<tr data-index=${i}><td class='opt'><input id="checkcheck" type="checkbox"/></td>
            <td class="img"><img src="${cartArr[i].img}"/></td>
            <td class="proName"> <p>${cartArr[i].proName.sale}<a href="#">${cartArr[i].proName.saleTitl}</a></p><p>${cartArr[i].proName.brand}</p>
            <p><a href="#">${cartArr[i].proName.name}</a></p>
            <p>${cartArr[i].proName.proNum}</p></td>
            <td class="colorNsize"><a href="javascript:;"><span>${cartArr[i].color}</span>/<span class='now-size'>${cartArr[i].size}</span></a></td>
            <td class="price"><span>￥<em>${cartArr[i].price}</em>.00</span></td>
            <td class="num">
            <em class='add'></em><em class='minus'></em><input type="text" value="${cartArr[i].num}" class="num"/>
            <p><a class="save" href="javascript:;">收藏</a> / <a class="del" href="javascript:;">删除</a></p>
            </td>
            <td class="count">￥ <span>${cartArr[i].count}</span>.00</td>
           </tr>`)
        var box = $(`<div class="size-choose-box"><h4>选择颜色及尺码</h4><div class='img-box'><img src='${cartArr[i].img}'/></div>
           <div class='sizes clearfix'><li class="s">S</li><li class="m">M</li><li class="l">L</li><li class="xl">XL</li></div>
           <div class='btns'><button class='yes'>确定</button><button class='no'>取消</button></div>`)
        $('.has tbody').append(tr)
        $('.has tbody .colorNsize').eq(i).append(box)

    }
    $(' .head-cart span').text(cartArr.length)

}


console.log(cartArr.length)
$('.has table tbody tr input:checkbox').prop('checked', $('#all-checked').prop('checked'))
buyCount()
$('#all-checked').change(function() {
    var state = $(this).prop('checked')
    $('.has table tbody tr input:checkbox').prop('checked', state)
    buyCount()
})
$('.has table tbody tr input:checkbox').change(function() {
    var state = $(this).prop('checked')
    if (state) {
        var flag = true
        $('.has table tbody tr input:checkbox').each(function() {
            if (!$(this).prop('checked')) {
                flag = false
            }
        })
        $('#all-checked').prop('checked', flag)
    } else {
        $('#all-checked').prop('checked', false)

    }
    buyCount()
})

$('.del').click(function() {
    var ind = $(this).parents('tr').index()
    $(this).parents('tr').remove()
    buyCount()
    cartArr.splice(ind, 1)

    if (cartArr.length === 0) {
        $('.empty').css("display", 'block')
        $('.has').css("display", 'none')
        $('.page-num').css("display", 'none')
        $('.choose-item').css("display", 'none')
            // total = cartArr.length
        $('.total-count').css("display", 'none')
    }
})

$('.del-opt').click(function() {
    $('.has table tbody tr input:checkbox').each(function() {
        if ($(this).prop('checked')) {
            var ind = $(this).parents('tr').index()
            $(this).parents('tr').remove()
            cartArr.splice(ind, 1)
        }
    })
    buyCount()
    if (cartArr.length === 0) {
        $('.empty').css("display", 'block')
        $('.has').css("display", 'none')
        $('.page-num').css("display", 'none')
        $('.choose-item').css("display", 'none')
            // total = cartArr.length
        $('.total-count').css("display", 'none')
    }
})
$('.add').click(function() {
    var num = $(this).parent('td').find('input').val() * 1 + 1
    var ind = $(this).parents('tr').index()
    console.log(num)
    $(this).parent('td').find('input').val(num)
    $('tbody tr').eq(ind).find('.count span').text(num * $('tbody tr').eq(ind).find('.price span em').text())
    buyCount()

})
$('.minus').click(function() {

    var num = $(this).parent('td').find('input').val() * 1 - 1
    if (num !== 0) {
        var ind = $(this).parents('tr').index()
        console.log(num)
        $(this).parent('td').find('input').val(num)
        $('tbody tr').eq(ind).find('.count span').text(num * $('tbody tr').eq(ind).find('.price span em').text())
        buyCount()
    }


})

function buyCount() {
    var trArr = document.querySelectorAll('.has table tbody tr')
    var totalnum = 0
    var totalprice = 0
    var countitem = 0

    for (let i = 0; i < $('.has table tbody tr').length; i++) {
        console.log('aaa')
        if ($('.has table tbody tr').eq(i).find('input:checkbox').is(':checked')) {
            console.log($('.has table tbody tr').eq(i).find('.count span').text())
            totalnum = totalnum + $('.has table tbody tr').eq(i).find('input.num').val() * 1

            // totalprice = $('.has table tbody tr').eq(i).find('input.num').val() * $('.has table tbody tr').eq(i).find('.price em').text()
            totalprice = totalprice + $('.has table tbody tr').eq(i).find('.count span').text() * 1
            countitem++
        }
        console.log(totalnum, totalprice, countitem)
        $('.total-num').text(totalnum)
        $('.total-price').text(totalprice)
        $(' .head-cart span').text(totalnum)
    }


}

function sizeChooseBox() {
    for (var j = 0; j < cartArr.length; j++) {
        var size = cartArr[j].size.toLowerCase()
        console.log(size)
        $('.has tbody .colorNsize').eq(j).find('.' + size).addClass('current-choose')
    }

}
sizeChooseBox()
$('.colorNsize a').click(function() {
    $('.size-choose-box').css('display', 'none')

    $(this).parent().find('.size-choose-box').css('display', 'block')
})
var selectedSize = ''
$('.sizes li').click(function() {
    console.log($(this).attr('class').includes('current-choose'))
    if (!$(this).attr('class').includes('current-choose')) {
        selectedSize = $(this).attr('class').toUpperCase()
        console.log(selectedSize)
        $('.size li').removeClass('selected')
        $(this).addClass('selected')

    }
})
$('.yes').click(function() {
    $(this).parents('td').find('.now-size').text(selectedSize)
    $(this).parents('td').find('.size-choose-box').css('display', 'none')

})
$('.no').click(function() {
    $(this).parents('td').find('.size-choose-box').css('display', 'none')

});
(function() {
    if ($(this).scrollTop() >= 100) {
        $('.line-tip').addClass('line-tip-fixed')
        $('nav').addClass('nav-fixed')
        $('.backToTop').css('display', 'block')

    } else {
        $('nav').removeClass('nav-fixed')
        $('.line-tip').removeClass('line-tip-fixed')
        $('.backToTop').css('display', 'none')

    }
})();
$(window).scroll(function() {
    console.log($(this).scrollTop)
    if ($(this).scrollTop() >= 100) {
        $('.line-tip').addClass('line-tip-fixed')

        $('nav').addClass('nav-fixed')
        $('.backToTop').css('display', 'block')

    } else {
        $('nav').removeClass('nav-fixed')
        $('.line-tip').removeClass('line-tip-fixed')

        $('.backToTop').css('display', 'none')

    }
})

$('.backToTop').click(function() {

    var run = setInterval(function() {
        $(window).scrollTop($(window).scrollTop() - 150)
        if ($(window).scrollTop() <= 0) {
            clearInterval(run)
        }
    }, 20)


})
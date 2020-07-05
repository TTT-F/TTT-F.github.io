var cartArrA = []
$("#small").imgzoom({
        times: "1",
    })
    // $('.small-pic li').click(function() {
    //     var ind = $(this).index()

//     var path = './images/yifua' + ind + '.jpg';
//     console.log(path)
//     $('#small>img').attr('src', path)

// })
var count = 1;
$('.down').click(function() {
    var picHeight = $('.small-pic li').height()
    var picOptHeight = $('.pic-opt').height()
    var smallpicTOP = $('.small-pic').css("margin-top")
    console.log(smallpicTOP, picOptHeight, picHeight * 2)
    if (count < 2)(
        count++
    )


    if (smallpicTOP !== '-' + (picHeight * 2) + 'px') {

        $('.small-pic').css('margin-top', -picHeight * count)
            // console.log(smallpicTOP, count)
    }
})

$('.up').click(function() {
    var picHeight = $('.small-pic li').height()
    var picOptHeight = $('.pic-opt').height()
    var smallpicTOP = $('.small-pic').css("margin-top")
    console.log(smallpicTOP, picOptHeight, picHeight * 2)
    if (count > 0) {
        count--
    }


    if (smallpicTOP !== '0px') {
        $('.small-pic').css('margin-top', -picHeight * (count))
            // console.log(smallpicTOP, count)
    } else {

    }
})
$('.table-link').click(function() {
    $('.size-table').css('display', 'block')
})
$('.size-table a').click(function() {
    $('.size-table').css('display', 'none')

})
$('.size-option a').mouseenter(function() {
    // console.log(sizeArr)
    var sizename = $(this).attr('class')
    console.log(sizename)
    if (sizename === undefined || sizename === '') {
        $(this).css('background-color', '#eee')
    }

})
$('.size-option a').mouseleave(function() {
    // console.log(sizeArr)
    var sizename = $(this).attr('class')
    console.log(sizename)
    if (sizename === undefined || sizename === '') {
        $(this).css('background-color', '#fff')
    }

})
$('.size-option a').click(function() {
    var sizename = $(this).attr('class')
    $('.size-option a').removeClass('active')
    $('.size-option a').css('background-color', '#fff')
    if (sizename === undefined || sizename === '') {

        $(this).addClass('active')
        $(this).css('background-color', '#000')
    }
    if (
        $('.size-boxx span').css('display') === 'block') {
        $('.size-boxx').css('border', '0px dashed #903')
        $('.size-boxx span').css('display', 'none')
    }


})


$('.your-view>div img').mouseenter(function() {
    var path = $(this).attr('a')
    console.log(path)
    $(this).attr('src', path)
    $(this).parent('a').find('span').css('color', ' #c9a063')
})
$('.your-view>div img').mouseleave(function() {
    var path = $(this).attr('b')
    console.log(path)
    $(this).attr('src', path)
    $(this).parent('a').find('span').css('color', ' #333')

})
$('.your-view>div span').mouseenter(function() {

    $(this).parent('a').find('span').css('color', ' #c9a063')
})
$('.your-view>div span').mouseleave(function() {

    $(this).parent('a').find('span').css('color', ' #333')

})
$('.add-to-cart').click(function() {
    var sizeArr = document.querySelectorAll('.size-option a')
    var flag = true
    for (let i = 0; i < sizeArr.length; i++) {
        if (sizeArr[i].className.includes('active')) {
            flag = false

        }

    }
    if (flag) {
        console.log(222)
        $('.size-boxx').css('border', '1px dashed #903')
        $('.size-boxx span').css('display', 'block')
            // var span = $('<span>请选择尺码</span>')
            // $('.size-boxx').append(span)
    } else {

        // var obj = {
        //     opt: true,
        //     a: location.pathname,
        //     img: $('.small-pic li').eq(0).find('img').attr('src'),
        //     proName: {
        //         sale: '	 [促销]',
        //         saleTitl: ' Tre端午放价 ',
        //         brand: ' TRENDIANO ',
        //         name: $('.desc-opt h2').find('span').text(),
        //         proNum: $('.desc-opt h2').find('em').text()
        //     },
        //     color: $('.choose-color span').attr('title'),
        //     size: $('.size-boxx .active').text(),
        //     price: $('.desc-opt .price span').text(),
        //     num: 1,
        //     count: $('.desc-opt .price span').text()
        // }

        // cartArrA.push(obj)
        // $('.head-cart span').text(cartArrA.length)


        // console.log(obj)

        // var cartArrString = JSON.stringify(cartArrA)

        // localStorage.setItem('cartArr', cartArrString)
        // var jsonobj = JSON.parse(cartArrString)
        // console.log(cartArrString, jsonobj)

        // console.log(localStorage.getItem('cartArr'))
        //     // console.log(Cookies)

        $('.add-cart-tip').css('display', 'block')

    }
})
$('.btn_black').click(function() {

    window.location.href = 'cart.html'

    console.log(cartArr)


})
$('.btn_red').click(function() {
    $('.add-cart-tip').css('display', 'none')
})
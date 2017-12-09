function roundValue(value) {
    return Math.round(value * 100) / 100;
}

$(function() {
    // dupa fiecare refresh scroleaza la inceputul paginii
    $(window).scrollTop(0);

    var bodyHeight = $('.scrollable')[0].scrollHeight;
    var viewportHeight = $('.container').height();

    /*
        distanta reala parcursa de scroll este egala cu inaltimea
        body-ului din care scadem inaltimea zonei vizibile a browser-ului
    */
    var bodyLength = bodyHeight - viewportHeight;

    $('.scrollable').scroll(function() {
        var scrollLength = $('.scrollable').scrollTop();
        // aplicam formula de 3 simpla ca sa calculam width-ul loader-ului
        var loaderLength = roundValue(scrollLength * 100 / bodyLength);
        // console.log(bodyHeight, viewportHeight, scrollLength, loaderLength, $('.scrollable')[0].scrollHeight);
        $('.horizontal-scroll .loader').css({
            width: loaderLength + '%'
        });
    });
});

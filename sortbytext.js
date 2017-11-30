jQuery('.muncho a').each(function(){

var ttt  = jQuery(this).text().match(/\d+/);

$(this).attr('id',ttt)


//	console.log(ttt[0])

});

var $wrapper = $('.muncho');

$wrapper.find('a').sort(function (b, a) {
    return +a.text.match(/\d+/) - +b.text.match(/\d+/);
})
.appendTo( '.ttoo' );
$(document).ready(function(){

	$('#quote-btn').click(function(event){
		event.preventDefault();

		getQuote();
	});

	$('#tweet').click(function(event) {
		var quote = $('.quote').text();
		var author = $('.quote_author').text();

		if(quote.length + author.length > 150){
			event.preventDefault();
			sweetAlert('Whoops!', 'Quote is too long to Tweet', 'error');
		} else {
		    var twitter = "https://twitter.com/intent/tweet?text=" + 
		    	"%22" + encodeURIComponent(quote) + "%22" + 
		    	'%0a' + "-" + author;
		    $(this).attr("href", twitter);
		}

	});


	function getQuote(){
		$.ajax({
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
			type: 'POST',
			datatype: 'json',
			beforeSend: function(xhr){
				// Send Header for API Request 
				xhr.setRequestHeader("X-Mashape-Key", "JHB3TfgpetmshOE0UcF5Rbq0FipIp1DtqcLjsnQljxEXLRChYa");

				// Display AJAX Loader
				$('.quote').html('<img src="img/ajax-loader.gif">');
				$('.quote_author').html('');
			},
			success: function(data){
				data = JSON.parse(data);
				var quoteLeft = '<i class="fa fa-quote-left"></i>';
				var quoteRight = '<i class="fa fa-quote-right"></i>';

				$('.quote').html(quoteLeft + ' ' + data.quote + ' ' + quoteRight);
				$('.quote_author').html('- ' + data.author);
			},
			error: function(err){
				$('.quote').html('ERROR!', err, 'error');
			}
		});
	}

});
$(document).ready(function(){function t(){$.ajax({url:"https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies",type:"POST",datatype:"json",beforeSend:function(t){t.setRequestHeader("X-Mashape-Key","JHB3TfgpetmshOE0UcF5Rbq0FipIp1DtqcLjsnQljxEXLRChYa"),$(".quote").html('<img src="img/ajax-loader.gif">'),$(".quote_author").html("")},success:function(t){t=JSON.parse(t);var e='<i class="fa fa-quote-left"></i>',o='<i class="fa fa-quote-right"></i>';$(".quote").html(e+" "+t.quote+" "+o),$(".quote_author").html("- "+t.author)},error:function(t){$(".quote").html("ERROR!",t,"error")}})}$("#quote-btn").click(function(e){e.preventDefault(),t()}),$("#tweet").click(function(t){var e=$(".quote").text(),o=$(".quote_author").text();if(e.length+o.length>150)t.preventDefault(),sweetAlert("Whoops!","Quote is too long to Tweet","error");else{var a="https://twitter.com/intent/tweet?text=%22"+encodeURIComponent(e)+"%22%0a-"+o;$(this).attr("href",a)}})});
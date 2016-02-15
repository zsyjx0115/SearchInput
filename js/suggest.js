$(document).ready(function(){
	var $search_input = $("#search-input");
	var $intelligent = $(".intelligent");
	var $bgdiv = $(".bg-div");
	var $form = $(".search form");
	$search_input.on("focus",function(){
		var cover = $("<div id='cover'></div>");
		cover.css({
			'width':'100%',
			'height':'100%',
			'background-color':'rgba(0,0,0,0.5)',
			'position':'absolute',
			'z-index':'2'
		});
		cover.appendTo($bgdiv);
	});
	$search_input.on("keyup",function(){
		// $.get("http://cn.bing.com/AS/Suggestions?",{
		// 	'bq':$search_input.val()
		// },function(data){
		// 	var array = data.s;
		// 	var addhtml = "";
		// 	for(var i=0;i < array.length; i++){
		// 		addhtml += "<li>"+array[i]+"</li>";
		// 	}
		// 	$(addhtml).appendTo($intelligent);
		// 	$intelligent.show();
		// },"json");
		$intelligent.show();
	});
	$search_input.on("blur",function(){
		$intelligent.hide();
		$("#cover").remove();
	});
});
//"ali&json=1&p=3&sid=17898_1422_17743_18155_12825_17001_17073_15683_12323_18040_18020&req=2
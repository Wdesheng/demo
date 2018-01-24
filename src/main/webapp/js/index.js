require([ "/ubicj/js/common.js" ], function() {
    requirejs([ "jquery", "easyui", "zhCN" ], function($, echarts) {
	$(function() {
	    
	    var _9203 = setInterval(parse, 10);
	    function parse() {
		if ($.parser && $.fn.slider && !window.renderedFlag) {
		    clearInterval(_9203);
		    $.parser.parse();
		    window.renderedFlag = true;
		}
	    }
	    // �˵�ѡ�к�������ȥ����ʽ
	    $('.navlist li a').click(function() {
		$('.navlist li div').removeClass("selected");
		$(this).parent().addClass("selected");
	    }).hover(function() {
		$(this).parent().addClass("hover");
	    }, function() {
		$(this).parent().removeClass("hover");
	    });
	});
    });
});

function openwindows(url)
{
    var center=$(".easyui-layout").layout("panel","center");
    //console.info(center);
    $(center).panel('refresh',url);
}




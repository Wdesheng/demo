requirejs.config({
    paths : {
	"jquery" : [ "https://cdn.bootcss.com/jquery/1.10.1/jquery.min",
		"/js/jquery-1.10.1.min" ],
	'easyui' : "/js/jquery-easyui-1.4/jquery.easyui.min",
	'zhCN' : "/js/jquery-easyui-1.4/locale/easyui-lang-zh_CN"
    },
    shim : {
	'easyui' : {
	    deps : [ "jquery" ]
	},// easyui����jquery
	'zhCN' : {
	    deps : [ "easyui" ]
	}
    }
});
require([ "/ubicj/js/common.js" ], function() {
    requirejs([ "jquery", "easyui", "zhCN" ], function($) {
	$(function() {
		alert(11);
	    /*
	     * RequireJS 引入 EasyUI 会遇到问题，原因是EasyUI 的代码编写没有考虑到文件将通过什么方式被加载，如果是通过<script
	     * src="..."></script> 方式， 那么倒没有问题，但通过document.write
	     * 等方式动态加载时，就不行，原因是 EasyUI 代码的渲染代码写在了头部，各种定义部分写在了尾部，导致还没定义就先渲染，
	     * 于是不会有效果。因为渲染部分是在document的ready事件中（$(function(){$.parser.parse();})）完成的，所以使用<script>方式加载就不会有问题。
	     * 原因已经发现，那么如何解决呢，修改EAsyui的代码通常是不合情理的。我的方案是再次渲染。在自己的代码中加入定时器，定时扫描是否允许渲染，如允许，则执行渲染呢。
	     * $.fn.slider是easyui
	     * 最后定义的控件，如果slider都定义好了，那么其它也都定义好了，那么既可以开始渲染了。加上renderedFlag 标记是为了防
	     * 止在不同控件代码文件中发起多次渲染。由此此段代码可以防止到自己的多个依赖easyui的控件中。
	     */
	    var _9203 = setInterval(parse, 10);
	    function parse() {
		if ($.parser && $.fn.slider && !window.renderedFlag) {
		    clearInterval(_9203);
		    $.parser.parse();
		    window.renderedFlag = true;
		}
	    }

	    $("#baseinfo_dg").datagrid(
				{
					url : "/ubicj/jsondata/baseinfo.json",
					pagination : true,// 分页菜单
					pageSize : 30,
					pageList : [ 15, 30, 45 ],
					fit : true,// 自适应大小
					fitColumns : true,// 列多的时候改为false
										// 出现滚动条
					nowrap : true,// 折行，单元格内数据很多时，改为false，能显示单元格全部
					border : false,
					idField : "autoid",// 主键标识
					striped : true, // 隔行换色
					singleSelect : true, // 单选
					rownumbers : true,
					sortName : "autoid",
					sortOrder : "desc",
					columns : [ [
							{
								field : "staffname",
								title : "员工姓名",
								width : 10,
								align : "center",
								halign : "center"
							},
							{
								field : "stafftel",
								title : "联系方式",
								width : 10,
								align : "center",
								halign : "center"
							},
							{
								field : "staffID",
								title : "身份证号码",
								width : 10,
								align : "center",
								halign : "center"
							},
							{
								field : "stafftime",
								title : "参加工作时间",
								width : 10,
								align : "center",
								halign : "center"
							},
							{
								title : '操作',
								field : 'autoid',
								align : 'center',
								halign : 'center',
								width : 5,
								formatter : function(value, row,index) {
									return btnFormat(value,row,index)+
									   ' <a class="detail_btn" href="javascript:void(0)" onclick="detail(' 
									   + row.autoid
									   + ')"></a> ';
								}
							} ] ],
					toolbar : "#baseinfo_tb"

				});
	    
	});
    });
});





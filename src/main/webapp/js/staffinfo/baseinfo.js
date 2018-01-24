require([ "/ubicj/js/common.js" ], function() {
    requirejs([ "jquery", "easyui", "zhCN" ], function($) {
	$(function() {
		
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
					pagination : true,// ��ҳ�˵�
					pageSize : 30,
					pageList : [ 15, 30, 45 ],
					fit : true,// ����Ӧ��С
					fitColumns : true,// �ж��ʱ���Ϊfalse
										// ���ֹ�����
					nowrap : true,// ���У���Ԫ������ݺܶ�ʱ����Ϊfalse������ʾ��Ԫ��ȫ��
					border : false,
					idField : "autoid",// �����ʶ
					striped : true, // ���л�ɫ
					singleSelect : true, // ��ѡ
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
								title : "入职时间",
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
									return 
									   ' <a class="detail_btn" href="javascript:void(0)" onclick="detail(' 
									   + row.autoid
									   + ')">详情</a> ';
								}
							} ] ],
					toolbar : "#baseinfo_tb"

				});
	    
	    /* 清空日期 */
		var buttons = $.extend([], $.fn.datebox.defaults.buttons);
		buttons.splice(1, 0, {
			text : '清空',
			handler : function(target) {
				$(target).datebox('setValue', '').datebox('hidePanel');
			}
		});
		$('#start_time').datebox({
			buttons : buttons
		});
		$('#end_time').datebox({
			buttons : buttons
		});
		
		
	    
	});
	
    });
});


//打开弹出框
function addnew()
{ 
	parent.modalDialog({
		title:"添加员工信息",
		width: 800,
		height: 480,
		closed: false,
		cache: false,
		url:"/ubicj/jsp/staffinfo/addbaseinfo.jsp?rowId=1",
		modal: true,
		onClose:function()
		{  
			$("baseinfo_dg").datagrid("reload");
		} 
	
	});
}



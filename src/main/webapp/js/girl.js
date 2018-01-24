require([ "/js/common.js" ], function() {
    requirejs([ "jquery", "easyui", "zhCN" ], function($) {
	$(function() {
		var _9203 = setInterval(parse,10);
	    function parse(){
	        if($.parser && $.fn.slider && !window.renderedFlag){
	            clearInterval(_9203);
	            $.parser.parse();
	            window.renderedFlag = true;
	        }
	    }
	    
	    $("#dg").datagrid({
			url : '/girl',
			idFiled : 'id',
			method : 'get',
			pagination : true,
			pageSize : 5,
			pageList : [1,5,10,15,20],
			fit : true,
			fitColumns : true,
			rownumbers : true,
			iconCls : 'icon-save',
			title : 'Girl',
			toolbar : '#tb',
			checkbox : true,
			striped : true, //隔行换色
			columns :[[
			           {
			        	 title : '姓名',
			        	 field : 'name',
			        	 align : 'left',
			        	 halign : 'center',
			        	 width : 100
			           },
			           {
			        	 title : '年龄',
  			        	 field : 'age',
  			        	 align : 'left',
  			        	 halign : 'center' ,
  			        	width : 100
			           },
			           {
  			        	 title : '操作',
    			         field : 'autoID',
    			         align : 'left',
    			         halign : 'center',
    			         width : 100,
    			         formatter : function(value, row, index) {
								return '<a class="edit_btn" href="#" onclick="updateItem('
										+ row.autoID
										+ ')"></a><a class="remove_btn" href="#" onclick="deleteItem('
										+ row.autoID +','+ index
										+ ')"></a>';
							}
  			           }]],
  			onLoadSuccess : function(row){
  				console.info(row);
  				$('.edit_btn').linkbutton({
  					iconCls : 'icon-edit',
  					plain : true
  					});
  				$('.remove_btn').linkbutton({
  					iconCls : 'icon-cancel',
  					plain : true
  					});
  				$(this).datagrid("resize");
  			}           
			 
		});
	    
		});
    });
});






require([ "/ubicj/js/common.js" ], function() {
    requirejs([ "jquery", "easyui", "zhCN" ], function($) {
	$(function() {
		alert(11);
	    /*
	     * RequireJS ���� EasyUI ���������⣬ԭ����EasyUI �Ĵ����дû�п��ǵ��ļ���ͨ��ʲô��ʽ�����أ������ͨ��<script
	     * src="..."></script> ��ʽ�� ��ô��û�����⣬��ͨ��document.write
	     * �ȷ�ʽ��̬����ʱ���Ͳ��У�ԭ���� EasyUI �������Ⱦ����д����ͷ�������ֶ��岿��д����β�������»�û���������Ⱦ��
	     * ���ǲ�����Ч������Ϊ��Ⱦ��������document��ready�¼��У�$(function(){$.parser.parse();})����ɵģ�����ʹ��<script>��ʽ���ؾͲ��������⡣
	     * ԭ���Ѿ����֣���ô��ν���أ��޸�EAsyui�Ĵ���ͨ���ǲ�������ġ��ҵķ������ٴ���Ⱦ�����Լ��Ĵ����м��붨ʱ������ʱɨ���Ƿ�������Ⱦ����������ִ����Ⱦ�ء�
	     * $.fn.slider��easyui
	     * �����Ŀؼ������slider��������ˣ���ô����Ҳ��������ˣ���ô�ȿ��Կ�ʼ��Ⱦ�ˡ�����renderedFlag �����Ϊ�˷�
	     * ֹ�ڲ�ͬ�ؼ������ļ��з�������Ⱦ���ɴ˴˶δ�����Է�ֹ���Լ��Ķ������easyui�Ŀؼ��С�
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
					pagination : true,// ��ҳ�˵�
					pageSize : 30,
					pageList : [ 15, 30, 45 ],
					fit : true,// ����Ӧ��С
					fitColumns : true,// �ж��ʱ���Ϊfalse
										// ���ֹ�����
					nowrap : true,// ���У���Ԫ�������ݺܶ�ʱ����Ϊfalse������ʾ��Ԫ��ȫ��
					border : false,
					idField : "autoid",// ������ʶ
					striped : true, // ���л�ɫ
					singleSelect : true, // ��ѡ
					rownumbers : true,
					sortName : "autoid",
					sortOrder : "desc",
					columns : [ [
							{
								field : "staffname",
								title : "Ա������",
								width : 10,
								align : "center",
								halign : "center"
							},
							{
								field : "stafftel",
								title : "��ϵ��ʽ",
								width : 10,
								align : "center",
								halign : "center"
							},
							{
								field : "staffID",
								title : "���֤����",
								width : 10,
								align : "center",
								halign : "center"
							},
							{
								field : "stafftime",
								title : "�μӹ���ʱ��",
								width : 10,
								align : "center",
								halign : "center"
							},
							{
								title : '����',
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





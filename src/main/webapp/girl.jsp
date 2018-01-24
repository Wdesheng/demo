<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE>
<html lang="zh-cn">
<head>
<meta charset="UTF-8">
<!-- <meta http-equiv="X-UA-Compatible" content="IE=9;IE=8IE=7;IE=EDGE" /> -->
<meta name="renderer" content="ie-stand">
<title>UBI</title>
<link rel="shortcut icon" href="img/logotcc.ico">
<link rel="stylesheet" href="js/jquery-easyui-1.4/themes/default/easyui.css">
<link rel="stylesheet" href="js/jquery-easyui-1.4/themes/icon.css">
<!-- <link rel="stylesheet" type="text/css" href="css/accordion.css" /> -->
<script data-main="js/girl.js" src="js/require.min.js"></script>

</head>
<body class="easyui-layout">
	<div data-options="region:'north',title:'North title',split:true" style="height:100px;">
	</div>
	<div data-options="region:'west',title:'West title',split:true" style="width:200px;">
		<!-- 用户列表 -->
		<ul id="tree"></ul>
	</div>
	<div data-options="region:'center',title:'Center title',split:true" style="padding:5px;background:#eee;">
		<!-- 商品列表 -->
		<div id="dg"></div>
	</div>
	<div data-options="region:'south',title:'South title',split:true" style="height:50px;">		
	</div>
</body>
</html>
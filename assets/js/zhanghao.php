<?php
	// 接收传来的数据
	$uname=$_POST['un'];
	// echo $uname;

	//声明已有的数据
	$arr=["佳佳","甜甜","小明","小白","洋洋","美美","冲冲"];
	// 数据比对验证
	if (in_array($uname,$arr)) {
		// 已存在 返回y
		echo "y";
	}else{
		//不存在 返回n
		echo "n";
	}

?>

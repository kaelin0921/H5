$(function(){
	$(".cont_a .cont_1_top_tb").click(function(){
		$(".cont>div").toggleClass("hide");
	});
	$(".cont_b .cont_1_top_tb").click(function(){
		$(".cont>div").toggleClass("hide");
	});
	
	

	//密码验证
	var pa=/^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/
	
	//点击事件
	$(".cont_1_button").click(function(){
		//获取用户输入的值
		var v=$(".mima").val();
		console.log(v);
		//检测用户输入的值是否符合规则
		if(pa.test(v)){
			//显示正确
			$(".small").html('密码正确');
			$(".small").css("color","blue")
		}else{
			//显示错误
			$(".small").html('密码错误');
			$(".small").css("color","red")
		}
		
	});


$(function(){
	//账号验证
	$(".cont_1_button").click(function(){
		var alue=$(".zhanghao").val();
		//post请求
		$.post("assets/js/zhanghao.php",'un='+alue,function(msg){
			console.log(msg);
			if(msg=='y'){
				$(".small_1").html('√');
				$(".small_1").css("color","blue");
			}else{
				$(".small_1").html('×');
				$(".small_1").css("color","red")
			}
		})
	})

});




	//二维码动画
	$(".cont_1_rwm_imc").mouseover(function(){
		$(".cont_1_rwm_imb").animate({"left":"-80px"},500,function(){
			$(".cont_1_rwm_ima").css("display","inline-block");
		})
	}).mouseout(function(){
		$(".cont_1_rwm_ima").css("display","none");
		$(".cont_1_rwm_imb").animate({"left":"0px"},500,function(){
			$(".cont_1_rwm_ima").css("display","none");
		})
	})







})
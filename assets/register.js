$(function(){
			// 遮罩层

			$(".wrap").css({
				width:$(document).width(),
				height:$(document).height(),
				color:"#ccc",
			});


			// 点击 隐藏
			$(".box_1").click(function(){
				$(".box").fadeOut();
				$(".wrap").fadeOut();
			});

			$(".cha").click(function(){
				$(".box").fadeOut();
				$(".wrap").fadeOut();
			});

			// 拖拽
			$(".box").mousedown(function(e){
				$(this).css("cursor","move");
				var x=e.pageX-$(this).offset().left;
				var y=e.pageY-$(this).offset().top;

				$(document).mousemove(function(en){
					var l=en.pageX-x;
					var t=en.pageY-y;
					if(l<=0){
						l=0
					}else if(l>=$(document).width()-$(".box").width()-40){
						l=$(document).width()-$(".box").width()-40
					}
					if(t<=0){
						t=0
					}else if(t>=$(document).height()-$(".box").height()-40){
						t=$(document).height()-$(".box").height()-40
					}

					$(".box").css({left:l+'px',top:t+'px'})
				})

			})

			$(document).mouseup(function(){
				$(this).off("mousemove")
			})


// 滑块拖拽

	$(".cent_yz_a").mousedown(function(e){

			// move xy  移动距离
			var x=e.pageX-$(this).offset().left-$(".cent_box").width()/2;
			// 判断界限

			if (x<=0) {
				x=0
			}else if(x>=$(".cent_yz_a").width()-$(".cent_box").width()){
				x=$(".cent_yz_a").width()-$(".cent_box").width()
			}
			//console.log(x);
			// 赋值

			
			
			$(".cent_box").mousemove(function(e){

					var xx=e.pageX+x-618;
					if (xx<=-1) {
						xx=0
					}else if(xx>=$(".cent_yz_a").width()-$(".cent_box").width()){
						xx=$(".cent_yz_a").width()-$(".cent_box").width();
						// 按钮变色
						$(".cent_btn button").css("background","#ff0036");
						// 停止滑块运动
						$(".cent_box").off("mousemove");
						
					}
					console.log(xx);
					$(".cent_box").css({left:xx+'px'});
					console.log(xx);
					$(".cent_bg").css({width:xx+"px"});
			});
			console.log("sss");
			
	});
	$(".cent_box").mouseup(function(){
			$(this).off("mousemove");
	})



})


$(function(){
	//密码验证
	var pp=/^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/
	
	//点击事件
	$(".cent_sj_value").blur(function(){
		//获取用户输入的值
		var v=$(".cent_sj_value").val();
		console.log(v);
		//检测用户输入的值是否符合规则
		if(pp.test(v)){
			//显示正确
			$(".small").html('通过验证');
			$(".small").css("color","#7ac23c")
		}else{
			//显示错误
			$(".small").html('请输入正确手机号');
			$(".small").css("color","red")
		}
		
	});




})
































$(function(){

//导航栏划入滑出
	$(".navchild_2 li").eq(0).mouseover(function(){
		$(this).css("background","#fff");
		$(".navchild_box1").eq(0).show();
		$(".icon-sanjiao").eq(0).css("transform","rotate(180deg)")
	}).mouseout(function(){
		$(this).css("background","#f2f2f2");
		$(".navchild_box1").eq(0).hide();
	})

	$(".navchild_2 ul li").eq(2).mouseover(function(){
		$(this).css("background","#fff");
		$(".navchild_box1").eq(1).show();
	}).mouseout(function(){
		$(this).css("background","#f2f2f2");
		$(".navchild_box1").eq(1).hide();
	})

	$(".navchild_2 ul li").eq(3).mouseover(function(){
		$(".navchild_box2").show();
	}).mouseout(function(){
		$(".navchild_box2").hide();
	})

	$(".navchild_2>ul>li").eq(5).mouseover(function(){
		$(this).css("background","#fff");
		$(".navchild_box3").show();
	}).mouseout(function(){
		$(this).css("background","#f2f2f2");
		$(".navchild_box3").hide();
	})

	$(".navchild_2>ul>li").eq(6).mouseover(function(){
		$(this).css("background","#fff");
		$(".navchild_box4").show();
	}).mouseout(function(){
		$(this).css("background","#f2f2f2");
		$(".navchild_box4").hide();
	})



	
	$(".fix_img1").click(function(){
		$("html").animate({scrollTop:"0"},500);
	})


});

// 轮播
$(function(){

i=0;
function aa(){
	$(".con_img_A li").eq(i).show().siblings().hide();
	$(".con_img_B li").eq(i).addClass("con_img_B_bg").siblings().removeClass("con_img_B_bg");
	$(".con_img_A li").css("transform","all 1s")
}

function auto(){
	jsq=setInterval(function(){
		i++;
		if(i>=6){
			i=0
		}
		aa();
		
	},1000)
}
auto();
$(".con_img_B li").mouseover(function(){
	clearInterval(jsq);
	i=$(this).index();
	aa();
}).mouseout(function(){
	auto();
})


})



// 选项卡
$(function(){

			$(".con_li_A>li").mouseover(function(){
				// 获取当前li的下标
				var index=$(this).index();

				function aa(){
					// 显示li背景
					$(".con_li_A li").eq(index).addClass("color_hover").siblings().removeClass("color_hover");
				};
				aa();
				
				$(".con_li_B>div").eq(index).addClass("con_li_B_show").siblings().removeClass("con_li_B_show");
				//console.log(index)
			}).mouseout(function(){
				// 显示li背景
				$(this).removeClass("color_hover");
				// 隐藏div
				$(".con_li_B>div").eq($(this).index()).removeClass("con_li_B_show");
			})


			// div鼠标移入事件
			$(".con_li_B>div").mouseover(function(){
				// 显示li背景
				$(this).addClass("con_li_B_show").siblings("div").removeClass("con_li_B_show");
				$(".con_li_A>li").eq($(this).index()).addClass("color_hover").siblings().removeClass("color_hover");
			}).mouseout(function(){
				// div 隐藏
				$(this).removeClass("con_li_B_show");
				// li 背景去掉
				$(".con_li_A>li").eq($(this).index()).removeClass("color_hover");
			})



})


// 小选项卡
$(function(){

for(var a=1;a<=20;a++){
	$(".click_top_"+a+">div").click(function(){
	// 获取当前li的下标
		var index=$(this).index();
		// 显示li背景
		$(".click_bom_"+a+">div").eq(index).addClass("lan_show").siblings().removeClass("lan_show");		
		$(".click_top_"+a+">div").eq(index).addClass("lan_box_click").siblings().removeClass("lan_box_click");
		//console.log(index)
		//console.log(a);
	});
}

	$(".click_top_1>div").click(function(){
	// 获取当前li的下标
		var index=$(this).index();
		// 显示li背景
		$(".click_bom_1>div").eq(index).addClass("lan_show").siblings().removeClass("lan_show");		
		$(".click_top_1>div").eq(index).addClass("lan_box_click").siblings().removeClass("lan_box_click");
		//console.log(index)
	});
	$(".click_top_2>div").click(function(){
	// 获取当前li的下标
		var index=$(this).index();
		// 显示li背景
		$(".click_bom_2>div").eq(index).addClass("lan_show").siblings().removeClass("lan_show");		
		$(".click_top_2>div").eq(index).addClass("lan_box_click").siblings().removeClass("lan_box_click");
		//console.log(index)
	});
	$(".click_top_3>div").click(function(){
	// 获取当前li的下标
		var index=$(this).index();
		// 显示li背景
		$(".click_bom_3>div").eq(index).addClass("lan_show").siblings().removeClass("lan_show");		
		$(".click_top_3>div").eq(index).addClass("lan_box_click").siblings().removeClass("lan_box_click");
		//console.log(index)
	});
	$(".click_top_4>div").click(function(){
	// 获取当前li的下标
		var index=$(this).index();
		// 显示li背景
		$(".click_bom_4>div").eq(index).addClass("lan_show").siblings().removeClass("lan_show");		
		$(".click_top_4>div").eq(index).addClass("lan_box_click").siblings().removeClass("lan_box_click");
		//console.log(index)
	});
	$(".click_top_5>div").click(function(){
	// 获取当前li的下标
		var index=$(this).index();
		// 显示li背景
		$(".click_bom_5>div").eq(index).addClass("lan_show").siblings().removeClass("lan_show");		
		$(".click_top_5>div").eq(index).addClass("lan_box_click").siblings().removeClass("lan_box_click");
		//console.log(index)
	});
})








$(function(){


// 瀑布流    js

       // 滚动事件

		$(window).scroll(function(){
			// 可视区域高度
			var dh=$(window).height();
			//console.log(dh);
			
			// 文档总高度
			var ch=$(document).innerHeight()
			//console.log(ch);
			// 滚动高度
			var sh=$(window).scrollTop()
			//console.log(sh);

			// 文档总高度-可视区域高度<=滚动高度  到底
			if(ch-dh<=sh+10){
				console.log("aa");
				// 建立ajax请求 获取返回的数据
				$.ajax({
					url:"assets/js/pubu.php",
					type:"get",
					async:true,
					//data:"lenghth"+$(".container>div").length,
					success:function(msg){
						console.log(msg);
						var arr=JSON.parse(msg);
						// console.log(msg)
						// 调用函数
						console.log(arr);
						$(".container").append($(".container>.con_box").eq(arr).clone(true));
						//console.log($(".conteiner>.con_box").eq(msg));
						//console.log($(".conteiner"));
						//$(".con_box").append($("con_img"));

					}

				});
			}

		});



				// Ajax("JSON").get("assets/js/pubu.php",function(msg){
				// 	console.log(msg);

				// 	// 声明空字符串
				// 	var str='';
				// 	// 变量添加数据
				// 	for(var i in msg){
				// 		str+='<img src="'+msg[i]['pic']+'">'
				// 	}
				// 	// console.log(str);
				// 	// 添加到指定的容器中
				// 	document.querySelector("div").innerHTML+=str;
				// })
			

		


});



























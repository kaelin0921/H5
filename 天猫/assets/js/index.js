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


//轮播图
i=0
function aa(){
	$(".subnav_B_con>div").eq(i).fadeIn(1000).addClass("block").siblings().removeClass("block").fadeOut(1000);
	$(".subnav_B_con>div").css("transform","all .5s");
	$(".subnav_B_index>ul li").eq(i).addClass("subnav_B_index_li").siblings().removeClass("subnav_B_index_li");
}
function auto(){
	ss=setInterval(function(){
		i++;
		if(i==6){
			i=0;
		}
		aa();
	},2000)
}
auto();	
$(".subnav_B_index>ul li").mouseover(function(){	
	clearInterval(ss);
	// 全局变量重新赋值
	i=$(this).index();
	// 调用函数
	aa();
}).mouseout(function(){
  	auto();
})



//选项卡

	var color=["#e54077","#427def","#6347ed","#f7a831","#3bc7b0"]
	$(".sidebar>ul>li").mouseover(function(){
				
		$(".pink").css("color",color[indx(0,4)]);

		// 获取当前li的下标
		var index=$(this).index();

		function aa(){
			// 显示li背景
			$(".sidebar>ul>li").eq(index).addClass("sidebar_hover").siblings("li").removeClass("sidebar_hover");
			$(".sidebar>ul>li").eq(index).css("color",color[indx(0,4)]);

		};
		aa();
				
		$(".sidebar>div>div").eq(index).addClass("sidebar_show").siblings().removeClass("sidebar_show");
		//console.log(index)
	}).mouseout(function(){
		// 显示li背景
		$(this).removeClass("sidebar_hover");
		$(this).css("color","#fff");
		// 隐藏div
		$(".sidebar>div>div").eq($(this).index()).removeClass("sidebar_show");
	})


	// div鼠标移入事件
	$(".sidebar>div>div").mouseover(function(){
		// 显示li背景
		$(this).addClass("sidebar_show").siblings("div").removeClass("sidebar_show");
		$(".sidebar>ul>li").eq($(this).index()).css("color","pink");
		$(".sidebar>ul>li").eq($(this).index()).addClass("sidebar_hover").siblings().removeClass("sidebar_hover");
	}).mouseout(function(){
		// div 隐藏
		$(this).removeClass("sidebar_show");
		$(".sidebar>ul>li").eq($(this).index()).css("color","#fff");
		// li 背景去掉
		$(".sidebar>ul>li").eq($(this).index()).removeClass("sidebar_hover");
	})



	function indx(m,n){
		return Math.floor(Math.random()*(n-m+1))+m;
	}

	// console.log(index(10,20));




//顶部固定导航栏
    $(window).scroll(function(){
		//判断scrollTop 的值>200 绑定定位 <200 静态当前

		// 获取当前的滚动距离
		var top=$(document).scrollTop()
		//console.log(top);

		// 判断
		if(top>=770){
			$(".fixure_top").slideDown(500);
		}else if(top<770){
			//静态定位
			$(".fixure_top").slideUp(500);
		}
		if(top>=570){
			$(".fixure_left").slideDown(500);
		}else if(top<570){
			//静态定位
			$(".fixure_left").slideUp(500);
		}
	})
})



//   选项卡
$(function(){
	function auto(){
		var m=0;
		sas=setInterval(function(){
			m++;
			if(m>=2){
				m=0
			};
			$(".bk_conbig_top>div").eq(m).addClass("bk_conbig_top_color").siblings("div").removeClass("bk_conbig_top_color");
			$(".bk_conbig_bom>div").eq(m).addClass("show").siblings("div").removeClass("show");
		},1000);
	}
	auto();
	$(".bk_conbig_top>div").mouseover(function(){
		clearInterval(sas);
		var index=$(this).index();		
		$(this).addClass("bk_conbig_top_color").siblings("div").removeClass("bk_conbig_top_color");
		$(".bk_conbig_bom>div").eq(index).addClass("show").siblings("div").removeClass("show");

	}).mouseout(function(){
		auto();
	})
})







//楼层
$(function(){
	

	// 回顶部
	$(".fixure_l_c,.fix_img1").click(function(){
		$("html").animate({scrollTop:"0"},500);
	})


	// 全网页特效消失

	// $(".fix_img1").click(function(){
	// 	$("html").animate({scrollT op:"0"},500);
	// })


	// 楼层 点击事件
	$(".fixure_left .fixure_l_a").click(function(){
			// 获取当前li下标
			var index=$(this).index();
			console.log(index)-1;
			console.log($(".floor").eq(index).offset().top);
			// 获取距离顶部的位置
			
			var top=$(".page1 .floor").eq(index-1).offset().top;
			// 赋值给滚动条 + 动画效果
			var top1=top-60;
			$("html").animate({scrollTop:top1},500);

		})
		//声明
		var gao=[];
		
		$(".page1 .floor").each(function(){
			gao.push($(this).offset().top);
		})
		// console.log(gao);


		var colors=["#e54077","#427def","#6347ed","#f7a831","#3bc7b0"];



		//楼层 滚动事件

		var dd=ind(0,4);
		$(window).scroll(function(){
			var top=$(this).scrollTop();


			// 楼层移入事件 移入变随机色
		$(".fixure_left .fixure_l_a").mouseover(function(){
			var EE=ind(0,4);
			$(this).css("backgroundColor",colors[EE]);
		}).mouseout(function(){
			// $(this).css("backgroundColor","");
			// 遍历数组 
			for(var j=0;j<gao.length;j++) {

				if (top>=gao[j]-70 && top<gao[j+1]) {

					index=j;
					console.log(index);
					// 赋值给对应的楼层
					$(".fixure_l_a").eq(index).css("background",colors[dd]).siblings().css("background","rgba(0,0,0,.6)");

				}else if(top>=gao[gao.length-1]){
					// index赋值
					index=gao.length;
					$(".fixure_l_a").eq(index).css("background",colors[dd]).siblings().css("background","#6699ff");
				}
			}
		})
			
			//console.log(top);
			// 遍历数组 
			for(var j=0;j<gao.length;j++) {

				if (top>=gao[j]-70 && top<gao[j+1]) {

					index=j;
					console.log(index);
					// 赋值给对应的楼层
					$(".fixure_l_a").eq(index).css("background",colors[dd]).siblings().css("background","rgba(0,0,0,.6)");

				}else if(top>=gao[gao.length-1]){
					// index赋值
					index=gao.length;
					$(".fixure_l_a").eq(index).css("background",colors[dd]).siblings().css("background","#6699ff");
				}
			}		
		})
		// 随机数
		function ind(m,n){
			return Math.floor(Math.random()*(n-m+1))+m;
		}
	
	})










$(function(){
	// $(".cont_a .cont_1_top_tb").click(function(){
	// 	$(".cont>div").toggleClass("hide");
	// 	console.log("ewfwe")
	// });
	// $(".cont_b .cont_1_top_tb").click(function(){
	// 	$(".cont>div").toggleClass("hide");
	// 	console.log("ewfwe")
	// })
	$(".cont_b").click(function(){
		$(".cont_a").show();
		$(".cont_b").hide();
		console.log("ddd");
	})		
})


// 右侧导航条
$(function(){
	$(".fixure_right>div").mouseover(function(){
		$(this).find(".fix_r_min").fadeIn(500);
	}).mouseout(function(){
		$(this).find(".fix_r_min").fadeOut(500);
	})
})


// 版块移入移出
$(function(){
	$(".bk_con_l>a>img").mouseover(function(){
		$(this).animate({"opacity":".7"},300);
	}).mouseout(function(){
		$(this).animate({"opacity":"1"},300);
	})

})










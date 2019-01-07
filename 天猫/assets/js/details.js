$(function(){

//导航栏划入滑出
	$(".navchild_2 li").eq(0).mouseover(function(){
		$(this).css("background","#fff");

		$(".navchild_box1").eq(0).show();
	}).mouseout(function(){
		$(this).css("background","#f2f2f2");
		$(".navchild_box1").eq(0).hide();
	});

	$(".navchild_2 ul li").eq(2).mouseover(function(){
		$(this).css("background","#fff");
		$(".navchild_box1").eq(1).show();
	}).mouseout(function(){
		$(this).css("background","#f2f2f2");
		$(".navchild_box1").eq(1).hide();
	});

	$(".navchild_2 ul li").eq(3).mouseover(function(){
		$(".navchild_box2").show();
	}).mouseout(function(){
		$(".navchild_box2").hide();
	});

	$(".navchild_2>ul>li").eq(5).mouseover(function(){
		$(this).css("background","#fff");
		$(".navchild_box3").show();
	}).mouseout(function(){
		$(this).css("background","#f2f2f2");
		$(".navchild_box3").hide();
	});

	$(".navchild_2>ul>li").eq(6).mouseover(function(){
		$(this).css("background","#fff");
		$(".navchild_box4").show();
	}).mouseout(function(){
		$(this).css("background","#f2f2f2");
		$(".navchild_box4").hide();
	});

});

// 放大镜
$(function(){
	$(".magn_min").mousemove(function (e) {
			// move big显示
			$("#move,.magn_max").show();
			// move xy  移动距离
			var x=e.pageX-$(this).offset().left-$("#move").width()/2;
			var y=e.pageY-$(this).offset().top-$("#move").height()/2;
			// 判断界限
			if (x<=0) {
				x=0
			}else if(x>=$(this).width()-$("#move").width()){
				x=$(this).width()-$("#move").width()
			}
			if (y<=0) {
				y=0
			}else if(y>=$(this).height()-$("#move").height()){
				y=$(this).height()-$("#move").height()
			}
			// 赋值
			$("#move").css({left:x+'px',top:y+"px"});
			// 大图移动
			// 大图与小的比例
			var scale=$(".magn_max>img").width()/$(".magn_min>img").width();
			console.log(scale);
			// 大图移动*2.5 
			$(".magn_max>img").css({left:-x*scale,top:-y*scale});
		}).mouseout(function(){
			// move big隐藏
			$("#move,.magn_max").hide();
		})
		// 点击更换
		$(".magn_li li img").mouseover(function(){
			$("#bigpic,#smallpic").attr("src",$(this).attr("src"))
		})
})

$(function(){
	var i=-1350;
	$(".con_fool_r").click(function(){
		i=i-450;
		if(i<=-4050){
			i=0;
		}
		$(".con_fr_con_ul").css("marginTop",i+"px").css("transition","all 1s");
	})
	$(".con_fool_l").click(function(){
		i=i+450;
		if(i>=450){
			i=-3600;
		}
		console.log("qaa");
		$(".con_fr_con_ul").css("marginTop",i+"px").css("transition","all 1s");
	})


// 折叠栏

	$(".fot_fb_li_A").click(function(){
		$(".fot_fb_hide").slideToggle(500);
	});
	$(".fot_fb_li_B").click(function(){
		$(".fot_fb_hideB").slideToggle(500);
	});
	$(".fot_fb_li_C").click(function(){
		$(".fot_fb_hideC").slideToggle(500);
	})
	$(".fot_fb_li_D").click(function(){
		$(".fot_fb_hideD").slideToggle(500);
	})



// 选项卡  评价、详情

	$(".fot_navR1").click(function(){
		$(".fot_nav_hover1").show();
		$(this).addClass("red");
		$(".fot_nav_hover2").hide();
		$(".fot_navR").removeClass("red");
		$(".fot_img_big").show();

	});
	$(".fot_navR").click(function(){
		$(".fot_nav_hover1").hide();
		$(".fot_nav_hover2").show();
		$(this).addClass("red");
		$(".fot_navR1").removeClass("red");
		$(".fot_img_big").hide();

	})




})




// 点击  至顶部

$(function(){

	$(".fix_img1").click(function(){
		$("html").animate({scrollTop:"0"},500);
	})

});




// 二级联动
$(function(){


	var address={
			"0":{
				// 省份
				"1":"北京市",
				"2":"河北省",
				"3":"河南省",
				"4":"山东省",
				"5":"山西省"
			},

			"1":{
				// 北京
				"1":"西城区",
				"2":"东城区",
				"3":"朝阳区",
				"4":"昌平区",
				"5":"通州区"
			},

			"2":{
				// 河北省
				"1":"石家庄",
				"2":"保定",
				"3":"廊坊",
				"4":"邢台",
				"5":"临漳"
			},


			"3":{
				// 河南省
				"1":"南阳",
				"2":"安阳",
				"3":"信阳",
				"4":"汝阳",
				"5":"驻马店"
			},

			"4":{
				// 山东省
				"1":"济南",
				"2":"青岛",
				"3":"运城",
				"4":"德州",
				"5":"威海"
			},

			"5":{
				// 山西省
				"1":"太原",
				"2":"大同",
				"3":"长治",
				"4":"阳泉",
				"5":"吕梁"
			}
		}
		//console.log(address);

		// // 获取省份和市
		// var pro=document.getElementById('pro');
		// var city=document.getElementById('city');

		// // 声明省的选项
		var proStr='<option value="">请选择</option>';
		// // 遍历对象添加省份选项
		//console.log(address[0][1]);
		for(var i in address[0]){
		//	console.log(i);
		 	proStr+='<option value="'+i+'">'+address[0][i]+'</option>';
		 }
		// // 字符放入pro中
		 $("#pro").append(proStr);

		 // onchange改变事件
		$("#pro").change(function(){
		// 	// 获取省份的value
			var index=$(this).val();
		// 	console.log(index);
		// 	// 请选择没有 是空
		 	if (index=="") {
		// 		// 城市隐藏
		 		$("#city").css("display","none");
		 		return;
		 	}
		// 	//设置city显示
		 	$("#city").css("display","inline-block");

		// 	// 设置城市的默认选项
		 	var cityStr='<option value="">请选择</option>';
		// 	// 遍历对象添加省份选项
		 	for(var i in address[index]){
		 		cityStr+='<option value="'+i+'">'+address[index][i]+'</option>';
		 	}
		// 	// 字符放入pro中
		 	$("#city").html(cityStr);

		 })

});





// 点击 鞋码 固定边框

$(function(){
	$(".con_box_D_ul li").click(function(){
		$(this).find("span").css("display","block");
		$(this).siblings().find("span").css("display","none");
	});

	$(".con_box_D_ulA li").click(function(){
		$(this).find("span").css("display","block");
		$(this).siblings().find("span").css("display","none");
	})


})


//表单内数值更改
$(function(){
	console.log($(".shuliang").val());
	var vv=1;
	if(vv<=0){
		vv=0;
	}
	$(".sl_an1").click(function(){
		vv++;
		$(".shuliang").val(vv);
		console.log(vv);
	});
	$(".sl_an2").click(function(){
		vv--;
		if(vv<=1){
			vv=1;
		}
		$(".shuliang").val(vv);
		console.log(vv);
	})



})














































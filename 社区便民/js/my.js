function bodyScale(){
	var devicewidth=document.documentElement.clientWidth;
	var scale=devicewidth/640;
	document.body.style.zoom=scale;
}
window.onload=window.onresize=function(){
	bodyScale();
}

$(function(){
	/*评论部份start*/
	function pinglun(){
		$('.pl-fas').click(function(e){

			if ($('.pl-tex').val()=='') {
				$('.pl-shibai').css('display','block');
			}else{
				$('.pl-cg').css('display','block');
				//$('.pl-huifu').prepend($('.pl-con1').eq(0).html());
				var hf1=$('.pl-con1').eq(0).clone();
				//hf1.find($('.pl-p2')).val($('.pl-tex').val());
				$('.pl-huifu').prepend(hf1);
				var a1=hf1.find( $('.pl-p2'));
				a1.html($('.pl-tex').val());
				$('.pl-tex').val('');
			};
			e.stopPropagation();
			document.onclick=function(){
				$('.pl-shibai').css('display','none');
				$('.pl-cg').css('display','none');
			};
		});
	};
	pinglun();
	/*评论部份end*/
	/*我的物业 start*/
	function wuye(){	
		var naxz=byclass('wdwy-name-xuan');
		$('.wdwy-name-xuan').click(function(){
			var i=$('.wdwy-name-xuan').index(this);
			$('.wdwy-name-xuan').eq(i).toggleClass('wdwy-name-xuan2');
			if (naxz[i].className.indexOf('wdwy-name-xuan2')!=-1) {
				$('.wdwy-zhuangtai').eq(i).show();
			}else{
				$('.wdwy-zhuangtai').eq(i).hide();
			};
		});
	};
	wuye();
	/*我的物业 end*/
	/*活动报名 end*/
	function baoming(){
		$('.baoming-cj').click(function(){
			$('.bm-tianx').show();
			$('.bm-qr').click(function(){
				$('.bm-tianx').hide();
			});
		});
	};
	baoming();
	/*活动报名 end*/
	/*选择小区 end*/
	function zengxiqu(){
		$('.zeng-nr').click(function(){
			var i=$('.zeng-nr').index(this);
			
			$(this).addClass('zeng-nr2').siblings().removeClass('zeng-nr2');
		});
	};
	zengxiqu();
	/*选择小区 end*/
	// 选择小区
	function xuanzexiaoqu(){
		$('.xzxq-bangd').toggle(function(){
			$('.zeng-nrnr').show();
		},function(){
			$('.zeng-nrnr').hide();
		})

		/*选择城市*/
		$('.xzxqnr-cs').click(function(){
			$(this).addClass('xzxqnr-cszeng').siblings().removeClass('xzxqnr-cszeng');
			window.open('XuanZeXiaoQuNRbb.html','_self');
		});
		/*选择城市end*/
	};
	xuanzexiaoqu();
	// 选择小区
	/*商户信息start*/
	function shanghuxinxi(){
		$('.shangh-hea').mouseover(function(){
			var i=$('.shangh-hea').index(this);
			$('.sh-juli1').eq(i).show();

		});
		$('.sh-li-1').mouseover(function(){
			var i=$('.sh-li-1').index(this);
			$('.sh-li-1-ul').eq(i).show();
		});
		$('.sh-li-1').mouseout(function(){
			var i=$('.sh-li-1').index(this);
			$('.sh-li-1-ul').eq(i).hide();
		});
		$('.shangh-hea').mouseout(function(){
			var i=$('.shangh-hea').index(this);
			$('.sh-juli1').eq(i).hide();
		});
		/*默认排序*/
		$('.sh-li-3').hover(function(){
			var i=$('.sh-li-3').index(this);
			$('.sh-li-3').eq(i).addClass('sh-li-3-2').siblings().removeClass('sh-li-3-2')
		});
		/*默认排序*/
		$('.shangh-li1').click(function(){
			
			window.open('PingLun.html','_self');
		});

	};
	shanghuxinxi();
	/*商户信息end*/
	/*报修start*/
	function baoxiu(){
		$('#bxcg-bx').click(function(e){
			$('.bxcg-touming').show();
			e.stopPropagation();
			$(document).click(function(){
				$('.bxcg-touming').hide();
			})
		});
	};
	baoxiu();
	/*报修end*/
	function byclass(classn){//全局获取
		var tags=document.all ? document.all : document.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].className.indexOf(classn)!=-1) {
				arr.push(tags[i]);
			}
		};
		return arr;
	};
})

var sum
var count
$(document).ready(function () {
	$(".btn2").hide()
	$(".btn1").click(function(){
		$(".btn1").animate({width:190,height:100},100)
		$(".btn1").animate({width:160,height:90},100)

		$(".btn1").hide(20)
		$(".btn2").hide()
		$(".h1").html(0)
		$(".dasht").css({
			'background-image': 'url(images/fon01.bmp)',
			'background-repeat': 'no-repeat',
			'background-size': 'cover',
			})

	$(document).keydown(function(e){
		// console.log(e)
		if (e.key=='ArrowRight' && $(".dasht").width()>$(".mytank").position().left+$(".mytank").width()+20){
			$('.mytank').css({left:'+=20'})
		}
		if (e.key=='ArrowLeft' && $(".mytank").offset().left>20) {
			console.log($(".mytank").offset().left)
			$('.mytank').css({left:'-=20'})
		}
		if (e.key==" ") {
			var x=$("<div class='krak'></div>")
			var y=$(".mytank").offset().left
			var t=$(".mytank").width()/2
			var z=10
			x.css({left:y+t-z})
			x.appendTo(".dasht")
		}

	})
		var sum1=setInterval(function(){
			var x=parseInt(Math.random()*($(".dasht").width()-80))
			var k=$('<div class="tank"></div>')
				k.css({left:x})
				k.appendTo(".dasht")
				if (count==7) {
					clearInterval(sum1)
					    sum1=setInterval(function(){
					var x=parseInt(Math.random()*($(".dasht").width()-80))
					var k=$('<div class="tank"></div>')
						k.css({left:x})
						k.appendTo(".dasht")
					
					},1500)
				}

		},3000)
		sum=setInterval(function(){
			$(".p1").remove()
			var x=$('<p class="p1">Game Over</p>')
			$(".tank").css({top:'+=10'})
			$(".krak").css({top:'-=20'})
		$(".tank").each(function(){
			 if ($(this).height()+$(this).position().top>=$(".mytank").position().top && $(this).position().left+$(this).width()>=$(".mytank").offset().left && $(this).position().left<=$(".mytank").offset().left+$(".mytank").width()) {
				$(this).remove()
				clearInterval(sum)
				clearInterval(sum1)
				$(".tank").remove()
				$(".krak").remove()
				$(".btn1").show()
				$(".dasht").css({background:'red'})
				$(".h1").html(0)
				$(".dasht").append(x)
			}
			if ($(this).height()+$(this).position().top+10>=$(".dasht").height()) {
				$(this).remove()
				clearInterval(sum)
				clearInterval(sum1)
				$(".tank").remove()
				$(".krak").remove()
				$(".btn1").show()
				$(".dasht").css({background:'red'})
				$(".h1").html(0)
				$(".dasht").append(x)
			}
		})
			
			$(".krak").each(function(){
				var _this=this
				if ($(this).offset().top<10) {
				$(this).remove()
			
			}

				var top=$(this).position().top
				var left=$(this).position().left
				$(".tank").each(function(){  
					if($(this).position().top+$(this).height()>=top && $(this).offset().left<=left && $(this).offset().left-10+$(this).width()>=left){
						$(this).css({'background-image':'url(images/kr.gif)'}).remove()
						count=$(".h1").html()
						count++

						$(this).remove()
						$(_this).remove()
						 var sum3=setInterval(function(){$(this).css({'background-image':'url(images/kr.gif)'})},2000)
						$(".h1").html(count)
						if (count==16) {
							$(".dasht").css({"background-image":"url(images/win01.gif)",
							'background-repeat': 'no-repeat',
							'background-size':'cover',
							'background-color':'lightgrey',
							})
							clearInterval(sum)
							clearInterval(sum1)
							$(".tank").remove()
							$(".krak").remove()
							$(".btn2").show()
							$(".btn1").show()
							$(".btn1").css({'margin-bottom':'20px'})
							$(".h1").html(count)

							}
					
					}
				})
			})
		},90)
		
})

	})
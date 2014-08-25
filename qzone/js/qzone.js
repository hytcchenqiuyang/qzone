$(function(){

	$(".head-info").hover(function(){
		$(".edit_title_link").show();
	},function(){
		$(".edit_title_link").hide();
	});
		
	$(".feed-control-tab").hover(function(){
		$(".tab-bubble").show();
	},function(){
		$(".tab-bubble").hide();
	});

	$("#tb_friend_li").hover(function(){
		$(this).css({"background":"#fefefe"});
		$(this).find(".icon-friend").css("background-position","-790px 0");	
		$("#tb_friend_li a").css("color","#1e1e1e");
		$("#friends-drop-down").slideDown();
	},function(){
		$(this).css("background","");
		$(this).find(".icon-friend").css("background-position",""); 
		$("#tb_friend_li a").css("color","");
		$("#friends-drop-down").slideUp();
	});


	$(".mod-quick-comment").click(function(){
		var html="";

		var txt=$(this).prev().val();

		html+='	<div class="userreply">';
	    html+='      <div class="ui-avatar">';
	    html+='           <a href="#" target="_blank">';
	    html+='               <img class="q_namecard" link="nameCard_1084221885 des_1084221885"  src="./image/100.jpg">';
	     html+='               					</a>';
	     html+='               				</div>';
		                    	                    			
		html+='	<div class="comments-content">&nbsp;';
		html+='		<a class="c_tx q_namecard" link="nameCard_1084221885" target="_blank" href="#">哈哈</a>';
		html+='			<span>'+txt+'</span>';
		html+='		<div class="comments-op">';
		html+='			<span class=" ui-mr10 state"> 09:48</span>';
		html+='			<a class="act-reply" href="#" >';
		html+='				<b class="hide-clip">回复</b>';
		html+='			</a>';
		html+='			<a class="act-delete none" href="#">';
		html+='				<b class="hide-clip">删除</b>';
		html+='			</a>';
		html+='		</div>';
		html+='	</div>';
		html+='</div>';
		$(this).parent().parent().parent().parent().parent().prev().append(html);



	});
		
});
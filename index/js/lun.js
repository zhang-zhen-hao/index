var count=1;
function lun(){
	count--;
	if(count==-1){
		count=1;
	}
	$(".list").eq(count).fadeIn().siblings().fadeOut()
}
setInterval(function(){
	lun()
},3000)
var ct=2;
function lun1(){
	ct--;
	if(ct==-1){
		ct=2;
	}
	$(".list1").eq(ct).fadeIn().siblings().fadeOut()
}
setInterval(function(){
	lun1()
},5000)
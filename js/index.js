/*
* @Author: Administrator
* @Date:   2017-11-08 18:26:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-21 18:31:46
*/
window.onload=function(){
{
let banjs=document.getElementsByClassName('banjs');
let xiaoyuan=document.getElementsByClassName('xiaoyuan')[0];
let btn=xiaoyuan.getElementsByTagName('li');
let bigboxbody=document.getElementsByClassName('bigboxbody')[0];

let arr=['#0865e5','#e8e8e8','#8b6846','#a4c6a6','#7d27db','#e8e8e8'];
banjs[0].style.display='block';
btn[0].style.background='#a4aaae';
let t;
let num=0;
t=setInterval(fn, 4000);
function fn(){
	num++;
	if(num==banjs.length){
		num=0;
	}

for(let i=0;i<banjs.length;i++){
	banjs[i].style.display='none';
	
	btn[i].style.background='#32393b';

	
}

banjs[num].style.display='block';
bigboxbody.style.background=arr[num];
btn[num].style.background='#a4aaae';

}
bigboxbody.onmouseenter=function(){
	clearInterval(t);
}
bigboxbody.onmouseleave=function(){
	t=setInterval(fn, 4000);
}

for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			clearInterval(t);
			banjs[num].style.display='none';
			btn[num].style.background='#32393b';
			banjs[i].style.display='block';
			btn[i].style.background='#a4aaae';
			bigboxbody.style.background=arr[i];
			num=i;
		}
		t=setInterval(fn, 4000);
		btn[i].onmouseover=function(){
			clearInterval(t);
		}
		btn[i].onmouseout=function(){
			t=setInterval(fn, 4000);
		}
	}
}
// banner部分结束-----------------------------------------

let zcxxk=document.getElementsByClassName('zcxxk');
// console.log(zcxxk);
let banxxkjs=document.getElementsByClassName('banxxkjs');
// console.log(banxxkjs);
for(let i=0;i<zcxxk.length;i++){
	zcxxk[i].onmousemove=function(){
		banxxkjs[i].style.display='block';
	}
	zcxxk[i].onmouseout=function(){
		banxxkjs[i].style.display='none';
	}
}

// 侧导航结束---------------------------------------

{
	let mytaobao=document.getElementsByClassName('mytaobao')[0];
	let nav_last_li=document.getElementById('nav_last_li');
	let basebox=document.querySelectorAll('.basebox');
	console.log(basebox);

	console.log(mytaobao,nav_last_li);
	nav_last_li.onmouseover=function(){
		mytaobao.style.display='block';
		nav_last_li.style.background='white';
		basebox[3].style.display='block';
	}
	nav_last_li.onmouseout=function(){
		mytaobao.style.display='none';
		nav_last_li.style.background='';
		basebox[3].style.display='none';
	}

	let shoucangjia=document.getElementsByClassName('shoucangjia')[0];
	let nav_last2_li=document.getElementById('nav_last2_li');
	console.log(shoucangjia,nav_last2_li);
	nav_last2_li.onmouseover=function(){
		shoucangjia.style.display='block';
		nav_last2_li.style.background='white';
		basebox[2].style.display='block';
	}
	nav_last2_li.onmouseout=function(){
		shoucangjia.style.display='none';
		nav_last2_li.style.background='';
		basebox[2].style.display='none';
	}


	let phone=document.getElementsByClassName('phone')[0];
	let nav_last3_li=document.getElementById('nav_last3_li');
	console.log(phone,nav_last3_li);
	nav_last3_li.onmouseover=function(){
		phone.style.display='block';
	}
	nav_last3_li.onmouseout=function(){
		phone.style.display='none';
	}

	let sellerzhichi=document.getElementsByClassName('sellerzhichi')[0];
	let nav_last4_li=document.getElementById('nav_last4_li');
	console.log(sellerzhichi,nav_last4_li);
	nav_last4_li.onmouseover=function(){
		sellerzhichi.style.display='block';
		nav_last4_li.style.background='white';
		basebox[1].style.display='block';

	}
	nav_last4_li.onmouseout=function(){
		sellerzhichi.style.display='none';
		nav_last4_li.style.background='';
		basebox[1].style.display='none';
	}
	let nav_website=document.getElementsByClassName('nav_website')[0];
	let nav_last5_li=document.getElementById('nav_last5_li');
	console.log(nav_website,nav_last5_li);
	nav_last5_li.onmouseover=function(){
		nav_website.style.display='block';
		nav_last5_li.style.background='white';
		basebox[0].style.display='block';
		
	}
	nav_last5_li.onmouseout=function(){
		nav_website.style.display='none';
		nav_last5_li.style.background='';
		basebox[0].style.display='none';
	}


}
// 天猫超市中今日疯抢部分
    let tm_tianmaochaoshi=document.getElementsByClassName('tm-tianmaochaoshi')[0];
    let tm_body=tm_tianmaochaoshi.getElementsByClassName('body')[0];
    let tm_right=tm_body.getElementsByClassName('right')[0];
    let tm_fq=tm_right.getElementsByClassName('first')[0];
    console.log(tm_fq);
    let fq_head=tm_fq.getElementsByClassName('head')[0];
    let fq_body=tm_fq.getElementsByClassName('body')[0];
    let fq_body_left=fq_body.getElementsByClassName('left1')[0];
    let fq_body_right=fq_body.getElementsByClassName('right')[0];
    let fq_head_left=fq_head.getElementsByTagName('li')[0];
    let fq_head_right=fq_head.getElementsByTagName('li')[1];
    console.log(fq_body_left,fq_body_right,fq_head_left,fq_head_right);
    fq_head_left.onmouseover=function(){
    	fq_head_right.className="";
    	fq_head_left.className="tm-dis";
    	fq_body_right.style.display='none';
    	fq_body_left.style.display='block';
    }
    fq_head_right.onmouseover=function(){
    	fq_head_left.className="";
    	fq_head_right.className="tm-dis";
    	fq_body_left.style.display='none';
    	fq_body_right.style.display='block';
    }


// 楼层跳转

let f2=document.querySelectorAll('.f2');
let louc=document.querySelectorAll('.louc');
let f3=document.querySelector('.f3');
let f=document.querySelector('.f');
let tbdhjs=document.querySelector('.tbdhjs');
console.log(f);
let cx=false;
let xs=true;
var current=0;
let arr2=['#64C333','#000','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#000'];
window.onscroll=function(){

	let obj=document.body.scrollTop ? document.body:document.documentElement;
	var sctop=obj.scrollTop;
louc.forEach(function(dom,index){
	if(sctop>=dom.offsetTop-400){
		f2.forEach(function(n){
			n.style.background='rgba(0, 0, 0, 0.6)';
		})
		f2[index].style.background=arr2[index];
		current=index;
	}

})
 f2.forEach(function(n,index){
 	n.onclick=function(){
 		current=index;
 		animate(document.body,{scrollTop:louc[index].offsetTop});
 	}

 	n.onmouseover=function(){
 		this.style.background=arr2[index];
 	}
 	n.onmouseout=function(){
 		if(index!=current){
 			this.style.background='rgba(0, 0, 0, 0.6)';
 		}
 	}
 })
	f3.onclick=function(){
		animate(document.body,{scrollTop:0});
	}
	
	

	if(sctop>=louc[0].offsetTop-400){

		if(cx){
			cx=false;
		animate(f,{width:36,height:414},function(){
				xs=true;

			});
		animate(tbdhjs,{height:50});
	}

	}else{
		if(xs){
			xs=false;
			animate(f,{width:0,height:0},function(){
				cx=true;
			});
			animate(tbdhjs,{height:0});
		}
	}



}





}
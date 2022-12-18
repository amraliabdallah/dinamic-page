let stars=document.getElementById("stars");
let moon=document.getElementById("moon");
let mountain3=document.getElementById("mountain3");
let mountain4=document.getElementById("mountain4");
let river=document.getElementById("river");
let boat=document.getElementById("boat");
let website=document.querySelector(".website");
window.onscroll=function(){
let value=scrollY;

stars.style.left= value + 'px';

moon.style.top=value * 4 + 'px';

mountain3.style.top=value * 2 + 'px';

mountain4.style.top=value * 1.5 + 'px';

river.style.top=value + 'px';

boat.style.top=value + 'px';

boat.style.left=value*3 +'px';

website.style.fontSize=value +'px';


if(scrollY>=67){
    website.style.fontSize=67+'px';
    website.style.position='fixed';

    if(scrollY >=478)
    {website.style.display='none';}
    else
    {website.style.display='block';}

    if(scrollY >=127)
    {
        document.querySelector('.main ').style.background='linear-gradient(#376281,#10001f)'; 
    }
    else
    {
        document.querySelector('.main ').style.background='linear-gradient(#200016,#10001f)';
    }
}
}

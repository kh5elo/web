let text=document.getElementById("text");
let m1=document.getElementById("m1");
let m2=document.getElementById("m2");
let t2=document.getElementById("t2");
let t1=document.getElementById("t1");
let man=document.getElementById("man");
let plants=document.getElementById("plants");
window.onscroll=function(){
let value=scrollY;
m1.style.top=value*0.3+'px';
m1.style.left=value*0.3+'px';
m2.style.top=value*0.2+'px';
m2.style.left=value*0.2+'px';
man.style.top=value*0.2+'px';
man.style.left=-value*0.2+'px';
t1.style.top=value*0.09+'px';
t1.style.left=value*0.1+'px';
t2.style.top=value*0.2+'px';
plants.style.left=-value*0.1+'px';
if(value>=477)
{
    m1.style.top=477*0.3+'px';
    m1.style.left=477*0.3+'px';
    m2.style.top=477*0.2+'px';
    m2.style.left=477*0.2+'px';
    man.style.top=477*0.2+'px';
    man.style.left=-477*0.2+'px';
    t1.style.top=477*0.2+'px';
    t1.style.left=744*0.1+'px';

    t2.style.top=477*0.2+'px';
    plants.style.left=-477*0.1+'px';

}else{
    m1.style.top=value*0.3+'px';
m1.style.left=value*0.3+'px';
m2.style.top=value*0.2+'px';
m2.style.left=value*0.2+'px';
man.style.top=value*0.2+'px';
man.style.left=-value*0.2+'px';
t1.style.top=value*0.2+'px';
t1.style.left=value*0.1+'px';
t2.style.top=value*0.2+'px';
plants.style.left=-value*0.1+'px';

}

}
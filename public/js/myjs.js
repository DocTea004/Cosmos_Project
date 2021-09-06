window.onload=function(){
    let fmu= document.getElementById('firstmenu');
    let amu= document.getElementById('menuhed');
    window.addEventListener('scroll', addEffect);
      function addEffect(){
        if (scrollY>=50){
            console.log('level 400');
            fmu.classList.add('scll');
            amu.classList.add('menuhed');
        }else{
            fmu.classList.remove('scll');
            amu.classList.remove('menuhed');
        }
      }
    }
function uppermenu(){
    document.getElementById("topcontent").classList.toggle("viewscene");
    document.getElementById("imgnavopen").classList.toggle("off");
    document.getElementById("imgnavclse").classList.toggle("on");
   // document.getElementById("").classList.toggle("")
}
function showtopbar(){
    document.getElementById("topbaropn").classList.toggle("show");

}
function lowermenu(){
    document.getElementById("bttncontent").classList.toggle("view2");
    
    document.getElementById("imgnavopen1").classList.toggle("off");
    document.getElementById("imgnavclse1").classList.toggle("on");
}
document.getElementById("pand").onclick= function(){
    document.getElementById("drop1").classList.toggle("visble");
    return false;
}
document.getElementById("pand1").onclick= function(){
    document.getElementById("drop2").classList.toggle("visble1");
    return false;
}
document.getElementById("pand2").onclick= function(){
    document.getElementById("drop3").classList.toggle("visble2");
    return false;
}
document.getElementById("pand3").onclick= function(){
    document.getElementById("drop4").classList.toggle("visble3");
    return false;
}


document.getElementById("subpan").onclick= function(){
    document.getElementById("subdrop1").classList.toggle("showv");
    return false;
}
document.getElementById("subpan1").onclick= function(){
    document.getElementById("subdrop2").classList.toggle("showv1");
    return false;
}
document.getElementById("subpan2").onclick= function(){
    document.getElementById("subdrop3").classList.toggle("showv2");
    return false;
}
document.getElementById("subpan3").onclick= function(){
    document.getElementById("subdrop4").classList.toggle("showv3");
    return false;
}
document.getElementById("subpan4").onclick= function(){
    document.getElementById("subdrop5").classList.toggle("showv4");
    return false;
}




document.getElementById("sub1pan").onclick= function(){
    document.getElementById("sub1drop").classList.toggle("showv5");
    return false;
}
document.getElementById("sub2pan").onclick= function(){
    document.getElementById("sub2drop").classList.toggle("showv6");
    return false;
}
document.getElementById("sub3pan").onclick= function(){
    document.getElementById("sub3drop").classList.toggle("showv7");
    return false;
}


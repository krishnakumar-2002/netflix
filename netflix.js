const searchbar=document.querySelector("#searchbar");
const input=document.querySelector("#input");
const profilecard=document.querySelector("#profilescard");
const profile=document.querySelector(".profile");
const ddarrow=document.querySelector(".ddarrow");
const meadiaquerybrowse=document.querySelector(".mediaquerybrowseclick");
const meadiaQuerynavbarbrowselist=document.querySelector("#meadia-Query-navbarbrowselist");
const navbar=document.querySelector("#navbar");
const titledescriptiontext=document.querySelector("#titledescriptiontext")
const swiperleftsbl1=document.querySelector(".swiperleftsbl1");
const swiperrightsbl1=document.querySelector(".swiperrightsbl1");
const swiperbox=document.querySelector(".swiperbox");
const swiperboxlayout=document.querySelector(".swiperboxlayout");
const swiperbox3=document.querySelector(".swiperbox3");
const swiperbox4=document.querySelector(".swiperbox4");
const swiperbox5=document.querySelector(".swiperbox5");
const swiperbox6=document.querySelector(".swiperbox6");
const swiperbox7=document.querySelector(".swiperbox7");
const titledescriptionlogo=document.querySelector("#titledescriptionlogo");
const topten=document.querySelector("#topten");
var x=0;
var x3=0;
var x4=0;
var x5=0;
var x6=0;
var x7=0;


function expandsearchbar(e){
     console.log(window.innerWidth);
     if(e.target.id!="profile"&&e.target.id!="input"&&searchbar.style.width=="32px"&&window.innerWidth>1100){
        searchbar.style.width="250px";
        input.style.width="140px";
        input.style.display="block";
        searchbar.style.border=" 1px solid white";
        searchbar.style.backgroundColor="rgba(0, 0, 0, 0.457)";
       

    }
    else if(e.target.id!="profile"&&e.target.id!="input"&&searchbar.style.width!="32px"&&window.innerWidth>1100){
        searchbar.style.width="32px";
        input.style.display="none";
        searchbar.style.border="none";
        searchbar.style.backgroundColor="transparent";
   

    }
    else if(e.target.id!="profile"&&e.target.id!="input"&&searchbar.style.width=="32px"&&window.innerWidth<1100&&window.innerWidth>570){
        searchbar.style.width="160px";
        input.style.display="block";
        input.style.width="120px";
        input.style.fontSize="12px";
        searchbar.style.border=" 1px solid white";
        searchbar.style.backgroundColor="rgba(0, 0, 0, 0.457)";
       

    }
    else if(e.target.id!="profile"&&e.target.id!="input"&&searchbar.style.width!="32px"&&window.innerWidth<1100&&window.innerWidth>570){
        searchbar.style.width="32px";
        input.style.display="none";
        searchbar.style.border="none";
        searchbar.style.backgroundColor="transparent";
   

    }
    
   
    else if(e.target.id!="profile"&&e.target.id!="input"&&searchbar.style.width=="32px"&&window.innerWidth<=570){
        searchbar.style.width="120px";
        input.style.display="block";
        input.style.width="100px";
        input.style.fontSize="11px";
        searchbar.style.border=" 1px solid white";
        searchbar.style.backgroundColor="rgba(0, 0, 0, 0.457)";
       

    }
    else if(e.target.id!="profile"&&e.target.id!="input"&&searchbar.style.width!="32px"&&window.innerWidth<=570){
        searchbar.style.width="32px";
        input.style.display="none";
        searchbar.style.border="none";
        searchbar.style.backgroundColor="transparent";
   

    }
   
}
function profilecardexpand(e){
     
     


    if(e.target.id=="profilehover"&&window.getComputedStyle(profilecard).getPropertyValue('opacity')==0){
        
        ddarrow.style.transform="rotate(180deg)";
        profilecard.style.display="flex";
        profilecard.style.opacity=1;
        profilecard.style.zIndex="99";
        
       

    }
    else if(e.target.id!="profilescard"&&e.target.id!="profiles"&&e.target.id!="signout"){
        ddarrow.style.transform="rotate(0deg)";
        profilecard.style.opacity=0;
        profilecard.style.display="none";
        profilecard.style.zIndex="-100";

    }

}

function openbrowsesection(e){
    
    if(e.target.className=="mediaquerybrowseclick"&&window.getComputedStyle(meadiaQuerynavbarbrowselist).getPropertyValue('display')=="none"){
        meadiaQuerynavbarbrowselist.style.display="flex";
        meadiaQuerynavbarbrowselist.style.opacity=0.9;
    }
    else if(e.target.id!="meadia-Query-navbarbrowselist"){

        meadiaQuerynavbarbrowselist.style.display="none";
        meadiaQuerynavbarbrowselist.style.opacity=0;
    }
}

function changenavbar(e){
    console.log(document.body.scrollTop);
  if(document.body.scrollTop > 50){
    navbar.style.backgroundColor="black";
  }
  else{

    navbar.style.backgroundColor= "transparent";
  }
}

function swipe1(e){
    
    
    if(e.target.className=="swiperrightsbl1"||e.target.id=="swiperrightsbl1"){
        
        
        swiperbox.style.transform=`translateX(-${swiperboxlayout.offsetWidth+x}px)`;
        x+=swiperboxlayout.offsetWidth;
        
    }
    else if(e.target.className=="swiperleftsbl1"||e.target.id=="swiperleftsbl1"){
        if(x!=0){ 
        swiperbox.style.transform=`translateX(-${x-swiperboxlayout.offsetWidth}px)`;
        x-=swiperboxlayout.offsetWidth;
        console.log( x);}
    }
    else if(e.target.className=="swiperrightsbl3"||e.target.id=="swiperrightsbl3"){
        
        
        swiperbox3.style.transform=`translateX(-${swiperboxlayout.offsetWidth+x3}px)`;
        x3+=swiperboxlayout.offsetWidth;
        
    }
    else if(e.target.className=="swiperleftsbl3"||e.target.id=="swiperleftsbl3"){
        if(x3!=0){ 
        swiperbox3.style.transform=`translateX(-${x3-swiperboxlayout.offsetWidth}px)`;
        x3-=swiperboxlayout.offsetWidth;
       }
    }
    else if(e.target.className=="swiperrightsbl4"||e.target.id=="swiperrightsbl4"){
        
        
        swiperbox4.style.transform=`translateX(-${swiperboxlayout.offsetWidth+x4}px)`;
        x4+=swiperboxlayout.offsetWidth;
        
    }
    else if(e.target.className=="swiperleftsbl4"||e.target.id=="swiperleftsbl4"){
        if(x4!=0){ 
        swiperbox4.style.transform=`translateX(-${x4-swiperboxlayout.offsetWidth}px)`;
        x4-=swiperboxlayout.offsetWidth;
       }
    }
    else if(e.target.className=="swiperrightsbl5"||e.target.id=="swiperrightsbl5"){
        
        
        swiperbox5.style.transform=`translateX(-${swiperboxlayout.offsetWidth+x5}px)`;
        x5+=swiperboxlayout.offsetWidth;
        
    }
    else if(e.target.className=="swiperleftsbl5"||e.target.id=="swiperleftsbl5"){
        if(x5!=0){ 
        swiperbox5.style.transform=`translateX(-${x5-swiperboxlayout.offsetWidth}px)`;
        x5-=swiperboxlayout.offsetWidth;
       }
    }
    else if(e.target.className=="swiperrightsbl6"||e.target.id=="swiperrightsbl6"){
        
        console.log(e.target.id)
        swiperbox6.style.transform=`translateX(-${swiperboxlayout.offsetWidth+x6}px)`;
        x6+=swiperboxlayout.offsetWidth;
        
    }
    else if(e.target.className=="swiperleftsbl6"||e.target.id=="swiperleftsbl6"){
        if(x6!=0){ 
        swiperbox6.style.transform=`translateX(-${x6-swiperboxlayout.offsetWidth}px)`;
        x6-=swiperboxlayout.offsetWidth;
       }
    }
    else if(e.target.className=="swiperrightsbl7"||e.target.id=="swiperrightsbl7"){
        
        console.log(e.target.id);
        swiperbox7.style.transform=`translateX(-${swiperboxlayout.offsetWidth+x7}px)`;
        x7+=swiperboxlayout.offsetWidth;
        
    }
    else if(e.target.className=="swiperleftsbl7"||e.target.id=="swiperleftsbl7"){
        if(x7!=0){ 
        swiperbox7.style.transform=`translateX(-${x7-swiperboxlayout.offsetWidth}px)`;
        x7-=swiperboxlayout.offsetWidth;
       }
    }
}








searchbar.addEventListener("click",expandsearchbar);
document.addEventListener("click",profilecardexpand);
document.querySelector("html").addEventListener("scroll",changenavbar);
document.addEventListener("click",openbrowsesection);

setTimeout(()=>{
 
 
    titledescriptiontext.style.display="none";
    titledescriptiontext.style.opacity="0";
    titledescriptionlogo.style.width="400px";
    titledescriptionlogo.style.height="200px";
    titledescriptionlogo.style.top="-80px";
    topten.style.opacity="0";
    topten.style.display="none";
    

},5000);
document.addEventListener("click",swipe1);

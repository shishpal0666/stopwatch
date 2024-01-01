window.onload = function(){
    var flags=[];
    var itemhtml;
    var f;
    var hrs=document.querySelector("#hour");
    var min=document.querySelector("#minute");
    var sec=document.querySelector("#second");
    var mil=document.querySelector("#milli");
    var show=document.querySelector("#show");

    var btnstart=document.querySelector("#start");
    var btnstop=document.querySelector("#stop");
    var btnreset=document.querySelector("#reset");
    var btnflag=document.querySelector("#flag");
    
    var timer;
    var hr=0;
    var mi=0;
    var se=0;
    var ml=0;

    hrs.innerHTML="00";
    min.innerHTML=":00";
    sec.innerHTML=":00";
    mil.innerHTML="00";


    btnstart.onclick=function (){
        clearInterval(timer);
        timer=setInterval(start,10);
    };

    btnstop.onclick= function(){
        clearInterval(timer);
    };

    btnreset.onclick=function(){
        clearInterval(timer);
        hr=0;
        mi=0;
        se=0;
        ml=0;
        hrs.innerHTML="0"+hr;
        min.innerHTML=":0"+mi;
        sec.innerHTML=":0"+se;
        mil.innerHTML="0"+ml;
        flags=[];
        f="";
        itemhtml="";
        show.innerHTML="";
    };

    function start(){
        ml++;
        if(ml===100){
            se++;
            ml=0;
        }
        if(se===60){
            mi++;
            se=0;
        }
        if(mi===60){
            hr++;
            se=0;
            mi=0;
        }

        if(hr<10){
            hrs.innerHTML="0"+hr;
            var fhr="0"+hr;
        }else{
            hrs.innerHTML=hr;
            var fhr=hr;
        }
        if(mi<10){
            min.innerHTML=":0"+mi;
            var fmi=":0"+mi;
        }else{
            min.innerHTML=":"+mi;
            var fmi=":"+mi;
        }
        if(se<10){
            sec.innerHTML=":0"+se;
            var fse=":0"+se;
        }else{
            sec.innerHTML=":"+se;
            var fse=":"+se;
        }
        if(ml<10){
            mil.innerHTML="0"+ml;
        }else{
            mil.innerHTML=ml;
        }

        f=fhr+fmi+fse;
        
        btnflag.onclick=function(){
            if(f){
                flags.push(f);
                const item=flags.map((x)=>{
                    return (`<li>${x}</li>`);
                });
                itemhtml=item.join('');
                show.innerHTML=itemhtml;
            }
        };       
        
    };

}
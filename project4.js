var isStop=true
s=0
min=0
hr=0
start =()=>{
    console.log("starting")

    if(isStop==true){
        isStop=false
       

        timer()
    }

}
function timer(){
    
    if(isStop==false)
   { s=parseInt(s)
    min=parseInt(min)
    hr=parseInt(hr)
    s++
    
    if(s==60){
        min++
        s=0
    }
    if(min==60){
        hr++
        min=0
    }
    if(s<10){
        s="0"+s
    }
    if(min<10){
        min="0"+min
    }
    if(hr<10){
        hr="0"+hr
    }
    timerrr.innerHTML=hr+":"+min+":"+s
    setTimeout("timer()",1000)
}}
function stop(){
    isStop=true;
    console.log("stopped")
}
function reset(){
    isStop=true
    s=0
    hr=0
    min=0
    timerrr.innerHTML="00:00:00"
}
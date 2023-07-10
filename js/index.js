$(document).ready(function(){

    let count = 0;
    $(".next").click(function(){
        count++;
        if(count>4){count = 0}
        
        slideMove(count)
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
        
    })
        

        $(".prev").click(function(){
        count--;
        if(count<0){count = 4}
        // $(".train").css("transform","translateX(-"+(count*25)+"%)")
        slideMove(count)
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
    })

    function slideMove(idx){
        $(".train").css("transform","translateX(-"+(idx*20)+"%)")

    }


    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
        $(".tabMenu>dd").removeClass("on")
        $(this).next().addClass("on")


    })
    $(".tabMenu>dt>a>img").click(function(){
        $(".tabMenu>dt").css("display")
        $(this).addClass("on")
        $(".tabMenu>dd").removeClass("on")
        $(this).next().addClass("on")


    })

    $(".designList>li").click(function(){
        $(".designList>li").removeClass("on")
        $(this).addClass("on")
       
    })


   
    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let con2top = $("#skill").offset().top
        if(winst>=con2top){
            $("#skill").addClass("on")
        }else{
            $("#skill").removeClass("on")
        }
    })


    $(".openR>div").on("wheel DOMMouseScroll",function(event){
        //    console.log(event)
           let E = event.originalEvent
           let delta = 0;
           if(E.detail){
            delta = E.detail * -40
           }else{
            delta = E.wheelDelta
           }
           
           if(delta<0){
            //마우스 휠을 내렸을 때
            if($(this).next().length!=0){
                let posTop = $(this).next().offset().top
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
           }else{
            //마우스 휠을 올렸을 때
            if($(this).prev().length!=0){
                let posTop = $(this).prev().offset().top
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
           }
           return false
    
        })

   
    
         
    $(window).scroll(function(){

        let astop = $(window).scrollTop()
        let bstop = $("#skill").offset().top
        let cstop = $(window).height()*1
    
        if(astop+cstop>=bstop){
            if($("#skill").hasClass("on")==false){
                //스킬클래스에 on클래스가 없다면
                $("#skill").addClass("on")







        $(".ss li svg rect").each(function(){
            let rectSVG = $(this)
            let list = $(this).parent().parent().parent()
            let pathLength = $(this).get(0).getTotalLength()
            console.log(pathLength)
            $(this).css("stroke-dasharray",pathLength)
            $(this).css("stroke-dashoffset",pathLength)

            let percent = Number($(this).parent().parent().parent().find("i").text())

            let count = 0;
            let timer = setInterval(function(){
                count++
                rectSVG.css("stroke-dashoffset",pathLength-(pathLength*count/100))
                list.find("i").text(count)

                if(count >= percent){
                    clearInterval(timer)
                }
            },30)
         })


 
    }
    }


    })

    $(".btnclosepop").click(function(){
        $(".popuptxt").hide();
    })
    $(".popupList>div").click(function(){
        $(".popuptxt").show();
    })   

   
    $(".popupList>div").click(function(){
        let idx = $(this).index()
        $(".popuptxt").addClass("on")
        $(".popuptxt>ul>li").removeClass("on")
        $(".popuptxt>ul>li").eq(idx).addClass("on")


        
        
    })

    $(".ko").click(function(){
        $(".retwo").hide();
    })
    $(".morebtn>a").click(function(){
        $(".retwo").show();
    })   


    
    

    
    

 




        
        
 
})
$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution:512,
        dropRadius:10 
    })

    const bars=document.querySelectorAll('.progress_bar');
    bars.forEach((bar)=>{
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })
    // counter section
    const counter =document.querySelectorAll('.counter');
    function runCounter(){
        counter.forEach(counter =>{
            counter.innerText=0;
            let target = +counter.dataset.count;
            let step = target /100;
            let countIt = function(){
                let displayCount = +counter.innerText;
                if(displayCount < target){
                    counter.innerText = Math.ceil(displayCount + step);
                    setTimeout(countIt,1);
                }else{
                    counter.innerText = target;
                }
            }
            countIt();
        })
    }
    
    let counterSection = document.querySelector('.counter_section');
    const sectionObserver = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            runCounter();
        }
    })
    sectionObserver.observe(counterSection);
});
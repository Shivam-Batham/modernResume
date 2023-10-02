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
    let option={
        rootMargin : '0px 0px -200px 0px'
    }
    let incrementDone =0;
    const sectionObserver = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting && incrementDone !=1){
            incrementDone = 1;
            runCounter();
        }
    },option)
    sectionObserver.observe(counterSection);
    // image filter
    var  $wrapper = $('.portfolio_wrapper');
    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOptions : {
            duration : 750,
            easing : 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');
    links.forEach(link=>{
    
        let selector = link.dataset.filter;
        link.addEventListener('click',function(e){
            e.preventDefault();

            $wrapper.isotope({
                filter:selector,
                layoutMode:'masonry',
                animationOptions:{
                    duration:'750',
                    easing:'linear'
                }
            })

            links.forEach(link=>{
                link.classList.remove('active');
            })
            e.target.classList.add('active');
        });
    })
});
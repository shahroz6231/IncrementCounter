const counters =document.querySelectorAll('.counter')
counters.forEach((counter)=>{
    counter.innerHTML=0;

    const updateCounter=()=>{
        const targetCounter = +counter.getAttribute('data-target'); //Here we added '+' operator to convert the string into number.
        const startingCount = Number(counter.innerHTML); // Here we again converted the string into number.
        const incr = targetCounter/100;

        if(startingCount< targetCounter){
            counter.innerHTML=`${Math.round(startingCount+ incr)}`;
            setTimeout(updateCounter, 20)
        }else{
            counter.innerHTML=targetCounter;
        }

    }

    updateCounter();
})

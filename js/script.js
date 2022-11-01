    for (let i = 0; i < pokemons.length; i++) {
        
        const div=document.createElement('div');
        div.classList='border border-dark rounded-4 col-2 col-cheteree  bg-light ms-5 mb-5 mt-5 m-a'
        div.innerHTML = `

        <img src="${pokemons[i].img}">
        <div class="border-top text-start border-dark">
            <h3><strong> ${pokemons[i].id} ${pokemons[i].name} </strong></h3> 
            <h4>${pokemons[i].candy} </h4> 
            <h6> ${pokemons[i].height} ${pokemons[i].weight} </h6>
        </div>

        
        `;
        $('.wrapper').appendChild(div)
        console.log(div);
    }

    for (let i = 0; i < 45; i++) {
        
        const div2=document.createElement('div');
        div2.classList='border border-dark rounded-4 col-2 col-cheterqe  bg-light ms-5 mb-5 mt-5 m-a'
        div2.innerHTML = `

        <img src="${pokemons[i].img}">
        <div class="border-top text-start border-dark">
            <h3><strong> ${pokemons[i].id} ${pokemons[i].name} </strong></h3> 
            <h4>${pokemons[i].candy} </h4> 
            <h6> ${pokemons[i].height} ${pokemons[i].weight} </h6>
        </div>

        
        `;
        $('.into_div').appendChild(div2)
        console.log(div2);
    }
    


    $('.buton').addEventListener('click',()=>{
        $('.back_div').style.display = 'block'
        $('.into_div').style.right = '0px'
    })
    $('.back_btn').addEventListener('click', ()=>{
        $('.back_div').style.display = 'none'
        $('.into_div').style.right = '-10000px'

    })
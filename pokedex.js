const url = 'https://pokeapi.co/api/v2/pokemon/';

const fetchPokemon = () => {
    pn = document.querySelector('#pokeName').value;
    params= {
        pokeName: pn,
    }
    document.querySelector('#pokemonTbl').style.display = "none";
    document.querySelector('#pokeNameTitle').innerHTML = "Buscando . . . ";
    sendPetition(params, url, fetchPokemonHandler);
    document.querySelector('#pokemonTbl').style.display = "initial";
}

const fetchPokemonHandler = (data) => {
    let total = 0;
    console.log('response', data);
    if (data.success == false){
        pokemonLogo();
    }
    document.querySelectorAll('.displayInfo').forEach(element => element.style.display ="table-cell");
    document.querySelector('#pokeImg').src = data.sprites.other.home.front_default;
    document.querySelector('#pokeImg').style.width = "auto";
    document.querySelector('#pokeImg').style.height = "300px";
    document.querySelector('#pokeImg').style.border = "5px #db0909 solid";
    document.querySelector('#pokeImg').style.borderRadius = "50%";
    document.querySelector('#pokeImg').style.marginBottom = "1rem";
    document.querySelector('#pokeImg').style.boxShadow= "rgb(255 247 190 / 92%) 0px 9px 14px 4px";

    document.querySelector('#pokeNameTitle').innerHTML = data.name;
    document.querySelector('#pokeId').innerHTML = data.id;
    document.querySelector('#pokeHeight').innerHTML = data.height;
    document.querySelector('#pokeWeight').innerHTML = data.weight;
    document.querySelector('#pokeAbilities').innerHTML = "";
    document.querySelector('#pokeForms').innerHTML = "";
    document.querySelector('#pokeTypes').innerHTML = "";
    data.abilities.forEach(pokeAbilities =>  document.querySelector('#pokeAbilities').innerHTML += '<button class="label">' + pokeAbilities.ability.name+'</button>');
    data.forms.forEach(pokeForms => document.querySelector('#pokeForms').innerHTML += '<button class="label">' + pokeForms.name+'</button>');
    data.types.forEach(pokeTypes => document.querySelector('#pokeTypes').innerHTML += '<button class="label">' + pokeTypes.type.name+'</button>');
    
    document.querySelector('#pokeHp').innerHTML = horizontalBar( data.stats[0].base_stat );
    document.querySelector('#pokeAttack').innerHTML = horizontalBar( data.stats[1].base_stat );
    document.querySelector('#pokeDefense').innerHTML = horizontalBar( data.stats[2].base_stat );
    document.querySelector('#pokeSpAttack').innerHTML = horizontalBar( data.stats[3].base_stat );
    document.querySelector('#pokeSpDefence').innerHTML = horizontalBar( data.stats[4].base_stat );
    document.querySelector('#pokeSpeed').innerHTML = horizontalBar( data.stats[5].base_stat );
    data.stats.forEach(pokeTotal => total += pokeTotal.base_stat)
    document.querySelector('#pokeTotal').innerHTML = total;
    
    document.querySelector('#showImages').innerHTML = '<img class="show-images" src="' + data.sprites.back_default + '"><img class="show-images" src="' + data.sprites.front_default + '">';
    

}

function horizontalBar(size){
    return '<div style="width: ' + size + 'px; border-top:10px solid #ffe900">'+size+'</div>';
}

function pokemonLogo(){
    document.querySelector('#pokeImg').style.boxShadow= "";
    document.querySelector('#pokeImg').style.border = "none";
    document.querySelector('#pokeImg').style.borderRadius = "0%";
    document.querySelector('#pokeImg').style.marginBottom = "0rem";
    document.querySelectorAll('.displayInfo').forEach(element => element.style.display ="none");
    document.querySelector('#pokeImg').src = "./img/pokemonLogo.png";
    document.querySelector('#pokeImg').style.width = "auto";
    document.querySelector('#pokeNameTitle').innerHTML = "Pokemon No Encontrado !";

}
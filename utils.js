
async function sendPetition (params = '', url, handler) {
    let urlApi = url+params.pokeName.toLowerCase();
    let res = await fetch(urlApi)
    if (!res.ok) {
        let data ={ 
            success: false,
        }
        // handler(data);
        pokemonLogo();
    }
    else {
        const data = await res.json();
        data.success = true;
        // console.log(data);
        handler(data)
            
        }
    }

document.querySelector('button').addEventListener('click',fetchChar)

document.querySelector('.inside').addEventListener('click',pickPokemon)
let audio = document.querySelector('audio')


function fetchChar() {
    document.querySelector('img').classList.add('contrast1')
    document.querySelector('h2').style.display = 'none'
    
    const generation = document.querySelector('select').value
    let input
    if (generation === 'gen1') {
        input = Math.floor(Math.random()*150)
    } else if (generation === 'gen2') {
        input =  Math.floor(Math.random()* (250 - 150) + 150)
    } else if (generation === 'gen3') {
        input =  Math.floor(Math.random()* (385 - 250) + 250)
    } else if (generation === 'gen4') {
        input =  Math.floor(Math.random()* (492 - 385) + 385)
    }else if (generation === 'gen5') {
        input =  Math.floor(Math.random()* (648 - 492) + 492)
    } else if (generation === 'gen6') {
        input =  Math.floor(Math.random()* (720 - 648) + 648)
    } else if (generation === 'gen7') {
        input =  Math.floor(Math.random()* (808 - 720) + 720)
    } else if (generation === 'gen8') {
        input =  Math.floor(Math.random()* (904 - 808) + 808)
    } else if (generation === 'gen9') {
        input =  Math.floor(Math.random()* (1024 - 904) + 904)
    }
    

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${input}`)
        .then((response) => response.json())
        .then((result) => {
            
            const newRes = result.flavor_text_entries.filter(element => {
                return element.language.name  === 'en'
            })
            document.querySelector('section.one h3').innerText = newRes[0].flavor_text
            
            fetchPic(result.name)
        })
        .catch((error) => console.error(error));
}

function fetchPic(pokeName) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            
            document.querySelector('img').src = data.sprites.front_default
            document.querySelector('img').classList.add('contrast1')
            
            
            audio.src = data.cries.legacy
            console.log(data.name)
            document.querySelector('h2').innerText = data.name
        })
        .catch((error) => console.error(error));
}

function pickPokemon() {
    if (document.querySelector('img').src === '') {
        return
    }
    document.querySelector('img').classList.remove('contrast1')
    document.querySelector('h2').style.display = 'inline'
    audio.play()
}
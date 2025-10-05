document.querySelector('button').addEventListener('click',fetchChar)
const selectArray = document.querySelectorAll('.inside')


function fetchChar() {
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
    console.log(input)

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

            // for(let i=0;i<4;i++) {
            //     let index = Math.floor(Math.random()*data.moves.length)
            //     pokeArray.push(data.moves[index])
            // }
            
            document.querySelector('.one').style.backgroundImage = `url("${data.sprites.front_default}#filter1")`
            document.querySelector('.one').style.backgroundRepeat = 'no-repeat'
            
            // let audio = document.querySelector('audio')
            // audio.src = data.cries.legacy
            // audio.play()
            console.log(data.name)
            document.querySelector('h2').innerText = data.name
            // console.log(pokeArray)
        })
        .catch((error) => console.error(error));
}

function pickPokemon(data,pokeArray) {
    console.log('something happened')
    // document.querySelector('.four').style.display = 'flex'
    document.querySelector('.three').style.backgroundImage = `url(${data.sprites.back_default})`
}

// for(let i=0;i<4;i++) {
            // let index = Math.floor(Math.random()*result.moves.length)
            // pokeArray.push(result.moves[index])
            // }
            // document.querySelector('img').src = result.sprites.front_default
            // let audio = document.querySelector('audio')
            // audio.src = result.cries.legacy
            // audio.play()
            // let speciesURL = result.species.url
            // document.querySelector('h2').innerText = result.name
            // fetchDesc(speciesURL)


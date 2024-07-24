const container = document.getElementById('app')

// fetch the games from from my frontend.

fetchGames()
async function fetchGames() {
  // talk to the server and ask for the array of games
  const result = await fetch(`http://localhost:8080/games`)
  // how to read the incoming data
  const games = await result.json()
  generateImages(games)
}

function generateImages(array) {
  for (let i = 0; i < array.length; i++) {
    const img = document.createElement('img')
    img.setAttribute('src', array[i].img_url)
    container.appendChild(img)
  }
}

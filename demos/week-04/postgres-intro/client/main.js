const container = document.getElementById('app')


function generateImages(array) {
  for (let i = 0; i < array.length; i++) {
    const img = document.createElement('img')
    img.setAttribute('src', array[i].img_url)
    container.appendChild(img)
  }
}

generateImages(games)
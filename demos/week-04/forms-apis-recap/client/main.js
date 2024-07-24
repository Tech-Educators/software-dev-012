const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
  event.preventDefault()
  // create our formData object
  const data = new FormData(form)
  // turn the formData object into a normal object. 
  const myObject = Object.fromEntries(data)
  console.log(myObject)

  fetch('http://localhost:8080/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(myObject)
  })
  // send a post request to localhost:8080
})
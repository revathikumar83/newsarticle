function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    Client.checkForName(JSON.parse(JSON.stringify(formText[0].value)))

    

    console.log("::: Form Submitted :::")
    fetch('http://localhost:3000/testing',{
        method: 'POST',
        body: JSON.stringify({text: formText[0].value}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(data) {
        document.getElementById('results').innerHTML = data.text
        console.log(data);
        alert(dataText);
    })
}

export { handleSubmit }
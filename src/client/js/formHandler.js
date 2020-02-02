function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let text = document.getElementById('name').value

    Client.text
    

        console.log(text)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/api',{
        method: 'POST',
       
        body: JSON.stringify({text}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(data) {
        console.log("Updating the UI!");
        
        document.getElementById('text').innerHTML = `text: ${data.text} <br>`
        document.getElementById('polarity').innerHTML = `polarity: ${data.polarity} <br>`
        document.getElementById('polarity_confidence').innerHTML = `polarity_confidence: ${data.polarity_confidence} <br>`
        document.getElementById('subjectivity').innerHTML = `subjectivity: ${data.subjectivity} <br>`
        document.getElementById('subjectivity_confidence').innerHTML = `subjectivity_confidence: ${data.subjectivity_confidence}`

        console.log(data);
        
    }).catch(err => console.log(err));

}



export { handleSubmit }
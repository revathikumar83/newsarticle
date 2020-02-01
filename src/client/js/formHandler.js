function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let text = document.getElementById('name').value

    Client.text
    

        console.log(text)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:3000/api',{
        method: 'POST',
       
        body: JSON.stringify({text}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(data) {
        document.getElementById('results').innerHTML =  `Polarity:${data.polarity} <br>  Polarity Confidence: ${data.polarity_confidence} <br> subjectivity confidence:${data.subjectivity_confidence}`
        console.log(data);
        
    })

}



export { handleSubmit }
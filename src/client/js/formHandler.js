function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let text = document.getElementById('name').value
    
    if (!text) return;

    console.log(text)

    console.log("::: Form Submitted :::")
    fetch('/api',{
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({text}),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(data) {
        document.getElementById('results').innerHTML =  `${data.polarity}`//`Polarity:${data.polarity} <br>  Polarity Confidence: ${data.polarity_confidence} <br> subjectivity confidence:${data.subjectivity_confidence}`
        console.log(data);
        
    })

}



export { handleSubmit }
let apiUrl = "https://api.quotable.io/random"

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function getAdvice() {
    jsondata2 = await getJson(apiUrl);
    document.getElementById('quote').innerText = jsondata2.content;
    document.getElementById('author').innerText = '- ' + jsondata2.author;
}

getAdvice();

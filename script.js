const serachinput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((Response) => Response.json())
        .then((result) => displayResult(result));
}

function displayResult(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');

    result.foreach (Element => {
        artistName.innerText = Element.name;
        artistImg.src = Element.urlImg;
    })

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const  searchTerm = serachinput.value.tolowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
});
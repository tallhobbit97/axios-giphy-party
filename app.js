const giphyToken = 'xXw5WpaZc0cBupdIdR1EC7OapuaPj5L1';

async function findGif (q){
    const searchResult = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q, api_key: giphyToken}});
    console.log(searchResult.data.data[0]);
    const gifURL = await searchResult.data.data[0].images.original.url;
    appendGif(gifURL);
}

async function appendGif (url){
    $('#gif-container').append(`<img src="${url}">`);
    // const container = document.querySelector('#gif-container');
    // const newImg = document.createElement('img');
    // newImg.innerText = url;
    // container.append(newImg);
}

$('#remove').on('click', (e) => {
    e.preventDefault();
    $('#gif-container').empty();
});
$('form').on('submit', (e) => {
    e.preventDefault();
    const searchTerm = $('#search').val();
    findGif(searchTerm);
});
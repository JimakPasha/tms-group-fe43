const API_KEY = 'wk0c3jD0ePdbXPlpPDIH';

function getData(url) {
    return fetch(url, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            throw new Error(data.error);
        }
        return data;
    })
    .catch(error => {
        throw new Error(error);
    });
}

function showCharacters(characters) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = '';
    characters.forEach(character => {
        const li = document.createElement('li');
        li.textContent = character.name;
        characterList.appendChild(li);
    });
}

function sortListAZ() {
    const characterList = document.getElementById('character-list');
    const listItems = Array.from(characterList.getElementsByTagName('li'));
    listItems.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    listItems.forEach(item => characterList.appendChild(item));
}

function sortListZA() {
    const characterList = document.getElementById('character-list');
    const listItems = Array.from(characterList.getElementsByTagName('li'));
    listItems.sort(function(a, b) {
        return b.textContent.localeCompare(a.textContent);
    });
    listItems.forEach(item => characterList.appendChild(item));
}

document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://the-one-api.dev/v2/character';
    getData(url).then(response => {
        showCharacters(response.docs);
    }).catch(error => {
        console.log(error);
    });
});
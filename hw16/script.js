const getList = document.querySelector('.getList');
const sortUp = document.querySelector('.sortUp');
const sortDown = document.querySelector('.sortDown');
const apiUrl = 'https://the-one-api.dev/v2/character';
const apiKey = '6DmzZo-Pfl5eDDmXRt7K';

const getCharacters = (sortOrder) => {
    const queryParams = `?sort=name:${sortOrder}`;

    fetch(apiUrl + queryParams, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
    })
        .then(response => response.json())
        .then(data => {
            const charactersList = document.getElementById('list');
            charactersList.innerHTML = '';

            data.docs.forEach(({ name, race, gender }) => {
                const characterItem = document.createElement('li');
                characterItem.innerHTML = `
                    <span class="character">Character:</span> ${name},
                    <span class="race">Race:</span> ${race},
                    <span class="gender">Gender:</span> ${gender}`;
                charactersList.appendChild(characterItem);
            });
        })
        .catch(() => {
            const element = document.createElement('div');
            element.innerText = 'Так падажжи... Что-то не так'
            charactersList.append(element)
        });
};

getList.addEventListener('click', () => {
    getCharacters();
})

sortUp.addEventListener('click', () => {
    getCharacters('asc');
});
sortDown.addEventListener('click', () => {
    getCharacters('desc');
});

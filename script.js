var LANGUAGES = {
    'eng': {
        hello: 'HELLO',
        mynameis: 'MY NAME IS'
    },
    'esp': {
        hello: 'HOLA',
        mynameis: 'ME LLAMO'
    },
    'fra': {
        hello: 'BONJOUR',
        mynameis: 'JE M\'APPELLE'
    }
}

const params = new URLSearchParams(window.location.search);

window.onload = function() {
    document.getElementById('nametag-name').textContent = params.get('name');
    document.getElementById('name').value = params.get('name');

    var language = params.get('language')

    if (language) {
        document.getElementById('hello').textContent = LANGUAGES[language].hello;
        document.getElementById('mynameis').textContent = LANGUAGES[language].mynameis;
        document.getElementById('language').value = language;
    }

    var tagColor = params.get('tag-color')
    document.getElementById('nametag').style.backgroundColor = tagColor;
    if (tagColor) {
        document.getElementById('tag-color').value = tagColor;
    }

    var nameColor = params.get('name-color')
    document.getElementById('nametag-name').style.color = nameColor;
    if (nameColor) {
        document.getElementById('name-color').value = nameColor;
    }
}
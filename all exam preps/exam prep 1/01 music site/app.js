window.addEventListener('load', solve);

function solve() {
    const inputs = {
        genre: document.getElementById('genre'),
        nameOfSong: document.getElementById('name'),
        author: document.getElementById('author'),
        dateOfRelease: document.getElementById('date'),
    };

    const sections = {
        collectionOfSongs: document.querySelector('.all-hits-container'),
        totalLikes: document.querySelector('.likes p'),
        savedSongs: document.querySelector('.saved-container')
    }

    document.getElementById('add-btn').addEventListener('click', (e) => {
        e.preventDefault();
        const genre = inputs.genre.value;
        const name = inputs.nameOfSong.value;
        const author = inputs.author.value;
        const releaseDate = inputs.dateOfRelease.value;

        if (genre == '' || name == '' || author == '' || releaseDate == '') {
            return;
        }

        const div = genereteEl('div', '', sections.collectionOfSongs, { class: 'hits-info' });
        const img = genereteEl('img', '', div, { src: './static/img/img.png' });
        const h2One = genereteEl('h2', `Genre: ${genre}`, div);
        const h2Two = genereteEl('h2', `Name: ${name}`, div);
        const h2Three = genereteEl('h2', `Author: ${author}`, div);
        const h3 = genereteEl('h3', `Date: ${releaseDate}`, div);
        const saveBtn = genereteEl('button', 'Save song', div, { class: 'save-btn' });
        const likeBtn = genereteEl('button', 'Like song', div, { class: 'like-btn' });
        const deleteBtn = genereteEl('button', 'Delete', div, { class: 'delete-btn' });

        deleteBtn.addEventListener('click', deleteSong);

        inputs.genre.value = '';
        inputs.nameOfSong.value = '';
        inputs.author.value = '';
        inputs.dateOfRelease.value = '';

        likeBtn.addEventListener('click', (e) => {
            e.target.disabled = true;
            let likeCounter = sections.totalLikes.textContent.replace('Total Likes: ', '');
            likeCounter = Number(likeCounter);
            likeCounter++;

            sections.totalLikes.textContent = `Total Likes: ${likeCounter}`

        });

        saveBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            likeBtn.remove();
            saveBtn.remove();
            sections.savedSongs.appendChild(div);
        })

        function deleteSong(e) {
            e.target.parentElement.remove();
        }

    });

    function genereteEl(typeEl, content, parent, attributes) {
        const el = document.createElement(typeEl);
        el.textContent = content;
        if (attributes) {
            for (const prop in attributes) {
                el.setAttribute(prop, attributes[prop]);
            }
        }
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }


}
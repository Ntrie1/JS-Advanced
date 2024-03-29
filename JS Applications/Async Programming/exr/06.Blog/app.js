function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPost);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);

    const posts = [];
    async function loadPost(){

        try {
            const url = 'http://localhost:3030/jsonstore/blog/posts';
            const res = await fetch(url)
            if(!res.ok){
                throw new Error();
            }
            const data = await res.json();
            document.getElementById('posts').innerHTML - '';

            Object.entries(data).forEach(([key, value])=>{
                const optionElement = document.createElement('option');
                optionElement.value = key;
                optionElement.textContent = value.title;
                document.getElementById('posts').appendChild(optionElement);
                posts.push({title: value.title, body: value.body})
            })
        } catch (e) {
            console.log(e);
        }
    }

    async function viewPost(){
        try {
            const selectedElement = document.getElementById('posts');
            const url = 'http://localhost:3030/jsonstore/blog/comments'
            const res = await fetch(url);
            if(!res.ok) throw new Error();

            const data = await res.json();
            const comments = Object.values(data).filter(el => el.postId === selectedElement.value)

            document.getElementById('post-title').textContent = selectedElement.selectedOptions[0].textContent;
            const po = posts.filter(p => p.title === selectedElement.selectedOptions[0].textContent);
           
            document.getElementById('post-body').innerHTML = `${po[0].body}`;
            document.getElementById('post-comments').innerHTML = '';

           
            comments.forEach(el=>{
                const liElement = document.createElement('li');
                liElement.textContent = el.text;
                document.getElementById('post-comments').appendChild(liElement)
            })
            


            
        } catch (e) {
            console.log(e);
        }
    }

}

attachEvents();
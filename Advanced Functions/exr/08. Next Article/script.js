function getArticleGenerator(articles) {
    let theArticles = Array.from(articles);
    let content = document.getElementById('content');

    return () =>{
        if(theArticles.length === 0){
            return;
        }
        let currentArticle = theArticles.shift();
        content.innerHTML += `<article>${currentArticle}</article>`;
    }
}

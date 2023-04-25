async function solution() {
   try {
      let main = document.getElementById('main');
      const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
      const response = await fetch(url);

      if (response.ok === false) throw new Error('Error obtaining article list');

      const data = await response.json();

      data.forEach((article) => {
         let divElement = document.createElement('div');
         divElement.classList.add('accordion');

         divElement.innerHTML = ` <div class="head">
      <span>${article.title}</span>
      <button class="button" id="${article._id}" onclick="moreOnclick(event)">More</button
     </div>
     <div class="extra"></div>`;
     
     main.appendChild(divElement)
   });
   
} catch (error) {
   console.log(error);
}
}

   async function moreOnclick(e){
      try {
         let currentTarget = e.currentTarget;
         console.log(currentTarget);
         let url = `http://localhost:3030/jsonstore/advanced/articles/details/${currentTarget.id}`;
         let parent = currentTarget.parentNode.parentNode;
         let extraDiv = parent.querySelector('div.extra');

         let respone = await fetch(url);
         if(respone.ok === false) throw new Error('Error obtaining article details');
         let data = await respone.json();

         extraDiv.innerHTML = `<p>${data.content}</p>`;

         if(currentTarget.textContent === 'More'){
            currentTarget.textContent = 'Less';
            extraDiv.style.display = 'block';
         } else {
            currentTarget.textContent = 'More';
            extraDiv.style.display = 'none';
         }
         
      } catch (error) {
         console.log(error);
      }
   }


solution();
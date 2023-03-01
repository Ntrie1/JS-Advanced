function search() {
  
   let input = document.getElementById("searchText").value;
   let townsEl = document.getElementById("towns");
   let resultDiv = document.getElementById("result");
   
   let counter = 0;
   let arr = Array.from(townsEl.children);
   

   for (let match of arr) {
   
      if(match.textContent.includes(input)){
         match.style.fontWeight = "bold";
         match.style.textDecoration = "underline";
         counter++;
      } else{
         match.style.fontWeight = "normal";
         match.style.textDecoration = "none";
      } 
   }
   resultDiv.textContent = `${counter} matches found`;

 


}

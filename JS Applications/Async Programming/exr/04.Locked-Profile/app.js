async function lockedProfile() {
    const mainElement = document.getElementById('main');
 
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        if (!response.ok) throw new Error();
        const data = await response.json();
        mainElement.innerHTML = '';
 
        let i = 0;
        Object.values(data).forEach(element => {
            i++;
            const divProfile = document.createElement('div');
            divProfile.className = "profile";
            mainElement.appendChild(divProfile);
 
            divProfile.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${i}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${i}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${i}Username" value="${element['username']}" disabled readonly />
            <div id="user${i}HiddenFields">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${i}Email" value="${element['email']}" disabled readonly />
                <label>Age:</label>
                <input type="email" name="user${i}Age" value="${element['age']}" disabled readonly />
            </div>
            
            <button>Show more</button>`
            document.getElementById(`user${i}HiddenFields`).style.display = 'none';
 
        })
 
 
        const btns = [...document.getElementsByTagName('button')];
        btns.forEach(btn => btn.addEventListener('click', showHide));
 
        function showHide(event) {
            const button = event.target;
            const profile = button.parentNode;
            const moreInformation = profile.getElementsByTagName('div')[0];
            const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
 
            if (lockStatus === 'unlock') {
                if (button.textContent === 'Show more') {
                    moreInformation.style.display = 'block';
                    button.textContent = 'Hide it';
                } else if (button.textContent === 'Hide it') {
                    moreInformation.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        }
 
    } catch (error) {
        console.log(error);
    }
 
}


// async function lockedProfile() {

//     try {
//         let url = "http://localhost:3030/jsonstore/advanced/profiles";
//         let response = await fetch(url);

//         if (response.ok === false) {
//             throw new Error("Error obtaining profiles");
//         }

//         let data = await response.json();
//         console.log(data)

//         Object.values(data).forEach((profile) => {
//             let div = document.createElement("div");
//             let button = document.createElement("button");
//             button.innerHTML = "Show more";
//             div.classList.add("profile");
//             div.innerHTML = `<img src="./iconProfile2.png" class="userIcon">
//             <label>Lock</label>
//             <input type="radio" name="user${profile._id}Locked" value="lock" checked="">
//             <label>Unlock</label>
//             <input type="radio" name="user${profile._id}Locked" value="unlock"><br>
//             <hr>
//             <label>Username</label>
//             <input type="text" name="user${profile._id}Username" value=${profile.username} disabled="" readonly="">
//             <div id="user${profile._id}HiddenFields">
//             <hr>
//             <label>Email:</label>
//             <input type="email" name="user${profile._id}Email" value=${profile.email} disabled="" readonly="">
//             <label>Age:</label>
//             <input type="email" name="user${profile._id}Age" value=${profile.age} disabled="" readonly="">
//             </div>`;

//             let main = document.querySelector("main");
//             main.innerHTML = "";
//             div.appendChild(button);
//             main.appendChild(div);

//             button.addEventListener("click", reveal);

//             function reveal(event) {
//                 let checked = div.querySelector("input[type=radio]:checked");
//                 if (checked && checked.value === "unlock") {
//                     if (event.target.textContent === "Show more") {
//                         div.querySelector(`#user${profile._id}HiddenFields`).style.display = "block";
//                         event.target.textContent = "Hide it";
//                     } else {
//                         div.querySelector(`#user${profile._id}HiddenFields`).style.display = "none";
//                         event.target.textContent = "Show more";
//                     }
//                 }
//             }
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
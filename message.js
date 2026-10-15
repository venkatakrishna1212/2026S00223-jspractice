//////*******local********////////

//syntax
//localstorage.setitem('key');//read it back
//localstorage.setitem('key','value');//save a value under a key
//localstorage.setitem('key');//delete it
//JSON.prase(string);//->JS value(for reading back)
//JSON.stringify(value);//JS value ->string (for saving)


//1.Read messaage from localstorage

// function getSavedMessages(){
//     const stored = localStorage.getitem("contactMessage");

//     if(stored === null){
//         return{};
//     }

//     try{
//         const messaage = JSON.parse(storage);
//         //make sure the saved data is an array
//         return
//     }catch(error){
//         console.error("could not parse saved messages:",error);
//         return[];
//     }
// }
      
// //2. display all saved messages on the page 
// function renderMessages(){
//     const messages = getSavedMessages();
//     const container = document.querySelector("#message-list");

//     //remove th eprevious content
//     container.replaceChildren();

//     //show a message if the array is empty
//     if(messages.length === 0){
//         const emptyMessage = document.querySelector("p");
//         emptyMessage.textContent = "No messages stored yet."
//         container.appendChild(emptyMessage);
//         return;
//     }

//     //create a card every message 
//     messages.forEach(function(msg){
//         const card = document.createElement("div")
//         card.className = "card";

//         const nameElement = document.createElement("p");
//         const nameBold = document.createEvent("strong");
//         nameBold.textContent = msg.message;
//         nameElement.appendChild(nameBold);

//         const messageElement = document.createElement("p");
//         messageElement.textContent = msg.message;

//         const timeElement = document.createElement("p");
//         timeElement.className= "timestamp";

//         //display timestamp if available
//         if(msg.timestamp){
//             const date = new Date(msg.timestamp);

//             timeElement.textContent = "saved:" 
//             + date.toLocaleDateString();
//         }

//         card.appendChild(nameElement);
//         card.appendChild(messageElement);

//         if(msg.timestamp){
//             card.appendChild(timeElement);
//         }

//         container.appendChild(card);
//     });
// }

// //3. save a new message//

// function saveMessage(name,message){
//     //get all previously saved messages

//     const messages =getSavedMessages();

//     //create a new message object//
//     const newMessage ={
//         name:name,
//         message:message,
//         timestamp:new Date().toISOString()
//     };

//     //add the new object to the array
//     messages.push(newMessage);

//     //convert the array into JSON text and save it 
//     localStorage.setItem(
//         "contactMessages",
//         JSON.stringify(messages));
//     }
    
//     //4. handle from submission

//     const form=document.querySelector("#message-from");

//     form.addEventListener('submit',function(event){
//         //prevent the page  from reloading
//         event.preventDefault();

//         const nameInput=document.querySelector("#username").ariaValueMax.trim();
//         const msgInput=document.querySelector("#user-msg").ariaValueMax.trim();
//         //do not save empty values
//         if(nameInput===""||msgInput===""){
//             return;
//         }
//         try{
//             saveMessage(nameInput,msgInput);
//             //refresh the displayed list 
//             renderMessages();
//             //clear the nform inputs
//             form.reset();
//         }catch(error){
//             console.error("could not save messages:",error);
//             alert("Unable to save.check broswer storage setting.");
//         }
//     });

//     ///5. handle the  clear the all button
//     document
//     .querySelector("#clear-btn")
//     .addEventListener("click",function(){
//         localStorage.removeItem("contactMessages");
//         renderMessages();
//     });

//     //6. display previously saved message on page load 
//     renderMessages();


    ///////////*******/////////



    // console.log("1. ordering food...");
    // console.log("3. Food's Ready!(REsponse come back");
    // console.log("2. while waitingdoing other things...");

// async function testgithubfetch(){
//         const username ="venkatakrishna1212";
//         const response = await fetch (`https://api.github.com/users/${username}`)
//         const data = await response.json();
//         console.log(data);
        
// }
// testgithubfetch();

// function renderGitHubCard(user){
//     const container = document.getElementById("gitHubCard");
//     container.innerHTML = `
//     <div class="gitHub-Card">
//     <img src="${user.avatar_url}" class="github-avatar">
//     <h3>${user.name ? user.name : user.login}</h3>
//     </div>`;
// } 
// async function loadGitHubActivity(){
//     const username = "venkatakrishna1212";
//     const response = await fetch(`https://api.github.com/users/${username}`); 
//     const user = await response.json();
//     console.log(user);
// }

// loadGitHubActivity();

///////////problem///////////

function renderStudentCard(students) {
    const container = document.getElementById("student-container");

    container.innerHTML = students.map((student) => `
        <div class="student-card">
            <h2>${student.fullName}</h2>
            <p>Email: ${student.email}</p>
            <p>Mobile: ${student.mobile}</p>
        </div>
    `).join("");
}

async function loadStudent() {
    try {
        const response = await fetch(
            "https://dummyjson.com/c/b53c-2315-4592-b278"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch student data");                                     
        }

        const students = await response.json();

        console.log(students);

        renderStudentCard(
            Array.isArray(students) ? students : [students]
        );
    } catch (error) {
        console.error("Error loading students:", error);
    }
}

loadStudent();          

    
 



















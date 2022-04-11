// import {firebase} from "./firebase.js"
import{db, set,ref,auth,createUserWithEmailAndPassword,onAuthStateChanged} from "./firebase.js"

// console.log(DB);

let button = document.querySelector("#button"); 
let Email,Password,Name,Designation;




let id=0,data = "";

button.addEventListener("click",save)

Designation = document.querySelector(".designation");
console.log(Designation)
let val=Designation.value;
    Designation.addEventListener("click",Desig)
    function Desig()
    {
        console.log(val);
    }

function save()
{
    Email = document.querySelector("#email").value;
    Name = document.querySelector("#name").value;
    Password = document.querySelector("#password").value;
    
    

    createUserWithEmailAndPassword(auth,Email,Password)
    .then((userCredential)=>
    {

        const user = userCredential.user;
        set(ref(db,"Info/"+(id+=1)+"/"),
        {
            name:Name,
            email:Email,
            designation: Designation,
        })
        .then(()=>{
            console.log("Stored");
        })
        .catch(()=>{
            console.log("error");
        })

    })
    .catch((error)=>{
        console.log(error.message);
    })
    console.log("inside function");

    // function uniqueIDFetch() 
    // {
    //     const databaseRef = ref(db);
    //     get(child(databaseRef, "ID")).then((snapshot) => 
    //     {
    //         if (snapshot.exists()) 
    //         {
    //             Uniqueid = snapshot.val();
        
    //         }
    //     });
    // }
    onAuthStateChanged(auth,(user) => {
        if (user) {
          var email = user.email;
          alert("Active user " + email);
          // document. getElementById("user").innerHTML="hello"+user.username
    
        } else {
          alert("No Active user Found")
        }
      })
}


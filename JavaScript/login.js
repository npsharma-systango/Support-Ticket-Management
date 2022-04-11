import{db, set,ref,auth,signInWithEmailAndPassword,onAuthStateChanged} from "./firebase.js"

let login = document.querySelector("#login");
let email,password;


login.addEventListener("click",logIn);

function logIn()
{
    email = document.querySelector("#email");
    password = document.querySelector("#password");
    console.log(email.value);
    const PROMISE = signInWithEmailAndPassword(auth,email.value,password.value);
    
    PROMISE.then(()=>{
        console.log("Valid User")
    })
    .catch((error)=>
    {
        console.log(error.message);
    })
    
}

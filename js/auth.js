

// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        // get data
        // db.collection('guides').get().then(snapshot => {
        //     setupGuides(snapshot.docs);
        // });
        document.getElementById('logout').style.display = 'block';
        document.getElementById('container').style.display = 'none';
    } else {
        // setupGuides([]);
        document.getElementById('logout').style.display = 'none';
        document.getElementById('container').style.display = 'block';
        
    }
});


// signup
function signup(){
    
    // get user info
    var userFullName = document.getElementById("fullname").value;
    var userEmail = document.getElementById("signup-email").value;
    var userPassword = document.getElementById("signup-password").value;
      
    // sign up the user
    auth.createUserWithEmailAndPassword(userEmail, userPassword);
}

// logout 

const logout = document.querySelector("#logout");
logout.addEventListener('click',(e) => {
    e.preventDefault();
    auth.signOut();
});


// login
function signin(){
   
   // get user info
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   
   auth.signInWithEmailAndPassword(email, password).then(cred => {
    //   console.log(cred.user)
   });
}















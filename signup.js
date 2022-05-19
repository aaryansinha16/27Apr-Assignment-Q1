document.querySelector("#form").addEventListener("submit",signFun )

var loginDetails = JSON.parse(localStorage.getItem("loginList"))

// var signupArr = JSON.parse(localStorage.getItem("signupList")) || []
console.log(loginDetails)
function signFun(){
    event.preventDefault()

    var signupObj = {
        username :form.signupUsername.value,
        email : form.signupEmail.value,
        password : form.signupPass.value
    }

    // console.log(signupObj)
    // console.log(loginDetails.email)

    // if(signupObj.email  == signupDetails.email){
    //     alert("Email used")
    // }
    if(loginDetails == null || signupObj.email != loginDetails.email){
        alert("SignUp successful!")
        localStorage.setItem("signupList", JSON.stringify(signupObj))
        window.location.href = "login.html"
    }
    else {
        alert("Email already used!")
    }

}


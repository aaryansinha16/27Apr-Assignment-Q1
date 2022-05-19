var loginData = JSON.parse(localStorage.getItem("loginList"))

    var user = document.querySelector("#logSign")
    if(loginData != null){
        user.innerHTML = `<a href = "#"> ${loginData.username} </a>
                <a href="cart.html">Cart</a>`
    }

document.querySelector("#links a").addEventListener("click", mensFun)
document.querySelector("#links a:nth-child(2)").addEventListener("click", womensFun)
    

function mensFun(){
    event.preventDefault()
    if(loginData != null){
        console.log("hello there")
        window.location.href = "mens.html"
    }
    else{
        alert("Login first to buy products!")
        window.location.href = "login.html"
    }
}
function womensFun(){
    event.preventDefault()
    if(loginData != null){
        console.log("hello there")
        window.location.href = "womens.html"
    }
    else{
        window.location.href = "login.html"
        alert("Login first to buy products!")
    }
}
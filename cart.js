var cartDetails = JSON.parse(localStorage.getItem("cartList"))

var totalPrice = document.querySelector("#totalPrice")
var items = document.querySelector("#items")

var coupon = document.querySelector("#coupon")

console.log(cartDetails)

var total = 0;
var count = 0;

displayData(cartDetails)

  function displayData(data){
    console.log(data)
    data.forEach(function(elem , index){
      // console.log(elem)
      var box = document.createElement("div")

      var imgLink = document.createElement("a")
      imgLink.setAttribute("href", "index.html")

      var img = document.createElement("img")
      img.setAttribute("src", elem.image_url)
      img.setAttribute("class","productImg")

      var name = document.createElement("h3")
      name.innerText = elem.name
      name.setAttribute("class", "name")

      var priceBox = document.createElement("div")
      priceBox.setAttribute("class", "priceBox")

      var price = document.createElement("p")
      price.innerText = "Rs." + elem.price
      price.setAttribute("class", "price")

      var strikeOff = document.createElement("p")
      strikeOff.innerText = "Rs" + elem.strikedoffprice
      strikeOff.setAttribute("class", "strikeOff")

      var del = document.createElement("button")
      del.innerText = "Remove From Cart"
      del.setAttribute("id", "del")
      del.style.color = "red"
      del.addEventListener("click", function(){
        delt(elem, index)
      })

      total = total + elem.price
      count++;
      
      imgLink.append(img)
      priceBox.append(price,strikeOff)

      box.append(imgLink, name, priceBox, del)
      // console.log(box)

      document.querySelector("#container").append(box)
  })
  }

  function delt(elem, index){
      alert("This item will be removed")
      cartDetails.splice(index, 1)
      localStorage.setItem("cartList", JSON.stringify(cartDetails))
      console.log(cartDetails)
      window.location.reload()
  }

  document.querySelector(".deltAll").addEventListener("click", function(elem){
      alert("All items would be removed")
      cartDetails = []
      localStorage.setItem("cartList", JSON.stringify(cartDetails))
      window.location.reload()
  })

  console.log(total) 

  coupon.addEventListener("submit", couponFun)
  // var code = document.querySelector("#code").value
  var discount = Math.floor((30*total)/100)
  console.log(discount)
  
  totalPrice.innerText = "Cart Total: Rs " + total
  
  function couponFun(event){
    var code = document.querySelector("#code").value
    console.log(code)
    event.preventDefault()
    if(code == "masai30"){
      totalPrice.innerText = "Cart Total: Rs " + (total - discount)
    }
  }

  
  items.innerText = "Items in Cart: " + count
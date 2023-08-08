var a = document.getElementById("user").value;
 var b = document.getElementById("no").value;
var c = document.getElementById("email").value;
var d = document.getElementById("password").value;
window.onload = function () {
    var buttonElement = document.getElementById("change");
   var s = document.getElementById("sub");
      buttonElement.addEventListener('click', f);
  s.addEventListener("click",sign_up )
    function f() {
      document.body.style.backgroundImage = "url('images/2.jpg')"
  
    document.getElementById("id123").style.color = "violet";
    document.getElementById("id123").innerHTML = "Hasan and Umar Programmers";
    alert("Dialogue box changed")
    }
    function sign_up()
    {

      
var u = "hasan123";
var n = "03491171981";
var m = "hasanahmad1302003@gmail.com";
var p = "pirogrammer"
if( a==u &&b==n&&c==m&&d==p)   
{
  alert("Access Granted!!!!!!!")
   
  }
  else{
   alert("Incorrect Username or email or password or phone No.!!");
  }



// console.warn("Warning")
// var num1 = 15
// var num2 = 30
// var str1 = "Hasan"
// var str2 = " Umer"
// //Objects
// var obj = {"hasan":21,
//     "Umer":22,
//     "Ali":69}
// console.log(obj["hasan"])
// //array
// var arr = [1,3,4,5,3,42,5]
// console.log(arr)
// var a = 69
// var b = 69
// console.log(a==b)
// function add(a,b)
// {
//     return a+b
// }
//  c = add(6,9)
//  console.log(c)
//  //conditions if else in JAVASCRIPT
//  var a=6
//  var b = 9
//  if(b>=a)
//  {
//     console.log(b + " is greater than  "+ a)
//  }
//  //for loop In JavaScript
//  var n = 5
//  var fact = 1;
//  for(var i=1;i<=n;i++)
//  {
// fact = fact*i

//  }
//  console.log(fact)
//  //For Each Loop
//  arr.forEach(function(element)
//  {
// console.log(element)

//  })
//  arr.push("Hasan")
//  console.log(arr)
// //  Date In JS
// var date = new Date();
// console.log(date.getFullYear())
// const button = document.getElementById("change");
// //const body = document.body;
// const colors = ['red','green','blue'];
// body.style.backgroundColor = colors[1]

// button.addEventListener('click',changebaclground)
// function changebaclground(){
//    document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=')"
// }

  // 👇️ optionally change text color
  // document.body.style.color = 'white';

// Background Change by button


}}
//part 1
let mainEl = document.querySelector("#main");

mainEl.style.backgroundColor =  'var(--main-bg)'

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

mainEl.classList.add("flex-ctr")
//part 2
let topMenuEl = document.getElementById("top-menu")

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

topMenuEl.classList.add("flex-around")
//part 3
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

for(menu of menuLinks){
    const newA = document.createElement("a")
    newA.innerText = menu.text
    newA.href = menu.href
    topMenuEl.append(newA)
}

//part 4
let subMenuEl = document.getElementById("sub-menu")

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = "var(--top-menu-bg)"

subMenuEl.classList.add("flex-around")

//subMenuEl.style.position = "absolute"

//subMenuEl.style.top =  "0"

//part 5
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//I got stuck up until this point

//   topMenuEl.addEventListener("click",(event)=>{
//     event.preventDefault();
//     if(event.target.nodeName !== "A" ) {
//     return;
//     } 
    
//   for(a of topMenuLinks){
//         a.classList.remove("active")
//       }

//   event.target.classList.add("active") 

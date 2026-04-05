const services = [

/* DOCUMENTS */
{name:"Aadhaar",icon:"https://th.bing.com/th/id/OIP.5wN-6Ot1ZWwi6kTgZet_dAHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",link:"https://uidai.gov.in"},
{name:"Voter ID",icon:"https://th.bing.com/th/id/OIP.hX5tECt-qT6moY_dcmYpUAHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",link:"https://voters.eci.gov.in/"},
{name:"Passport",icon:"https://img.icons8.com/color/48/passport.png",link:"https://passportindia.gov.in"},
{name:"PAN Card",icon:"https://tse1.mm.bing.net/th/id/OIP.zvYxevK7A5Jq2mLMWxr4kQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",link:"https://tinpan.proteantech.in/"},
{name:"DigiLocker",icon:"https://img.icons8.com/color/48/google-drive.png",link:"https://digilocker.gov.in"},
{name:"Ration Card",icon:"https://www.shutterstock.com/image-photo/dummy-ration-card-on-isolated-600nw-1709946493.jpg",link:"https://mahafood.gov.in/"},
{name:"Birth Certificate",icon:"https://img.icons8.com/color/48/document.png",link:"https://aaplesarkar.mahaonline.gov.in/"},
{name:"Marriage Certificate",icon:"https://img.icons8.com/color/48/certificate.png",link:"https://aaplesarkar.mahaonline.gov.in/"},


/* FINANCE */
{name:"MahaDBT",icon:"https://img.icons8.com/color/48/money.png",link:"https://mahadbt.maharashtra.gov.in"},
{name:"Income Tax",icon:"https://img.icons8.com/color/48/tax.png",link:"https://www.incometax.gov.in/iec/foportal/"},
{name:"EPFO",icon:"https://img.icons8.com/color/48/rupee.png",link:"https://www.epfindia.gov.in"},
{name:"Jan Dhan",icon:"https://img.icons8.com/color/48/bank.png",link:"https://pmjdy.gov.in"},

/* TRANSPORT */
{name:"IRCTC",icon:"https://img.icons8.com/color/48/train.png",link:"https://www.irctc.co.in"},
{name:"MSRTC",icon:"https://img.icons8.com/color/48/bus.png",link:"https://msrtc.maharashtra.gov.in"},
{name:"Driving License",icon:"https://img.icons8.com/color/48/car.png",link:"https://parivahan.gov.in"},

/* UTILITIES */
{name:"Electricity Bill",icon:"https://img.icons8.com/color/48/light-on.png",link:"https://www.mahadiscom.in"},
{name:"Water Bill",icon:"https://img.icons8.com/color/48/water.png",link:"https://portal.mcgm.gov.in/"},
{name:"Property Tax",icon:"https://img.icons8.com/color/48/home.png",link:"https://igrmaharashtra.gov.in/"},
{name:"Gas Booking",icon:"https://img.icons8.com/color/48/gas.png",link:"https://www.hindustanpetroleum.com/"},


/* EDUCATION */
{name:"Scholarship",icon:"https://cdn.vectorstock.com/i/preview-1x/55/05/scholarship-stamp-label-vector-50225505.jpg",link:"https://mahadbt.maharashtra.gov.in/"},
{name:"ABC ID",icon:"https://img.icons8.com/color/48/graduation-cap.png",link:"https://abc.gov.in"},
{name:"eLearning",icon:"https://thumbs.dreamstime.com/b/online-education-elearning-e-learning-icon-blue-vector-sketch-using-print-media-web-design-projects-any-type-commercial-254645411.jpg",link:"https://swayam.gov.in/"},


/* HEALTH */
{name:"Health ID",icon:"https://img.icons8.com/color/48/hospital.png",link:"https://abha.abdm.gov.in/abha/v3/"},
{name:"Ayushman Bharat",icon:"https://img.icons8.com/color/48/heart-health.png",link:"https://beneficiary.nha.gov.in/"},


/* EMPLOYMENT */
{name:"NCS Portal",icon:"https://img.icons8.com/color/48/job.png",link:"https://www.ncs.gov.in"},
{name:"Skill India",icon:"https://img.icons8.com/color/48/training.png",link:"https://www.skillindiadigital.gov.in/home"},


/* EXTRA */
{name:"Police Services",icon:"https://m.media-amazon.com/images/I/61QyTHsLtBL._AC_UF1000,1000_QL80_.jpg",link:"https://www.mahapolice.gov.in/"},
{name:"Court Services",icon:"https://img.icons8.com/color/48/law.png",link:"https://ecourts.gov.in/"},
{name:"Municipal Services",icon:"https://img.icons8.com/color/48/city.png",link:"https://aaplesarkar.mahaonline.gov.in/"}

];

/* LOAD */
const container = document.getElementById("services");

services.forEach(service=>{
  const card=document.createElement("div");
  card.className="card";

  card.innerHTML=`
    <span class="fav">⭐</span>
    <img src="${service.icon}">
    <h3>${service.name}</h3>
    <a href="${service.link}" target="_blank">Open</a>
  `;

  container.appendChild(card);
});
document.addEventListener("click", function(e){
  if(e.target.tagName === "A"){
    let name = e.target.parentElement.querySelector("h3").innerText;

    let usage = JSON.parse(localStorage.getItem("usage")) || {};

    usage[name] = (usage[name] || 0) + 1;

    localStorage.setItem("usage", JSON.stringify(usage));
  }
});
document.addEventListener("click", function(e){
  if(e.target.classList.contains("fav")){
    let name = e.target.parentElement.querySelector("h3").innerText;

    let favs = JSON.parse(localStorage.getItem("fav")) || [];

    if(favs.includes(name)){
      favs = favs.filter(f => f !== name);
      e.target.style.color="black";
    }else{
      favs.push(name);
      e.target.style.color="gold";
    }

    localStorage.setItem("fav", JSON.stringify(favs));
  }
});

/* SEARCH */
document.getElementById("search").addEventListener("keyup",function(){
  let value=this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card=>{
    card.style.display=card.innerText.toLowerCase().includes(value)?"block":"none";
  });
});
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card").forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};
function showMostUsed(){
  let usage = JSON.parse(localStorage.getItem("usage")) || {};

  let sorted = Object.entries(usage)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,5);

  const container = document.getElementById("mostUsed");
  container.innerHTML="";

  sorted.forEach(([name])=>{
    let service = services.find(s=>s.name===name);
    if(service){
      container.innerHTML += `
  <div class="card" onclick="openService('${service.link}')">
    <img src="${service.icon}">
    <h3>${service.name}</h3>
  </div>
`;
    }
  });
}

showMostUsed();
document.addEventListener("click", function(e){
  if(e.target.tagName === "A"){
    let name = e.target.parentElement.querySelector("h3").innerText;

    let recent = JSON.parse(localStorage.getItem("recent")) || [];

    recent.unshift(name);
    recent = [...new Set(recent)].slice(0,5);

    localStorage.setItem("recent", JSON.stringify(recent));
  }
});
function showRecent(){
  let recent = JSON.parse(localStorage.getItem("recent")) || [];

  const container = document.getElementById("recentList");
  container.innerHTML="";

  recent.forEach(name=>{
    let service = services.find(s=>s.name===name);
    if(service){
      container.innerHTML += `
  <div class="card" onclick="openService('${service.link}')">
    <img src="${service.icon}">
    <h3>${service.name}</h3>
  </div>
`;
    }
  });
}

showRecent();
function showFav(){
  let favs = JSON.parse(localStorage.getItem("fav")) || [];

  const container = document.getElementById("favList");
  if(!container) return;

  container.innerHTML="";

  favs.forEach(name=>{
    let service = services.find(s=>s.name===name);
    if(service){
      container.innerHTML += `
  <div class="card" onclick="openService('${service.link}')">
    <img src="${service.icon}">
    <h3>${service.name}</h3>
  </div>
`;
    }
  });
}

showFav();
function openService(link){
  const loader = document.getElementById("loader");

  loader.style.display = "flex";

  setTimeout(()=>{
    window.open(link, "_blank");
    loader.style.display = "none";
  },800);
}
document.addEventListener("click", function(e){
  if(e.target.closest(".card")){
    const card = e.target.closest(".card");

    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = card.getBoundingClientRect();

    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    card.appendChild(circle);

    setTimeout(()=>circle.remove(),600);
  }
});
document.addEventListener("click", function(e){
  if(e.target.closest(".card")){
    const name = e.target.closest(".card").querySelector("h3").innerText;

    let count = JSON.parse(localStorage.getItem("clickCount")) || {};
    count[name] = (count[name] || 0) + 1;

    localStorage.setItem("clickCount", JSON.stringify(count));
  }
});

// scroll function
function scrollToSection(id){
  const el = document.getElementById(id);
  if(el){
    el.scrollIntoView({behavior:"smooth"});
  }
}

// dark mode toggle
function toggleDark(){
  document.body.classList.toggle("dark");
}


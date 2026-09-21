const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav");
if(menuBtn){
  menuBtn.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded",open);
  });
}
document.querySelectorAll(".nav a").forEach(a=>{
  a.addEventListener("click",()=>nav.classList.remove("open"));
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll(".nav a")];
window.addEventListener("scroll",()=>{
  let current="accueil";
  sections.forEach(section=>{
    if(window.scrollY >= section.offsetTop-140) current=section.id;
  });
  links.forEach(link=>{
    link.classList.toggle("active",link.getAttribute("href")==="#"+current);
  });
},{passive:true});

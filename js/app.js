
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// js code by maryem aboziada to do the motions of a landing page of udacity 1st project

//save data into variable
//Define Global Variables
const header = document.querySelector('.page__header');
const naviBar = document.querySelector('.navbar__menu'); 
const naviList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
// End Global Variables

//Begin Main Functions

// build the navi
function buildTheNav(){
    sections.forEach(section=> {
        const navClick = document.createElement('li'); // created the navi click butten
        navClick.insertAdjacentHTML("afterbegin", '<a href = "#${section.id" class="menu__link"> ${section.dataset.nav"}</a>'); // added html text to the navi list
        naviList.appendChild(navClick); // append the TEXT we added
        ScrollNavi(navClick , section); 
    } );
    naviBar.appendChild(naviList); // append the list we added to navibar
}
 buildTheNav(); 


//manage scrolling using scrolligTo event 
function scrolligBehavior (navClick,section){
    navClick.addEventListener ('click',function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    });
}

//Add class 'active' to section when near top of viewport
function activeSection (){
    const naviActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i )=>{
        const sectionBond = section.getBoundingClientRect();
        if(sectionBond.top<=380 && sectionBond.bottom >= 350){
            section.classList.add("your-active-class");
            naviActive[i].classList.add("active_button");
        } else{
            section.classList.remove("your-active-class");
            naviActive[i].classList.remove("active_button");
        }
    })
}

//Scroll to anchor ID using scrollTO event
function toggleNaviBar(){
    let userScroll;
    header.style.cssText = 'opacity: 0; transition: ease 0.3s;'
    window.clearTimeout(userScroll);
    userScroll = setTimeout(function(){
        header.style.cssText = 'opacity: 0; transition: ease 0.3s;'
    }, 5000);
}

//End Main Functions


//Scroll to section on link click
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNaviBar();
})

//create the div element 
const goUpBtn = footer.insertAdjacentHTML("beforebegin", '<div Id="return_top"></div>');

//scroll top 
document.getElementById("return_top").addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior :"smooth"
    });
});



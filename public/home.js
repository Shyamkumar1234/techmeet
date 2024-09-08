
function searchPerson(){
    let inputVal = document.getElementById('searchPerson').value;
    location.href = `/techmeet/${inputVal}`;
}

let homeScreenImg = document.getElementById("homeBkgrnd");

setInterval(()=>{
    homeScreenImg.setAttribute("src", "https://wallpaper.dog/large/268186.jpg");
}, 2000);
setInterval(()=>{
    homeScreenImg.setAttribute("src", "https://focus.flokk.com/hubfs/Blogs/2021/Zoom%20Meeting%20BAckgrounds/Flokk_Teams-Zoom-Background_work_01.jpg");
}, 4000);
setInterval(()=>{
    homeScreenImg.setAttribute("src", "https://wallpaperaccess.com/full/11069686.jpg");
}, 6000);


let checkbtn = document.getElementById('checkbtn');
let checkbtn2 = document.getElementById('checkbtn2');
let sideBar = document.getElementById("sideBar");
checkbtn.addEventListener('click', ()=>{
    sideBar.style.marginLeft = "0";
})
checkbtn2.addEventListener("click", ()=>{
    sideBar.style.marginLeft = "-300px";
})

let cancelbtn = document.getElementById('cancelbtn');
let addForm = document.getElementById('addForm');
let commentLink = document.getElementById('commentLink');
let newBtn = document.getElementById('newBtn');
newBtn.addEventListener("click", ()=>{
    commentLink.style.display = "none";
    addForm.style.display = "block";
})
cancelbtn.addEventListener("click", ()=>{
    commentLink.style.display = "block";
    addForm.style.display = "none";
})

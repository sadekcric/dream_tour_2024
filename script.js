// Navigation for mobile 

let btn=document.getElementById(`nav-btn`);

btn.addEventListener(`click`, function(){
  const mobileList=document.getElementById(`mobile_list_id`);
  mobileList.classList.toggle(`mobile_list`)
})
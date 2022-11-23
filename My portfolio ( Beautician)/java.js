document.querySelector(".menuber").addEventListener('click' , () => {
    document.querySelector('.childmenu').classList.toggle("active");
    document.querySelector('.menu .menuber .one').classList.toggle('activeone');
    document.querySelector('.menu .menuber .two').classList.toggle('activetwo');
    document.querySelector('.menu .menuber .three').classList.toggle('activethree');
});
window.addEventListener('scroll',function () {
    let k = window.scrollY;
    console.log(k)
  let nav =   document.querySelector('.nav');
  if (k > 500) {
    nav.classList.add('nav-child');
  }
else {
  nav.classList.remove('nav-child');
};
let FeatureOne = document.querySelector('.features-one');
let FeatureTwo = document.querySelector('.features-two');
if (k > 400) {
  FeatureOne.classList.add("FeatureOneAdd");
  FeatureTwo.classList.add("FeatureTwoAdd");
}
else{
  FeatureOne.classList.remove("FeatureOneAdd");
  FeatureTwo.classList.remove("FeatureTwoAdd");
};
let servicesOne = document.querySelector(".services-one");
let  servicesTwo = document.querySelector(".services-two");
let servicesThree = document.querySelector(".services-three");
let servicesFour = document.querySelector(".services-four");
if (k > 1000) {
  servicesOne.classList.add('serviceOneAdd');
  servicesTwo.classList.add('serviceTwoAdd');
 
}
else{
  servicesOne.classList.remove("serviceOneAdd");
  servicesTwo.classList.remove("serviceTwoAdd")
  
};
if (k > 1300) {
  servicesThree.classList.add('serviceThreeAdd');
  servicesFour.classList.add('serviceFourAdd');
}
else{
  servicesThree.classList.remove("serviceThreeAdd")
  servicesFour.classList.remove('serviceFourAdd');
}
let cOne = document.querySelector('.cone');
let cTwo = document.querySelector('.ctwo');
let cThree = document.querySelector('.cthree');
if (k > 1800) {
  cOne.classList.add('cOneAdd');
  cTwo.classList.add('cTwoAdd');
  cThree.classList.add('cThreeAdd');
}
else{
  cOne.classList.remove('cOneAdd');
  cTwo.classList.remove('cTwoAdd');
  cThree.classList.remove('cThreeAdd');

};
let FcontactOne = document.querySelector('.fcontact-one');
let FcontactTwo = document.querySelector('.fcontact-two');
if (k > 2000) {
  FcontactOne.classList.add('FcontactOneAdd');
  FcontactTwo.classList.add('FcontactTwoAdd');
}else{
  FcontactOne.classList.remove('FcontactOneAdd');
  FcontactTwo.classList.remove('FcontactTwoAdd');
}
  })

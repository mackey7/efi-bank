
// function for dashboard
const analyse = document.querySelector("#analyse");
const swich = document.querySelector('#swich');
const bank = document.querySelector('#bank');
const payment = document.querySelector('#payment');
swich.addEventListener("click", function (event) {
    const target = event.target;
    analyse.classList.toggle('hidden');
    analyse.classList.toggle('analyse-container')
    console.log(target, analyse);

});

bank.addEventListener("click", function () {
    window.location.assign("./dashboard.html")
});


payment.addEventListener("click", function () {
    window.location.assign("./transfer.html")
})


// function for navigation
const logout = document.querySelector("#logout");
logout.addEventListener('click', function () {
    window.location.assign("./index.html")
});
const search = document.querySelector("#search");
const searchConatiner = document.querySelector('.search-conatiner')
search.addEventListener("click", function () {
    searchConatiner.classList.toggle('active')
    searchConatiner.classList.toggle('hidden')


});






const hamburger = document.querySelector("#hamburger")
hamburger.addEventListener('click', function (e) {
    console.log(e.target)
    const cntUser = document.querySelector('#cntUser');
    cntUser.style.display = "block";
})



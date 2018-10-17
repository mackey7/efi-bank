// function for dashboard
const analyse = document.querySelector("#analyse");
const swich = document.querySelector('#swich');
const bank = document.querySelector('#bank');
const payment = document.querySelector('#payment');
swich.addEventListener("click", function (event) {
    const target = event.target;
    analyse.classList.toggle('hidden');
    analyse.classList.toggle('analyse-container');
    console.log(target, analyse);
}

);
bank.addEventListener("click", function () {
    window.location.assign("./dashboard.html")
}

);
payment.addEventListener("click", function () {
    window.location.assign("./transfer.html")
}

) // function for navigation
const logout = document.querySelector("#logout");
logout.addEventListener('click', function () {
    window.location.assign("./index.html")
}

);
const search = document.querySelector("#search");
const searchConatiner = document.querySelector('.search-conatiner');
search.addEventListener("click", function () {
    const faSearch = document.querySelector('.fa-search');
    faSearch.style.color = "#4f8c9e";
    searchConatiner.classList.toggle('active');
    searchConatiner.classList.toggle('hidden')
}

);
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener('click', function () {

    const cntUsers = document.querySelectorAll('#cntUser');
    for (const cntUser of cntUsers) {

        cntUser.classList.toggle('active');





    }

}

)
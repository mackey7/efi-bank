
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

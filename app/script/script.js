// function for dashboard
const analyse = document.querySelector("#analyse");
const swich = document.querySelector('#swich');
const bank = document.querySelector('#bank');
const payment = document.querySelector('#payment');

swich.addEventListener("click", function () {
    analyse.classList.toggle('hidden');
    analyse.classList.toggle('analyse-container');
});

bank.addEventListener("click", function () {
    window.location.assign("./dashboard.html")
});


payment.addEventListener("click", function () {
    window.location.assign("./transfer.html")
});

// function for navigation
const logout = document.querySelector("#logout");
logout.addEventListener('click', function () {
    window.location.assign("./index.html")
});


const search = document.querySelector("#search");
const searchConatiner = document.querySelector('.search-conatiner');
search.addEventListener("click", function () {
    const faSearch = document.querySelector('.fa-search');
    faSearch.style.color = "#4f8c9e";
    searchConatiner.classList.toggle('active');
    searchConatiner.classList.toggle('hidden')
});

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener('click', function () {
    const cntUsers = document.querySelectorAll('#cntUser');
    for (const cntUser of cntUsers) {
        cntUser.classList.toggle('active');
    }
});


//Products
(function () {
    fetch("https://api.myjson.com/bins/1fb9ew")
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response);
            response.forEach(data => {

                const productsContainerItem = document.createElement('div');
                productsContainerItem.classList.add("products-container__item");

                const icon = document.createElement('div');
                icon.innerHTML = `<i class="fas ${data.img}"></i>`;
                productsContainerItem.appendChild(icon);


                const itemContent = document.createElement('div');
                itemContent.classList.add('products-container__item_content')
                productsContainerItem.appendChild(itemContent);


                const p = document.createElement('p');
                p.innerText = data.name;
                itemContent.appendChild(p);


                const span = document.createElement('div');
                span.innerText = `${data.value} PLN`;
                itemContent.appendChild(span);


                const productsContiner = document.querySelector('.rowe');
                productsContiner.appendChild(productsContainerItem);

            })
            return response
        })



})();


// History


fetch("https://api.myjson.com/bins/uldk8")
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response)
        response.forEach(data => {

            const historyItem = document.createElement('div');
            historyItem.classList.add('history-item');

            const itemDate = document.createElement('span');
            itemDate.classList.add('history-item_date');
            itemDate.innerText = data.date;


            const itemHistoryContainer = document.createElement('div');
            itemHistoryContainer.classList.add('history-item_content');

            const p = document.createElement('p');
            p.innerText = data.name;
            itemHistoryContainer.appendChild(p);


            const span = document.createElement('span');
            span.innerHTML = `${data.type} <i class="fas fa-arrow-down"></i>`;
            itemHistoryContainer.appendChild(span);

            const amount = document.createElement('p');
            amount.classList.add('history-item_amount');
            amount.innerHTML = `${data.value} <span> PLN</span>`;



            const historyBox = document.querySelector('.history-box')
            historyBox.appendChild(historyItem);

            historyItem.appendChild(itemDate);
            historyItem.appendChild(itemHistoryContainer);
            historyItem.appendChild(amount);




        })
        return response
    })

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Statistic of last year"
        },
        axisY: {
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            showInLegend: false,
            dataPoints: [
                { label: "January", y: 4500.21 },
                { label: "February", y: 3000.25 },
                { label: "March", y: 5000.20 },
                { label: "April", y: 3500.77 },
                { label: "May", y: 4200.50 },
                { label: "June", y: 4600.8 },
                { label: "July", y: 4700.8 },
                { label: "August", y: 4100.8 },
                { label: "September", y: 4800.8 },
                { label: "October", y: 4500.8 },
                { label: "November", y: 4100.8 },
                { label: "December", y: 5500.8 }
            ]
        }]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

}
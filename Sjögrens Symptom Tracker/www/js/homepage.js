document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){
    console.log('Device ready!');
}


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            label: "Symptoms",
            backgroundColor: '#2196F3',
            data: [4, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});
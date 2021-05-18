
const age = document.getElementById('age');
const man = document.getElementById('man');
const woman = document.getElementById('woman');
const tall = document.getElementById('tall');
const weight = document.getElementById('weight');
const talie = document.getElementById('talie');
const btn = document.getElementById('btn');
const bmi = document.getElementById('bmi');
const whtr = document.getElementById('whtr');
const bodyFat = document.getElementById('bodyFat');
const ctx = document.getElementById('myChart').getContext('2d');

btn.addEventListener('click', Auswertung);

const myChart = new Chart(ctx, {
    data: {
        datasets: [{
            type: 'bubble',
            label: 'To Untergewicht Weight',
            label: 'BMI',
            data: [{x:165, y:60}],
            backgroundColor: 'gre#0000ffen',
            borderWidth: 8,
            borderColor: '#404040'
        }, {
            type: 'line',
            label: 'Leichtes Untergewicht',
            data: [{x:150, y:36}, {x:165, y:43.5}, {x: 200, y:64}],
            fill: true,
            borderColor: 'rgba(204, 102, 255, 0.5)',
            backgroundColor: '#cc99ff',
            pointStyle: 'line',
        }, {
            type: 'line',
            label: 'Normalgewicht',
            data: [{x:150, y:41.5}, {x:165, y:50.2}, {x: 200, y:74}],
            fill: true,
            borderColor: '#00ffff',
            backgroundColor: 'rgba(0, 255, 255, 0.7)',
            pointStyle: 'line',
        }, {
            type: 'line',
            label: 'Präadipositas',
            data: [{x:150, y:56.5}, {x:165, y:68}, {x: 200, y:100}],
            fill: true,
            borderColor: '#00ff00',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            pointStyle: 'line',
        }, {
            type: 'line',
            label: 'Adipositas Grad I',
            data: [{x:150, y:67.5}, {x:165, y:81.5}, {x: 200, y:120}],
            fill: true,
            borderColor: '#ffff99',
            backgroundColor: 'rgba(255, 255, 153, 0.7)',
            pointStyle: 'line',
        }, {
            type: 'line',
            label: 'Adipositas Grad II',
            data: [{x:150, y:79}, {x:165, y:95.2}, {x: 200, y:140}],
            fill: true,
            borderColor: '#ff9966',
            backgroundColor: 'rgba(255, 153, 102)',
            pointStyle: 'line',
        }, {
            type: 'line',
            label: 'Adipositas Grad III',
            data: [{x:150, y:90}, {x:165, y:109}, {x: 200, y:160}],
            fill: true,
            borderColor: '#ff3300',
            backgroundColor: 'rgba(255, 51, 0, 0.7)',
            pointStyle: 'line',
        }, 
    ],

    labels: ['140','150','160', '170','180','190'],
    },
    options: {
        scales: {
            x: {suggestedMin: 150,
                suggestedMax:200
            },
            y: {min: 30,
                suggestedMax: 130
            }    
        }
    }
});

function Auswertung () {
let BMI = weight.value / Math.pow(tall.value*0.01, 2);
bmi.innerText = BMI.toFixed(1);

let WHtR = talie.value / tall.value;
whtr.innerText = WHtR.toFixed(2);

if (document.getElementById('man').checked == true) {
    BodyFat = (1.39 * BMI) + (0.16 * age.value) - 10.34 - 9;
} else  BodyFat = (1.39 * BMI) + (0.16 * age.value) - 9;
bodyFat.innerText = BodyFat.toFixed(1) + '%';

document.getElementById('result').style.display = 'block';

myChart.data.datasets[0].data[0].y = weight.value;
myChart.data.datasets[0].data[0].x = tall.value;
myChart.update();

}

var season = [
    {
        name:"Australia",
        day: 17
    },
    {
        name:"Bahrain",
        day: 24
    },
    {
        name:"China",
        day: 31
    },
    {
        name:"TBD",
        day: 7
    },
    {
        name:"Spain",
        day: 14
    },
    {
        name:"Monaco",
        day: 21
    },
    {
        name:"Baku",
        day: 28
    },
    {
        name:"Break",
        day: 7
    },
    {
        name:"Break",
        day: 14
    },
    {
        name:"Break",
        day: 21
    },
    {
        name:"Canada",
        day: 28
    },
    {
        name:"France",
        day: 4
    },
    {
        name:"Austria",
        day: 11
    },
    {
        name:"Silverstone",
        day: 18
    },
    {
        name:"Hungary",
        day: 25
    },
    {
        name:"Spa",
        day: 2
    },
    {
        name:"Netherlands",
        day: 9
    },
    {
        name:"Monza",
        day: 16
    },
    {
        name:"Russia",
        day: 23
    },
    {
        name:"Singapore",
        day: 30
    },
    {
        name:"Suzuka",
        day: 6
    },
    {
        name:"USA",
        day: 13
    },
    {
        name:"Mexico",
        day: 20
    },
    {
        name:"Brazil",
        day: 27
    },
    {
        name:"Break",
        day: 4
    },
    {
        name:"Abu Dabi",
        day: 11
    }
]

if(localStorage.getItem('round')){
    var round = localStorage.getItem('round')
}
else{
    var round = 0;
}
var currentEl = document.getElementById("current-track");



var x = new Date();

var day = x.getDate();
console.log(day);

if(day <= (17-6)){
    round = -1;

}
else{
    round = 0;
    currentEl.textContent = season[round].name;
}

if(day === (season[round].day - 6)){
    round++
}

localStorage.setItem('round', round)
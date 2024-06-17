let cities = document.querySelectorAll('.city');

cities.forEach((city) => {
    city.addEventListener('mouseover', () => {
        removeActive();
        city.classList.add('active');
    })
})

function removeActive(){
    cities.forEach((city) => {
        city.classList.remove('active');
    })
}

document.querySelectorAll('.city').forEach(city => {
    city.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});


const progress = document.getElementById('progress');
const submit = document.getElementById('submit');
const circles = document.querySelectorAll('.circle');
let currentActive = 1;

submit.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

function update() {
    circles.forEach((circle , index) => {
        if(index < currentActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }

    });

    const actives = document.querySelectorAll('.active')

    progress.style.width =  100 + '%';

   
}
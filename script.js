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

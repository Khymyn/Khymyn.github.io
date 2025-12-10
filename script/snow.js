const snowflakes = 100;

for (let i = 0; i < snowflakes; i++)
{
    let snow = document.createElement('div');
    snow.textContent = '❄';
    snow.classList.add('snowflake');

    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(snow);

    setInterval(function() {
        let currentTop = parseFloat(snow.style.top);
        currentTop++;
        if (currentTop > window.innerHeight) currentTop = 0;
        snow.style.top = currentTop + 'px';
    }, 30);
}
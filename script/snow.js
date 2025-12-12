function createSnowflakes() {
    const screenWidth = window.innerWidth;

    let snowflakeCount = 100;

    if (screenWidth < 600) {
        snowflakeCount = 25;
    } else if (screenWidth < 900) {
        snowflakeCount = 35;
    }

    for (let i = 0; i < snowflakeCount; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❄";

        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = 3 + Math.random() * 5 + "s";

        document.body.appendChild(snowflake);
    }
}

createSnowflakes();
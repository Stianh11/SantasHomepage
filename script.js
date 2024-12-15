
document.addEventListener("DOMContentLoaded", function()
{
    const canvas = document.getElementById("snowCanvas");
    const ctx = canvas.getContext("2d");

    const updateCanvasSize = function()
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const snowflakes = [];
    for (let i = 0; i < 100; i++)
    {
        snowflakes.push({
            x: Math.random() * canvas.width,  
            y: Math.random() * canvas.height, 
            radius: Math.random() * 3 + 1,    
            speed: Math.random() * 2 + 1,  
            drift: Math.random() * 1 - 0.5   
        });
    }

    const renderSnow = function()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";
        snowflakes.forEach(flake =>
        {
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            ctx.fill();
            flake.y += flake.speed;
            flake.x += flake.drift;
            if (flake.y > canvas.height) flake.y = 0;
            if (flake.x > canvas.width) flake.x = 0;
            if (flake.x < 0) flake.x = canvas.width;
        });
        requestAnimationFrame(renderSnow);
    };
    renderSnow();
});

const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>
{
    panel.addEventListener('click', () =>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses()
{
    panels.forEach(panels =>
    {
        panels.classList.remove('active');
    })
}

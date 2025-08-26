const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { 
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", (e) => {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

document.getElementById("read").addEventListener("click", (event) => {
    const unread = document.querySelectorAll(".unread");
    const noOfNotify = document.getElementById("number");
    const dots = document.querySelectorAll(".dot");
    unread.forEach(function (element) {
        element.style.backgroundColor = "#fff";
    });
    noOfNotify.innerHTML = "0";
    dots.forEach(function (dot) {
        dot.classList.add("none");
    });
});
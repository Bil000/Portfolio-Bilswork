const behaviors = {
    scrollToTarget : function () {
        const navElements = document.getElementById("menu").querySelectorAll("a");
        navElements.forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                const selectedId = a.getAttribute("href");
                const targetElement = document.getElementById(selectedId.replace("#", ""));
                const previousElement = targetElement.previousElementSibling;
                if (previousElement) {
                    const targetPosition = previousElement.offsetTop + previousElement.offsetHeight + 0.2;             
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth" 
                    });
                } else {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth"
                    });
                }
            })
        })
    },  
}

document.addEventListener("DOMContentLoaded", () => {
    behaviors.scrollToTarget();
})



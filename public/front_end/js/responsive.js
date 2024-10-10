function setAttb(el, attb) {
    for (const key in attb) {
        el.setAttribute(key, attb[key]);
    }
}
//helper functions

const body = () => {
    function resizeBodyWidth () {
        setAttb(document.querySelector("body"), {
            "style" : 
               `width: ${window.innerWidth - 20}px;           
            `
        })
    }
    resizeBodyWidth();
    window.addEventListener("resize", resizeBodyWidth);

}
const navBar = () => {
    const header = document.querySelector("header");
    const navContent = `
        <div id="logo">
            <h1>The Work of Bil.</h1>
            <div class="sharpEdge"></div>
        </div>
        <nav id="menu">
            <ol>
               <li><a href="#biography">About</a></li>
               <li><a href="#experience">Experience</a></li>
               <li><a href="#skills">Proficiency</a></li>
               <li><a href="#projects">Projects</a></li>
               <li><a href="../assets/resume.pdf">Curriculum</a></li>
            </ol>
        </nav>
    `;

    const resizeNavBar = () => {
        if (window.innerWidth < 800) {
            header.innerHTML = ''; 
    
            const barsIcon = header.appendChild(document.createElement("i"));  
            const dropdownMenu = header.appendChild(document.createElement("div"));
            function dropdownLogic () {
                setAttb(dropdownMenu, {
                    "id": "dropdownMenu",
                    "class" : "invisible", 
                    "style": `height: ${window.innerHeight}px; width: ${window.innerWidth / 1.8}px;`
                });
            }

            function navBarHeight() {
                let currentHeight = parseFloat(getComputedStyle(header).height);
                if (window.innerWidth < 800) {
                    currentHeight += 1;
                } else {
                    currentHeight -= 1;
                }
                return currentHeight;
            }
            setAttb(barsIcon, {
                "class": "fa-solid fa-bars",
                "id": "bars",
            });
            setAttb(header, {
                "style": `height: ${navBarHeight()}px; display: flex; justify-content: start;`, })
            dropdownLogic();
        } else {
            header.innerHTML = navContent;
            header.style.height = ''; 
        }
    };
    resizeNavBar();
    window.addEventListener("resize", resizeNavBar);
};

body();
navBar();




 
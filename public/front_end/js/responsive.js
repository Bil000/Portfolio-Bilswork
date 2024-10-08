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
            function setAttb(el, attb) {
                for (const key in attb) {
                    el.setAttribute(key, attb[key]);
                }
            }
            function dropdownLogic () {
                setAttb(dropdownMenu, {
                    "id": "dropdownMenu",
                    "style" : `height: ${window.innerHeight}px; width: ${window.innerWidth/1.8}px;`
                });
            }
            setAttb(barsIcon, {
                "class": "fa-solid fa-bars",
                "id": "bars",
            });
            dropdownLogic();
        } else {
            header.innerHTML = navContent;
        }
    };
    resizeNavBar();
    window.addEventListener("resize", resizeNavBar);
};

navBar();




 
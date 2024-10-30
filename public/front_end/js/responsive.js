function setAttb(el, attb) {
    for (const key in attb) {
        if (attb.hasOwnProperty(key)) {  
            el.setAttribute(key, attb[key]);
        }
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// Helper functions 

const body = () => {
    function resizeBodyWidth() {
        const bodyElement = document.querySelector("body");
        setAttb(bodyElement, {
            "style": `width: ${window.innerWidth - 20}px;`,
            "class": "text-[clamp(0.875rem, 1vw + 0.5rem, 1.5rem)] w-screen-minus-20 mx-auto"
        });
    }
    resizeBodyWidth();  
    window.addEventListener("resize", debounce(resizeBodyWidth, 200));  
};

const navBar = () => {
    const header = document.querySelector("header");
    const logo = document.createElement("h1");
    logo.innerText = header.querySelector("h1").innerText;
    const nav = document.createElement("ol");
    const originalOl = document.querySelector("header ol");
    const liElements = originalOl.querySelectorAll("li");
    liElements.forEach(li => {
        const clonedLi = li.cloneNode(true);
        nav.appendChild(clonedLi);
    });

    const HEADER_CONTENT = header.innerHTML;  
    const resizeNavBar = () => {
        if (window.innerWidth <= 800) {  
            header.innerHTML = '';  
            const barsIcon = document.createElement("i");
            const dropdownMenu = document.createElement("div");
            header.appendChild(barsIcon);
            header.appendChild(dropdownMenu);

            function setDropdownHeight() {
                dropdownMenu.style.height = `${window.innerHeight}px`;
            }

            function dropdownLogic() {
                const EXIT_CONTAINER = document.createElement("div");
                const EXIT_ICON = document.createElement("i");
                EXIT_CONTAINER.appendChild(EXIT_ICON);
                const el = [EXIT_CONTAINER, logo, nav];
                el.forEach(element => {
                   dropdownMenu.appendChild(element);
                   setAttb(element, {
                    "class": "w-full text-responsive",
                    "style" : "font-size: 19px;"

                   });
                });
                setAttb(el[0], {
                    "class": "flex justify-end"
                })
                setAttb(dropdownMenu, {
                    "id": "dropdownMenu",
                    "class": "invisible", 
                });
                setAttb(EXIT_ICON, {
                    "class": "fa-regular fa-circle-xmark text-2xl"
                });
                setAttb(nav, {
                    "class": "flex flex-col"
                });
                EXIT_ICON.addEventListener("click", () => {
                    setAttb(dropdownMenu, {
                        "class": "invisible", 
                    });
                    setAttb(document.querySelector("body"), {
                        "class": "text-[clamp(0.875rem, 1vw + 0.5rem, 1.5rem)] w-screen-minus-20 mx-auto"
                    });
                });
                setDropdownHeight(); 
                window.addEventListener("resize", debounce(setDropdownHeight, 200)); 
            }

            function barsIconLogic() {
                setAttb(barsIcon, {
                    "class": "fa-solid fa-bars",
                    "id": "bars",
                });
                barsIcon.addEventListener("click", () => {
                    setAttb(dropdownMenu, {
                        "class": "flex flex-col w-[calc(100vw/1.6)] bg-gray-200 border border-gray-400 z-10", 
                        "style": `height: ${window.innerHeight}px;`
                    });
                    setAttb(document.querySelector("body"), {
                        "class": "overflow-hidden text-[clamp(0.875rem, 1vw + 0.5rem, 1.5rem)] w-screen-minus-20 mx-auto",
                    });
                });
            }
            setAttb(header, { "class": "flex justify-start items-center" });
            dropdownLogic();  
            barsIconLogic(); 

        } else {
            header.innerHTML = HEADER_CONTENT;  
            header.style.height = '';  
            setAttb(header, { "class": "" });  
        }
    };

    resizeNavBar();
    window.addEventListener("resize", debounce(resizeNavBar, 200));  
};

body();
body();
navBar();

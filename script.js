    
    // Responsive fas-btn navBar   
        let body = document.querySelector("body");
        let navbar = document.querySelector(".navbar");
        let menuBtn = document.querySelector(".menu-btn");
        let cancelBtn = document.querySelector(".cancel-btn");

        menuBtn.addEventListener("click", function() {
            navbar.classList.add("active");
            menuBtn.classList.add("hide");
            body.classList.add("disabled");
        });

        cancelBtn.addEventListener("click", function() {
            navbar.classList.remove("active");
            menuBtn.classList.remove("hide");
            body.classList.remove("disabled");
        });    
        
    // scroll 
        let sections = document.querySelectorAll("section");
        let navLinks = document.querySelectorAll("header nav a");

        window.onscroll = ()=>{

    //active section when you are in that section
            sections.forEach( sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 100;
                let height = sec.offsetHeight;
                let id = sec.getAttribute("id");

                if(top >= offset && top < offset + height) {
    // active navbar links
                    navLinks.forEach(links => {
                        links.classList.remove("active");
                        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                    });
    //animation on scroll
                    sec.classList.add("show-animate");
                } else {
    //animation that repeats on scroll 
                    sec.classList.remove("show-animate");
                }
            });

    //sticky header
            const header = document.querySelector(".header");
            header.classList.toggle("sticky", window.scrollY>20);

    //animation footer on scroll
            let footer = document.querySelector(".footer");

            footer.classList.toggle("show-animate", this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
        }
        
    //remove toggle icon and navbar when click navbar links
        navLinks.forEach(link => {
            link.addEventListener("click", function() {
    // Close the navbar and reset styles
                navbar.classList.remove("active");
                menuBtn.classList.remove("hide");
                body.classList.remove("disabled");
            });
        });

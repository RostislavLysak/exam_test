window.onload = function() {

    var btn = document.getElementsByClassName('btn');

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", DeleteShow);
    }

    function DeleteShow() {
        var elems = document.querySelectorAll("[data-p]");
        console.log(this);
        for (var i = 0; i < elems.length; i++) {
            elems[i].setAttribute('style', 'color: crimson; transition: 2s all;');
            elems[i].classList.add('show');
            if (this.getAttribute("data-btn") == "a" + i) {
                elems[i].classList.remove("hidden");
            } else if (this.getAttribute("data-btn") != elems[i].getAttribute("data-p")) {
                elems[i].classList.add("hidden");
            } else {
                elems[i].classList.remove("hidden");
            }
        }
    }

    var mybox = document.querySelector(".square")
    
    function generateColor() {
        return "#" + Math.floor(Math.random() * 16222715).toString(16);
    }

    function boxMouseover() {
        console.log("mouseover");
        this.style.backgroundColor = generateColor();
        this.style.transition = "all 2s";
        this.style.transform = "rotate(360deg)";
        this.style.opacity = ".5"
    }

    function boxMouseout() {
        console.log("mouseout");
        this.style.backgroundColor = generateColor();
        this.style.transition = "all 1s";
        this.style.transform = "rotate(0deg)";
        this.style.opacity = ".8"
    }

    mybox.addEventListener("mouseout", boxMouseout);

    mybox.addEventListener("mouseover", boxMouseover);
}
const cat = document.getElementById("cat");
const score = document.getElementById("score");

let sc = 0;

function onCatMouseUp() {
    cat.src = "./assets/img/normal.png";
}

function asdasd() {
    return Math.floor(Math.random() * (80 - 5)) + 5;
}

function onCatMouseDown() {
    if(Math.round(Math.random() * 7) === 1) {
        cat.src = "./assets/img/cute.png";
    } else {
        cat.src = "./assets/img/waaaa.png";
    }

    cat.style.width = `${asdasd()}%`;
    cat.style.height = `${asdasd()}%`;
    cat.style.left = `${asdasd()}%`;

    const audio = new Audio("./assets/pop.mp3");
    audio.play();

    sc += 1;
    score.innerText = sc;
}

cat.addEventListener("mouseup", onCatMouseUp);
cat.addEventListener("mousedown", onCatMouseDown);

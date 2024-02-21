window.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop, "b")
    if (
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById('btn-back-to-top').style.display = 'flex';
    } else {
        document.getElementById('btn-back-to-top').style.display = 'none';
    }
});

let index = 0;

const moveImage = (to) => {
    if (isNaN(+to)) return;
    index = to - 1;
    images.style.left = `calc(1300px * -${index})`;
}

const nextImage = () => {
    index = ++index % 6;
    moveImage(index + 1);
    clearInterval(interval);
    interval = getInterver();
}

const prevImage = () => {
    index = --index % 6;
    index = index < 0 ? 6 + index : index;
    moveImage(index + 1);
    clearInterval(interval);
    interval = getInterver();
}

const getInterver = () => {
    return setInterval(() => {
        nextImage()
    }, 10000)
}

let interval = getInterver()

function popup(list) {
    console.log(list)
    let options = "toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=1200, height=800, top=0,left=0";

    window.open(`https://yeshua-love.org/${list}.html`, "_blank", options)
}
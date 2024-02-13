window.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop, "b")
    if (
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById('btn-back-to-top').style.display = 'flex';
    } else {
        document.getElementById('btn-back-to-top').style.display = 'none';
    }
    if (
        document.documentElement.scrollTop > 750
    ) {
        document.getElementById('hiddenNavbarMenu').style.display = 'flex';
        document.getElementById('navbar').style.display = 'none'
    } else {
        document.getElementById('hiddenNavbarMenu').style.display = 'none';
        document.getElementById('navbar').style.display = 'flex'
    }
});

let index = 0;

const moveImage = (to) => {
    if (isNaN(+to)) return;
    index = to - 1;
    images.style.left = `calc(1300px * -${index})`;
}

const nextImage = () => {
    index = ++index % 5;
    moveImage(index + 1);
    clearInterval(interval);
    interval = getInterver();
}

const prevImage = () => {
    index = --index % 5;
    index = index < 0 ? 5 + index : index;
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
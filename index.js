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

    console.log(`${index}`)

    if (isNaN(+to)) return;

    index = to - 1;

    images.style.left = `calc(1300px * -${index})`;
}

const nextImage = () => {
    index = ++index % 4;
    moveImage(index + 1);
    clearInterval(interval)
}

const prevImage = () => {
    index = --index % 4;
    index = index < 0 ? 4 + index : index;
    moveImage(index + 1);
}

let interval = setInterval

interval(() => {
    nextImage()
}, 5000)
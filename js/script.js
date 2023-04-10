const images = [
    { id: 'img1', src: 'img/portfolio/img1.jpg' },
    { id: 'img2', src: 'img/portfolio/img2.jpg' },
    { id: 'img3', src: 'img/portfolio/img3.jpg' },
    { id: 'img4', src: 'img/portfolio/img4.jpg' },
    { id: 'img5', src: 'img/portfolio/img5.jpg' },
    { id: 'img6', src: 'img/portfolio/img6.jpg' }
];

const buttons = [
    { id: 'btn1', images: images.map(img => img.src), activeIndex: 0 },
    { id: 'btn2', images: ['img/portfolio/img4.jpg'], activeIndex: 1 },
    { id: 'btn3', images: ['img/portfolio/img5.jpg', 'img/portfolio/img6.jpg'], activeIndex: 2 },
    { id: 'btn4', images: ['img/portfolio/img3.jpg'], activeIndex: 3 },
    { id: 'btn5', images: ['img/portfolio/img1.jpg', 'img/portfolio/img2.jpg'], activeIndex: 4 },
];

function updateImages(imgIds) {
    images.forEach((img, i) => {
        document.getElementById(img.id).src = imgIds[i];
    });
}

function updateButtons(activeBtnIndex = 0) {
    buttons.forEach((btn, i) => {
        const docBtnId = document.getElementById(btn.id);
        if (i === activeBtnIndex) {
            docBtnId.style.backgroundColor = 'black';
            docBtnId.style.color = 'white';
        } else {
            docBtnId.style.backgroundColor = 'white';
            docBtnId.style.color = 'black';
        }
    });
}

function clickButton(buttonIndex) {
    const button = buttons[buttonIndex];
    updateImages(button.images);
    updateButtons(button.activeIndex);
}

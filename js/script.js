const buttons = [
    { id: 'btn1'},
    { id: 'btn2'},
    { id: 'btn3'},
    { id: 'btn4'},
    { id: 'btn5'},
];

const images = [
    { src: 'img/portfolio/img1.jpg', alt: '' },
    { src: 'img/portfolio/img2.jpg', alt: '' },
    { src: 'img/portfolio/img3.jpg', alt: '' },
    { src: 'img/portfolio/img4.jpg', alt: '' },
    { src: 'img/portfolio/img5.jpg', alt: '' },
    { src: 'img/portfolio/img6.jpg', alt: '' }
];

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
    const imgsID = document.getElementById('imgs');
    const button = buttons[buttonIndex];
    updateButtons(buttonIndex);
    let html = '';
    
    if (buttonIndex === 0) {
        images.forEach(image => {
        html += `<img src="${image.src}" alt="${image.alt}" />`;
        });
    } else if (buttonIndex === 1) {
        html += `<img src="${images[3].src}" alt="${images[3].alt}" />`;
    } else if (buttonIndex === 2) {
        html += `<img src="${images[4].src}" alt="${images[4].alt}" />
                <img src="${images[5].src}" alt="${images[5].alt}" />`;
    } else if (buttonIndex === 3) {
        html += `<img src="${images[2].src}" alt="${images[2].alt}" />`;
    } else if (buttonIndex === 4) {
        html += `<img src="${images[0].src}" alt="${images[0].alt}" />
                <img src="${images[1].src}" alt="${images[1].alt}" />`;
    }
    
    imgsID.innerHTML = html;
    }
    
const mainBox: NodeListOf<Element> = document.querySelectorAll('.main__box');

const checkBoxes = (): void => {
    const boxTop: number = window.innerHeight / 5 * 4;
    mainBox.forEach(box => {
        const boxHeight = box.getBoundingClientRect().top;
        if (boxHeight < boxTop) {
            box.classList.add('main__box--active');
        } else {
            box.classList.remove('main__box--active');
        }
    })
}

window.addEventListener('scroll', checkBoxes);
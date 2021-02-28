function createElem(element, myClass) {
    const newElem = document.createElement(element);
    newElem.classList.add(myClass);
    return newElem;
}

export default createElem;

function addHidden(event) {
    if(event.target === event.currentTarget) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'visible';
    }
  }

  export default addHidden;

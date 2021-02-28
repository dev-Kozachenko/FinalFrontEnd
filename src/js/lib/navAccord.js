function navAccord(){
    const panelItem = [...document.querySelectorAll('.panel-title')];
    const panelActive = document.getElementsByClassName('panel-active');
panelItem.forEach(function(item) {
  item.addEventListener('click', function(e) {
    if (panelActive.length > 0 && panelActive[0] !== this)
    panelActive[0].classList.remove('panel-active');
    this.classList.toggle('panel-active');
    this.classList.toggle('panel-close');
  });
});
}

export default navAccord;

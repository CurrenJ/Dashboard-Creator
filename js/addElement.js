function addElement(type) {
  if(type === 'blank') {
    $('.grid-stack').append('<div class="grid-stack-item"data-gs-x="0" data-gs-y="0"data-gs-width="4" data-gs-height="2"><div id="item" class="grid-stack-item-content">Drag me</div></div>');
  }
}

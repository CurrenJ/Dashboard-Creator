$('.grid-stack').gridstack();
var grid = $('.grid-stack').data('gridstack');



function addElement(type) {
  if(type === 'blank') {
    grid.addWidget('<div class="grid-stack-item"data-gs-x="4" data-gs-y="0"data-gs-width="4" data-gs-height="2"><div id="item" class="grid-stack-item-content">Drag me</div></div>', 0, 0, 3, 2, true);
  }
}

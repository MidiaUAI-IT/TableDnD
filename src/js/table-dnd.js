let shadow;


tableDnD = function (selectors, startCallback = () => { }, overCallback = () => { }, endCallback = () => { }) {

  let table = document.querySelectorAll(selectors);
  table.forEach((element, key, parent) => {
    element.querySelectorAll('tbody tr').forEach((trElement, trKey, trParent) => {
      trElement.setAttribute('draggable', true);
      trElement.addEventListener('dragstart', (e) => { dragStart(e, startCallback) });
      trElement.addEventListener('dragover', (e) => { dragOver(e, overCallback) });
      trElement.addEventListener('dragend', (e) => { dragEnd(e, endCallback) });
    });
  });
}


function dragStart(event, callback) {
  shadow = event.target;

  callback();
}

function dragOver(event, callback) {
  let children = Array.from(event.target.parentNode.parentNode.children);

  if (children.indexOf(event.target.parentNode) > children.indexOf(shadow)) {
    event.target.parentNode.after(shadow);
  } else {
    event.target.parentNode.before(shadow);
  }

  callback();
}

function dragEnd(event, callback) {
  callback();
}




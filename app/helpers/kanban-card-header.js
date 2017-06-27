import Ember from 'ember';

export function kanbanCardHeader(params/*, hash*/) {
  let list = params[0];

  let header   = document.createElement('header');
  let textNode = document.createTextNode(list.get('title'));

  header.style.backgroundColor = list.get('color');
  header.classList.add("kb-card-header");
  header.appendChild(textNode);

  return header;
}

export default Ember.Helper.helper(kanbanCardHeader);

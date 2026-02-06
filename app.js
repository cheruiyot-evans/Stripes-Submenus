import getElement from './utils/getElement.js';
import sublinks from './data.js';

const toggleBtn = getElement('.toggle-btn');
const closeBtn = getElement('.close-btn');
const sidebarWrapper = getElement('.sidebar-wrapper');
const sidebar = getElement('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
// const submenu = getElement('.submenu');
const hero = getElement('.hero');
const nav = getElement('.nav');

console.log(closeBtn);
console.log(toggleBtn);
// hide/show sidebar
toggleBtn.addEventListener('click', (e) => {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});

// set sidebar
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article >
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map((link) => {
    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
  })
  .join('')}
</div>
</article>`;
  })
  .join('');

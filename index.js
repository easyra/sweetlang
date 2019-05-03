// document.querySelectorAll('.nav-title').forEach(node => {
//   node.addEventListener('mouseenter', e => {
//     e.target.style.display = 'block';
//   });
// });

// document.querySelectorAll('.nav-title').forEach(node => {
//   node.addEventListener('mouseout', e => {
//     e.target.style.display = 'none';
//   });
// });

// const navItems = document.querySelector('.nav-items');
const navTitles = document.querySelectorAll('.nav-titles li');
// function hideElement(e) {
//   const id = e.currentTarget.id;
//   e.target.style.color = 'red';
//   console.log(e.currentTarget);
//   navTitles.forEach((node, index) => {
//     console.log('id: ' + id);
//     console.log('index:' + index);
//     if (index == id) {
//       node.setAttribute('style', 'display:block;');
//     } else {
//       node.setAttribute('style', 'display:none;');
//     }
//   });
// }

// navItems.addEventListener('mouseover', hideElement, false);

const navItems = document.querySelectorAll('.nav-items li');

navItems.forEach(node => {
  node.addEventListener(
    'mouseover',
    e => {
      e.stopPropagation();
      const id = e.currentTarget.id;
      navTitles.forEach((navTitle, index) => {
        if (index == id) {
          navTitle.classList.add('active');
        } else {
          navTitle.classList.remove('active');
        }
      });
    },
    false
  );
});

document.querySelector('.nav-items').addEventListener('mouseleave', e => {
  navTitles.forEach(navTitle => {
    navTitle.classList.remove('active');
  });
});

console.log(document.querySelector('.nav-items'));

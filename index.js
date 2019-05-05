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
for (let i = 0; i < 25; i++) {
  const figure = document.createElement('figure');
  figure.classList.add('imghvr-shutter-in-vert');

  const figcaption = document.createElement('figcaption');

  const instagram = document.createElement('i');
  const fullscreen = document.createElement('i');

  const img = document.createElement('img');
  img.src =
    'https://scontent-lax3-1.cdninstagram.com/vp/ff4c8f5494f73bfaac7202223783427a/5D76B514/t51.2885-15/e35/57451435_414306286014982_854558080607971068_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com';
  img.classList.add('picture');
  img.alt = 'The experimental art of artist Sweet Lang | Langston Davis';
  document.querySelector('.gallery .content').appendChild(img);
}

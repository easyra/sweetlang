const navTitles = document.querySelectorAll('.nav-titles li');
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

function createPicture(img) {
  const links = document.createElement('div');
  links.classList.add('links');
  const instagram = document.createElement('i');
  const fullscreen = document.createElement('i');
  instagram.classList.add('fab');
  instagram.classList.add('fa-instagram');
  instagram.classList.add('fa-2x');
  fullscreen.classList.add('fas');
  fullscreen.classList.add('fa-compress');
  fullscreen.classList.add('fa-2x');
  const instagramLink = document.createElement('a');
  instagramLink.href = 'https://www.instagram.com/p/Bwkr0nhhxLc/';

  instagramLink.appendChild(instagram);

  const modal = document.querySelector('.modal');

  fullscreen.addEventListener('click', e => {
    const imgLink = img.src;
    modal.querySelector('.content img').src = imgLink;
    modal.classList.add('active');
  });
  modal.addEventListener('click', e => {
    console.log(e.target);
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  links.appendChild(instagramLink);
  links.appendChild(fullscreen);

  const picture = document.createElement('div');
  picture.classList.add('picture');
  picture.appendChild(img);
  picture.appendChild(links);
  return picture;
}

for (let i = 0; i < 21; i++) {
  const img = document.createElement('img');
  img.src =
    'https://scontent-lax3-1.cdninstagram.com/vp/ff4c8f5494f73bfaac7202223783427a/5D76B514/t51.2885-15/e35/57451435_414306286014982_854558080607971068_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com';
  img.classList.add('picture');
  img.alt = 'The experimental art of artist Sweet Lang | Langston Davis';
  const picture = createPicture(img);
  document.querySelector('.gallery .content').appendChild(picture);
}

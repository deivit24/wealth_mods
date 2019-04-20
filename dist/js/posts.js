let past = document.querySelector(" #blogs");

let post = [{
    id: 1,
    title: '3 Main Differences Between Roth IRA and Traditional IRA 2019',
    tag: 'Wealth MODs 101',
    date: 'April 20th, 2019',
    sub: 'Which Should Millennials Choose?',
    src: '../dist/img/blog/young1.jpg',
    author: 'David Salazar',
    link: 'wealth-mods-101/3-Main-Differences-Between-Roth-IRA-and-Traditional-IRA-2019.html',
    preview: 'Ever since I can remember, I would listen to some guy in a suit on the news mentioned the word IRA. I would hear it from my parents every once in a while, talk about it as ...',
    class: 'blog-card '
  },
  {
    id: 2,
    title: '3 Millennial Money Habit Stereotypes ',
    tag: 'Wealth MODs 101',
    date: 'Coming Soon',
    sub: 'that have been debunked ',
    src: '../dist/img/blog/young2.jpg',
    author: 'David Salazar',
    link: '#',
    preview: 'This article is coming soon.',
    class: 'blog-card alt'
  },
  {
    id: 3,
    title: 'The Roth IRA MOD 2019',
    tag: 'Wealth MODs 101',
    date: 'Coming Soon',
    sub: 'A complete guide',
    src: '../dist/img/blog/retirement1.jpg',
    author: 'David Salazar',
    link: '#',
    preview: 'This article is coming soon.',
    class: 'blog-card '
  },
  {
    id: 4,
    title: 'The Traditional IRA MOD 2019',
    tag: 'Wealth MODs 101',
    date: 'Coming Soon',
    sub: 'A complete guide',
    src: '../dist/img/blog/retirement2.jpg',
    author: 'David Salazar',
    link: '#',
    preview: 'This article is coming soon.',
    class: 'blog-card alt'
  }
];



function allPost() {
  let output = ' ';

  for (let i = 0; i < post.length; i++) {
    output += `
    <div class="${post[i].class}">
            <div class="meta">
              <div class="photo" style="background-image: url(${post[i].src})"></div>
              <ul class="details">
                <li class="author">
                  <i class="fas fa-user"></i> ${post[i].author}
                </li>
                <li class="date">
                  <i class="fas fa-calendar-alt"></i>${post[i].date}
                </li>
                <li class="tags">
                  <ul>
                    <li><i class="fas fa-tag"></i>${post[i].tag}</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="description">
              <h1>${post[i].title}</h1>
              <h2>${post[i].sub}</h2>
              <p>
              ${post[i].preview}
              </p>
              <p class="read-more">
                <a class="btn" href="${post[i].link}">Read More</a>
              </p>
            </div>
          </div>
    `;
    past.innerHTML = output;
  }
}
allPost();

// Navigation Image Slide 

var imageSlideSmall = new ScrollMagic.Controller();

var imageSM = new ScrollMagic.Scene({
    triggerElement: 'section',
    triggerHook: 0
  })
  .setClassToggle('.smallImage', 'd-appear')

  .addTo(imageSlideSmall);

var imageSlideBig = new ScrollMagic.Controller();

var imageSM = new ScrollMagic.Scene({
    triggerElement: 'section',
    triggerHook: 0
  })

  .setClassToggle('.bigImage', 'd-zero')

  .addTo(imageSlideBig);


// var signpin = new ScrollMagic.Controller();

// $(function () {
//   // build a signpin scence
//   var pin2 = new ScrollMagic.Scene({
//       triggerElement: ".signup-card",
//       duration: 0,
//       triggerHook: 0,
//       offset: -90

//     })

//     .setPin(".signup-card")


//     .addTo(signpin);

// });
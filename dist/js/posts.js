let recent = document.querySelector(' #blogs');
let past = document.querySelector('#pastBlogs');

let post = [
  {
    title:
      'Investing MOD 101: The Ultimate Guide If You Know Nothing About Investing',
    tag: 'Wealth MODs 101',
    date: 'June 21st 2019',
    sub: 'Literally, If You Know Nothing…',
    src: 'dist/img/blog/begininvest.jpg',
    author: 'David Salazar',
    link: 'wealth-mods-101/Investing-Mod-101-Ultimate-Beginners-Guide.html',
    preview:
      "Over the last decade, it seems like everyone is making money by 'investing.' It probably feels like you are being left out and you want in, but you don't know how...",
    class: 'blog-card alt '
  },
  {
    title: 'The Budget MOD: Enjoy Life While Using The 50/30/20 Method',
    tag: 'Wealth MODs 101',
    date: 'June 2nd 2019',
    sub: 'Saving and Enjoying Life Can Coexist',
    src: 'dist/img/blog/budget.jpg',
    author: 'David Salazar',
    link: 'wealth-mods-101/50-30-20-Budget-Method.html',
    preview:
      'During my college years, when I would hear the word "budget," I would always translate it to "suffer." I just thought that they go hand in hand. For the longest time, I avoided...',
    class: 'blog-card '
  },
  {
    title: 'I quit my job, so what happens to my 401(k) now?',
    tag: 'Wealth MODs 101',
    date: 'May 27th 2019',
    sub: 'Here are the four options you have',
    src: 'dist/img/blog/shock.jpg',
    author: 'David Salazar',
    link: 'wealth-mods-101/What-Happens-To-My-401k-Now.html',
    preview:
      'There will come a time where you have to part ways with your employer – whether you quit your job to find a better one or you simply get fired. Regardless of how it happens...',
    class: 'blog-card alt'
  },
  {
    title: 'The 401(k) MOD 2019',
    tag: 'Wealth MODs 101',
    date: 'May 22nd 2019',
    sub: 'A complete guide',
    src: 'dist/img/blog/401k.jpg',
    author: 'David Salazar',
    link: 'wealth-mods-101/401k-MOD-2019.html',
    preview:
      'A 401(k) is a retirement plan that is provided to you by your employer. It allows employees to save a piece of their paycheck and invest it before taxes are taken out. You are hence...',
    class: 'blog-card'
  },
  {
    title: 'The Roth IRA MOD 2019',
    tag: 'Wealth MODs 101',
    date: 'May 16th 2019',
    sub: 'A complete guide',
    src: 'dist/img/blog/retirement1.jpg',
    author: 'David Salazar',
    link: 'wealth-mods-101/Roth-IRA-MOD-2019.html',
    preview:
      'The Roth IRA is a savings vehicle that is designed to help you prepare for one of the most challenging financial goals you can have - retirement. It’s an investment vehicle that...',
    class: 'blog-card '
  },
  {
    title: 'The Retirement MOD Calculator',
    tag: 'Tools',
    date: 'May 10th 2019',
    sub: 'A simple but powerful tool',
    src: 'dist/img/blog/calculator.jpg',
    author: 'David Salazar',
    link: 'tools/retirement-mod-calculator.html',
    preview:
      'Time and time and again, research from Morningstar shows that planning for "retirement" is still the top financial goal for an individual. As a matter of fact, planning for retirement is... ',
    class: 'blog-card'
  },
  {
    title: 'The Traditional IRA MOD 2019',
    tag: 'Wealth MODs 101',
    date: 'May 4th 2019',
    sub: 'A complete guide',
    src: 'dist/img/blog/retirement2.jpg',
    author: 'David Salazar',
    link: 'wealth-mods-101/Traditional-IRA-MOD-2019.html',
    preview:
      'There are many investment and savings vehicles out there that are designed to help you prepare for one of the most challenging financial goals you can have - retirement. You can save... ',
    class: 'blog-card'
  },
  {
    title: '3 Millennial Money Habits Stereotypes That Have Been Debunked ',
    tag: 'Wealth MODs 101',
    date: 'April 27th, 2019',
    sub: 'But We Can Do Better ',
    src: 'dist/img/blog/young2.jpg',
    author: 'David Salazar',
    link:
      'wealth-mods-101/3-Millennial-Money-Habits-Stereotypes-That-Have-Been-Debunked.html',
    preview:
      '“Foolish when it comes to money,” “They don’t plan for the long-term,” “They are self-centered,” “They still depend on their parents.” Those are the typical stereotypes... ',
    class: 'blog-card'
  },
  {
    title: '3 Main Differences Between Roth IRA and Traditional IRA 2019',
    tag: 'Wealth MODs 101',
    date: 'April 20th, 2019',
    sub: 'Which Should Millennials Choose?',
    src: 'dist/img/blog/young1.jpg',
    author: 'David Salazar',
    link:
      'wealth-mods-101/3-Main-Differences-Between-Roth-IRA-and-Traditional-IRA-2019.html',
    preview:
      'Ever since I can remember, I would listen to some guy in a suit on the news mentioned the word IRA. I would hear it from my parents every once in a while, talk about it as ...',
    class: 'blog-card '
  }
];

function recentPost() {
  let output = ' ';

  for (let i = 0; i < 3; i++) {
    output += `
    <div class="${post[i].class}">
            <div class="meta">
              <div class="photo" style="background-image: url(${
                post[i].src
              })"></div>
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
              <p class="preview">
              ${post[i].preview}
              </p>
              <p class="read-more">
                <a class="btn" href="${post[i].link}">Read More</a>
              </p>
            </div>
          </div>
    `;
    recent.innerHTML = output;
  }
}
recentPost();

function pastPost() {
  let output = ' ';

  for (let i = 3; i < post.length; i++) {
    output += `
    <div class="past-${post[i].class}">
            <div class="meta">
              <div class="photo" style="background-image: url(${
                post[i].src
              })"></div>
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
              <p class="preview">
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
pastPost();

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

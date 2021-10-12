const main = document.querySelector('.main');

function sectionAbout() {
  const about = document.createElement('section');
  const aboutTitle = document.createElement('h2');
  const aboutLine = document.createElement('div');
  const aboutText = document.createElement('p');

  about.className = 'main__about about';
  aboutTitle.className = 'about__title';
  aboutLine.className = 'about__line';
  aboutText.className = 'about__text';

  aboutTitle.textContent = htmlData.sectionAbout.title.h2;
  aboutText.textContent = htmlData.sectionAbout.title.text;

  about.append(aboutTitle);
  about.append(aboutLine);
  about.append(aboutText);

  const aboutMedia = document.createElement('div');
  const mediaPic = document.createElement('div');
  aboutMedia.className = 'about__media media';
  mediaPic.className = 'media__pic';

  aboutMedia.append(mediaPic);

  htmlData.sectionAbout.content.block1.forEach((item) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h5 = document.createElement('h5');

    div.className = item.class;
    img.className = item.imgClass;
    h5.className = item.titleClass;

    img.setAttribute('src', item.img);
    img.setAttribute('alt', item.alt);
    h5.textContent = item.h5;

    div.append(img);
    div.append(h5);
    mediaPic.append(div);
    aboutMedia.append(mediaPic);
  });

  const mediaVideo = document.createElement('div');
  const videoPic = document.createElement('img');
  const videoPlay = document.createElement('img');

  mediaVideo.className = 'media__video';
  videoPic.className = 'media__video-pic';
  videoPlay.className = 'media__video-play';

  videoPic.setAttribute('src', htmlData.sectionAbout.content.block2.bigImg);
  videoPlay.setAttribute('src', htmlData.sectionAbout.content.block2.playIcon);
  videoPic.setAttribute('alt', 'About picture');
  videoPlay.setAttribute('alt', 'Video play icon');

  mediaVideo.append(videoPic);
  mediaVideo.append(videoPlay);
  aboutMedia.append(mediaVideo);
  about.append(aboutMedia);

  return about;
}

function sectionPosts() {
  const posts = document.createElement('section');
  const postsTitle = document.createElement('h2');
  const postsLine = document.createElement('div');
  const postsText = document.createElement('p');

  posts.className = 'main__posts posts';
  postsTitle.className = 'posts__title';
  postsLine.className = 'posts__line';
  postsText.className = 'posts__text';

  postsTitle.textContent = htmlData.sectionPosts.title.h2;
  postsText.textContent = htmlData.sectionPosts.title.text;

  posts.append(postsTitle);
  posts.append(postsLine);
  posts.append(postsText);

  const postsBlock = document.createElement('div');
  postsBlock.className = 'posts__block block';

  htmlData.sectionPosts.content.forEach((item) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const anchor = document.createElement('a');
    const paragraph = document.createElement('p');
    const description = document.createElement('p');
    const infoBlock = document.createElement('p');
    const date = document.createElement('span');
    const dot1 = document.createElement('span');
    const minutes = document.createElement('span');
    const dot2 = document.createElement('span');
    const infoImg = document.createElement('img');

    div.className = item.blockClass;
    img.className = item.imgClass;
    anchor.className = item.anchorClass;
    paragraph.className = item.paragraphClass;
    description.className = item.descriptionClass;
    infoBlock.className = item.info.infoClass;
    date.className = 'date';
    dot1.className = 'dot';
    minutes.className = 'minutes';
    dot2.className = 'dot';
    infoImg.className = 'comment-icon';

    img.setAttribute('src', item.img);
    img.setAttribute('alt', item.alt);
    anchor.setAttribute('href', '#');
    paragraph.textContent = item.paragraphTitle;
    description.textContent = item.description;
    date.textContent = item.info.date;
    // dot1.textContent = item.info.dot;
    minutes.textContent = item.info.minutes;
    // dot2.textContent = item.info.dot;
    infoImg.setAttribute('src', item.info.commentIcon);
    infoImg.setAttribute('alt', 'Comment icon');

    div.append(img);
    anchor.append(paragraph);
    div.append(anchor);
    div.append(description);
    infoBlock.append(date);
    infoBlock.append(dot1);
    infoBlock.append(minutes);
    infoBlock.append(dot1);
    infoBlock.append(infoImg);
    div.append(infoBlock);
    postsBlock.append(div);
  });

  posts.append(postsBlock);

  return posts;
}

function sectionPortfolio() {
  const portfolio = document.createElement('section');
  const portfolioTitle = document.createElement('h2');
  const portfolioLine = document.createElement('div');
  const portfolioText = document.createElement('p');

  portfolio.className = 'main__portfolio portfolio';
  portfolioTitle.className = 'portfolio__title';
  portfolioLine.className = 'portfolio__line';
  portfolioText.className = 'portfolio__text';

  portfolioTitle.textContent = htmlData.sectionPortfolio.title.h2;
  portfolioText.textContent = htmlData.sectionPortfolio.title.text;

  portfolio.append(portfolioTitle);
  portfolio.append(portfolioLine);
  portfolio.append(portfolioText);

  const itemsWrapper = document.createElement('div');
  itemsWrapper.className = 'portfolio__items';

  const portfolioBlock = document.createElement('div');
  portfolioBlock.className = 'portfolio__block slider';

  htmlData.sectionPortfolio.content.forEach((item) => {
    const block = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const paragraph = document.createElement('p');
    const blockItem = document.createElement('div');
    const imgAttach = document.createElement('img');
    const imgSearch = document.createElement('img');

    block.className = item.blockClass;
    img.className = item.imgClass;
    h3.className = item.titleClass;
    paragraph.className = item.subtitleClass;
    blockItem.className = item.blockItemClass;
    imgAttach.className = item.attachClass;
    imgSearch.className = item.searchClass;

    img.setAttribute('src', item.img);
    img.setAttribute('alt', item.alt);
    h3.textContent = item.title;
    paragraph.textContent = item.subtitle;
    imgAttach.setAttribute('src', item.iconAttach);
    imgAttach.setAttribute('alt', 'Attach pic');
    imgSearch.setAttribute('src', item.iconSearch);
    imgSearch.setAttribute('alt', 'Search pic');

    blockItem.append(imgAttach);
    blockItem.append(imgSearch);

    block.append(img);
    block.append(h3);
    block.append(paragraph);

    block.append(blockItem);
    portfolioBlock.append(block);
  });

  portfolio.append(itemsWrapper);
  itemsWrapper.append(portfolioBlock);
  

  const portfolioButton = document.createElement('div');
  const leftButton = document.createElement('button');
  const rightButton = document.createElement('button');
  const worksButton = document.createElement('button');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');

  portfolioButton.className = 'portfolio__btn';
  leftButton.className = 'portfolio__btn-left left-arrow';
  rightButton.className = 'portfolio__btn-right right-arrow';
  img1.className = 'left-button';
  img2.className = 'right-button';
  worksButton.className = 'portfolio__btn-works';

  img1.setAttribute('src', './img/icons/atoms/a-icon-arrow.svg');
  img1.setAttribute('alt', 'Left arrow');
  img2.setAttribute('src', './img/icons/atoms/a-icon-arrow.svg');
  img2.setAttribute('alt', 'Right arrow');
  worksButton.textContent = 'See all works';

  leftButton.append(img1);
  rightButton.append(img2);
  portfolioButton.append(leftButton);
  portfolioButton.append(rightButton);

  portfolio.append(portfolioButton);
  portfolio.append(worksButton);

  return portfolio;
}

function sectionTestimonials() {
  const testimonials = document.createElement('section');
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const testimonialsLine = document.createElement('div');

  testimonials.className = 'main__testimonials testimonials';
  img.className = 'testimonials__bg';
  h2.className = 'testimonials__title';
  testimonialsLine.className = 'testimonials__line';

  img.setAttribute('src', htmlData.sectionTestimonials.background);
  img.setAttribute('alt', 'Testimonials background');
  h2.textContent = htmlData.sectionTestimonials.title.h2;

  testimonials.append(img);
  testimonials.append(h2);
  testimonials.append(testimonialsLine);

  const testImonialsWrap = document.createElement('div');
  const sliderBlock = document.createElement('div');
  const sliderLeftBtn = document.createElement('button');
  const sliderRightBtn = document.createElement('button');
  const leftArrow = document.createElement('img');
  const rightArrow = document.createElement('img');
  const sliderWrapper = document.createElement('div');
  const wrapper1 = document.createElement('div');
  const wrapper2 = document.createElement('div');
  const textWrapper = document.createElement('div');
  const text = document.createElement('p');
  const name = document.createElement('p');
  const role = document.createElement('p');
  const sliderImg = document.createElement('img');

  testImonialsWrap.className = 'testimonials__person-wrap';
  sliderBlock.className = 'testimonials__slider slider';
  sliderLeftBtn.className = 'slider__btn-left left-arrow';
  sliderRightBtn.className = 'slider__btn-right right-arrow';
  leftArrow.className = 'left-button';
  rightArrow.className = 'right-button';
  sliderWrapper.className = 'slider__div testimonials__person';
  wrapper1.className = 'slider__div-1';
  wrapper2.className = 'slider__div-2';
  textWrapper.className = 'div-1__wrapper';
  text.className = 'slider__div-text';
  name.className = 'slider__div-name';
  role.className = 'slider__div-role';
  sliderImg.className = 'slider__pic';

  const wrapper = document.createElement('div');
  const sliderContainer = document.createElement('div');
  // const sliderWrapperCopy = document.createElement('div');
  // const wrapper1Copy = document.createElement('div');
  // const wrapper2Copy = document.createElement('div');
  // const textWrapperCopy = document.createElement('div');
  // const textCopy = document.createElement('p');
  // const nameCopy = document.createElement('p');
  // const roleCopy = document.createElement('p');
  // const sliderImgCopy = document.createElement('img');

  wrapper.className = 'slide__wrapper slider';
  sliderContainer.className = 'slide__container testimonials__person-wrap';
  // sliderWrapperCopy.className = 'slider__div';
  // wrapper1Copy.className = 'slider__div-1';
  // wrapper2Copy.className = 'slider__div-2';
  // textWrapperCopy.className = 'div-1__wrapper';
  // textCopy.className = 'slider__div-text';
  // nameCopy.className = 'slider__div-name';
  // roleCopy.className = 'slider__div-role';
  // sliderImgCopy.className = 'slider__pic';

  // textCopy.textContent = htmlData.sectionTestimonials.slider.text;
  // nameCopy.textContent = htmlData.sectionTestimonials.slider.name;
  // roleCopy.textContent = htmlData.sectionTestimonials.slider.role;
  // sliderImgCopy
  //     .setAttribute('src', htmlData.sectionTestimonials.slider.picture);
  // sliderImgCopy.setAttribute('alt', 'User image');

  leftArrow.setAttribute('src', htmlData.sectionTestimonials.slider.leftButton);
  rightArrow
      .setAttribute('src', htmlData.sectionTestimonials.slider.rightButton);
  leftArrow.setAttribute('alt', 'Left arrow');
  rightArrow.setAttribute('alt', 'Right arrow');
  text.textContent = htmlData.sectionTestimonials.slider.text;
  name.textContent = htmlData.sectionTestimonials.slider.name;
  role.textContent = htmlData.sectionTestimonials.slider.role;
  sliderImg.setAttribute('src', htmlData.sectionTestimonials.slider.picture);
  sliderImg.setAttribute('alt', 'User image');

  textWrapper.append(text);
  textWrapper.append(name);
  textWrapper.append(role);
  wrapper1.append(textWrapper);
  wrapper2.append(sliderImg);
  sliderWrapper.append(wrapper1);
  sliderWrapper.append(wrapper2);
  sliderLeftBtn.append(leftArrow);
  sliderRightBtn.append(rightArrow);
  sliderBlock.append(sliderLeftBtn);
  // textWrapperCopy.append(textCopy);
  // textWrapperCopy.append(nameCopy);
  // textWrapperCopy.append(roleCopy);
  // wrapper1Copy.append(textWrapperCopy);
  // wrapper2Copy.append(sliderImgCopy);
  // sliderWrapperCopy.append(wrapper1Copy);
  // sliderWrapperCopy.append(wrapper2Copy);
  wrapper.append(sliderWrapper);
  // wrapper.append(sliderWrapperCopy);
  sliderContainer.append(wrapper);
  sliderBlock.append(sliderContainer);
  sliderBlock.append(sliderRightBtn);
  testImonialsWrap.append(sliderBlock);
  testimonials.append(testImonialsWrap);

  return testimonials;
}

function renderSections() {
  main.insertAdjacentElement('afterbegin', sectionTestimonials());
  main.insertAdjacentElement('afterbegin', sectionPortfolio());
  main.insertAdjacentElement('afterbegin', sectionPosts());
  main.insertAdjacentElement('afterbegin', sectionAbout());
}

renderSections();

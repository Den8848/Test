const main = document.querySelector('.main');
const mainWrapper = document.createElement('div');
mainWrapper.className = 'main__wrapper main__post post';

function createTitleH1() {
  const titleH1 = document.createElement('h1');

  titleH1.className = 'post__title';

  titleH1.textContent = htmlData.postTitle;

  return titleH1;
}

function createSectionAuthor() {
  const sectionAuthor = document.createElement('div');
  const imageDiv = document.createElement('div');
  const image = document.createElement('img');
  const infoDiv = document.createElement('div');
  const authorName = document.createElement('span');
  const info = document.createElement('p');
  const date = document.createElement('span');
  const dot1 = document.createElement('span');
  const minutes = document.createElement('span');
  const dot2 = document.createElement('span');
  const commentIcon = document.createElement('img');
  const count = document.createElement('span');
  const star1 = document.createElement('img');
  const star2 = document.createElement('img');
  const star3 = document.createElement('img');
  const star4 = document.createElement('img');
  const star5 = document.createElement('img');

  sectionAuthor.className = 'post__author';
  imageDiv.className = 'post__author-img';
  image.className = 'author-img';
  infoDiv.className = 'post__author-info';
  authorName.className = 'post__author-name';
  info.className = 'post__info';
  date.className = 'date';
  dot1.className = 'info-dot';
  minutes.className = 'minutes';
  dot2.className = 'info-dot';
  commentIcon.className = 'comment-icon';
  count.className = 'count';
  star1.className = 'yellow__star';
  star2.className = 'grey__star';
  star3.className = 'grey__star';
  star4.className = 'grey__star';
  star5.className = 'grey__star';

  image.setAttribute('src', htmlData.sectionAuthor.authorImgSrc);
  image.setAttribute('alt', htmlData.sectionAuthor.authorImgAlt);
  authorName.textContent = htmlData.sectionAuthor.authorInfo.authorName;
  date.textContent = htmlData.sectionAuthor.authorInfo.date;
  dot1.textContent = htmlData.sectionAuthor.authorInfo.dot1;
  minutes.textContent = htmlData.sectionAuthor.authorInfo.minutes;
  dot2.textContent = htmlData.sectionAuthor.authorInfo.dot2;
  commentIcon
      .setAttribute('src', htmlData.sectionAuthor.authorInfo.commentIconSrc);
  commentIcon
      .setAttribute('alt', htmlData.sectionAuthor.authorInfo.commentIconAlt);
  count.textContent = htmlData.sectionAuthor.authorInfo.count;
  star1.setAttribute('src', htmlData.sectionAuthor.authorInfo.yellowStar);
  star1.setAttribute('alt', htmlData.sectionAuthor.authorInfo.yellowStarAlt);
  star2.setAttribute('src', htmlData.sectionAuthor.authorInfo.greyStar);
  star2.setAttribute('alt', htmlData.sectionAuthor.authorInfo.greyStarAlt);
  star3.setAttribute('src', htmlData.sectionAuthor.authorInfo.greyStar);
  star3.setAttribute('alt', htmlData.sectionAuthor.authorInfo.greyStarAlt);
  star4.setAttribute('src', htmlData.sectionAuthor.authorInfo.greyStar);
  star4.setAttribute('alt', htmlData.sectionAuthor.authorInfo.greyStarAlt);
  star5.setAttribute('src', htmlData.sectionAuthor.authorInfo.greyStar);
  star5.setAttribute('alt', htmlData.sectionAuthor.authorInfo.greyStarAlt);

  imageDiv.append(image);
  info.append(date);
  // info.append(dot1);
  info.append(minutes);
  // info.append(dot2);
  info.append(commentIcon);
  info.append(count);
  info.append(star1);
  info.append(star2);
  info.append(star3);
  info.append(star4);
  info.append(star5);
  infoDiv.append(authorName);
  infoDiv.append(info);
  sectionAuthor.append(imageDiv);
  sectionAuthor.append(infoDiv);

  return sectionAuthor;
}

function createSectionTextContent() {
  const contentDiv = document.querySelector('.post__page');
  const imageDiv = document.createElement('div');
  const image = document.createElement('img');
  const textDiv = document.createElement('div');
  const audioWrap = document.createElement('audio');
  const audioSource = document.createElement('source');

  const textThing = document.createElement('p');
  const textNumber = document.createElement('p');
  const textSame = document.createElement('p');
  const titleTechno = document.createElement('h2');
  const textMethods = document.createElement('p');
  const textHelp = document.createElement('p');
  const markText = document.createElement('p');
  const titleInterface = document.createElement('h2');
  const textPeople = document.createElement('p');

  imageDiv.className = 'post__page-img';
  image.className = 'page-img';
  textDiv.className = 'post__page-text';
  audioSource.className = 'post__page-audio';
  textThing.className = 'post__page-description';
  textNumber.className = 'post__page-description';
  textSame.className = 'post__page-description';
  titleTechno.className = 'post__page-title1';
  textMethods.className = 'post__page-description';
  textHelp.className = 'post__page-description';
  markText.className = 'post__page-description mark-text';
  titleInterface.className = 'post__page-title2';
  textPeople.className = 'post__page-description';

  image.setAttribute('src', htmlData.sectionTextContent.mainImgSrc);
  image.setAttribute('alt', htmlData.sectionTextContent.mainImgAlt);
  audioWrap.setAttribute('controls', '');
  audioSource.setAttribute('src', htmlData.sectionTextContent.audioSrc);
  audioSource.setAttribute('alt', htmlData.sectionTextContent.audioType);

  textThing.textContent = htmlData.sectionTextContent.textThing;
  textNumber.textContent = htmlData.sectionTextContent.textNumber;
  textSame.textContent = htmlData.sectionTextContent.textSame;
  titleTechno.textContent = htmlData.sectionTextContent.titleTechno;
  textMethods.textContent = htmlData.sectionTextContent.textMethods;
  textHelp.textContent = htmlData.sectionTextContent.textHelp;
  markText.textContent = htmlData.sectionTextContent.markText;
  titleInterface.textContent = htmlData.sectionTextContent.titleInterface;
  textPeople.textContent = htmlData.sectionTextContent.textPeople;

  audioWrap.append(audioSource);
  textDiv.append(audioWrap);
  textDiv.append(textThing);
  textDiv.append(textNumber);
  textDiv.append(textSame);
  textDiv.append(titleTechno);
  textDiv.append(textMethods);
  textDiv.append(textHelp);
  textDiv.append(markText);
  textDiv.append(titleInterface);
  textDiv.append(textPeople);
  imageDiv.append(image);

  contentDiv.insertAdjacentElement('afterbegin', textDiv);
  contentDiv.insertAdjacentElement('afterbegin', imageDiv);

  return contentDiv;
}

function createSectionLikes() {
  const sectionLikes = document.createElement('div');
  const likesWrapper = document.createElement('div');
  const likesImg = document.createElement('div');
  const likesCount = document.createElement('span');

  sectionLikes.className = 'post__page-likes';
  likesWrapper.className = 'page-likes__like';
  likesImg.className = 'page-likes__img';
  likesCount.className = 'page-likes__count';

  likesCount.textContent = htmlData.sectionLikes.likes.count;

  likesWrapper.append(likesImg);
  likesWrapper.append(likesCount);
  sectionLikes.append(likesWrapper);

  const likesLinks = document.createElement('div');
  likesLinks.className = 'page-likes__links';
  const linksWrapper = document.createElement('ul');
  linksWrapper.className = 'links__wrapper';

  htmlData.sectionLikes.socialNetworks.forEach((item) => {
    const linksItem = document.createElement('li');
    const anchor = document.createElement('a');
    const img = document.createElement('img');

    linksItem.className = 'links__item';
    img.className = 'links__item-link';

    anchor.setAttribute('href', item.href);
    anchor.setAttribute('target', item.target);
    img.setAttribute('src', item.src);
    img.setAttribute('alt', item.alt);

    anchor.append(img);
    linksItem.append(anchor);
    linksWrapper.append(linksItem);
  });

  const likesUnderline = document.createElement('div');
  likesUnderline.className = 'page-likes__underline';

  likesLinks.append(linksWrapper);
  sectionLikes.append(likesLinks);
  sectionLikes.append(likesUnderline);

  return sectionLikes;
}

function createSectionReviews() {
  const reviewsDiv = document.createElement('div');
  reviewsDiv.className = 'reviews__wrapper reviews';

  const reviewsTitle = document.createElement('h2');
  reviewsTitle.className = 'reviews__title';
  reviewsTitle.textContent = htmlData.sectionReviews.title;

  const reviewsItems = document.createElement('div');
  reviewsItems.classList = 'reviews__items';

  htmlData.sectionReviews.reviewsItems.forEach((item) => {
    const reviewItem = document.createElement('div');
    reviewItem.className = item.itemClass;

    const reviewAuthorImg = document.createElement('img');
    reviewAuthorImg.className = 'reviews__item-img';
    reviewAuthorImg.setAttribute('src', item.authorImgSrc);
    reviewAuthorImg.setAttribute('alt', item.authorImgAlt);

    const reviewTextDiv = document.createElement('div');
    reviewTextDiv.className = item.itemTextClass;
    const textWrapper = document.createElement('div');
    textWrapper.className = 'item-text__wrapper';
    const reviewAuthorName = document.createElement('p');
    reviewAuthorName.className = 'reviews__author-name';
    reviewAuthorName.textContent = item.authorName;

    const star1 = document.createElement('img');
    star1.setAttribute('src', item.star1);
    star1.setAttribute('alt', item.star1Alt);
    star1.className = item.star1Class;

    const star2 = document.createElement('img');
    star2.setAttribute('src', item.star2);
    star2.setAttribute('alt', item.star2Alt);
    star2.className = item.star2Class;

    const star3 = document.createElement('img');
    star3.setAttribute('src', item.star3);
    star3.setAttribute('alt', item.star3Alt);
    star3.className = item.star3Class;

    const star4 = document.createElement('img');
    star4.setAttribute('src', item.star4);
    star4.setAttribute('alt', item.star4Alt);
    star4.className = item.star4Class;

    const star5 = document.createElement('img');
    star5.setAttribute('src', item.star5);
    star5.setAttribute('alt', item.star5Alt);
    star5.className = item.star5Class;

    const reviewTimeDiv = document.createElement('div');
    reviewTimeDiv.className = 'reviews__time';
    const timeImage = document.createElement('img');
    timeImage.className = 'reviews__time-img';
    const reviewTime = document.createElement('span');
    reviewTime.className = 'reviews__time-ago';
    timeImage.setAttribute('src', item.timeIconSrc);
    timeImage.setAttribute('alt', item.timeIconAlt);
    reviewTime.textContent = item.reviewTime;

    const reviewText = document.createElement('p');
    reviewText.className = 'reviews__text';
    reviewText.textContent = item.reviewText;

    const reviewButton = document.createElement('button');
    reviewButton.className = 'reviews__btn';
    reviewButton.textContent = item.reviewButton;

    reviewTimeDiv.append(timeImage);
    reviewTimeDiv.append(reviewTime);

    textWrapper.append(reviewAuthorName);
    textWrapper.append(star1);
    textWrapper.append(star2);
    textWrapper.append(star3);
    textWrapper.append(star4);
    textWrapper.append(star5);
    textWrapper.append(reviewTimeDiv);

    reviewTextDiv.append(textWrapper);
    reviewTextDiv.append(reviewText);
    reviewTextDiv.append(reviewButton);

    reviewItem.append(reviewAuthorImg);
    reviewItem.append(reviewTextDiv);
    reviewsItems.append(reviewItem);
  });

  reviewsItems.append(createButton());
  reviewsDiv.append(reviewsTitle);
  reviewsDiv.append(reviewsItems);

  return reviewsDiv;
}

function createButton() {
  const buttonWrapper = document.createElement('div');
  const nearFooterButton = document.createElement('button');

  buttonWrapper.className = 'button__wrapper';
  nearFooterButton.className = 'reviews__items-btn';
  nearFooterButton.textContent = 'More comments';

  buttonWrapper.append(nearFooterButton);

  return buttonWrapper;
}

function renderContent() {
  mainWrapper.append(createTitleH1());
  mainWrapper.append(createSectionAuthor());
  mainWrapper.append(createSectionTextContent());
  mainWrapper.append(createSectionLikes());
  mainWrapper.append(createSectionReviews());

  main.insertAdjacentElement('afterbegin', mainWrapper);
}

renderContent();

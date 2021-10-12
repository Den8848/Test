const main = document.querySelector('.main');
const mainWrapper = document.createElement('div');
const sectionBlog = document.createElement('section');

mainWrapper.className = 'main__wrapper';
sectionBlog.className = 'main__blog blog';

function searchBlock() {
  const blogTitle = document.createElement('h2');
  const blogLine = document.createElement('div');
  const blogSearch = document.createElement('div');
  const blogForm = document.createElement('form');
  const blogInput = document.createElement('input');
  const blogImg = document.createElement('img');

  blogTitle.className = 'blog__title';
  blogLine.className = 'blog__line';
  blogSearch.className = 'blog__search';
  blogForm.className = 'blog__search';
  blogImg.className = 'blog__search-img';

  blogTitle.textContent = htmlData.sectionBlog.h2;
  blogForm.setAttribute('action', '#');
  blogForm.setAttribute('method', 'get');

  blogInput.setAttribute('name', 'name');
  blogInput.setAttribute('placeholder', htmlData.sectionBlog.form.placeholder);
  blogInput.setAttribute('type', htmlData.sectionBlog.form.inputType);

  blogImg.setAttribute('src', htmlData.sectionBlog.form.img);
  blogImg.setAttribute('alt', htmlData.sectionBlog.form.alt);

  const divSearchInput = document.createElement('div');
  blogForm.append(blogInput);
  blogForm.append(blogImg);
  blogSearch.append(blogForm);

  divSearchInput.append(blogTitle);
  divSearchInput.append(blogLine);
  divSearchInput.append(blogSearch);

  return divSearchInput;
}

const blogMedia = document.createElement('div');
const mediaUl = document.createElement('ul');
blogMedia.className = 'blog__media media';
mediaUl.className = 'media__list list';

const apiKey = 'e40b68f789ace556e6194af926c1cb46';

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((json) => {
      const requests = json.results.map((item) => fetch(`https://api.themoviedb.org/3/movie/${item.id}?api_key=${apiKey}&language=en-US`));
      return Promise.all(requests)
          .then(((object) =>
            Promise.all(object.map((data) => data.json()))
          ));
    })
    .then((json) => {
      const requests = json.map((item) => fetch(`https://api.themoviedb.org/3/movie/${item.id}/credits?api_key=${apiKey}&language=en-US`));
      return Promise.all(requests)
          .then(((object) =>
            Promise.all(object.map((data) => data.json()))))
          .then((data) => {
            json.forEach((item, index) => {
              item.actors = data[index].cast;
            });
            console.log(json);
            return json;
          });
    })
    .then((json) => {
      json.forEach((item) => {
        const li = document.createElement('li');
        const divWrap = document.createElement('div');
        const imgPlayIcon = document.createElement('img');
        const itemProfile = document.createElement('div');
        const profileWrap = document.createElement('div');
        const pictureWrapper = document.createElement('picture');
        const div = document.createElement('div');
        const divInfo = document.createElement('div');
        const date = document.createElement('span');
        const dot = document.createElement('span');
        const minutes = document.createElement('span');
        const commentImg = document.createElement('img');
        const count = document.createElement('span');
        const stars = document.createElement('span');
        const yellowStarImg = document.createElement('img');
        const yellowStarImg2 = document.createElement('img');
        const yellowGreyStarImg = document.createElement('img');
        const greyStarImg = document.createElement('img');
        const greyStarImg2 = document.createElement('img');
        const profileIconDiv = document.createElement('div');
        const profileIconImg = document.createElement('img');
        const profileDivText = document.createElement('div');
        const profileDivButton = document.createElement('button');

        li.className = 'list__item item-video';
        divWrap.className = 'item__wrap';
        imgPlayIcon.className = 'media__video-play icon';
        itemProfile.className = 'item__profile';
        profileWrap.className = 'profile__wrap';
        divInfo.className = 'info__wrapper neil-info';
        date.className = 'date';
        dot.className = 'dot';
        minutes.className = 'minutes';
        commentImg.className = 'comment-icon';
        count.className = 'count';
        stars.className = 'neil__stars';
        yellowStarImg.className = 'yellow__star';
        yellowStarImg2.className = 'yellow__star';
        yellowGreyStarImg.className = 'half__star';
        greyStarImg.className = 'grey__star';
        greyStarImg2.className = 'grey__star';
        profileIconDiv.className = 'wrapper__profile-icon';
        profileIconImg.className = 'profile-icon';
        profileDivText.className = 'profile__wrap-text';
        profileDivButton.className = 'button-1';
        imgPlayIcon.setAttribute('src', htmlData.sectionBlog.itemWrap.imgPlay);
        imgPlayIcon.setAttribute('alt', 'Video play icon');
        date.textContent = htmlData.sectionBlog.neil.info.date;
        dot.textContent = htmlData.sectionBlog.neil.info.dot;
        minutes.textContent = htmlData.sectionBlog.neil.info.minutes;
        commentImg.setAttribute('src', htmlData.sectionBlog.neil.info.img);
        commentImg.setAttribute('alt', 'Comment icon');
        count.textContent = htmlData.sectionBlog.neil.info.count;
        yellowStarImg
            .setAttribute('src', htmlData.sectionBlog.neil.info.yellowStar);
        yellowStarImg.setAttribute('alt', 'Yellow star');
        yellowStarImg2
            .setAttribute('src', htmlData.sectionBlog.neil.info.yellowStar);
        yellowStarImg2.setAttribute('alt', 'Yellow star');
        yellowGreyStarImg
            .setAttribute('src', htmlData.sectionBlog.neil.info.yellowGreyStar);
        yellowGreyStarImg.setAttribute('alt', 'Yellow grey star');
        greyStarImg
            .setAttribute('src', htmlData.sectionBlog.neil.info.greyStar);
        greyStarImg.setAttribute('alt', 'Grey star');
        greyStarImg2
            .setAttribute('src', htmlData.sectionBlog.neil.info.greyStar);
        greyStarImg2.setAttribute('alt', 'Grey star');
        profileIconImg
            .setAttribute('src', htmlData.sectionBlog.neil.profileIcon);
        profileIconImg.setAttribute('alt', 'Video play icon');
        profileDivButton.textContent = htmlData.sectionBlog.neil.button;

        const imgPath = item.backdrop_path;
        const fullImgPath = 'https://image.tmdb.org/t/p/w500/' + imgPath;
        const img = document.createElement('img');
        img.classList = 'item__image';
        img.setAttribute('alt', 'Background image');
        img.setAttribute('src', fullImgPath);
        img.style.height = 390 + 'px';
        divWrap.append(img);

        const filmTitle = item.title;
        const title = document.createElement('h3');
        title.classList = 'film__title';
        title.textContent = filmTitle;
        profileDivText.append(title);

        const filmTextAbout = item.overview;
        const filmDescription = document.createElement('p');
        filmDescription.classList = 'film__description';
        filmDescription.textContent = filmTextAbout;
        profileDivText.append(filmDescription);
        profileDivText.append(profileDivButton);

        const actorName = item.actors[0].name;
        const actor = document.createElement('h4');
        actor.classList = 'profile__wrap-title';
        actor.textContent = actorName;

        const avatarPath = item.actors[0].profile_path;
        const fullAvatarPath = 'https://image.tmdb.org/t/p/h632/' + avatarPath;
        const imgAvatar = document.createElement('img');
        imgAvatar.className = 'avatar';
        imgAvatar.setAttribute('src', fullAvatarPath);
        imgAvatar.setAttribute('alt', 'Avatar');
        pictureWrapper.append(imgAvatar);

        // const releaseDate = json.results[0].release_date;
        // const filmDate = new Date(releaseDate);
        // const date = document.createElement('span');
        // date.className = 'date';
        // date.textContent = filmDate;
        // divInfo.append(date);

        divWrap.append(imgPlayIcon);
        div.append(actor);
        divInfo.append(date);
        divInfo.append(dot);
        divInfo.append(minutes);
        divInfo.append(dot);
        divInfo.append(commentImg);
        divInfo.append(count);
        stars.append(yellowStarImg);
        stars.append(yellowStarImg2);
        stars.append(yellowGreyStarImg);
        stars.append(greyStarImg);
        stars.append(greyStarImg2);
        divInfo.append(stars);
        div.append(divInfo);
        profileIconDiv.append(profileIconImg);
        profileWrap.append(pictureWrapper);
        profileWrap.append(div);
        profileWrap.append(profileIconDiv);
        itemProfile.append(profileWrap);
        itemProfile.append(profileDivText);
        li.append(divWrap);
        li.append(itemProfile);
        mediaUl.append(li);
      });
    });

function createButton() {
  const nearFooterButton = document.createElement('button');

  nearFooterButton.className = 'main__blog-btn';
  nearFooterButton.textContent = htmlData.sectionBlog.blogButton;

  return nearFooterButton;
}

function appendAllElements() {
  blogMedia.append(mediaUl);
  sectionBlog.append(searchBlock());
  sectionBlog.append(blogMedia);
  sectionBlog.append(createButton());
  mainWrapper.append(sectionBlog);

  return mainWrapper;
}

function renderContent() {
  main.insertAdjacentElement('beforeend', appendAllElements());
}

renderContent();

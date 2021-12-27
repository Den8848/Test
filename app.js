const CONTAINER = document.querySelector('.container');

const LEFT_ARROW = document.querySelector('.left-arrow');
const LEFT_ARROW_B1 = document.querySelector('.left-arrow-b1');
const LEFT_ARROW_RASP = document.querySelector('.left-arrow-rasp');
const LEFT_ARROW_PEACH = document.querySelector('.left-arrow-peach');
const RIGHT_ARROW = document.querySelector('.right-arrow');
const RIGHT_ARROW_B1 = document.querySelector('.right-arrow-b1');
const RIGHT_ARROW_RASP = document.querySelector('.right-arrow-rasp');
const RIGHT_ARROW_PEACH = document.querySelector('.right-arrow-peach');

const FIRST_SLIDE = document.querySelector('.slider-block');
const PEPERMINT_SLIDE = document.querySelector('.slider-block-pepermint');
const SECOND_SLIDE = document.querySelector('.slider-block-raspberry');
const THIRD_SLIDE = document.querySelector('.slider-block-peach');

const PEPERMINT_HEADER = document.querySelector('.hidden-pepermint');
const PEPERMINT_HEADER_2 = document.querySelector('.hidden-pepermint-2');
const RASPBERRY_HEADER = document.querySelector('.hidden-raspberry');
const PEACH_HEADER = document.querySelector('.hidden-peach');

const TITLE_PEPERMINT = document.querySelector('.title-twinings-b1');
const TITLE_RASPBERRY = document.querySelector('.title-raspberry');
const TITLE_PEACH = document.querySelector('.title-peach');

const STRAWBERRY_1 = document.querySelector('.strawberry-1-b1');
const STRAWBERRY_2 = document.querySelector('.strawberry-2-b1');
const SEED_1 = document.querySelector('.seed-1-b1');
const SEED_2 = document.querySelector('.seed-2-b1');
const PEPERMINT_1 = document.querySelector('.pepermint-1-b1');
const PEPERMINT_2 = document.querySelector('.pepermint-2-b1');

const LEMON = document.querySelector('.lemon');
const PETAL_1 = document.querySelector('.petal-1');
const PETAL_2 = document.querySelector('.petal-2');
const PETAL_3 = document.querySelector('.petal-3');
const PETAL_4 = document.querySelector('.petal-4');
const PETAL_5 = document.querySelector('.petal-5');
const RASPBERRY_1 = document.querySelector('.raspberry-1');
const RASPBERRY_2 = document.querySelector('.raspberry-2');
const RASPBERRY_3 = document.querySelector('.raspberry-3');

const PEACH = document.querySelector('.peach');
const ORANGE = document.querySelector('.orange');

const PEPERMINT_TEA_0 = document.querySelector('.pepermint-tea');
const PEPERMINT_TEA = document.querySelector('.pepermint-tea-b1');
const RASPBERRY_TEA = document.querySelector('.raspberry-tea');
const PEACH_TEA = document.querySelector('.peach-tea');

// LEFT DIRECTION SLIDER START
function leftSlide() {
    if (FIRST_SLIDE) {
        FIRST_SLIDE.style.display='none';
        PEPERMINT_HEADER.style.display='none';
        
        PEACH_TEA.classList.remove('tea-right');
        PEACH_TEA.classList.add('tea-left');

        TITLE_PEACH.classList.add('appearence-title');
        CONTAINER.style.backgroundColor = '#FBE7E0';
        THIRD_SLIDE.style.display='block';
        PEACH_HEADER.style.display='block';
        ORANGE.classList.add('appearence');
        PEACH.classList.add('appearence');
    }
}

function leftSlidePeach() {
    if (THIRD_SLIDE) {
        THIRD_SLIDE.style.display='none';
        PEACH_HEADER.style.display='none';

        CONTAINER.style.backgroundColor = '#FAE5EA';
        SECOND_SLIDE.style.display='block';
        RASPBERRY_HEADER.style.display='block';

        RASPBERRY_TEA.classList.remove('tea-right');
        RASPBERRY_TEA.classList.add('tea-left');

        TITLE_RASPBERRY.classList.add('appearence-title');
        LEMON.classList.add('appearence');
        PETAL_1.classList.add('appearence');
        PETAL_2.classList.add('appearence');
        PETAL_3.classList.add('appearence');
        PETAL_4.classList.add('appearence');
        PETAL_5.classList.add('appearence');
        RASPBERRY_1.classList.add('appearence');
        RASPBERRY_2.classList.add('appearence');
        RASPBERRY_3.classList.add('appearence');
    }
}

function leftSlideRasp() {
    if (SECOND_SLIDE) {
        SECOND_SLIDE.style.display='none';
        RASPBERRY_HEADER.style.display='none';

        CONTAINER.style.backgroundColor = '#FFF9DD';
        PEPERMINT_SLIDE.style.display='block';
        PEPERMINT_HEADER_2.style.display='block';

        PEPERMINT_TEA.classList.remove('tea-right');
        PEPERMINT_TEA.classList.add('tea-left');

        TITLE_PEPERMINT.classList.add('appearence-title');
        STRAWBERRY_1.classList.add('appearence');
        STRAWBERRY_2.classList.add('appearence');
        SEED_1.classList.add('appearence');
        SEED_2.classList.add('appearence');
        PEPERMINT_1.classList.add('appearence');
        PEPERMINT_2.classList.add('appearence');
    }
}

function leftSlidePepermint() {
    if (SECOND_SLIDE) {
        PEPERMINT_SLIDE.style.display='none';
        PEPERMINT_HEADER_2.style.display='none';

        PEACH_TEA.classList.remove('tea-right');
        PEACH_TEA.classList.add('tea-left');

        TITLE_PEACH.classList.add('appearence-title');
        CONTAINER.style.backgroundColor = '#FBE7E0';
        THIRD_SLIDE.style.display='block';
        PEACH_HEADER.style.display='block';
    }
}
// LEFT DIRECTION SLIDER END

// RIGHT DIRECTION SLIDER START
function rightSlide() {
    if (FIRST_SLIDE) {
        FIRST_SLIDE.style.display='none';
        PEPERMINT_HEADER.style.display='none';
        
        CONTAINER.style.backgroundColor = '#FAE5EA';
        SECOND_SLIDE.style.display='block';
        RASPBERRY_HEADER.style.display='block';

        RASPBERRY_TEA.classList.remove('tea-left');
        RASPBERRY_TEA.classList.add('tea-right');

        TITLE_RASPBERRY.classList.add('appearence-title');
        LEMON.classList.add('appearence');
        PETAL_1.classList.add('appearence');
        PETAL_2.classList.add('appearence');
        PETAL_3.classList.add('appearence');
        PETAL_4.classList.add('appearence');
        PETAL_5.classList.add('appearence');
        RASPBERRY_1.classList.add('appearence');
        RASPBERRY_2.classList.add('appearence');
        RASPBERRY_3.classList.add('appearence');
    }
}

function rightSlideRasp() {
    if (SECOND_SLIDE) {
        SECOND_SLIDE.style.display='none';
        RASPBERRY_HEADER.style.display='none';

        CONTAINER.style.backgroundColor = '#FBE7E0';
        THIRD_SLIDE.style.display='block';
        PEACH_HEADER.style.display='block';

        PEACH_TEA.classList.remove('tea-left');
        PEACH_TEA.classList.add('tea-right');

        TITLE_PEACH.classList.add('appearence-title');
        ORANGE.classList.add('appearence');
        PEACH.classList.add('appearence');
    }
}

function rightSlidePeach() {
    if (THIRD_SLIDE) {
        THIRD_SLIDE.style.display='none';
        PEACH_HEADER.style.display='none';

        CONTAINER.style.backgroundColor = '#FFF9DD';
        PEPERMINT_SLIDE.style.display='block';
        PEPERMINT_HEADER_2.style.display='block';

        PEPERMINT_TEA.classList.remove('tea-left');
        PEPERMINT_TEA.classList.add('tea-right');

        TITLE_PEPERMINT.classList.add('appearence-title');
        STRAWBERRY_1.classList.add('appearence');
        STRAWBERRY_2.classList.add('appearence');
        SEED_1.classList.add('appearence');
        SEED_2.classList.add('appearence');
        PEPERMINT_1.classList.add('appearence');
        PEPERMINT_2.classList.add('appearence');
    }
}

function rightSlidePepermint() {
    if (PEPERMINT_SLIDE) {
        PEPERMINT_SLIDE.style.display='none';
        PEPERMINT_HEADER_2.style.display='none';

        RASPBERRY_TEA.classList.remove('tea-left');
        RASPBERRY_TEA.classList.add('tea-right');

        TITLE_RASPBERRY.classList.add('appearence-title');
        CONTAINER.style.backgroundColor = '#FAE5EA';
        SECOND_SLIDE.style.display='block';
        RASPBERRY_HEADER.style.display='block';
    }
}
// RIGHT DIRECTION SLIDER END

LEFT_ARROW.addEventListener('click', leftSlide);
LEFT_ARROW_PEACH.addEventListener('click', leftSlidePeach);
LEFT_ARROW_RASP.addEventListener('click', leftSlideRasp);
LEFT_ARROW_B1.addEventListener('click', leftSlidePepermint);

RIGHT_ARROW.addEventListener('click', rightSlide);
RIGHT_ARROW_RASP.addEventListener('click', rightSlideRasp);
RIGHT_ARROW_PEACH.addEventListener('click', rightSlidePeach);
RIGHT_ARROW_B1.addEventListener('click', rightSlidePepermint);


const ORIENTATION_PICTURE_WRAPPER = document.querySelector('.orientation-change__picture-wrapper');

screen.orientation.addEventListener('change', function() {
    console.log(screen.orientation.type)
    console.log(screen.orientation)

    if(screen.orientation.type === 'landscape-primary'){
        ORIENTATION_PICTURE_WRAPPER.classList.add('show-container');
        CONTAINER.classList.add('hide-container');
    }

    if(screen.orientation.type === 'portrait-primary'){
        ORIENTATION_PICTURE_WRAPPER.classList.remove('show-container');
        CONTAINER.classList.remove('hide-container');
    }
})
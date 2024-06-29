const openAudio = document.querySelector('#intro-wish');
const wish = document.querySelector('#wish');
const clickAudio = document.querySelector('#clickforaudio');
const audioDiv = document.querySelector('#audiodiv');
const endAudioBtn = document.querySelector('#endAudioBtn');
const EndAudio = document.querySelector('#EndAudio');
const nextBtn = document.querySelector('#nextBtn');
const factsDiv = document.querySelector('#factsDiv');
const factBox1 = document.querySelector('.f1');
const factBox2 = document.querySelector('.f2');
const factBox3 = document.querySelector('.f3');
const factBox4 = document.querySelector('.f4');
const factBox5 = document.querySelector('.f5');
const nextfactBtn = document.querySelector('#nextfactBtn');
const nextfactBtn2 = document.querySelector('#nextfactBtn2');
const nextfactBtn3 = document.querySelector('#nextfactBtn3');
const nextfactBtn4 = document.querySelector('#nextfactBtn4');
const nextfactBtn5 = document.querySelector('#nextfactBtn5');
const endPage = document.querySelector('#End');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeWishBackgroundColor() {
    wish.style.backgroundColor = getRandomColor();
}

setInterval(changeWishBackgroundColor, 1000);



const showAudio = () => {
   console.log('showaudio'); 
   audioDiv.style.display = 'flex';
   clickAudio.style.display ='none';
   factsDiv.style.display = 'none'

}

const facts = () => {
   console.log('facts');
   audioDiv.style.display = 'none';
   nextBtn.style.display = 'none';
   factsDiv.style.display = 'flex'
}

const closeAudio = () => {
    audioDiv.style.display = 'none';
    nextBtn.style.display = 'flex';
    clickAudio.style.display ='flex';

}
const fact2 = () => {
    factBox1.style.display = 'none';
    factBox3.style.display = 'none';
    factBox4.style.display = 'none';
    factBox2.style.display = 'flex';
}
const fact3 = () => {
    factBox1.style.display = 'none';
    factBox2.style.display = 'none';
    factBox4.style.display = 'none';
    factBox3.style.display = 'flex';

}
const fact4 = () => {
    factBox1.style.display = 'none';
    factBox2.style.display = 'none';
    factBox3.style.display = 'none';
    factBox5.style.display = 'none';
    factBox4.style.display = 'flex';

}
const fact5 = () => {
    factBox1.style.display = 'none';
    factBox2.style.display = 'none';
    factBox3.style.display = 'none';
    factBox4.style.display = 'none';
    factBox5.style.display = 'flex';
}

const theEnd = () => {
    endPage.style.display = 'flex';
    factBox5.style.display = 'none';
}

nextBtn.addEventListener('click',facts);
nextfactBtn5.addEventListener('click',theEnd);
nextfactBtn.addEventListener('click',fact2);
nextfactBtn2.addEventListener('click',fact3);
nextfactBtn3.addEventListener('click',fact4);
nextfactBtn4.addEventListener('click',fact5);
endAudioBtn.addEventListener('click',closeAudio);
clickAudio.addEventListener('click',showAudio);


var drums = document.querySelectorAll('.drum');
const sounds = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "crash.mp3", "kick-bass.mp3", "snare.mp3"];

function addAnimation(keyPressed){
    let activeBtn = document.querySelector('.'+keyPressed);
    activeBtn.classList.add('pressed');
    setTimeout(() => {
        activeBtn.classList.remove('pressed');
    }, 100);
}
function playSound(index) {
    if (index >= 0 && index < sounds.length) {
        var song = `./sounds/${sounds[index]}`;
        var audio = new Audio(song);
        audio.play();
        let key = drums[index].innerText;
        addAnimation(key);
    } else {
        console.error('Invalid sound index:', index);
    }
}

function handleDrumClick(event) {
    const keyPressed = event.key.toLowerCase();
    switch (keyPressed) {
        case 'w':
            playSound(0);
            break;
        case 'a':
            playSound(1);
            break;
        case 's':
            playSound(2);
            break;
        case 'd':
            playSound(3);
            break;
        case 'j':
            playSound(4);
            break;
        case 'k':
            playSound(5);
            break;
        case 'l':
            playSound(6);
            break;
        default:
            console.log(keyPressed);
    }
}

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', () => playSound(i));
}

document.addEventListener('keydown', handleDrumClick);

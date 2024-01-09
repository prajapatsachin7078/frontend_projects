
// $(document).ready(function() {
    // Your Pattern
    var pattern = [];
    // colors
    var userPattern = [];
    var currentScore = 0;
    var colors = ['red','blue','yellow','green'];

    function playSound(color){
        console.log(`./sounds/${color}.mp3`)
        let song = new Audio(`./sounds/${color}.mp3`);
        song.play();
    }
    function addAnimation(color){
        $('#'+color).addClass('pressed');
        setTimeout(function() {
            $('#'+color).removeClass('pressed');
        }, 200); 
        playSound(color);
    }
    function addPattern(){
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        pattern.push(randomColor);
        addAnimation(randomColor);
        // console.log(randomColor);
    }

    function gameOver() {
        userPattern = [];
        pattern = [];
        $('#level-title').text('Press A Key to Start');
    }
    
    function checkPattern(){
        for(let i=0;i<userPattern.length;i++){
            if(userPattern[i] !== pattern[i]){
                playSound('wrong');
                gameOver();
                return;
            }
        }
          // User's pattern matches the game's pattern
        if (userPattern.length === pattern.length) {
            // Start a new round or perform the next step
            
            updateScore(currentScore++);
            addPattern();
        }
    }
    function updateScore(){
        $('#level-title').text(`Level ${currentScore}`);
    }
    // Start the game
    $(document).on('keydown', function(event) {
        // starting the game
        if(pattern.length ==0){
            addPattern();
            updateScore();
        }
    });
   
    for(let color of colors){
        $('#' + color).on('click',()=>{
            userPattern.push(color);
            checkPattern();
        }); 
    }
// });

//mon script

//move Camille with movemove
$(document).on('mousemove', function (event) {
   camille.css('left', event.pageX);
});


//falling chocolat infinitely
function choco_down(chocolats){
    choco_current_position = parseInt(chocolats.css('top'));
    chocolats.css('top', choco_current_position + speed) //here, we can update the choco falling speed (cf update score)
}

//stop chocolat on the ground and return in initial position
function check_choco_hits_floor(chocolats) {
    if(collision(chocolats, ground)){
        show_oups(chocolats);
        decrement_life();
        return true;
    }
    return false;
}

function set_choco_to_initial_position(chocolats){
    chocolats.css('top', choco_initial_position);
}

function show_oups(chocolats){
    oups_num = chocolats.attr('data-oups');
    $('#oups' + oups_num).show();
    hide_oups(oups_num)

}

//hide the bullseye 800 ms after it's appeared
function hide_oups(oups_num){
    setTimeout(function () {
        $('#oups' + oups_num).hide();
    }, 500);
}


//decrement life when chocolats hit the ground
function decrement_life(){
    life--;
    life_span.text(life);
}

//manage when the choco hit camille
function check_choco_hits_camille(chocolats){
    if(collision(chocolats, camille)) { //when eggs hit basket, it return to it's inital position
        //condition, if the basket start is not hitten by the egg top, it is a loss
        choco_top = parseInt(camille.css('top'));
        if(choco_top < camille_top) {
            update_score();
            return true;
        }
    }
    return false
}

//update score when the choco hit camille
function update_score(){
    score++;
    //if you play longer, increase difficulty by incrasing speed and set a maximal speed (dont break count function)
    if(score % 10 === 0 && speed <= max_speed) {
        speed ++;
    }
    score_span.text(score);
    score_1.text(score);
}

//End the game when loose (cf fonction.js)
function stop_the_game(){
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function (){
    location.reload();
});


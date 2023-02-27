$(function () {
    let the_game = function (){
        //******choco1
        //since the choco1 don't hit the ground or camille, he is falling down
        if (check_choco_hits_floor(choco1) || check_choco_hits_camille(choco1))
        {
            set_choco_to_initial_position(choco1);
        } else {
            //falling egg infinitly
            choco_down(choco1);
        }

        //******choco2
        if (check_choco_hits_floor(choco2) || check_choco_hits_camille(choco2))
        {
            set_choco_to_initial_position(choco2);
        } else {
            choco_down(choco2);
        }

        //******choco3
        if (check_choco_hits_floor(choco3) || check_choco_hits_camille(choco3))
        {
            set_choco_to_initial_position(choco3);
        } else {
            choco_down(choco3);
        }

        //******launch and stop **********/
        //launch the script of the game (only if life greater than 0)
        if(life > 0){
            requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);
});
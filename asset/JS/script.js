let camille = $('#camille'),
    gameGround = $('#gameGround'),
    chocolats = $('.chocolats'),
    egg1 = $('#choco-1'),
    egg2 = $('#choco-2'),
    egg3 = $('#choco-3'),
    restart = $('#restart'),
    score_span = $('#score'),
    score_1 = $('#score_1'),
    life_span = $('#life'),
    ground = $('#ground'),
    camille_height = camille.height(),
    gameGround_height = gameGround.height(),
    chocolats_height = chocolats.height(),
    chocolats_initial_position = parseInt(chocolats.css('top')),
    score = 0,
    life = 5,
    speed = 2,
    max_speed = 15,
    counter = 0,
    score_updated = false,
    the_game = 0,
    anim_id = 0,
    choco_current_position = 0,
    choco_top = 0,
    camille_top = container_height - basket_height;
life_span.text(life);
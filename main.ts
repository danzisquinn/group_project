namespace SpriteKind {
    export const goal = SpriteKind.create()
    export const star = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    basketball.throwDart()
})
function basket () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.star, function (sprite, otherSprite) {
    if (star1.x == 151 && star1.y == 50) {
        game.splash(star1_question)
        user_answer_star1 = game.askForString("What is the answer to the question?")
        if (user_answer_star1.includes("hi")) {
            game.splash("You got it right!")
            info.changeScoreBy(1)
            basket()
        } else {
            game.splash("You got it wrong!")
        }
    } else if (star2.x == 97 && star2.y == 73) {
    	
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    basketball.angle = 0
})
let user_answer_star1 = ""
let star1_question = ""
let star2: Sprite = null
let star1: Sprite = null
let basketball: Dart = null
let net = sprites.create(img`
    ..............................
    ..............................
    ..............................
    ...ffffffffffffffffffff.......
    ...f..................f.......
    ...f..22222222222222..f.......
    ...f..2............2..f.......
    ...f..2............2..f.......
    ...f..2............2..f.......
    ...f..244444444444.2..f.......
    ...f..21.1.1.1.1.1.2..f.......
    ...f..22121212121222..f.......
    ...f.....1.1.1.1.1....f.......
    ...fffffff1f1f1f1ffffff.......
    ...........1f1.1..............
    ............1f1...............
    ............f1................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    ............ff................
    `, SpriteKind.goal)
net.setPosition(69, 57)
scene.setBackgroundColor(7)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ...222...2......................................................................................................................................................
    ...2.....2............2.........................................................................................................................................
    ...2222..2...2....222.222.......................................................................................................................................
    ......222222222...2..22.........................................................................................................................................
    ......2..2..2.22..2...2.........................................................................................................................................
    ..22222..2..2222..2...2.........................................................................................................................................
    ...............2..2...2.........................................................................................................................................
    ...............2................................................................................................................................................
    .fffff..............................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    .fffff.......fffff..................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    .fffff.......fffff..................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    .fffff.......fffff..................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    .fffff.......fffff..................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.................................................................fffff.
    .fffff.......fffff..................................................................fffff.............ffffffffffffffffffffffffffffffffffffffffff..........fffff.
    .fffff.......fffff..................................................................fffff.............ffffffffffffffffffffffffffffffffffffffffff..........fffff.
    .fffff.......fffffffffffffffffffffffffffffffffffffff................................fffff.............ffffffffffffffffffffffffffffffffffffffffff..........fffff.
    .fffff.......fffffffffffffffffffffffffffffffffffffff................................fffff.............ffffffffffffffffffffffffffffffffffffffffff..........fffff.
    .fffff.......fffffffffffffffffffffffffffffffffffffff................................fffff.............ffffffffffffffffffffffffffffffffffffffffff..........fffff.
    .fffff.......fffffffffffffffffffffffffffffffffffffff................................fffff.............fffff................................fffff..........fffff.
    .fffff.......fffffffffffffffffffffffffffffffffffffff................................fffff.............fffff................................fffff..........fffff.
    .fffff.........................................fffff................................fffff.............fffff................................fffff..........fffff.
    .fffff.........................................fffff................................fffff.............fffff................................fffff..........fffff.
    .fffff.........................................fffff................................fffff.............fffff................................fffff..........fffff.
    .fffff.........................................fffff................................fffff.............fffff................................fffff..........fffff.
    .fffff.........................................fffff................................fffff.............fffff................................fffff..........fffff.
    .fffff.........................................fffff................................fffff.............fffff................................fffff..........fffff.
    .fffff.........................................fffff................................fffff.............fffff................................fffff..........fffff.
    .ffffffffffffffffffffffffffffffffffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    .ffffffffffffffffffffffffffffffffffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    .ffffffffffffffffffffffffffffffffffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    .ffffffffffffffffffffffffffffffffffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    .ffffffffffffffffffffffffffffffffffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff................................fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......fffff............fffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......fffff............fffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......fffff............fffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......fffff............fffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......fffff............fffff....fffff..........fffff.
    ................................fffff..........fffff................................fffff.............fffff......fffff............fffff....fffff..........fffff.
    ...ffffffffffffffffff...........fffff..........fffff................................fffff.............fffff......fffff............fffff....fffff..........fffff.
    ...ffffffffffffffffff...........fffff..........fffff................................fffff.............fffff......fffff............fffff....fffff..........fffff.
    ...ffffffffffffffffff...........fffff..........fffff................................fffff.............fffff......fffff............ffffffffffffff..........fffff.
    ...ffffffffffffffffff...........fffff..........fffff................................fffff.............fffff......fffff............ffffffffffffff..........fffff.
    ...ffffffffffffffffff...........fffff..........fffff................................fffff.............fffff......fffff............ffffffffffffff..........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......fffff............ffffffffffffff..........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......fffff............ffffffffffffff..........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......fffff....................................fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......fffff....................................fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......fffff....................................fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......fffff....................................fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......fffff....................................fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffffffffffffff.........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffffffffffffff.........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffffffffffffff.........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffffffffffffff.........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff......ffffffffffffffffffffffffffffffff.........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff.................................fffff.........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff.................................fffff.........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff.................................fffff.........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff.................................fffff.........fffff.
    ...fffff........fffff...........fffff..........fffff................................fffff.............fffff.................................fffff.........fffff.
    ...fffff........fffff...........fffff..........ffffffffffffffffffffffffffffffffffffffffff.............fffffffffffffffffffffffffffffff.......fffff.........fffff.
    ...fffff........fffff...........fffff..........ffffffffffffffffffffffffffffffffffffffffff.............fffffffffffffffffffffffffffffff.......fffff.........fffff.
    ...fffff........fffffffffffffffffffff..........ffffffffffffffffffffffffffffffffffffffffff.............fffffffffffffffffffffffffffffff.......fffff.........fffff.
    ...fffff........fffffffffffffffffffff..........ffffffffffffffffffffffffffffffffffffffffff.............fffffffffffffffffffffffffffffff.......fffff.........fffff.
    ...fffff........fffffffffffffffffffff..........ffffffffffffffffffffffffffffffffffffffffff.............fffffffffffffffffffffffffffffff.......fffff.........fffff.
    ...fffff........fffffffffffffffffffff...........................................................................................fffff.......fffff.........fffff.
    ...fffff........fffffffffffffffffffff...........................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff........................................................................................................................fffff.......fffff.........fffff.
    ...fffff.........fffffffffffffffffffffffffffffffffff.......ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........fffff.......fffff.........fffff.
    ...fffff.........fffffffffffffffffffffffffffffffffff.......ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........fffff.......fffff.........fffff.
    ...fffff.........fffffffffffffffffffffffffffffffffff.......ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........fffff.......fffff.........fffff.
    ...fffff.........fffffffffffffffffffffffffffffffffff.......ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........fffff.......fffff.........fffff.
    ...fffff.........fffffffffffffffffffffffffffffffffff.......ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........fffff...........................
    ...fffff.........fffff.........................fffff.......fffff................................................fffff...........fffff...........................
    ...fffff.........fffff.........................fffff.......fffff................................................fffff...........fffff...........................
    ...fffff.........fffff.........................fffff.......fffff................................................fffff...........fffff...........................
    ...fffff.........fffff.........................fffff.......fffff................................................fffff...........fffff...........................
    ...fffff.........fffff.........................fffff.......fffff................................................fffff...........fffff...........................
    ...fffff.........fffff.........................fffff.......fffff................................................fffff...........fffff...........................
    ...fffff.........fffff.........................fffff.......fffff................................................fffff...........fffff...........................
    ...fffffffffffffffffff.........................fffff.......fffff................................................fffffffffffffffffffff...........................
    ...fffffffffffffffffff.........................fffffffffffffffff................................................fffffffffffffffffffff...........................
    ...fffffffffffffffffff.........................fffffffffffffffff................................................fffffffffffffffffffff...........................
    ...fffffffffffffffffff.........................fffffffffffffffff................................................fffffffffffffffffffff...........................
    ...fffffffffffffffffff.........................fffffffffffffffff................................................fffffffffffffffffffff...........................
    ...............................................fffffffffffffffff................................................................................................
    ................................................................................................................................................................
    `)
basketball = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 f 4 4 4 4 f . . . . 
    . . . . 4 4 f f 4 4 f 4 4 . . . 
    . . . 4 f 4 4 4 f f 4 4 f 4 . . 
    . . . 4 f 4 4 4 f f 4 4 f 4 . . 
    . . . 4 f 4 4 4 f f 4 4 f 4 . . 
    . . . 4 f 4 4 4 f f 4 4 f 4 . . 
    . . . 4 f 4 4 4 f f 4 4 f f . . 
    . . . 4 f 4 4 4 f f 4 4 4 f . . 
    . . . f f 4 4 4 f f 4 4 4 f . . 
    . . . . 4 4 4 f f f f 4 4 . . . 
    . . . . . 4 4 f 4 4 f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
basketball.controlWithArrowKeys()
basketball.setTrace()
let monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
monkey.setPosition(150, 111)
star1 = sprites.create(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.star)
star2 = sprites.create(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.star)
let star_3 = sprites.create(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.star)
star1_question = "Jungle trivia"
star1.setPosition(151, 50)
star2.setPosition(97, 73)
star_3.setPosition(42, 69)
for (let index = 0; index < 13; index++) {
    monkey.y += -5
    pause(100)
}

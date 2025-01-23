
let time: number = 0;

let presstime: number = 0;

let randomnumber: number = 0 

let showtime: number = 0

let lightcontrol: number = 0


basic.showString("STARTING")

lightcontrol = input.lightLevel()

randomnumber =randint(2,8)  

    randomnumber *= 1000

showtime = control.millis()

while (control.millis() - showtime  < randomnumber){ 
    basic.showLeds(`
    . # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # . # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # . # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
    basic.showLeds(`
    # # # . #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . .
    # . . . #
    # # # # #
    `)
    basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # . #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # . # #
    `)
    basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # . # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    . # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    . . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    . . . . #
    # . . . #
    # # # # #
    `)
    basic.showLeds(`
    # # # # #
    . . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
    basic.showLeds(`
    . # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
    basic.showLeds(`
    # . # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
}

music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)

time = control.millis()

while (input.lightLevel() > lightcontrol - 10) {
    // čeká se na přikrytí rukou
}

    presstime = control.millis() - time
    basic.showNumber(presstime)
    basic.pause(5000)

if(presstime > 500){

basic.showString("jSI POMALÍ")
}

if (presstime < 500 && presstime > 100){
    basic.showString("Taky dobrý")
}

if(presstime < 100){
    basic.showString("HUSTĚ!")
}

if (presstime == 0) {
    basic.showString("Nebylo změřeno světlo!")
}

control.reset()

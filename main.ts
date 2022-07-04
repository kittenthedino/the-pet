input.onButtonPressed(Button.A, function () {
    soundExpression.twinkle.playUntilDone()
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    soundExpression.mysterious.playUntilDone()
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Chessboard)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
    basic.showLeds(`
        # . . . #
        # # # # #
        . # # # .
        . # # # .
        # . . . #
        `)
    soundExpression.slide.playUntilDone()
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showIcon(IconNames.Asleep)
    }
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showIcon(IconNames.Asleep)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showIcon(IconNames.Asleep)
    }
})
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showIcon(IconNames.Asleep)
}

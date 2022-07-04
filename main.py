def on_button_pressed_a():
    soundExpression.twinkle.play_until_done()
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    soundExpression.mysterious.play_until_done()
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.show_icon(IconNames.DIAMOND)
    basic.show_icon(IconNames.CHESSBOARD)
    basic.show_icon(IconNames.ASLEEP)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    soundExpression.happy.play_until_done()
    basic.show_icon(IconNames.SILLY)
    basic.show_icon(IconNames.ASLEEP)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_icon(IconNames.ASLEEP)
    soundExpression.yawn.play_until_done()
    basic.show_leds("""
        . . . . .
                # # # # #
                . # # # .
                . # # # .
                . . . . .
    """)
    basic.show_icon(IconNames.ANGRY)
    basic.show_icon(IconNames.ASLEEP)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    soundExpression.sad.play_until_done()
    basic.show_icon(IconNames.SAD)
    basic.show_icon(IconNames.ASLEEP)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    basic.show_icon(IconNames.HAPPY)
    soundExpression.giggle.play_until_done()
    basic.show_icon(IconNames.ASLEEP)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

basic.show_icon(IconNames.ASLEEP)
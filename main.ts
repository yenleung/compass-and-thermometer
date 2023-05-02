let temp = 0
let degrees = 0
input.onButtonPressed(Button.A, function () {
    temp = input.temperature()
    basic.showNumber(temp)
})
input.onButtonPressed(Button.B, function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
basic.forever(function () {
	
})

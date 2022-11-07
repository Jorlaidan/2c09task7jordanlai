input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 100) {
        led.setBrightness(255)
        basic.showNumber(input.lightLevel())
    } else {
        basic.showNumber(input.lightLevel())
    }
})

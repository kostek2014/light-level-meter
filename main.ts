let roading = 0
basic.forever(function () {
    roading = input.lightLevel()
    led.plotBarGraph(
    roading,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(roading)
    }
})

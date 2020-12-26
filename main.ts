serial.onDataReceived("\"R\"", function () {
    serial.writeLine("HELLO WORLD")
    basic.pause(500)
})
led.enable(false)

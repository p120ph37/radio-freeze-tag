radio.onReceivedNumber(function (receivedNumber) {
    if (!(it)) {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -48) {
            if (receivedNumber == 1) {
                frozen = true
            } else if (receivedNumber == 0) {
                frozen = false
            }
        }
    }
})
let it = false
let frozen = false
radio.setTransmitPower(5)
frozen = false
if (input.buttonIsPressed(Button.A)) {
    it = true
} else {
    it = false
}
basic.forever(function () {
    if (it) {
        basic.showLeds(`
            . . . . .
            # . # # #
            # . . # .
            # . . # .
            . . . . .
            `)
        radio.sendNumber(1)
    } else if (frozen) {
        music.ringTone(262)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        music.stopAllSounds()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        radio.sendNumber(0)
    }
    basic.pause(200)
})

class Text {
    constructor(x, y, originX, originY, label, scene, type) {
        const button = scene.add.text(x, y, label)
            .setOrigin(originX,originY)
        if(type == 'title') {
            button.setStyle({
                font: "32px Arial",
                fill: "black"
            })
        } else {
            button.setStyle({
                font: "16px Arial",
                fill: "black"
            })
        }
    }
}
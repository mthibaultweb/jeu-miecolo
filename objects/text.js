class Text {
  constructor(x, y, originX, originY, label, scene, type) {
    const dialog = scene.add.text(x, y, label).setOrigin(originX, originY).setStyle({
      font: "20px Arial",
      fill: "black",
    })
    switch (type) {
      case "title":
        dialog.setStyle({
          font: "32px Arial",
          fill: "black",
        })
        break
      case "score-leaderboard":
        dialog.setStyle({
          font: "20px Arial",
          fill: "black",
          align: "right",
          fixedWidth: 70,
        })
        break
      case "alert":
        dialog.setStyle({
          font: "16px Arial",
          fill: "red",
        })
        break
      case "white":
        dialog.setStyle({
          fill: "white",
        })
        break
    }
  }
}

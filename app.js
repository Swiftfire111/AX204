var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {preload:pre})
var score = 0;
var life = 3;

function preload() {
	game.load.image("sky", "assets/sky.png");
	game.load.image("ground", "assets/platform.png");
	game.load.image("star", "assets/star.png");
	game.load.spritesheet("dude", "assets/star.png");
	game.load
}
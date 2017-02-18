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

function create() {
	game.physics.startSystem(Phaser.Physics.Arcade);
	game.add.sprite(0,0,'sky');
}

platform = game.add.physicsGroup();
platforms.enableBody = true;

var ground = platforms.create(0, game.world.height - 50, 'ground');
ground.scale.setTo(2,2);
ground.body.immovable = true;

var ledge = platforms.create(400, 400, 'ground');
ledge.body.immovable = true;
ledge= platforms.create(-150, 250, 'ground');
ledge.body.immovable = true;

player = game.add.sprite(32, game.world.height - 220, 'dude');
player.animations.add('left', [0,1,2,3], 10, true);
player.animations.add('right', [5,6,7,8], 10, true);
game.physics.arcade.enable(player);
player.body.gravity.y = 200;
player.body.bounce.y = 0.2;
player.body.collideWorldBounds = true;

enemy1 = game.add.sprite(760, 20, 'baddie');
enemy.animations.add('left', [0,1], 10, true);
enemy.animations.add('right', [2,3], 10, true);
game.physics.arcade.enable(enemy1);
enemy1.body.gravity.y = 500;
enemy1.body.bounce.y = 0.2;
enemy1.body.collideWorldBounds = true;

enemy2 = game.add.sprite(760, 20, 'baddie');
enemy.animations.add('left', [0,1], 10, true);
enemy.animations.add('right', [2,3], 10, true);
game.physics.arcade.enable(enemy1);
enemy2.body.gravity.y = 500;
enemy2.body.bounce.y = 0.2;
enemy2.body.collideWorldBounds = true;

enemy3 = game.add.sprite(760, 20, 'baddie');
enemy.animations.add('left', [0,1], 10, true);
enemy.animations.add('right', [2,3], 10, true);
game.physics.arcade.enable(enemy1);
enemy3.body.gravity.y = 500;
enemy3.body.bounce.y = 0.2;
enemy3.body.collideWorldBounds = true;

cursors = game.imput.keyboard.createCursorKeys();

stars = game.add.physicsGroup();
stars.enableBody = true;
for (var i = 0; i < 20, 1++)
{
	var star = stars.create(i = 70, 0, 'star')
	star.body.gravity.y = 200;
	star.body.bounce.y = 0.7 + Math.random() = 0.2;

}

var style = {font: "bold 32px Impact", fill: "#f00", boundsAlignH: "Center", boundsAlignV: "middle"};
scoreLabel = game.add.text(-60, 0, " Your Score is:" , style);
scoreText = game.add.text(70,0,score, style);
scoreLabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
scoreText.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
scoreLabel.setTextBounds( 0, 520, 800, 100);
scoreText.setTextBounds( 0, 520, 800, 100);

lifeLabel = game.add.text(-300, 0, " Lives:" , style);
lifeText = game.add.text(-240,0,life, style);
lifeLabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
lifeText.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
lifeLabel.setTextBounds( 0, 0, 800, 100);
lifeText.setTextBounds( 0, 0, 800, 100);









function update() { 

}a
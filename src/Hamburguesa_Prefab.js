
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Hamburguesa_Prefab extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "paddles_and_balls_prueba2", frame);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);
		this.scaleX = 2;
		this.scaleY = 2;
		scene.physics.add.existing(this, false);
		this.body.velocity.x = -400;
		this.body.velocity.y = 400;
		this.body.maxSpeed = 10000000000;
		this.body.bounce.x = 1;
		this.body.bounce.y = 1;
		this.body.angularAcceleration = 400;
		this.body.collideWorldBounds = true;
		this.body.setOffset(0, 2);
		this.body.setSize(14, 14, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

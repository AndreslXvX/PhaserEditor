
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Hamburguesa_Prefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? -0.999999999999998, y ?? 30.000000000000004, texture || "burger_spritesheet", frame ?? 0);

		this.scaleX = 2;
		this.scaleY = 2;
		this.setOrigin(0.49121914249574344, 0.7050712297213607);
		this.tintTopLeft = 16777215;
		this.tintTopRight = 16777215;
		this.tintBottomLeft = 16777215;
		this.tintBottomRight = 16777215;
		scene.physics.add.existing(this, false);
		this.body.velocity.x = 400;
		this.body.velocity.y = 400;
		this.body.maxSpeed = 10000000000;
		this.body.bounce.x = 1;
		this.body.bounce.y = 1;
		this.body.angularAcceleration = 400;
		this.body.collideWorldBounds = true;
		this.body.setOffset(5, 12);
		this.body.setSize(22, 20, false);

		/* START-USER-CTR-CODE */

		this.play("volarburger_spritesheet")
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

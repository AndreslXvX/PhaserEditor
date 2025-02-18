
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Prefab_rectangulo extends Phaser.GameObjects.Rectangle {

	constructor(scene, x, y, width, height) {
		super(scene, x ?? 0, y ?? 0, width ?? 128, height ?? 128);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		this.scaleX = 0.7187500143845413;
		this.scaleY = 0.24999999391034483;
		scene.physics.add.existing(this, false);
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setSize(128, 128, false);
		this.isFilled = true;
		this.fillColor = 16733953;

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

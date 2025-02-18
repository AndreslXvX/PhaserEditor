
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Titulo extends Phaser.Scene {

	constructor() {
		super("Titulo");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// text_1
		const text_1 = this.add.text(640, 360, "", {});
		text_1.scaleX = 4;
		text_1.scaleY = 4;
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Brick Pong";
		text_1.setStyle({  });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			this.scene.start("Level");
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

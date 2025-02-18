
// You can write more code here

/* START OF COMPILED CODE */

import Prefab_rectangulo from "../Prefab_rectangulo.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		this.frutaVelo = 400
		this.puntaje = 0
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// teclaIzquierda
		const teclaIzquierda = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// teclaDerecha
		const teclaDerecha = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// dino
		const dino = this.physics.add.image(622, 615, "_MISSING");
		dino.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 250), Phaser.Geom.Rectangle.Contains);
		dino.scaleX = 0.7189456357697284;
		dino.scaleY = 0.6997680182395154;
		dino.tintFill = true;
		dino.tintTopLeft = 40172;
		dino.tintTopRight = 40172;
		dino.tintBottomLeft = 40172;
		dino.tintBottomRight = 40172;
		dino.body.velocity.x = 400;
		dino.body.velocity.y = 400;
		dino.body.maxSpeed = 10000000000;
		dino.body.bounce.x = 1;
		dino.body.bounce.y = 1;
		dino.body.collideWorldBounds = true;
		dino.body.setSize(32, 32, false);

		// score
		const score = this.add.text(76, 698, "", {});
		score.setOrigin(0.5, 0.5);
		score.text = "Puntaje : 0";
		score.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// rectangle_1
		const rectangle_1 = this.physics.add.image(628, 662, "_MISSING");
		rectangle_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 32), Phaser.Geom.Rectangle.Contains);
		rectangle_1.scaleX = 3.676401903343179;
		rectangle_1.scaleY = 0.5958157730829288;
		rectangle_1.tintFill = true;
		rectangle_1.body.allowGravity = false;
		rectangle_1.body.collideWorldBounds = true;
		rectangle_1.body.pushable = false;
		rectangle_1.body.immovable = true;
		rectangle_1.body.setSize(32, 32, false);

		// rectangle_2
		const rectangle_2 = new Prefab_rectangulo(this, 426, 148);
		this.add.existing(rectangle_2);

		// prefab_rectangulo
		const prefab_rectangulo = new Prefab_rectangulo(this, 143, 147);
		this.add.existing(prefab_rectangulo);

		// prefab_rectangulo_1
		const prefab_rectangulo_1 = new Prefab_rectangulo(this, 288, 148);
		this.add.existing(prefab_rectangulo_1);

		// prefab_rectangulo_2
		const prefab_rectangulo_2 = new Prefab_rectangulo(this, 551, 149);
		this.add.existing(prefab_rectangulo_2);

		// rectangle
		const rectangle = new Prefab_rectangulo(this, 973, 151);
		this.add.existing(rectangle);

		// prefab_rectangulo_3
		const prefab_rectangulo_3 = new Prefab_rectangulo(this, 690, 150);
		this.add.existing(prefab_rectangulo_3);

		// prefab_rectangulo_4
		const prefab_rectangulo_4 = new Prefab_rectangulo(this, 835, 151);
		this.add.existing(prefab_rectangulo_4);

		// prefab_rectangulo_5
		const prefab_rectangulo_5 = new Prefab_rectangulo(this, 1098, 152);
		this.add.existing(prefab_rectangulo_5);

		// rectangle_3
		const rectangle_3 = new Prefab_rectangulo(this, 424, 229);
		this.add.existing(rectangle_3);

		// prefab_rectangulo_6
		const prefab_rectangulo_6 = new Prefab_rectangulo(this, 141, 228);
		this.add.existing(prefab_rectangulo_6);

		// prefab_rectangulo_7
		const prefab_rectangulo_7 = new Prefab_rectangulo(this, 286, 229);
		this.add.existing(prefab_rectangulo_7);

		// prefab_rectangulo_8
		const prefab_rectangulo_8 = new Prefab_rectangulo(this, 549, 230);
		this.add.existing(prefab_rectangulo_8);

		// rectangle_4
		const rectangle_4 = new Prefab_rectangulo(this, 971, 232);
		this.add.existing(rectangle_4);

		// prefab_rectangulo_9
		const prefab_rectangulo_9 = new Prefab_rectangulo(this, 688, 231);
		this.add.existing(prefab_rectangulo_9);

		// prefab_rectangulo_10
		const prefab_rectangulo_10 = new Prefab_rectangulo(this, 833, 232);
		this.add.existing(prefab_rectangulo_10);

		// prefab_rectangulo_11
		const prefab_rectangulo_11 = new Prefab_rectangulo(this, 1096, 233);
		this.add.existing(prefab_rectangulo_11);

		// rectangle_5
		const rectangle_5 = new Prefab_rectangulo(this, 423, 83);
		this.add.existing(rectangle_5);

		// prefab_rectangulo_12
		const prefab_rectangulo_12 = new Prefab_rectangulo(this, 140, 82);
		this.add.existing(prefab_rectangulo_12);

		// prefab_rectangulo_13
		const prefab_rectangulo_13 = new Prefab_rectangulo(this, 285, 83);
		this.add.existing(prefab_rectangulo_13);

		// prefab_rectangulo_14
		const prefab_rectangulo_14 = new Prefab_rectangulo(this, 548, 84);
		this.add.existing(prefab_rectangulo_14);

		// rectangle_6
		const rectangle_6 = new Prefab_rectangulo(this, 970, 86);
		this.add.existing(rectangle_6);

		// prefab_rectangulo_15
		const prefab_rectangulo_15 = new Prefab_rectangulo(this, 687, 85);
		this.add.existing(prefab_rectangulo_15);

		// prefab_rectangulo_16
		const prefab_rectangulo_16 = new Prefab_rectangulo(this, 832, 86);
		this.add.existing(prefab_rectangulo_16);

		// prefab_rectangulo_17
		const prefab_rectangulo_17 = new Prefab_rectangulo(this, 1095, 87);
		this.add.existing(prefab_rectangulo_17);

		// rectangle_7
		const rectangle_7 = new Prefab_rectangulo(this, 423, 301);
		this.add.existing(rectangle_7);

		// prefab_rectangulo_18
		const prefab_rectangulo_18 = new Prefab_rectangulo(this, 140, 300);
		this.add.existing(prefab_rectangulo_18);

		// prefab_rectangulo_19
		const prefab_rectangulo_19 = new Prefab_rectangulo(this, 285, 301);
		this.add.existing(prefab_rectangulo_19);

		// prefab_rectangulo_20
		const prefab_rectangulo_20 = new Prefab_rectangulo(this, 548, 302);
		this.add.existing(prefab_rectangulo_20);

		// rectangle_8
		const rectangle_8 = new Prefab_rectangulo(this, 970, 304);
		this.add.existing(rectangle_8);

		// prefab_rectangulo_21
		const prefab_rectangulo_21 = new Prefab_rectangulo(this, 687, 303);
		this.add.existing(prefab_rectangulo_21);

		// prefab_rectangulo_22
		const prefab_rectangulo_22 = new Prefab_rectangulo(this, 832, 304);
		this.add.existing(prefab_rectangulo_22);

		// prefab_rectangulo_23
		const prefab_rectangulo_23 = new Prefab_rectangulo(this, 1095, 305);
		this.add.existing(prefab_rectangulo_23);

		// rectangle_9
		const rectangle_9 = new Prefab_rectangulo(this, 428, 365);
		this.add.existing(rectangle_9);

		// prefab_rectangulo_24
		const prefab_rectangulo_24 = new Prefab_rectangulo(this, 145, 364);
		this.add.existing(prefab_rectangulo_24);

		// prefab_rectangulo_25
		const prefab_rectangulo_25 = new Prefab_rectangulo(this, 290, 365);
		this.add.existing(prefab_rectangulo_25);

		// prefab_rectangulo_26
		const prefab_rectangulo_26 = new Prefab_rectangulo(this, 553, 366);
		this.add.existing(prefab_rectangulo_26);

		// rectangle_10
		const rectangle_10 = new Prefab_rectangulo(this, 975, 368);
		this.add.existing(rectangle_10);

		// prefab_rectangulo_27
		const prefab_rectangulo_27 = new Prefab_rectangulo(this, 692, 367);
		this.add.existing(prefab_rectangulo_27);

		// prefab_rectangulo_28
		const prefab_rectangulo_28 = new Prefab_rectangulo(this, 837, 368);
		this.add.existing(prefab_rectangulo_28);

		// prefab_rectangulo_29
		const prefab_rectangulo_29 = new Prefab_rectangulo(this, 1100, 369);
		this.add.existing(prefab_rectangulo_29);

		// rectangle_11
		const rectangle_11 = new Prefab_rectangulo(this, 431, 434);
		this.add.existing(rectangle_11);

		// prefab_rectangulo_30
		const prefab_rectangulo_30 = new Prefab_rectangulo(this, 148, 433);
		this.add.existing(prefab_rectangulo_30);

		// prefab_rectangulo_31
		const prefab_rectangulo_31 = new Prefab_rectangulo(this, 293, 434);
		this.add.existing(prefab_rectangulo_31);

		// prefab_rectangulo_32
		const prefab_rectangulo_32 = new Prefab_rectangulo(this, 556, 435);
		this.add.existing(prefab_rectangulo_32);

		// rectangle_12
		const rectangle_12 = new Prefab_rectangulo(this, 978, 437);
		this.add.existing(rectangle_12);

		// prefab_rectangulo_33
		const prefab_rectangulo_33 = new Prefab_rectangulo(this, 695, 436);
		this.add.existing(prefab_rectangulo_33);

		// prefab_rectangulo_34
		const prefab_rectangulo_34 = new Prefab_rectangulo(this, 840, 437);
		this.add.existing(prefab_rectangulo_34);

		// prefab_rectangulo_35
		const prefab_rectangulo_35 = new Prefab_rectangulo(this, 1103, 438);
		this.add.existing(prefab_rectangulo_35);

		// lists
		const bloques = [rectangle_2, prefab_rectangulo, prefab_rectangulo_1, prefab_rectangulo_2, rectangle, prefab_rectangulo_3, prefab_rectangulo_4, prefab_rectangulo_5, rectangle_3, prefab_rectangulo_6, prefab_rectangulo_7, prefab_rectangulo_8, rectangle_4, prefab_rectangulo_9, prefab_rectangulo_10, prefab_rectangulo_11, rectangle_5, prefab_rectangulo_12, prefab_rectangulo_13, prefab_rectangulo_14, rectangle_6, prefab_rectangulo_15, prefab_rectangulo_16, prefab_rectangulo_17, rectangle_7, prefab_rectangulo_18, prefab_rectangulo_19, prefab_rectangulo_20, rectangle_8, prefab_rectangulo_21, prefab_rectangulo_22, prefab_rectangulo_23, rectangle_9, prefab_rectangulo_24, prefab_rectangulo_25, prefab_rectangulo_26, rectangle_10, prefab_rectangulo_27, prefab_rectangulo_28, prefab_rectangulo_29, rectangle_11, prefab_rectangulo_30, prefab_rectangulo_31, prefab_rectangulo_32, rectangle_12, prefab_rectangulo_33, prefab_rectangulo_34, prefab_rectangulo_35];

		// collider
		this.physics.add.collider(dino, rectangle_1, this.RectanguloRebotar, undefined, this);

		// collider_1
		this.physics.add.collider(dino, bloques, this.DestruirRectangulo, undefined, this);

		this.dino = dino;
		this.score = score;
		this.rectangle_1 = rectangle_1;
		this.rectangle_2 = rectangle_2;
		this.rectangle = rectangle;
		this.rectangle_3 = rectangle_3;
		this.rectangle_4 = rectangle_4;
		this.rectangle_5 = rectangle_5;
		this.rectangle_6 = rectangle_6;
		this.rectangle_7 = rectangle_7;
		this.rectangle_8 = rectangle_8;
		this.rectangle_9 = rectangle_9;
		this.rectangle_10 = rectangle_10;
		this.rectangle_11 = rectangle_11;
		this.rectangle_12 = rectangle_12;
		this.teclaIzquierda = teclaIzquierda;
		this.teclaDerecha = teclaDerecha;
		this.bloques = bloques;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Image} */
	dino;
	/** @type {Phaser.GameObjects.Text} */
	score;
	/** @type {Phaser.Physics.Arcade.Image} */
	rectangle_1;
	/** @type {Prefab_rectangulo} */
	rectangle_2;
	/** @type {Prefab_rectangulo} */
	rectangle;
	/** @type {Prefab_rectangulo} */
	rectangle_3;
	/** @type {Prefab_rectangulo} */
	rectangle_4;
	/** @type {Prefab_rectangulo} */
	rectangle_5;
	/** @type {Prefab_rectangulo} */
	rectangle_6;
	/** @type {Prefab_rectangulo} */
	rectangle_7;
	/** @type {Prefab_rectangulo} */
	rectangle_8;
	/** @type {Prefab_rectangulo} */
	rectangle_9;
	/** @type {Prefab_rectangulo} */
	rectangle_10;
	/** @type {Prefab_rectangulo} */
	rectangle_11;
	/** @type {Prefab_rectangulo} */
	rectangle_12;
	/** @type {Phaser.Input.Keyboard.Key} */
	teclaIzquierda;
	/** @type {Phaser.Input.Keyboard.Key} */
	teclaDerecha;
	/** @type {Prefab_rectangulo[]} */
	bloques;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.dino.on("pointerdown", () => {

			this.welcome.text = "Hello, World!";
		});
	}
	update() {
		this.Rebotar()
		this.AsignarTeclas()


	}

	AsignarTeclas(){
		if(this.teclaIzquierda.isDown) { 

			this.rectangle_1.body.setVelocityX(-600)

		} else if(this.teclaDerecha.isDown) { 
			this.rectangle_1.body.setVelocityX(600)
		} else {
			this.rectangle_1.body.setVelocityX(0)
			}
	}
	ReiniciarJuego(){
		this.puntaje = 0
		this.scene.restart()
	}
	ReboteRecNara() {
		this.VelocidadFruta(1)
	}
	Rebotar() {
		if(this.dino.body.y < this.game.canvas.height && this.dino.body.y > (this.game.canvas.height - (this.dino.body.height + 10))){
			this.ReiniciarJuego()
		}	
	}
	RectanguloRebotar() {
		this.puntaje += 1
		this.dino.body.setVelocityY(-500)
		this.score.setText(`Puntaje : ${this.puntaje}`)
	}
	DestruirRectangulo(dino, rectangulo) {
		rectangulo.destroy()
		this.puntaje += 2
		this.score.setText(`Puntaje : ${this.puntaje}`)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

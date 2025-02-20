
// You can write more code here

/* START OF COMPILED CODE */

import Hamburguesa_Prefab from "../Hamburguesa_Prefab.js";
import Prefab_rectangulo from "../Prefab_rectangulo.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		this.frutaVelo = 400
		this.puntaje = 0
		this.moverIzquierda;
		this.moverDerecha;
		this.verdad = true;
		this.falso = false;

		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// teclaIzquierda
		const teclaIzquierda = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// teclaDerecha
		const teclaDerecha = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// image_1
		const image_1 = this.add.image(320, 480, "All_Buttons", 193);
		image_1.scaleX = 6;
		image_1.scaleY = 6;
		image_1.alpha = 0.3;
		image_1.alphaTopLeft = 0.3;
		image_1.alphaTopRight = 0.3;
		image_1.alphaBottomLeft = 0.3;
		image_1.alphaBottomRight = 0.3;

		// image_2
		const image_2 = this.add.image(960, 480, "All_Buttons", 190);
		image_2.scaleX = 6;
		image_2.scaleY = 6;
		image_2.alpha = 0.3;
		image_2.alphaTopLeft = 0.3;
		image_2.alphaTopRight = 0.3;
		image_2.alphaBottomLeft = 0.3;
		image_2.alphaBottomRight = 0.3;

		// dino
		const dino = new Hamburguesa_Prefab(this, 624, 640);
		this.add.existing(dino);

		// score
		const score = this.add.text(624, 704, "", {});
		score.setOrigin(0.5, 0.5);
		score.text = "Puntaje : 0";
		score.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// rectangle_1
		const rectangle_1 = this.physics.add.image(624, 672, "paddles_and_balls", 8);
		rectangle_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 32), Phaser.Geom.Rectangle.Contains);
		rectangle_1.scaleX = 3;
		rectangle_1.scaleY = 3;
		rectangle_1.body.allowGravity = false;
		rectangle_1.body.collideWorldBounds = true;
		rectangle_1.body.pushable = false;
		rectangle_1.body.immovable = true;
		rectangle_1.body.setOffset(0, 6);
		rectangle_1.body.setSize(32, 11, false);

		// rectangle_2
		const rectangle_2 = new Prefab_rectangulo(this, 110, 188);
		this.add.existing(rectangle_2);

		// prefab_rectangulo
		const prefab_rectangulo = new Prefab_rectangulo(this, 110, 244);
		this.add.existing(prefab_rectangulo);

		// prefab_rectangulo_1
		const prefab_rectangulo_1 = new Prefab_rectangulo(this, 214, 188);
		this.add.existing(prefab_rectangulo_1);

		// prefab_rectangulo_2
		const prefab_rectangulo_2 = new Prefab_rectangulo(this, 110, 76);
		this.add.existing(prefab_rectangulo_2);

		// rectangle
		const rectangle = new Prefab_rectangulo(this, 422, 132);
		this.add.existing(rectangle);

		// prefab_rectangulo_3
		const prefab_rectangulo_3 = new Prefab_rectangulo(this, 422, 188);
		this.add.existing(prefab_rectangulo_3);

		// prefab_rectangulo_4
		const prefab_rectangulo_4 = new Prefab_rectangulo(this, 1150, 356);
		this.add.existing(prefab_rectangulo_4);

		// prefab_rectangulo_5
		const prefab_rectangulo_5 = new Prefab_rectangulo(this, 1046, 356);
		this.add.existing(prefab_rectangulo_5);

		// rectangle_3
		const rectangle_3 = new Prefab_rectangulo(this, 110, 132);
		this.add.existing(rectangle_3);

		// prefab_rectangulo_6
		const prefab_rectangulo_6 = new Prefab_rectangulo(this, 214, 132);
		this.add.existing(prefab_rectangulo_6);

		// prefab_rectangulo_7
		const prefab_rectangulo_7 = new Prefab_rectangulo(this, 318, 300);
		this.add.existing(prefab_rectangulo_7);

		// prefab_rectangulo_8
		const prefab_rectangulo_8 = new Prefab_rectangulo(this, 110, 300);
		this.add.existing(prefab_rectangulo_8);

		// rectangle_4
		const rectangle_4 = new Prefab_rectangulo(this, 214, 244);
		this.add.existing(rectangle_4);

		// prefab_rectangulo_9
		const prefab_rectangulo_9 = new Prefab_rectangulo(this, 214, 300);
		this.add.existing(prefab_rectangulo_9);

		// prefab_rectangulo_10
		const prefab_rectangulo_10 = new Prefab_rectangulo(this, 318, 244);
		this.add.existing(prefab_rectangulo_10);

		// prefab_rectangulo_11
		const prefab_rectangulo_11 = new Prefab_rectangulo(this, 214, 76);
		this.add.existing(prefab_rectangulo_11);

		// rectangle_5
		const rectangle_5 = new Prefab_rectangulo(this, 318, 76);
		this.add.existing(rectangle_5);

		// prefab_rectangulo_12
		const prefab_rectangulo_12 = new Prefab_rectangulo(this, 318, 188);
		this.add.existing(prefab_rectangulo_12);

		// prefab_rectangulo_13
		const prefab_rectangulo_13 = new Prefab_rectangulo(this, 526, 188);
		this.add.existing(prefab_rectangulo_13);

		// prefab_rectangulo_14
		const prefab_rectangulo_14 = new Prefab_rectangulo(this, 630, 132);
		this.add.existing(prefab_rectangulo_14);

		// rectangle_6
		const rectangle_6 = new Prefab_rectangulo(this, 422, 76);
		this.add.existing(rectangle_6);

		// prefab_rectangulo_15
		const prefab_rectangulo_15 = new Prefab_rectangulo(this, 318, 356);
		this.add.existing(prefab_rectangulo_15);

		// prefab_rectangulo_16
		const prefab_rectangulo_16 = new Prefab_rectangulo(this, 630, 188);
		this.add.existing(prefab_rectangulo_16);

		// prefab_rectangulo_17
		const prefab_rectangulo_17 = new Prefab_rectangulo(this, 422, 300);
		this.add.existing(prefab_rectangulo_17);

		// rectangle_7
		const rectangle_7 = new Prefab_rectangulo(this, 318, 132);
		this.add.existing(rectangle_7);

		// prefab_rectangulo_18
		const prefab_rectangulo_18 = new Prefab_rectangulo(this, 942, 300);
		this.add.existing(prefab_rectangulo_18);

		// prefab_rectangulo_19
		const prefab_rectangulo_19 = new Prefab_rectangulo(this, 526, 300);
		this.add.existing(prefab_rectangulo_19);

		// prefab_rectangulo_20
		const prefab_rectangulo_20 = new Prefab_rectangulo(this, 526, 244);
		this.add.existing(prefab_rectangulo_20);

		// rectangle_8
		const rectangle_8 = new Prefab_rectangulo(this, 734, 188);
		this.add.existing(rectangle_8);

		// prefab_rectangulo_21
		const prefab_rectangulo_21 = new Prefab_rectangulo(this, 1150, 188);
		this.add.existing(prefab_rectangulo_21);

		// prefab_rectangulo_22
		const prefab_rectangulo_22 = new Prefab_rectangulo(this, 838, 188);
		this.add.existing(prefab_rectangulo_22);

		// prefab_rectangulo_23
		const prefab_rectangulo_23 = new Prefab_rectangulo(this, 630, 356);
		this.add.existing(prefab_rectangulo_23);

		// rectangle_9
		const rectangle_9 = new Prefab_rectangulo(this, 526, 76);
		this.add.existing(rectangle_9);

		// prefab_rectangulo_24
		const prefab_rectangulo_24 = new Prefab_rectangulo(this, 526, 132);
		this.add.existing(prefab_rectangulo_24);

		// prefab_rectangulo_25
		const prefab_rectangulo_25 = new Prefab_rectangulo(this, 630, 76);
		this.add.existing(prefab_rectangulo_25);

		// prefab_rectangulo_26
		const prefab_rectangulo_26 = new Prefab_rectangulo(this, 734, 76);
		this.add.existing(prefab_rectangulo_26);

		// rectangle_10
		const rectangle_10 = new Prefab_rectangulo(this, 734, 132);
		this.add.existing(rectangle_10);

		// prefab_rectangulo_27
		const prefab_rectangulo_27 = new Prefab_rectangulo(this, 838, 132);
		this.add.existing(prefab_rectangulo_27);

		// prefab_rectangulo_28
		const prefab_rectangulo_28 = new Prefab_rectangulo(this, 422, 244);
		this.add.existing(prefab_rectangulo_28);

		// prefab_rectangulo_29
		const prefab_rectangulo_29 = new Prefab_rectangulo(this, 838, 244);
		this.add.existing(prefab_rectangulo_29);

		// rectangle_11
		const rectangle_11 = new Prefab_rectangulo(this, 838, 76);
		this.add.existing(rectangle_11);

		// prefab_rectangulo_30
		const prefab_rectangulo_30 = new Prefab_rectangulo(this, 942, 188);
		this.add.existing(prefab_rectangulo_30);

		// prefab_rectangulo_31
		const prefab_rectangulo_31 = new Prefab_rectangulo(this, 942, 76);
		this.add.existing(prefab_rectangulo_31);

		// prefab_rectangulo_32
		const prefab_rectangulo_32 = new Prefab_rectangulo(this, 942, 132);
		this.add.existing(prefab_rectangulo_32);

		// rectangle_12
		const rectangle_12 = new Prefab_rectangulo(this, 1150, 76);
		this.add.existing(rectangle_12);

		// prefab_rectangulo_33
		const prefab_rectangulo_33 = new Prefab_rectangulo(this, 734, 356);
		this.add.existing(prefab_rectangulo_33);

		// prefab_rectangulo_34
		const prefab_rectangulo_34 = new Prefab_rectangulo(this, 630, 244);
		this.add.existing(prefab_rectangulo_34);

		// prefab_rectangulo_35
		const prefab_rectangulo_35 = new Prefab_rectangulo(this, 422, 356);
		this.add.existing(prefab_rectangulo_35);

		// prefab_rectangulo_36
		const prefab_rectangulo_36 = new Prefab_rectangulo(this, 1046, 188);
		this.add.existing(prefab_rectangulo_36);

		// prefab_rectangulo_37
		const prefab_rectangulo_37 = new Prefab_rectangulo(this, 526, 356);
		this.add.existing(prefab_rectangulo_37);

		// prefab_rectangulo_38
		const prefab_rectangulo_38 = new Prefab_rectangulo(this, 1046, 132);
		this.add.existing(prefab_rectangulo_38);

		// prefab_rectangulo_39
		const prefab_rectangulo_39 = new Prefab_rectangulo(this, 838, 300);
		this.add.existing(prefab_rectangulo_39);

		// prefab_rectangulo_40
		const prefab_rectangulo_40 = new Prefab_rectangulo(this, 1046, 244);
		this.add.existing(prefab_rectangulo_40);

		// prefab_rectangulo_41
		const prefab_rectangulo_41 = new Prefab_rectangulo(this, 1046, 76);
		this.add.existing(prefab_rectangulo_41);

		// prefab_rectangulo_44
		const prefab_rectangulo_44 = new Prefab_rectangulo(this, 214, 356);
		this.add.existing(prefab_rectangulo_44);

		// prefab_rectangulo_45
		const prefab_rectangulo_45 = new Prefab_rectangulo(this, 110, 356);
		this.add.existing(prefab_rectangulo_45);

		// rectangle_13
		const rectangle_13 = new Prefab_rectangulo(this, 942, 244);
		this.add.existing(rectangle_13);

		// prefab_rectangulo_46
		const prefab_rectangulo_46 = new Prefab_rectangulo(this, 1150, 132);
		this.add.existing(prefab_rectangulo_46);

		// rectangle_14
		const rectangle_14 = new Prefab_rectangulo(this, 838, 356);
		this.add.existing(rectangle_14);

		// prefab_rectangulo_49
		const prefab_rectangulo_49 = new Prefab_rectangulo(this, 1150, 244);
		this.add.existing(prefab_rectangulo_49);

		// rectangle_15
		const rectangle_15 = new Prefab_rectangulo(this, 734, 300);
		this.add.existing(rectangle_15);

		// prefab_rectangulo_51
		const prefab_rectangulo_51 = new Prefab_rectangulo(this, 1046, 300);
		this.add.existing(prefab_rectangulo_51);

		// rectangle_16
		const rectangle_16 = new Prefab_rectangulo(this, 942, 356);
		this.add.existing(rectangle_16);

		// prefab_rectangulo_52
		const prefab_rectangulo_52 = new Prefab_rectangulo(this, 1150, 300);
		this.add.existing(prefab_rectangulo_52);

		// prefab_rectangulo_53
		const prefab_rectangulo_53 = new Prefab_rectangulo(this, 734, 244);
		this.add.existing(prefab_rectangulo_53);

		// prefab_rectangulo_54
		const prefab_rectangulo_54 = new Prefab_rectangulo(this, 630, 300);
		this.add.existing(prefab_rectangulo_54);

		// botonDerecha
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
		const botonDerecha = this.add.rectangle(944, 368, 128, 128);
		botonDerecha.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		botonDerecha.scaleX = 6;
		botonDerecha.scaleY = 6;
		this.physics.add.existing(botonDerecha, false);
		botonDerecha.body.pushable = false;
		botonDerecha.body.setSize(128, 128, false);

		// botonIzquierda
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
		const botonIzquierda = this.add.rectangle(288, 368, 128, 128);
		botonIzquierda.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		botonIzquierda.scaleX = 6;
		botonIzquierda.scaleY = 6;
		this.physics.add.existing(botonIzquierda, false);
		botonIzquierda.body.setSize(128, 128, false);

		// lists
		const bloques = [rectangle_2, prefab_rectangulo, prefab_rectangulo_1, prefab_rectangulo_2, rectangle, prefab_rectangulo_3, prefab_rectangulo_4, prefab_rectangulo_5, rectangle_3, prefab_rectangulo_6, prefab_rectangulo_7, prefab_rectangulo_8, rectangle_4, prefab_rectangulo_9, prefab_rectangulo_10, prefab_rectangulo_11, rectangle_5, prefab_rectangulo_12, prefab_rectangulo_13, prefab_rectangulo_14, rectangle_6, prefab_rectangulo_15, prefab_rectangulo_16, prefab_rectangulo_17, rectangle_7, prefab_rectangulo_18, prefab_rectangulo_19, prefab_rectangulo_20, rectangle_8, prefab_rectangulo_21, prefab_rectangulo_22, prefab_rectangulo_23, rectangle_9, prefab_rectangulo_24, prefab_rectangulo_25, prefab_rectangulo_26, rectangle_10, prefab_rectangulo_27, prefab_rectangulo_28, prefab_rectangulo_29, rectangle_11, prefab_rectangulo_30, prefab_rectangulo_31, prefab_rectangulo_32, rectangle_12, prefab_rectangulo_33, prefab_rectangulo_34, prefab_rectangulo_35, prefab_rectangulo_36, prefab_rectangulo_37, prefab_rectangulo_38, prefab_rectangulo_39, prefab_rectangulo_40, prefab_rectangulo_41, prefab_rectangulo_44, prefab_rectangulo_45, rectangle_13, prefab_rectangulo_46, rectangle_14, prefab_rectangulo_49, rectangle_15, prefab_rectangulo_51, rectangle_16, prefab_rectangulo_52, prefab_rectangulo_53, prefab_rectangulo_54];

		// collider
		this.physics.add.collider(dino, rectangle_1, this.RectanguloRebotar, undefined, this);

		// collider_1
		this.physics.add.collider(dino, bloques, this.DestruirRectangulo, undefined, this);

		this.image_1 = image_1;
		this.image_2 = image_2;
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
		this.rectangle_13 = rectangle_13;
		this.rectangle_14 = rectangle_14;
		this.rectangle_15 = rectangle_15;
		this.rectangle_16 = rectangle_16;
		this.botonDerecha = botonDerecha;
		this.botonIzquierda = botonIzquierda;
		this.teclaIzquierda = teclaIzquierda;
		this.teclaDerecha = teclaDerecha;
		this.bloques = bloques;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	image_1;
	/** @type {Phaser.GameObjects.Image} */
	image_2;
	/** @type {Hamburguesa_Prefab} */
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
	/** @type {Prefab_rectangulo} */
	rectangle_13;
	/** @type {Prefab_rectangulo} */
	rectangle_14;
	/** @type {Prefab_rectangulo} */
	rectangle_15;
	/** @type {Prefab_rectangulo} */
	rectangle_16;
	/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
	botonDerecha;
	/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
	botonIzquierda;
	/** @type {Phaser.Input.Keyboard.Key} */
	teclaIzquierda;
	/** @type {Phaser.Input.Keyboard.Key} */
	teclaDerecha;
	/** @type {Prefab_rectangulo[]} */
	bloques;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.EscalarBordes()
		this.editorCreate();

	}
	EscalarBordes(){
		this.scale.scaleMode = Phaser.Scale.RESIZE;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	}
	update() {
		this.Rebotar()
		this.AsignarTeclas()
		this.AsignarBotonesTactiles()
	}
	DetectarTeclas(){
		this.input.addListener("any", function () {this.AsignarTeclas()})

	}

	AsignarTeclas(){
		if(this.teclaIzquierda.isDown) {
			this.MovimientoPlataforma(this.verdad, this.falso)
		} else if(this.teclaDerecha.isDown) {
			this.MovimientoPlataforma(this.falso, this.verdad)
			}
	}

	AsignarBotonesTactiles() {
	this.input.keyboard.on('keyup', () => this.MovimientoPlataforma(this.falso, this.falso) );
	this.botonIzquierda.on('pointerdown', () => this.MovimientoPlataforma(this.verdad, this.falso));
	this.botonDerecha.on('pointerdown', () => this.MovimientoPlataforma(this.falso, this.verdad))
	this.botonIzquierda.on('pointerout', () => this.MovimientoPlataforma(this.falso, this.falso));
	this.botonDerecha.on('pointerout', () => this.MovimientoPlataforma(this.falso, this.falso))
	}

	MovimientoPlataforma(moverIzquierda, moverDerecha){
		if(moverDerecha){
			this.rectangle_1.body.setVelocityX(600)
			this.image_2.setAlpha(0,0,0,0)
		} else if(moverIzquierda){
			this.rectangle_1.body.setVelocityX(-600)
			this.image_1.setAlpha(0,0,0,0)
		}else {
			this.image_2.setAlpha(0.3,0.3,0.3,0.3)
			this.image_1.setAlpha(0.3,0.3,0.3,0.3)
			this.moverIzquierda = false
			this.moverDerecha = false
			this.rectangle_1.body.setVelocityX(0)
		}
	}
	ReiniciarJuego(){
		this.puntaje = 0
		this.scene.restart()
	}
	Rebotar() {
		console.log(this.dino.body.bounce)
		if(this.dino.body.y < this.game.canvas.height && this.dino.body.y > (this.game.canvas.height - (this.dino.body.height + 10))){
			this.ReiniciarJuego()
		}	
	}
	RectanguloRebotar() {
		this.puntaje += 1
		this.dino.body.setVelocityY(-500)
		this.score.setText(`Puntaje : ${this.puntaje}`)
		this.sound.play('jump')

	}
	DestruirRectangulo(dino, rectangulo) {
		rectangulo.golpes -=1
		if(rectangulo.golpes == 2) {
			rectangulo.setTexture('bricks_1', 10)
			this.puntaje += 1
			this.sound.play('hurt')
		} else if(rectangulo.golpes == 1) {
			rectangulo.setTexture('bricks_1', 11)
			this.puntaje += 2
			this.sound.play('hurt')
		} else if(rectangulo.golpes == 0) {
			rectangulo.destroy()
			this.puntaje += 3
			this.sound.play('explosion')
		}
		this.score.setText(`Puntaje : ${this.puntaje}`)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

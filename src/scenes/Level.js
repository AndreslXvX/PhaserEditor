
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
		this.moverIzquierda = false
		this.moverDerecha = false
		this.detener = false
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// teclaIzquierda
		const teclaIzquierda = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// teclaDerecha
		const teclaDerecha = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// botonDerecha
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
		const botonDerecha = this.add.rectangle(1072, 528, 128, 128);
		botonDerecha.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		botonDerecha.scaleX = 3.0030903181066932;
		botonDerecha.scaleY = 2.6892953062526805;
		this.physics.add.existing(botonDerecha, false);
		botonDerecha.body.setSize(128, 128, false);

		// botonIzquierda
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
		const botonIzquierda = this.add.rectangle(224, 528, 128, 128);
		botonIzquierda.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		botonIzquierda.scaleX = 3.1884837850051375;
		botonIzquierda.scaleY = 2.864885253301987;
		this.physics.add.existing(botonIzquierda, false);
		botonIzquierda.body.setSize(128, 128, false);

		// dino
		const dino = new Hamburguesa_Prefab(this, 624, 512);
		this.add.existing(dino);

		// score
		const score = this.add.text(80, 16, "", {});
		score.setOrigin(0.5, 0.5);
		score.text = "Puntaje : 0";
		score.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// rectangle_1
		const rectangle_1 = this.physics.add.image(624, 592, "_MISSING");
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
		const rectangle_2 = new Prefab_rectangulo(this, 77, 205.99999766157242);
		this.add.existing(rectangle_2);

		// prefab_rectangulo
		const prefab_rectangulo = new Prefab_rectangulo(this, 77, 257.9999968820965);
		this.add.existing(prefab_rectangulo);

		// prefab_rectangulo_1
		const prefab_rectangulo_1 = new Prefab_rectangulo(this, 189.00000184122132, 205.99999766157242);
		this.add.existing(prefab_rectangulo_1);

		// prefab_rectangulo_2
		const prefab_rectangulo_2 = new Prefab_rectangulo(this, 77, 50);
		this.add.existing(prefab_rectangulo_2);

		// rectangle
		const rectangle = new Prefab_rectangulo(this, 301.0000036824426, 205.99999766157242);
		this.add.existing(rectangle);

		// prefab_rectangulo_3
		const prefab_rectangulo_3 = new Prefab_rectangulo(this, 413.0000055236639, 205.99999766157242);
		this.add.existing(prefab_rectangulo_3);

		// prefab_rectangulo_4
		const prefab_rectangulo_4 = new Prefab_rectangulo(this, 77, 153.9999984410483);
		this.add.existing(prefab_rectangulo_4);

		// prefab_rectangulo_5
		const prefab_rectangulo_5 = new Prefab_rectangulo(this, 189.00000184122132, 153.9999984410483);
		this.add.existing(prefab_rectangulo_5);

		// rectangle_3
		const rectangle_3 = new Prefab_rectangulo(this, 77, 101.99999922052413);
		this.add.existing(rectangle_3);

		// prefab_rectangulo_6
		const prefab_rectangulo_6 = new Prefab_rectangulo(this, 189.00000184122132, 101.99999922052413);
		this.add.existing(prefab_rectangulo_6);

		// prefab_rectangulo_7
		const prefab_rectangulo_7 = new Prefab_rectangulo(this, 301.0000036824426, 153.9999984410483);
		this.add.existing(prefab_rectangulo_7);

		// prefab_rectangulo_8
		const prefab_rectangulo_8 = new Prefab_rectangulo(this, 77, 309.9999961026207);
		this.add.existing(prefab_rectangulo_8);

		// rectangle_4
		const rectangle_4 = new Prefab_rectangulo(this, 189.00000184122132, 257.9999968820965);
		this.add.existing(rectangle_4);

		// prefab_rectangulo_9
		const prefab_rectangulo_9 = new Prefab_rectangulo(this, 189.00000184122132, 309.9999961026207);
		this.add.existing(prefab_rectangulo_9);

		// prefab_rectangulo_10
		const prefab_rectangulo_10 = new Prefab_rectangulo(this, 301.0000036824426, 309.9999961026207);
		this.add.existing(prefab_rectangulo_10);

		// prefab_rectangulo_11
		const prefab_rectangulo_11 = new Prefab_rectangulo(this, 189.00000184122132, 50);
		this.add.existing(prefab_rectangulo_11);

		// rectangle_5
		const rectangle_5 = new Prefab_rectangulo(this, 301.0000036824426, 50);
		this.add.existing(rectangle_5);

		// prefab_rectangulo_12
		const prefab_rectangulo_12 = new Prefab_rectangulo(this, 301.0000036824426, 257.9999968820965);
		this.add.existing(prefab_rectangulo_12);

		// prefab_rectangulo_13
		const prefab_rectangulo_13 = new Prefab_rectangulo(this, 413.0000055236639, 257.9999968820965);
		this.add.existing(prefab_rectangulo_13);

		// prefab_rectangulo_14
		const prefab_rectangulo_14 = new Prefab_rectangulo(this, 525.0000073648852, 205.99999766157242);
		this.add.existing(prefab_rectangulo_14);

		// rectangle_6
		const rectangle_6 = new Prefab_rectangulo(this, 413.0000055236639, 50);
		this.add.existing(rectangle_6);

		// prefab_rectangulo_15
		const prefab_rectangulo_15 = new Prefab_rectangulo(this, 1197.000018412213, 309.9999961026207);
		this.add.existing(prefab_rectangulo_15);

		// prefab_rectangulo_16
		const prefab_rectangulo_16 = new Prefab_rectangulo(this, 637.0000092061065, 205.99999766157242);
		this.add.existing(prefab_rectangulo_16);

		// prefab_rectangulo_17
		const prefab_rectangulo_17 = new Prefab_rectangulo(this, 413.0000055236639, 153.9999984410483);
		this.add.existing(prefab_rectangulo_17);

		// rectangle_7
		const rectangle_7 = new Prefab_rectangulo(this, 301.0000036824426, 101.99999922052413);
		this.add.existing(rectangle_7);

		// prefab_rectangulo_18
		const prefab_rectangulo_18 = new Prefab_rectangulo(this, 1085.0000165709916, 309.9999961026207);
		this.add.existing(prefab_rectangulo_18);

		// prefab_rectangulo_19
		const prefab_rectangulo_19 = new Prefab_rectangulo(this, 525.0000073648852, 153.9999984410483);
		this.add.existing(prefab_rectangulo_19);

		// prefab_rectangulo_20
		const prefab_rectangulo_20 = new Prefab_rectangulo(this, 525.0000073648852, 257.9999968820965);
		this.add.existing(prefab_rectangulo_20);

		// rectangle_8
		const rectangle_8 = new Prefab_rectangulo(this, 637.0000092061065, 257.9999968820965);
		this.add.existing(rectangle_8);

		// prefab_rectangulo_21
		const prefab_rectangulo_21 = new Prefab_rectangulo(this, 637.0000092061065, 153.9999984410483);
		this.add.existing(prefab_rectangulo_21);

		// prefab_rectangulo_22
		const prefab_rectangulo_22 = new Prefab_rectangulo(this, 749.0000110473278, 205.99999766157242);
		this.add.existing(prefab_rectangulo_22);

		// prefab_rectangulo_23
		const prefab_rectangulo_23 = new Prefab_rectangulo(this, 973.0000147297704, 309.9999961026207);
		this.add.existing(prefab_rectangulo_23);

		// rectangle_9
		const rectangle_9 = new Prefab_rectangulo(this, 413.0000055236639, 101.99999922052413);
		this.add.existing(rectangle_9);

		// prefab_rectangulo_24
		const prefab_rectangulo_24 = new Prefab_rectangulo(this, 525.0000073648852, 101.99999922052413);
		this.add.existing(prefab_rectangulo_24);

		// prefab_rectangulo_25
		const prefab_rectangulo_25 = new Prefab_rectangulo(this, 525.0000073648852, 50);
		this.add.existing(prefab_rectangulo_25);

		// prefab_rectangulo_26
		const prefab_rectangulo_26 = new Prefab_rectangulo(this, 637.0000092061065, 50);
		this.add.existing(prefab_rectangulo_26);

		// rectangle_10
		const rectangle_10 = new Prefab_rectangulo(this, 637.0000092061065, 101.99999922052413);
		this.add.existing(rectangle_10);

		// prefab_rectangulo_27
		const prefab_rectangulo_27 = new Prefab_rectangulo(this, 749.0000110473278, 101.99999922052413);
		this.add.existing(prefab_rectangulo_27);

		// prefab_rectangulo_28
		const prefab_rectangulo_28 = new Prefab_rectangulo(this, 413.0000055236639, 309.9999961026207);
		this.add.existing(prefab_rectangulo_28);

		// prefab_rectangulo_29
		const prefab_rectangulo_29 = new Prefab_rectangulo(this, 749.0000110473278, 257.9999968820965);
		this.add.existing(prefab_rectangulo_29);

		// rectangle_11
		const rectangle_11 = new Prefab_rectangulo(this, 749.0000110473278, 50);
		this.add.existing(rectangle_11);

		// prefab_rectangulo_30
		const prefab_rectangulo_30 = new Prefab_rectangulo(this, 861.0000128885491, 205.99999766157242);
		this.add.existing(prefab_rectangulo_30);

		// prefab_rectangulo_31
		const prefab_rectangulo_31 = new Prefab_rectangulo(this, 861.0000128885491, 50);
		this.add.existing(prefab_rectangulo_31);

		// prefab_rectangulo_32
		const prefab_rectangulo_32 = new Prefab_rectangulo(this, 861.0000128885491, 101.99999922052413);
		this.add.existing(prefab_rectangulo_32);

		// rectangle_12
		const rectangle_12 = new Prefab_rectangulo(this, 973.0000147297704, 101.99999922052413);
		this.add.existing(rectangle_12);

		// prefab_rectangulo_33
		const prefab_rectangulo_33 = new Prefab_rectangulo(this, 749.0000110473278, 153.9999984410483);
		this.add.existing(prefab_rectangulo_33);

		// prefab_rectangulo_34
		const prefab_rectangulo_34 = new Prefab_rectangulo(this, 525.0000073648852, 309.9999961026207);
		this.add.existing(prefab_rectangulo_34);

		// prefab_rectangulo_35
		const prefab_rectangulo_35 = new Prefab_rectangulo(this, 1197.000018412213, 257.9999968820965);
		this.add.existing(prefab_rectangulo_35);

		// prefab_rectangulo_36
		const prefab_rectangulo_36 = new Prefab_rectangulo(this, 861.0000128885491, 153.9999984410483);
		this.add.existing(prefab_rectangulo_36);

		// prefab_rectangulo_37
		const prefab_rectangulo_37 = new Prefab_rectangulo(this, 1085.0000165709916, 257.9999968820965);
		this.add.existing(prefab_rectangulo_37);

		// prefab_rectangulo_38
		const prefab_rectangulo_38 = new Prefab_rectangulo(this, 973.0000147297704, 205.99999766157242);
		this.add.existing(prefab_rectangulo_38);

		// prefab_rectangulo_39
		const prefab_rectangulo_39 = new Prefab_rectangulo(this, 1197.000018412213, 101.99999922052413);
		this.add.existing(prefab_rectangulo_39);

		// prefab_rectangulo_40
		const prefab_rectangulo_40 = new Prefab_rectangulo(this, 861.0000128885491, 309.9999961026207);
		this.add.existing(prefab_rectangulo_40);

		// prefab_rectangulo_41
		const prefab_rectangulo_41 = new Prefab_rectangulo(this, 973.0000147297704, 50);
		this.add.existing(prefab_rectangulo_41);

		// prefab_rectangulo_44
		const prefab_rectangulo_44 = new Prefab_rectangulo(this, 973.0000147297704, 153.9999984410483);
		this.add.existing(prefab_rectangulo_44);

		// prefab_rectangulo_45
		const prefab_rectangulo_45 = new Prefab_rectangulo(this, 1085.0000165709916, 50);
		this.add.existing(prefab_rectangulo_45);

		// rectangle_13
		const rectangle_13 = new Prefab_rectangulo(this, 861.0000128885491, 257.9999968820965);
		this.add.existing(rectangle_13);

		// prefab_rectangulo_46
		const prefab_rectangulo_46 = new Prefab_rectangulo(this, 973.0000147297704, 257.9999968820965);
		this.add.existing(prefab_rectangulo_46);

		// rectangle_14
		const rectangle_14 = new Prefab_rectangulo(this, 1197.000018412213, 205.99999766157242);
		this.add.existing(rectangle_14);

		// prefab_rectangulo_49
		const prefab_rectangulo_49 = new Prefab_rectangulo(this, 1085.0000165709916, 205.99999766157242);
		this.add.existing(prefab_rectangulo_49);

		// rectangle_15
		const rectangle_15 = new Prefab_rectangulo(this, 749.0000110473278, 309.9999961026207);
		this.add.existing(rectangle_15);

		// prefab_rectangulo_51
		const prefab_rectangulo_51 = new Prefab_rectangulo(this, 1085.0000165709916, 153.9999984410483);
		this.add.existing(prefab_rectangulo_51);

		// rectangle_16
		const rectangle_16 = new Prefab_rectangulo(this, 1197.000018412213, 153.9999984410483);
		this.add.existing(rectangle_16);

		// prefab_rectangulo_52
		const prefab_rectangulo_52 = new Prefab_rectangulo(this, 1085.0000165709916, 101.99999922052413);
		this.add.existing(prefab_rectangulo_52);

		// prefab_rectangulo_53
		const prefab_rectangulo_53 = new Prefab_rectangulo(this, 637.0000092061065, 309.9999961026207);
		this.add.existing(prefab_rectangulo_53);

		// prefab_rectangulo_54
		const prefab_rectangulo_54 = new Prefab_rectangulo(this, 1197.000018412213, 50);
		this.add.existing(prefab_rectangulo_54);

		// lists
		const bloques = [rectangle_2, prefab_rectangulo, prefab_rectangulo_1, prefab_rectangulo_2, rectangle, prefab_rectangulo_3, prefab_rectangulo_4, prefab_rectangulo_5, rectangle_3, prefab_rectangulo_6, prefab_rectangulo_7, prefab_rectangulo_8, rectangle_4, prefab_rectangulo_9, prefab_rectangulo_10, prefab_rectangulo_11, rectangle_5, prefab_rectangulo_12, prefab_rectangulo_13, prefab_rectangulo_14, rectangle_6, prefab_rectangulo_15, prefab_rectangulo_16, prefab_rectangulo_17, rectangle_7, prefab_rectangulo_18, prefab_rectangulo_19, prefab_rectangulo_20, rectangle_8, prefab_rectangulo_21, prefab_rectangulo_22, prefab_rectangulo_23, rectangle_9, prefab_rectangulo_24, prefab_rectangulo_25, prefab_rectangulo_26, rectangle_10, prefab_rectangulo_27, prefab_rectangulo_28, prefab_rectangulo_29, rectangle_11, prefab_rectangulo_30, prefab_rectangulo_31, prefab_rectangulo_32, rectangle_12, prefab_rectangulo_33, prefab_rectangulo_34, prefab_rectangulo_35, prefab_rectangulo_36, prefab_rectangulo_37, prefab_rectangulo_38, prefab_rectangulo_39, prefab_rectangulo_40, prefab_rectangulo_41, prefab_rectangulo_44, prefab_rectangulo_45, rectangle_13, prefab_rectangulo_46, rectangle_14, prefab_rectangulo_49, rectangle_15, prefab_rectangulo_51, rectangle_16, prefab_rectangulo_52, prefab_rectangulo_53, prefab_rectangulo_54];

		// collider
		this.physics.add.collider(dino, rectangle_1, this.RectanguloRebotar, undefined, this);

		// collider_1
		this.physics.add.collider(dino, bloques, this.DestruirRectangulo, undefined, this);

		this.botonDerecha = botonDerecha;
		this.botonIzquierda = botonIzquierda;
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
		this.teclaIzquierda = teclaIzquierda;
		this.teclaDerecha = teclaDerecha;
		this.bloques = bloques;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
	botonDerecha;
	/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
	botonIzquierda;
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
		this.MovimientoPlataforma()


	}
	AsignarBotonesTactiles() {
	this.botonIzquierda.on('pointerdown', () => this.moverIzquierda = true);
	this.botonDerecha.on('pointerdown', () => this.moverDerecha = true)
	this.botonIzquierda.on('pointerup', () => this.moverIzquierda = false);
	this.botonDerecha.on('pointerup', () => this.moverDerecha = false)
	}
	MovimientoPlataforma(){
		if(this.moverDerecha){
			this.rectangle_1.body.setVelocityX(600)
		} else if(this. moverIzquierda){
			this.rectangle_1.body.setVelocityX(-600)
		}else {
			this.rectangle_1.body.setVelocityX(0)
		}
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

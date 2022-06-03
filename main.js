canvas = new fabric.Canvas('myCanvas');

holeX = 850;
holeY = 550;
ballX = 10;
ballY = 10

block_image_width = 5;
block_image_height = 5;
ballIMG = '';
holeIMG = '';

function holeImage() {
	fabric.Image.fromURL('hole.png', function (Img) {
		holeIMG = Img;
		holeIMG.scaleToHeight(40);
		holeIMG.scaleToWidth(40);
		holeIMG.set({
			top: holeY,
			left: holeX
		})
		canvas.add(holeIMG);
	})
}
function ballImage() {
	fabric.Image.fromURL('ball.png', function (Img) {
		ballIMG = Img;
		ballIMG.scaleToHeight(40);
		ballIMG.scaleToWidth(40);
		ballIMG.set({
			top: ballY,
			left: ballX
		})
		canvas.add(ballIMG);
	})
}
ballImage();

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((ballX == holeX) && (ballY == holeY)) {
		canvas.remove(ballIMG);
		document.getElementById('myCanvas').style.borderColor = 'red';
		document.getElementById('result').innerHTML = 'You WIN!';
	} else {

	if (keyPressed == '38') {
		up();
		console.log("up");
	}
	if (keyPressed == '40') {
		down();
		console.log("down");
	}
	if (keyPressed == '37') {
		left();
		console.log("left");
	}
	if (keyPressed == '39') {
		right();
		console.log("right");
	}
	}
	function up() {
		if (ballY > 10){
			ballY = ballY - 15;
			canvas.remove(ballIMG);
			ballImage();
		}
	}

	function down() {
		if (ballY < 550){
			ballY = ballY + 15;
			canvas.remove(ballIMG);
			ballImage();
		}
	}

	function left() {
		if (ballX > 10) {
			ballX = ballX - 15;
			canvas.remove(ballIMG);
			ballImage();
		}
	}

	function right() {
		if (ballX < 850) {
			ballX = ballX + 15;
			canvas.remove(ballIMG);
			ballImage();
		}
	}

}


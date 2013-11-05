var canvas = document.getElementById('game');

var context = canvas.getContext('2d');

var keysDown = {};

window.addEventListener('keydown',function(event){
	keysDown[event.keyCode] = true;

	if (event.keyCode >= 37 && event.keyCode <= 40) {
		event.preventDefault();
	}
});

window.addEventListener('keyup',function(event){
	delete keysDown[event.keyCode];
});


function startGame(){
	canvas.height = 400;
	canvas.width = 800;

	loop();
}

function loop(){
	requestAnimationFrame(loop);

	update();

	draw();
}

function update(){
	box.update();
	console.log(keysDown);
}

function draw(){
	context.clearRect(0,0,canvas.width,canvas.height);
	box.draw();
}


var box = {
	x: 50,
	y: 50,
	width: 10,
	height: 10,
	speed: 10,
	color: '#4f5654'
};

box.draw = function() {
	context.fillStyle = box.color;

	context.fillRect(box.x,box.y,box.width,box.height);
};

box.update = function() {
	box.input();
};

box.input = function(){
	if(40 in keysDown){
		box.y += box.speed;
	}

	if(38 in keysDown){
		box.y -= box.speed;
	}

	if(37 in keysDown){
		box.x -= box.speed;
	}

	if(39 in keysDown){
		box.x += box.speed;
	}
}

startGame();
var canvas = document.getElementById("main");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";

var ctx = canvas.getContext('2d');

Game = {};
Game.paused = false;
Game.fps = 60;
Game.Gravity = 6;

Art = {};

KeysDown = {
	a: false,
	d: false,
	s: false,
	y: false
};

$(document).keydown(function(key){
	if(key.keyCode == 32){
		KeysDown.s = true;
	};
	if(key.keyCode == 65){
		KeysDown.a = true;
	};
	if(key.keyCode == 68){
		KeysDown.d = true;
	};
	if(key.keyCode = 89){
		KeysDown.y = true;
	};
});
$(document).keyup(function(key){
	if(key.keyCode == 32){
		KeysDown.s = false;
	};
	if(key.keyCode == 65){
		KeysDown.a = false;
	};
	if(key.keyCode == 68){
		KeysDown.d = false;
	};
	if(key.keyCode = 89){
		KeysDown.y = false;
	};
});

Art.Circle = function(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;
	this.yv = null;
};

Art.DrawCircle = function(c){
	ctx.beginPath();
	ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
	ctx.stroke();
};

var Player = new Art.Circle(100,100,40);
Player.Jumping = false;
Player.Standing = null;
Player.MaxJump = 30;
Player.JumpV = 5;
Player.Jump = 0;
Player.requestJump = function(){
	if (Player.Standing){
		Player.Standing = false;
		Player.Jump = Player.MaxJump;
		Player.Jumping = true;
	};
};

Art.DrawCircle(Player)

Game.main = function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(Player.Jumping){
		Player.y += -Player.JumpV;
		Player.Jump = Player.Jump - 1;
		if(Player.Jump == 0){
			Player.Jumping = false;
		}
	}else{
		for(var i = 0; i <= Game.Gravity; i += 1){

		};
		if((Player.y+Player.r)>=(canvas.height)){
			Player.yv = 0;
			Player.y = canvas.height-Player.r
			Player.Standing = true;
		}
		else{
			Player.yv = Game.Gravity;
			Player.Standing = false;
		}
	}
	if(KeysDown.a){
		Player.x += -3;
	}
	if(KeysDown.d){
		Player.x += 3;
	}

	if(KeysDown.s){
		Player.requestJump();
	}
	Player.y += Player.yv;
	Art.DrawCircle(Player);
};

Game._intervalId = setInterval(Game.main, (1000/Game.fps))
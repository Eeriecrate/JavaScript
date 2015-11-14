var canvas = document.getElementById("main");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";

var ctx = canvas.getContext('2d');

Game = {};
Game.paused = true;
Game.fps = 60;
Game.Gravity = 10;

Art = {};

KeysDown = {
	a: false,
	d: false,
	s: false,
	y: false
};

var EscapeHit = false;

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
	if(key.keyCode == 89){
		KeysDown.y = true;
	};
	if(key.keyCode == 27 && !EscapeHit){
		EscapeHit = true;
		if(Game.paused){
			Game.paused = false;
		}
		else{
			Game.paused = true;
			ctx.rect((canvas.width/2)-150,(canvas.height/2)-50,300,100);
			ctx.fillStyle = "Black";
			ctx.fill();
			ctx.stroke();
			ctx.font = "20px Georgia";
			ctx.fillStyle = "White";
			ctx.fillText("GAME PAUSED",(canvas.width/2)-75,(canvas.height/2)+12.5);
		}

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
	if(key.keyCode == 89){
		KeysDown.y = false;
	};
	if(key.keyCode == 27){
		EscapeHit = false;
	}
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
Player.Standing = false;
Player.MaxJump = 25;
Player.Jump = 0;
Player.Morphing = false;
Player.Change = 0;
Player.requestJump = function(){
	if (Player.Standing){
		Player.Standing = false;
		Player.Jump = Player.MaxJump;
		Player.Jumping = true;
	};
};
Player.requestMorph = function(){
	if(!Player.Morphing){
		Player.Morphing = true;
		if(Player.r == 40){
			Player.Change = 5;
		}else{
			Player.Change = -5;
		}
	}
}
Art.DrawCircle(Player)

Game.main = function(){
	if(!Game.paused){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(Player.Jumping){
		Player.y += -Player.Jump;
		Player.Jump = Player.Jump - 1;
		if(Player.Jump == 0){
			Player.Jumping = false;
		}
	}else{
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
	if(Player.Morphing){
		if(Player.Change == 5){
			Player.r += Player.Change
			if(Player.r == 120){
				Player.Morphing = false;
			}
		}else{
			Player.r += Player.Change
			if(Player.r == 40){
				Player.Morphing = false;
			}
		}
	}
	if(KeysDown.a){
		Player.x += -6;
	}
	if(KeysDown.d){
		Player.x += 6;
	}
	if(KeysDown.y){
		Player.requestMorph();
	}
	if(KeysDown.s){
		Player.requestJump();
	}
	Player.y += Player.yv;
	Art.DrawCircle(Player);
}
};

Game._intervalId = setInterval(Game.main, (1000/Game.fps))
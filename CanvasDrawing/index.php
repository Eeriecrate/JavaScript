<!DOCTYPE html>
	<head>
		<title>Canvas</title>
	</head>
	<body>
		<canvas id = "theCanvas" width = "500px" height = "500px" style = "border:1px solid #000000;">
		<script type="text/javascript" src = "../lib/jquery.js"></script>
		<script type="text/javascript">
		var canvas = document.getElementById("theCanvas");
		var ctx = canvas.getContext("2d");
		//Makes a line
		//Makes a circle
		var circle = new Circle(250,460,40);

		function Circle(x,y,r){
			this.x = x;
			this.y = y;
			this.r = r;
		}

		function drawCircle(c){
			ctx.beginPath();
			ctx.arc(c.x,c.y,c.r,0,2*Math.PI, true);
			ctx.stroke();
			ctx.fillStyle = "Red";
			ctx.fill();
		}
		drawCircle(circle)
		var Jumping  =
		$(document).keydown(function(key){
			if(key.keyCode == 32){
				circle.y += -5;
				  ctx.clearRect(0, 0, canvas.width, canvas.height);
				drawCircle(circle)
			}
		});

		</script>
	</body>
</html>
<!DOCTYPE html>
	<head>
		<title>Update Test</title>
	</head>
	<body>
		<script>
			var Game = {
				FPS: 60,
				Paused: false,
				Count: 0
			};
			Game.update = function() {
				if (!Game.Paused) {
				Game.Count += 1;
				document.write(Game.Count);
				};
			};
			
			//This creates the loop
			Game._intervalId = setInterval(Game.update, (1000/Game.FPS))

		</script>
	</body>
</html>
<!DOCTYPE html>
	<head>
		<title>Update Test</title>
	</head>
	<body>
		<h3>Counter: <span style = "text-decoration: underline;" class = "counter"></span> </h3>
		<script>
			var Counter = document.getElementsByClassName("counter")[0];
			var Game = {
				FPS: 60,
				Paused: false,
				Count: 0,
			};
			Game.update = function() {
				if (!Game.Paused) {
				Game.Count += 1;
				updateCounter(Game.Count);
				};
			};
			
			function updateCounter(Count){
				Counter.innerHTML = Count;
			};

			//This creates the loop
			Game._intervalId = setInterval(Game.update, (1000/Game.FPS))

		</script>
	</body>
</html>
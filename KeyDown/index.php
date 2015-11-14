<!DOCTYPE html>
	<head>
		<title>Keydown</title>
	</head>
	<body>
		<p>KeyCode: <span class = "keycode text" style = "color: red"></span></p>
		<script src = "../lib/jquery.js"></script>
		<script>
			$(document).keydown(function(key){
				$(".keycode.text").text(key.keyCode);
			});
		</script>
	</body>
</html>
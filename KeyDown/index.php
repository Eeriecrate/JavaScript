<!DOCTYPE html>
	<head>
		<title>Keydown</title>
	</head>
	<body>
		<p>KeyCode: <span id = "text" style = "color: red"></span></p>
		<script src = "../lib/jquery.js"></script>
		<script>
			$(document).keydown(function(key){
				$("#text").text(key.keyCode);
			});
		</script>
	</body>
</html>
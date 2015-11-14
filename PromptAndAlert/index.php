<!DOCTYPE html>
	<head>
		<title>Alert Prompt Testing</title>
	</head>
	<body>

	<script>
		//Prompting isn't hard. 1st part is the question, the 2nd part is the default answer.
		var fname = prompt("Hello, what is your name?", "Anonymous");
		var lname = prompt("Oh. That's an interesting name.\n What is your last name?", "Anonymous");
		alert("Hello, " + fname + " " + lname + ".");
	</script>

	</body>
</html>


$("#start-game").on("click", function () {

	$("#start-game").on("click", function () {
		 location.reload();
	});
//Set variables to default for reset
	var game = {
		userSelected: false,
		userPlayer: "",
		enemy: "",
		enemySelected: false,
		gameRunning: false,
		attackPoints: 0,
		counterAttackPoints: 0,
		userHealthPoints: 0,
		enemyHealthPoints: 0,
		userImage: "",
		enemyImage: "",
		userHealthPointsDisplay: "",
		enemyHealthPointsDisplay: "",
		enemyDefeatedCount: 0
	};

	var harry = {
		healthPoints: 0,
		attackPoints: 0,
		image: $("#harry-col"),
		healthPointsDisplay: $("#harry-health-points")
	};

	var ron = {
		healthPoints: 0,
		attackPoints: 0,
		image: $("#ron-col"),
		healthPointsDisplay: $("#ron-health-points")
	};

	var hermione = {
		healthPoints: 0,
		attackPoints: 0,
		image: $("#hermione-col"),
		healthPointsDisplay: $("#hermione-health-points")
	};

	var draco = {
		healthPoints: 0,
		attackPoints: 0,
		image: $("#draco-col"),
		healthPointsDisplay: $("#draco-health-points")
	};

	function reset (){
		$("#harry-col").empty();
	}

	//Turn game on
	game.gameRunning = true;

	//Calculate stats for Harry - show health points
	harry.healthPoints = Math.floor(Math.random() * (200 - 100 + 100)) + 100;
	harry.attackPoints = Math.floor(Math.random() * (30 - 10 + 10)) + 10;

	$(harry.healthPointsDisplay)
		.append(harry.healthPoints)
		.css({
			"color": "black",
			"background": "white",
			"text-align": "center"
		});

	//Calculate stats for Ron - show health points
	ron.healthPoints = Math.floor(Math.random() * (200 - 100 + 100)) + 100;
	ron.attackPoints = Math.floor(Math.random() * (30 - 10 + 10)) + 10;

	$(ron.healthPointsDisplay)
		.append(ron.healthPoints)
		.css({
			"color": "black",
			"background": "white",
			"text-align": "center"
		});

	//Calculate stats for Hermione - show health points
	hermione.healthPoints = Math.floor(Math.random() * (200 - 100 + 100)) + 100;
	hermione.attackPoints = Math.floor(Math.random() * (30 - 10 + 10)) + 10;

	$(hermione.healthPointsDisplay)
		.append(hermione.healthPoints)
		.css({
			"color": "black",
			"background": "white",
			"text-align": "center"
		});

	//Calculate stats for Draco - show health points
	draco.healthPoints = Math.floor(Math.random() * (200 - 100 + 100)) + 100;
	draco.attackPoints = Math.floor(Math.random() * (30 - 10 + 10)) + 10;

	$(draco.healthPointsDisplay)
		.append(draco.healthPoints)
		.css({
			"color": "black",
			"background": "white",
			"text-align": "center"
		});

	//First instruction
	$("#instructions").text("Select a wizard as your player");

	$("#harry-col").on("click", () => {
		if (game.userSelected === false && game.gameRunning === true) {
			game.userPlayer = "Harry";
			game.userSelected = true;
			game.userImage = harry.image;
			game.userHealthPoints = harry.healthPoints;
			game.userHealthPointsDisplay = harry.healthPointsDisplay;
			game.attackPoints = harry.attackPoints;
			game.userImage
				.appendTo("#player-row").removeClass('col-2').addClass('col-4')
				.css({
					"background": "green",
					"margin-top": "10px"

				});
			$("#instructions").text("Select one wizard as your first enemy");
		} else if (
			game.userSelected === true &&
			game.gameRunning === true &&
			game.enemySelected === false
		) {
			game.enemy = "Harry";
			game.enemySelected = true;
			game.enemyImage = harry.image;
			game.enemyHealthPoints = harry.healthPoints;
			game.enemyHealthPointsDisplay = harry.healthPointsDisplay;
			game.counterAttackPoints = harry.attackPoints;
			game.enemyImage
				.appendTo("#enemy-row")
				.css({
					"background": "red",
					"margin-top": "10px"
				});
			$("#instructions").text("Attack your enemy!");
		}
	});

	$("#ron-col").on("click", () => {
		if (game.userSelected === false && game.gameRunning === true) {
			game.userPlayer = "Ron";
			game.userSelected = true;
			game.userImage = ron.image;
			game.userHealthPoints = ron.healthPoints;
			game.userHealthPointsDisplay = ron.healthPointsDisplay;
			game.attackPoints = ron.attackPoints;
			game.userImage
				.appendTo("#player-row").removeClass('col-2').addClass('col-4')
				.css({
					"background": "green",
					"margin-top": "10px"
				});
			$("#instructions").text("Select one wizard as your first enemy");
		} else if (
			game.userSelected === true &&
			game.gameRunning === true &&
			game.enemySelected === false
		) {
			game.enemy = "Ron";
			game.enemySelected = true;
			game.enemyImage = ron.image;
			game.enemyHealthPoints = ron.healthPoints;
			game.enemyHealthPointsDisplay = ron.healthPointsDisplay;
			game.counterAttackPoints = ron.attackPoints;
			game.enemyImage
				.appendTo("#enemy-row")
				.css({
					"background": "red",
					"margin-top": "10px"
				});
			$("#instructions").text("Attack your enemy!");
		}
	});

	$("#hermione-col").on("click", () => {
		if (game.userSelected === false && game.gameRunning === true) {
			game.userPlayer = "Hermione";
			game.userSelected = true;
			game.userImage = hermione.image;
			game.userHealthPoints = hermione.healthPoints;
			game.userHealthPointsDisplay = hermione.healthPointsDisplay;
			game.attackPoints = hermione.attackPoints;
			game.userImage
				.appendTo("#player-row").removeClass('col-2').addClass('col-4')
				.css({
					"background": "green",
					"margin-top": "10px"
				});
			$("#instructions").text("Select one wizard as your first enemy");
		} else if (
			game.userSelected === true &&
			game.gameRunning === true &&
			game.enemySelected === false
		) {
			game.enemy = "Hermione";
			game.enemySelected = true;
			game.enemyImage = hermione.image;
			game.enemyHealthPoints = hermione.healthPoints;
			game.enemyHealthPointsDisplay = hermione.healthPointsDisplay;
			game.counterAttackPoints = hermione.attackPoints;
			game.enemyImage
				.appendTo("#enemy-row")
				.css({
					"background": "red",
					"margin-top": "10px"
				});
			$("#instructions").text("Attack your enemy!");
		}
	});

	$("#draco-col").on("click", () => {
		if (game.userSelected === false && game.gameRunning === true) {
			game.userPlayer = "Draco";
			game.userSelected = true;
			game.userImage = draco.image;
			game.userHealthPoints = draco.healthPoints;
			game.userHealthPointsDisplay = draco.healthPointsDisplay;
			game.attackPoints = draco.attackPoints;
			game.userImage
				.appendTo("#player-row").removeClass('col-2').addClass('col-4')
				.css({
					"background": "green",
					"margin-top": "10px"
				});
			$("#instructions").text("Select one wizard as your first enemy");
		} else if (
			game.userSelected === true &&
			game.gameRunning === true &&
			game.enemySelected === false
		) {
			game.enemy = "Draco";
			game.enemySelected = true;
			game.enemyImage = draco.image;
			game.enemyHealthPoints = draco.healthPoints;
			game.enemyHealthPointsDisplay = draco.healthPointsDisplay;
			game.counterAttackPoints = draco.attackPoints;
			game.enemyImage
				.appendTo("#enemy-row")
				.css({
					background: "red",
					"margin-top": "10px"
				});
			$("#instructions").text("Attack your enemy!");
		}
	});

	$("#attack-button").on("click", () => {
		if (game.gameRunning === true && game.userHealthPoints > 0 && game.enemyHealthPoints > 0) {
			game.userHealthPoints = game.userHealthPoints - game.counterAttackPoints;
			game.enemyHealthPoints = game.enemyHealthPoints - game.attackPoints;
			$(game.userHealthPointsDisplay).text(
				"Health Points: " + game.userHealthPoints
			);
			$(game.enemyHealthPointsDisplay).text(
				"Health Points: " + game.enemyHealthPoints
			);
			$("#game-progress-user").text(game.userPlayer + " inflicted " + game.attackPoints + " on " + game.enemy + "!");
			$("#game-progress-enemy").text(game.enemy + " inflicted " + game.counterAttackPoints + " on " + game.userPlayer + "!");

			game.attackPoints = game.attackPoints + game.attackPoints;
		}
		if (game.gameRunning === true && game.userHealthPoints > 0 && game.enemyHealthPoints < 0) {

			game.enemyHealthPoints = 0;
			$(game.enemyHealthPointsDisplay).text(
				"Health Points: " + game.enemyHealthPoints
			);
				$("#game-progress-user").text(game.userPlayer + " won!");
				$("#game-progress-enemy").text(game.enemy + " was defeated!");
			game.enemyImage
				.appendTo("#defeated-row")
				.css({
					"background": "black",
					"margin-top": "10px",
					"width": "30%",
					"opacity": "0.5"
				});
			game.enemyHealthPointsDisplay.css({"font-size": "10px"})
			game.enemySelected = false;
			game.enemyDefeatedCount = game.enemyDefeatedCount + 1;
			$("#instructions").text("Select Your Next Opponent");
			
		};

		if (game.gameRunning === true && game.userHealthPoints < 0) {
			game.gameRunning = false;
			alert("You Lost! Press Reset to Try Again.")
			game.userHealthPoints = 0;
			game.userImage
				.css({
					"background": "black",
					"margin-top": "10px",
					"width": "30%",
					"opacity": "0.5"
				});
			$("#instructions").text("You Lost! Click Reset to Try Again");

		};

		if (game.gameRunning === true && game.enemyDefeatedCount === 3) {
			alert("You Won! Press Reset to Go Again")
			$("#instructions").text("You Won! Press Reset to Go Again");
			game.gameRunning = false;
		};
	});

	$("#reset-button").on("click", () => {
		reset();
	});
	



	//game.userHealthPoints = game.userHealthPoints - game.counterAttackPoints;
	//game.enemyHealthPoints = game.enemyHealthPoints - game.attackPoints;
	//console.log(game.userHealthPoints);
	// console.log(game.enemyHealthPoints);


});

/*$("#harry-col, #ron-col, #hermione-col, #draco-col").on("click", function() {
    if (game.userSelected === false && game.gameRunning === true) {
      game.userSelected = true;
      game.userPlayer = $(this);
      game.userPlayer
        .appendTo("#player-row")
          .css({"background": 'green', "margin-bottom": "10px" });
        $("#instructions").text("Select one wizard as your first enemy");
        console.log(game.userPlayer);
    } else if (
      game.userSelected === true &&
      game.gameRunning === true &&
      game.enemySelected === false
    ) {
      game.enemySelected = true;
      game.enemy = $(this);
      game.enemy
        .appendTo("#enemy-row")
          .css({"background": 'red', "margin-top": "10px" });
      $("#instructions").text("Attack your enemy!");
    }
  });
    
    $("#attack-button").on("click", function () {
        if (game.userSelected === false && game.gameRunning === true && game.enemySelected === true) {
            attackPoints = Math.floor(Math.random() * (30 - 10 + 10)) + 10;
            game.userPlayer - attackPoints
        } else if (
            game.userSelected === true &&
            game.gameRunning === true &&
            game.enemySelected === false
        ) {
            game.enemySelected = true;
            game.enemy = $(this);
            game.enemy
                .appendTo("#enemy-row")
                .css({ "background": 'red', "margin-top": "10px" });
            $("#instructions").text("Attack your enemy!");
        }*/
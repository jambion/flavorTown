$(function(){
	console.log("Hello World!");
	/*
	1. Create layout (HTML, CSS)
	2. Create an array of cards (Two of each card)
	3. Shuffle the cards and add each of them to a virtual layout (slots 0 - 11)
	4. Assign 
	*/

	const allCards = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6"];
	var virtualBoard;
	var cardsPicked = [];
	var slotPicked = [];

	var shuffle = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
	}

	var fillHTMLBoard = function(vBoard){
		for(var k = 0; k < vBoard.length; k++){
			var kString = k.toString();
			$("#slot" + kString).addClass(vBoard[k]);
		}
	}

	var compareCards = function(card1, card2){
		console.log(card1 + " " + card2);
		if(card1 === card2 && slotPicked[0] !== slotPicked[1]){
			console.log("nice!");
			playSound();
			cardsPicked = [];
			$("#slot" + slotPicked[0]).attr("id", "null");
			$("#slot" + slotPicked[1]).attr("id", "null");
		} else {
			console.log("Try Again!");
			
		}
	}

	var resetCards = function(classNumber){
		console.log("Resetting");
		console.log("cardsPicked: " + cardsPicked[0] + ", slots: " + slotPicked[0] + " " + slotPicked[1]);
		if(cardsPicked[0] === classNumber){ 
			$("#slot"+ slotPicked[1]).attr("src", "images/cardBack.jpg");
		} else if(cardsPicked[1] === classNumber){
			$("#slot"+ slotPicked[0]).attr("src", "images/cardBack.jpg");
		} else {
			$("#slot"+ slotPicked[0]).attr("src", "images/cardBack.jpg");
			$("#slot"+ slotPicked[1]).attr("src", "images/cardBack.jpg");

		}
		
		cardsPicked.length = 0;
		slotPicked.length = 0;

	}

	var addPickedCard = function(classNumber, slotNumber){
		if(cardsPicked.length === 0 || cardsPicked.length > 1){
			resetCards(classNumber);
			cardsPicked[0] = classNumber;
			
			slotPicked[0] = slotNumber;
			// console.log("A cardsPicked length: " + cardsPicked.length);
		} else {
			cardsPicked[1] = classNumber;
			slotPicked[1] = slotNumber;
			// console.log("B cardsPicked length: " + cardsPicked.length);
			compareCards(cardsPicked[0], cardsPicked[1]);
		}
	}

	var playSound = function(){
		var sound = $("#legit")[0];
		sound.play();
	}

	virtualBoard = shuffle(allCards);
	console.log(virtualBoard);
	fillHTMLBoard(virtualBoard);





	$("#slot0").click(function(){
		var classNumber = $(this).attr("class")
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 0);
	});



	$("#slot1").click(function(){
		var classNumber = $(this).attr("class");
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 1);
	});

	$("#slot2").click(function(){
		var classNumber = $(this).attr("class");
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 2);
	});

	$("#slot3").click(function(){
		var classNumber = $(this).attr("class")
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 3);
	});

	$("#slot4").click(function(){
		var classNumber = $(this).attr("class");
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 4);
	});

	$("#slot5").click(function(){
		var classNumber = $(this).attr("class");
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 5);
	});

	$("#slot6").click(function(){
		var classNumber = $(this).attr("class")
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 6);
	});



	$("#slot7").click(function(){
		var classNumber = $(this).attr("class");
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 7);
	});

	$("#slot8").click(function(){
		var classNumber = $(this).attr("class");
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 8);
	});

	$("#slot9").click(function(){
		var classNumber = $(this).attr("class")
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 9);
	});



	$("#slot10").click(function(){
		var classNumber = $(this).attr("class");
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 10);
	});

	$("#slot11").click(function(){
		var classNumber = $(this).attr("class");
		$(this).fadeTo(200, 0).attr("src", "images/" + classNumber + ".jpg").fadeTo(200, 1);
		addPickedCard(classNumber, 11);
	});




});
// Создаем секретное число
let secretNumber = Math.trunc(Math.random() * 20) + 1; //Muth.trunc позволяет округлить число
// document.querySelector('.question').textContent = secretNumber; //Отображаем число на странице для тестирования кода

// Объявление строки с очками
let score = 20; /* Это так называемая state переменная или переменная состояния, такой подход лучше
чем считывание объекта при каждом обновлении из DOM
*/
let highScore = 0;

const displayGuessMessage = function (message) {
	document.querySelector(".guess-message").textContent = message;
};

// Поведение при клике на кнопку "Проверить" и поведение строки с очками
document.querySelector(".check").addEventListener("click", function () {
	const guessingNumber = Number(document.querySelector(".number-input").value); // В инпутах базово идет string

	// No input
	if (!guessingNumber) {
		displayGuessMessage("Укажите число!");
	}

	// Player win
	else if (guessingNumber === secretNumber) {
		displayGuessMessage("Правильно!");
		document.querySelector("body").style.backgroundColor = "rgb(9, 250, 21)"; // Данный метод добавляет стили в сам HTML не меняя при этом CSS файл
		document.querySelector(".question").style.width = "50rem"; // Данный метод добавляет стили в сам HTML не меняя при этом CSS файл
		document.querySelector(".question").textContent = secretNumber;
		// Высший балл
		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}
	}
	// Number from input is wrong
	else if (guessingNumber !== secretNumber) {
		if (score > 1) {
			displayGuessMessage(
				guessingNumber > secretNumber ? "Слишком много!" : "Слишком мало!"
			);
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayGuessMessage("Вы проиграли!");
			document.querySelector(".score").textContent = 0;
		}
	}

	//   // Too high
	//   else if (guessingNumber > secretNumber) {
	//     if (score > 1) {
	//       document.querySelector('.guess-message').textContent = 'Слишком много!';
	//       score--;
	//       document.querySelector('.score').textContent = score;
	//     } else {
	//       document.querySelector('.guess-message').textContent = 'Вы проиграли!';
	//       document.querySelector('.score').textContent = 0;
	//     }
	//   }

	//   // Too low
	//   else if (guessingNumber < secretNumber) {
	//     if (score > 1) {
	//       document.querySelector('.guess-message').textContent = 'Слишком мало!';
	//       score--;
	//       document.querySelector('.score').textContent = score;
	//     } else {
	//       document.querySelector('.guess-message').textContent = 'Вы проиграли!';
	//       document.querySelector('.score').textContent = 0;
	//     }
	//   }
});

// Поведение страницы при нажатии на кнопку "Сначала"
document.querySelector(".again").addEventListener("click", function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	document.querySelector("body").style.backgroundColor = "rgb(0, 0, 0)";

	document.querySelector(".question").textContent = "???";
	document.querySelector(".question").style.width = "25rem";

	displayGuessMessage("Начни угадывать");

	score = 20;
	document.querySelector(".score").textContent = score;

	document.querySelector(".number-input").value = "";
});

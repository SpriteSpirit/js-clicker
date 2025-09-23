const time = document.getElementById("time");
const result = document.getElementById("result");
const startBtn = document.getElementById("start");
const game = document.getElementById("game");

startBtn.onclick = function () {
	let score = 0;
	let seconds = parseInt(document.getElementById("game-time").value);

	// Показ времени, скрытие результата
	document.getElementById("time-header").classList.remove("hide");
	document.getElementById("result-header").classList.add("hide");
	startBtn.classList.add("hide");
	game.style.background = "#fff";

	// Таймер
	let timer = setInterval(function () {
		time.textContent = seconds.toFixed(1);
		seconds -= 0.1;

		if (seconds <= 0) {
			clearInterval(timer);
			// Результат
			result.textContent = score;
			document.getElementById("time-header").classList.add("hide");
			document.getElementById("result-header").classList.remove("hide");
			startBtn.classList.remove("hide");
			game.innerHTML = "";
			game.style.background = "#ccc";
		}
	}, 100);

	// Квадрат
	createSquare();

	function createSquare() {
		if (seconds <= 0) return;

		game.innerHTML = "";
		let square = document.createElement("div");
		let size = Math.random() * 50 + 30; // от 30 до 80px
		let color = getRandomColor();

		square.style.cssText = `
            width: ${size}px; 
            height: ${size}px; 
            background: ${color}; 
            position: absolute; 
            cursor: pointer;
            left: ${Math.random() * (300 - size)}px;
            top: ${Math.random() * (300 - size)}px;
            border: 2px solid #333;
        `;

		square.onclick = function () {
			score++;
			createSquare();
		};

		game.appendChild(square);
	}

	// Рандомные цвета
	function getRandomColor() {
		const colors = [
			"#FF6B6B",
			"#4ECDC4",
			"#FFE66D",
			"#6B48FF",
			"#FF8E53",
			"#00CC99",
			"#FF5C8D",
			"#00A8E8",
			"#F25F5C",
			"#247BA0",
			"#70C1B3",
			"#FF9F1C",
			"#E71D36",
			"#2EC4B6",
			"#EFFFE9",
			"#011627",
			"#FF9F1C",
			"#2A9D8F",
			"#E76F51",
			"#264653",
		];
		return colors[Math.floor(Math.random() * colors.length)];
	}
};

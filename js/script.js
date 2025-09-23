const time = document.getElementById("time");
const result = document.getElementById("result");
const startBtn = document.getElementById("start");
const game = document.getElementById("game");

startBtn.onclick = function () { 
	let score = 0;
	let seconds = parseInt(document.getElementById("game-time").value);

	// Скрыть результат, показать время
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
		let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

		square.style.cssText = `
            width: ${size}px; 
            height: ${size}px; 
            background: ${color}; 
            position: absolute; 
            cursor: pointer;
            left: ${Math.random() * (300 - size)}px;
            top: ${Math.random() * (300 - size)}px;
        `;

		square.onclick = function () {
			score++;
			createSquare();
		};

		game.appendChild(square);
	}
};

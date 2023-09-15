<!DOCTYPE html>
<html>
<head>
    <title>Typing Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        #word-container {
            font-size: 24px;
            margin-top: 20px;
        }

        #input {
            font-size: 18px;
            padding: 5px;
            margin-top: 10px;
            width: 300px;
        }

        #result {
            font-size: 18px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Typing Game</h1>
    <div id="word-container"></div>
    <input id="input" type="text" autofocus>
    <div id="result"></div>

    <script>
        const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "orange", "pear", "quince", "raspberry", "strawberry", "tangerine", "watermelon"];
        let currentWordIndex = 0;
        let startTime;

        const wordContainer = document.getElementById('word-container');
        const input = document.getElementById('input');
        const result = document.getElementById('result');

        function startGame() {
            currentWordIndex = 0;
            input.value = '';
            result.textContent = '';
            showNextWord();
            startTime = Date.now();
        }

        function showNextWord() {
            if (currentWordIndex < words.length) {
                wordContainer.textContent = words[currentWordIndex];
            } else {
                const endTime = Date.now();
                const timeTaken = (endTime - startTime) / 1000;
                const wordsPerMinute = (words.length / timeTaken) * 60;
                result.textContent = `Game over! You typed at ${wordsPerMinute.toFixed(2)} words per minute.`;
            }
        }

        input.addEventListener('input', function () {
            const typedWord = input.value.trim();
            const currentWord = words[currentWordIndex];

            if (typedWord === currentWord) {
                currentWordIndex++;
                input.value = '';
                showNextWord();
            }
        });

        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                startGame();
            }
        });

        startGame();
    </script>
</body>
</html>

document.addEventListener('DOMContentLoaded', function () {
    const player = document.getElementById('player');
    const gameContainer = document.getElementById('game-container');

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft' || event.key === 'Left') {
            movePlayer(-20);
        } else if (event.key === 'ArrowRight' || event.key === 'Right') {
            movePlayer(20);
        }
    });

    function movePlayer(distance) {
        const playerPosition = player.offsetLeft + distance;
        if (playerPosition >= 0 && playerPosition <= gameContainer.offsetWidth - player.offsetWidth) {
            player.style.left = playerPosition + 'px';
        }
    }

    function createEnemy() {
        const enemy = document.createElement('div');
        enemy.className = 'enemy';
        gameContainer.appendChild(enemy);

        const randomPosition = Math.floor(Math.random() * (gameContainer.offsetWidth - 30));
        enemy.style.left = randomPosition + 'px';

        enemy.addEventListener('animationiteration', function () {
            gameContainer.removeChild(enemy);
        });

        checkCollision();
    }

    function checkCollision() {
        const enemies = document.querySelectorAll('.enemy');
        enemies.forEach(function (enemy) {
            if (isColliding(player, enemy)) {
                gameOver();
            }
        });
    }

    function isColliding(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
    }

    function gameOver() {
        alert('O\'yin tugadi!');
        location.reload(); // Qayta yuklash
    }

    setInterval(createEnemy, 2000); // Har 2 sekundda bir qarshilik yaratish
});

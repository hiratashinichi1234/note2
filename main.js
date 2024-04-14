document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Canvasのサイズをウィンドウのサイズに合わせる
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function drawCircle(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawRandomCircles() {
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * canvas.width;
            const y = canvas.height / 6 + Math.random() * 800 - 100; // 画面の中央から上に少しずらす
            const radius = Math.random() * 50; // 半径の最大値を50に設定
            const color = getRandomColor(); // ランダムなカラフルな色を取得
            drawCircle(x, y, radius, color);
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvasをクリア
        drawRandomCircles(); // 水玉模様を再描画
        setTimeout(() => {
            requestAnimationFrame(animate); // 次のフレームをリクエスト
        }, 600); // 100ミリ秒の遅延を追加して、アニメーションをゆっくりとする
    }

    animate(); // アニメーションを開始
});

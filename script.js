function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.innerHTML = '❤';
    heart.style.position = 'fixed';
    heart.style.color = '#ff4b4b';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.animation = `float ${Math.random() * 3 + 2}s linear`;
    heart.style.top = '100vh';
    heart.style.zIndex = '-1';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// 每300毫秒创建一个新的爱心
setInterval(createHeart, 300);

// 添加照片上传功能
document.querySelector('.photo-placeholder').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '10px';
                document.querySelector('.photo-placeholder').innerHTML = '';
                document.querySelector('.photo-placeholder').appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
});

// 花瓣飘落动画
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 2 + 4) + 's';
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    petal.style.fontSize = (Math.random() * 12 + 20) + 'px';
    petal.innerHTML = `
        <svg width="32" height="32" viewBox="0 0 32 32">
            <path d="M16 2 Q30 16 16 30 Q2 16 16 2 Z" fill="#ffb6c1"/>
        </svg>`;
    document.querySelector('.petals').appendChild(petal);
    setTimeout(() => petal.remove(), 6000);
}
setInterval(createPetal, 400);

// 卡片翻页交互
const flipCard = document.querySelector('.flip-card');
const flipCardInner = document.querySelector('.flip-card-inner');
flipCard.addEventListener('click', function(e) {
    // 避免点击音乐按钮时也翻页
    if (e.target.closest('#music-toggle')) return;
    flipCard.classList.toggle('flipped');
});

// 音乐控制按钮
const bgm = document.getElementById('bgm');
const musicBtn = document.getElementById('music-toggle');
let isPlaying = true;
musicBtn.onclick = function() {
    if (isPlaying) {
        bgm.pause();
        musicBtn.textContent = '🔇';
    } else {
        bgm.play();
        musicBtn.textContent = '🔊';
    }
    isPlaying = !isPlaying;
};
// 兼容自动播放策略
window.addEventListener('click', function firstPlay() {
    bgm.play();
    window.removeEventListener('click', firstPlay);
}); 
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
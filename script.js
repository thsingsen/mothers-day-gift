// 粒子动画（爱心/花瓣）
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 18 + 16;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = (x !== undefined ? x : Math.random() * window.innerWidth) + 'px';
    particle.style.top = (y !== undefined ? y : Math.random() * window.innerHeight) + 'px';
    particle.style.opacity = Math.random() * 0.5 + 0.5;
    particle.style.position = 'absolute';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = 1;
    particle.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path d="M16 29 Q2 16 8 8 Q16 0 24 8 Q30 16 16 29 Z" fill="#ffb6c1"/>
        </svg>`;
    document.querySelector('.background-particles').appendChild(particle);
    setTimeout(() => particle.remove(), 4000);
}
setInterval(() => createParticle(), 350);

// 鼠标点击/移动时生成粒子
window.addEventListener('mousemove', e => {
    if (Math.random() < 0.15) createParticle(e.clientX, e.clientY);
});
window.addEventListener('click', e => {
    for (let i = 0; i < 6; i++) {
        setTimeout(() => createParticle(e.clientX, e.clientY), i * 40);
    }
});

// 主标题互动特效
const mainTitle = document.getElementById('mainTitle');
mainTitle.addEventListener('mouseenter', () => {
    mainTitle.classList.add('active');
});
mainTitle.addEventListener('mouseleave', () => {
    mainTitle.classList.remove('active');
});
mainTitle.addEventListener('click', () => {
    mainTitle.classList.add('active');
    setTimeout(() => mainTitle.classList.remove('active'), 600);
});

const subtitle = document.querySelector('.subtitle');
subtitle.addEventListener('mouseenter', () => {
    subtitle.classList.add('active');
});
subtitle.addEventListener('mouseleave', () => {
    subtitle.classList.remove('active');
});
subtitle.addEventListener('click', () => {
    subtitle.classList.add('active');
    setTimeout(() => subtitle.classList.remove('active'), 800);
});

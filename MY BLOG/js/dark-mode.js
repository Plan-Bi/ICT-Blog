// dark-mode.js
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode').toString());
    updateParticles();
}

// 在页面加载时检查夜间模式状态
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    initParticles();
});

// 初始化粒子动画
function initParticles() {
    const particleColor = document.body.classList.contains('dark-mode') ? '#a0aec0' : '#ffffff';
    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: particleColor },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out'
            }
        }
    });
}

// 更新粒子动画
function updateParticles() {
    if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
    }
    initParticles();
}
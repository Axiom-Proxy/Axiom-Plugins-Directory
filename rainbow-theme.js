// Note that this script is just for testing the theme manager's integratiton with the plugin manager

(function() {
    'use strict';
    
    const rainbowTheme = {
        name: 'Rainbow Dreams',
        '--color-primary': '#ff6b6b',
        '--color-secondary': '#4ecdc4',
        '--color-accent': '#45b7d1',
        '--color-success': '#96f97b',
        '--color-warning': '#feca57',
        '--color-danger': '#ff9ff3',
        '--color-background': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        '--color-surface': 'rgba(255, 255, 255, 0.1)',
        '--color-surface-hover': 'rgba(255, 255, 255, 0.15)',
        '--color-surface-active': 'rgba(255, 255, 255, 0.2)',
        '--color-text-primary': '#ffffff',
        '--color-text-secondary': '#f0f0f0',
        '--color-text-muted': '#d0d0d0',
        '--color-border': 'rgba(255, 255, 255, 0.25)',
        '--color-border-hover': 'rgba(255, 255, 255, 0.4)',
        '--glass-background': 'rgba(255, 255, 255, 0.12)',
        '--glass-border': 'rgba(255, 255, 255, 0.25)',
        '--glass-shadow': '0 8px 32px rgba(102, 126, 234, 0.37)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
            background:
                radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(69, 183, 209, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 60% 60%, rgba(150, 249, 123, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(254, 202, 87, 0.3) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);'
    };
    const result = window.axiomAPI.addTheme('rainbow', rainbowTheme);
    
    if (result === 0) {
        console.log('Rainbow theme loaded successfully!');

        document.dispatchEvent(new CustomEvent('themeAdded', {
            detail: { themeKey: 'rainbow', themeName: 'Rainbow Dreams' }
        }));
    } else {
        console.error('❌ Failed to load rainbow theme');
    }
    
})();

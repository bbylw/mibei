const CSS_CONTENT = `
:root {
    --primary-color: #ff9000;
    --background-color: #0f0f0f;
    --card-color: #1a1a1a;
    --text-color: #fff;
    --text-secondary: #aaa;
    --gradient: linear-gradient(135deg, #ff9000 0%, #ff6b00 100%);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
}

header {
    background-color: #000;
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.logo {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--text-color);
    text-decoration: none;
    letter-spacing: -1px;
}

.logo span {
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero {
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    padding: 6rem 2rem;
    text-align: center;
    margin-bottom: 4rem;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.hero-description {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.cta-button {
    display: inline-block;
    background: var(--gradient);
    color: var(--text-color);
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(255, 144, 0, 0.3);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 144, 0, 0.4);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
    color: var(--text-color);
}

.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.feature-card {
    background-color: var(--card-color);
    padding: 2rem;
    border-radius: 12px;
    transition: transform 0.3s ease;
    border: 1px solid rgba(255,255,255,0.1);
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}

.feature-card ul {
    list-style: none;
}

.feature-card li {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
}

.feature-card li:before {
    content: "→";
    color: var(--primary-color);
    margin-right: 0.5rem;
}

.info-section {
    background-color: var(--card-color);
    border-radius: 12px;
    padding: 3rem;
    margin: 4rem 0;
    border: 1px solid rgba(255,255,255,0.1);
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.info-item {
    text-align: center;
}

.info-item h4 {
    color: var(--primary-color);
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.info-item p {
    color: var(--text-secondary);
}

.regions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.region-tag {
    background-color: rgba(255,144,0,0.1);
    color: var(--primary-color);
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    font-size: 0.9rem;
    border: 1px solid rgba(255,144,0,0.2);
    transition: all 0.3s ease;
}

.region-tag:hover {
    background-color: rgba(255,144,0,0.2);
    transform: translateY(-2px);
}

.footer {
    margin-top: 4rem;
    padding: 2rem 0;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.1);
}

.warning {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.8;
}

@media (max-width: 768px) {
    .hero {
        padding: 4rem 1rem;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .container {
        padding: 0 1rem;
    }

    .info-section {
        padding: 2rem 1rem;
    }

    .feature-card {
        padding: 1.5rem;
    }
}
`;

// HTML 内容
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeHub - 免费节点分享平台</title>
    <style>${CSS_CONTENT}</style>
</head>
<body>
    <header>
        <div class="header-content">
            <div class="logo">Node<span>Hub</span></div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">高速节点分享平台</h1>
            <p class="hero-description">
                每日更新免费节点，支持多种客户端，畅游无限网络世界
            </p>
            <a href="https://www.mibei77.com" target="_blank" class="cta-button">
                立即获取节点
            </a>
        </div>
    </section>

    <div class="container">
        <h2 class="section-title">功能特性</h2>
        <div class="features">
            <div class="feature-card">
                <h3>支持的客户端</h3>
                <ul>
                    <li>V2Ray - 全平台通用</li>
                    <li>Clash - 简单易用</li>
                    <li>Shadowrocket - iOS推荐</li>
                    <li>WinXray - Windows专属</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3>节点特性</h3>
                <ul>
                    <li>支持1080P/4K视频播放</li>
                    <li>每日更新保证可用性</li>
                    <li>完全免费使用</li>
                    <li>多平台客户端支持</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3>使用方式</h3>
                <ul>
                    <li>一键导入节点数据</li>
                    <li>支持订阅链接更新</li>
                    <li>跨平台数据同步</li>
                    <li>批量导入管理</li>
                </ul>
            </div>
        </div>

        <div class="info-section">
            <h2 class="section-title">节点信息</h2>
            <div class="info-grid">
                <div class="info-item">
                    <h4>更新频率</h4>
                    <p>每日更新，75-270条节点</p>
                </div>
                <div class="info-item">
                    <h4>适用场景</h4>
                    <p>科学上网、视频观看、海外访问</p>
                </div>
            </div>
            <div class="regions">
                <span class="region-tag">美国节点</span>
                <span class="region-tag">新加坡节点</span>
                <span class="region-tag">日本节点</span>
                <span class="region-tag">香港节点</span>
                <span class="region-tag">韩国节点</span>
                <span class="region-tag">欧洲节点</span>
                <span class="region-tag">加拿大节点</span>
            </div>
        </div>

        <footer class="footer">
            <p class="warning">
                请注意：外部链接可能需要科学上网才能访问<br>
                仅供学习交流使用，请勿用于非法用途
            </p>
        </footer>
    </div>
</body>
</html>`;

// 3. Worker 处理函数
async function handleRequest(request) {
    return new Response(HTML_CONTENT, {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
}); 
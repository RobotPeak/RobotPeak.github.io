'use strict';

// 过滤器 - 在HTML渲染后注入播放器相关代码
module.exports = function(str, data) {
  const config = this.config.music_player;
  
  if (!config.enable || !config.playlist || config.playlist.length === 0) {
    return str;
  }

  // 只在页面类型为post或page时注入播放器
  if (data.layout !== 'post' && data.layout !== 'page' && data.layout !== 'index') {
    return str;
  }

  // 注入CSS样式链接
  const cssLink = '<link rel="stylesheet" href="/css/music-player.css">';
  
  // 注入JavaScript脚本
  const jsScripts = `
<script src="/js/music-player-config.js"></script>
<script src="/js/music-player.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    if (window.MusicPlayer && window.MUSIC_PLAYER_CONFIG) {
      window.musicPlayer = new MusicPlayer(window.MUSIC_PLAYER_CONFIG);
      window.musicPlayer.init();
    }
  });
</script>
  `.trim();

  // 注入播放器HTML（如果页面中还没有的话）
  let playerHtml = '';
  if (str.indexOf('id="music-player"') === -1) {
    playerHtml = this.extend.helper.get('music_player').call(this);
  }

  // 在</head>前注入CSS
  str = str.replace('</head>', cssLink + '\n</head>');
  
  // 在</body>前注入JavaScript和播放器HTML
  str = str.replace('</body>', playerHtml + '\n' + jsScripts + '\n</body>');

  return str;
};
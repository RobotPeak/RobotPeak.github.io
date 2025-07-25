'use strict';

// 辅助函数 - 用于在模板中生成播放器HTML
module.exports = function() {
  const config = this.config.music_player;
  
  if (!config.enable || !config.playlist || config.playlist.length === 0) {
    return '';
  }

  // 生成播放器HTML结构
  const playerHtml = `
<div id="music-player" class="music-player music-player-${config.position} music-player-${config.theme}">
  <div class="music-player-main">
    <!-- 最小化状态显示 -->
    <div class="music-player-mini">
      <button class="music-player-toggle" title="播放/暂停">
        <svg class="icon-play" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
        <svg class="icon-pause" viewBox="0 0 24 24" style="display: none;">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      </button>
      <div class="music-player-info">
        <div class="song-title">选择音乐</div>
        <div class="song-artist">未知艺术家</div>
      </div>
      <button class="music-player-expand" title="展开播放器">
        <svg viewBox="0 0 24 24">
          <path d="M7 14l5-5 5 5z"/>
        </svg>
      </button>
    </div>
    
    <!-- 展开状态显示 -->
    <div class="music-player-full" style="display: none;">
      <div class="music-player-header">
        <div class="music-player-info">
          <div class="song-title">选择音乐</div>
          <div class="song-artist">未知艺术家</div>
        </div>
        <button class="music-player-minimize" title="最小化播放器">
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </button>
      </div>
      
      <div class="music-player-controls">
        <button class="music-player-prev" title="上一首">
          <svg viewBox="0 0 24 24">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </button>
        <button class="music-player-toggle" title="播放/暂停">
          <svg class="icon-play" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <svg class="icon-pause" viewBox="0 0 24 24" style="display: none;">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>
        <button class="music-player-next" title="下一首">
          <svg viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </button>
        <button class="music-player-mode" title="播放模式">
          <svg class="icon-sequence" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          </svg>
          <svg class="icon-random" viewBox="0 0 24 24" style="display: none;">
            <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
          </svg>
          <svg class="icon-repeat" viewBox="0 0 24 24" style="display: none;">
            <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
          </svg>
        </button>
      </div>
      
      <div class="music-player-progress">
        <span class="current-time">0:00</span>
        <div class="progress-bar">
          <div class="progress-track">
            <div class="progress-fill"></div>
            <div class="progress-handle"></div>
          </div>
        </div>
        <span class="total-time">0:00</span>
      </div>
      
      <div class="music-player-volume">
        <svg class="volume-icon" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
        <div class="volume-bar">
          <div class="volume-track">
            <div class="volume-fill"></div>
            <div class="volume-handle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `.trim();

  return playerHtml;
};
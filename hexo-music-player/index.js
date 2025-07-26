'use strict';

// Hexo插件入口文件
module.exports = function(hexo) {
  // 插件配置默认值
  const defaultConfig = {
    enable: true,
    position: 'bottom-right',
    autoplay: false,
    volume: 0.7,
    play_mode: 'sequence',
    theme: 'dark',
    playlist: []
  };

  // 合并用户配置和默认配置
  hexo.config.music_player = Object.assign(defaultConfig, hexo.config.music_player || {});

  // 只有在启用插件时才注册相关功能
  if (hexo.config.music_player.enable) {
    // 注册生成器 - 用于生成播放器相关的静态文件
    hexo.extend.generator.register('music-player-assets', require('./lib/generator'));
    
    // 注册辅助函数 - 用于在模板中插入播放器HTML
    hexo.extend.helper.register('music_player', require('./lib/helper'));
    
    // 注册过滤器 - 用于在页面渲染后注入播放器代码
    hexo.extend.filter.register('after_render:html', require('./lib/filter'));
  }
};
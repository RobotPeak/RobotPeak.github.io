'use strict';

const path = require('path');
const fs = require('fs');

// 生成器 - 负责生成播放器的静态资源文件
module.exports = function(locals) {
  const config = this.config.music_player;
  const result = [];

  // 生成播放器JavaScript文件
  const jsPath = path.join(__dirname, '../assets/music-player.js');
  if (fs.existsSync(jsPath)) {
    result.push({
      path: 'js/music-player.js',
      data: function() {
        return fs.createReadStream(jsPath);
      }
    });
  }

  // 生成播放器CSS文件
  const cssPath = path.join(__dirname, '../assets/music-player.css');
  if (fs.existsSync(cssPath)) {
    result.push({
      path: 'css/music-player.css',
      data: function() {
        return fs.createReadStream(cssPath);
      }
    });
  }

  // 生成播放器配置文件
  result.push({
    path: 'js/music-player-config.js',
    data: function() {
      const configData = `
window.MUSIC_PLAYER_CONFIG = ${JSON.stringify(config, null, 2)};
      `.trim();
      return configData;
    }
  });

  return result;
};
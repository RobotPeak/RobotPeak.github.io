# Hexo Music Player Plugin

一个为Hexo博客系统设计的音乐播放器插件，特别针对Next主题进行了优化。

## 功能特性

- 🎵 支持多种音频格式播放
- 🎨 响应式设计，适配移动设备
- 🌙 支持深色/浅色主题
- 📱 触摸友好的用户界面
- 💾 本地存储用户设置
- 🔄 多种播放模式（顺序、随机、单曲循环）

## 安装方法

1. 将插件文件夹复制到你的Hexo博客根目录
2. 在博客的 `_config.yml` 文件中添加配置
3. 重新生成并部署博客

## 配置选项

在你的Hexo配置文件 `_config.yml` 中添加以下配置：

```yaml
music_player:
  enable: true                    # 启用插件
  position: bottom-right          # 播放器位置: bottom-right, bottom-left, top-right, top-left
  autoplay: false                 # 自动播放
  volume: 0.7                     # 默认音量 (0-1)
  play_mode: sequence             # 播放模式: sequence, random, repeat
  theme: dark                     # 主题: dark, light
  playlist:                       # 播放列表
    - title: "示例歌曲1"
      artist: "艺术家1"
      src: "/music/song1.mp3"
      cover: "/images/cover1.jpg"
    - title: "示例歌曲2"
      artist: "艺术家2"
      src: "/music/song2.mp3"
      cover: "/images/cover2.jpg"
```

## 文件结构

```
hexo-music-player/
├── index.js                 # 插件入口文件
├── lib/
│   ├── generator.js         # 静态资源生成器
│   ├── helper.js           # 模板辅助函数
│   └── filter.js           # HTML过滤器
├── assets/
│   ├── music-player.js     # 前端JavaScript
│   └── music-player.css    # 样式文件
├── templates/
│   └── player.swig         # 播放器模板
├── package.json            # 包配置文件
└── README.md              # 说明文档
```

## 开发状态

当前版本为基础框架版本，包含：
- ✅ Hexo插件注册机制
- ✅ 基本的UI结构和样式
- ✅ 配置管理系统
- ✅ 静态资源生成
- ⏳ 音频播放功能（开发中）
- ⏳ 播放列表管理（开发中）
- ⏳ 用户交互功能（开发中）

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来帮助改进这个插件。
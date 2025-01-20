// babel.config.js 예시
module.exports = {
  presets: [
    // 다른 프리셋
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          // 필요한 경우 별칭 설정
        },
      },
    ],
    // 다른 플러그인
  ],
};

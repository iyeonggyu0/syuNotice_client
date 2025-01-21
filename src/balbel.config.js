module.exports = function (api) {
  api.cache(true);

  return {
    plugins: [
      "macros",
      // 여기 다른 플러그인 추가
    ],
    presets: [
      "@babel/preset-env", // ECMAScript 최신 문법을 변환
      "@babel/preset-react", // React JSX 변환
    ],
  };
};

module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // setupTests.js 파일 경로
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", // __tests__ 디렉터리 아래의 테스트 파일
    "**/?(*.)+(spec|test).[tj]s?(x)", // .spec.js 또는 .test.js 파일
  ],
};

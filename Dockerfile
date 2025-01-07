# 1. 리액트 앱 빌드 단계
FROM node:18 AS build

WORKDIR /app

# 리액트 프로젝트 파일 복사
COPY . .

# 의존성 설치
RUN npm install

# 리액트 앱 빌드
RUN npm run build

# 2. Nginx 서버 설정 단계
FROM nginx:alpine

# Nginx 서버 포트 80 열기
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

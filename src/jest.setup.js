import "@testing-library/jest-dom"; // jest-dom을 사용하여 DOM 관련 테스트를 쉽게 작성할 수 있도록 함
import { MemoryRouter } from "react-router-dom";

global.ReactRouter = { MemoryRouter }; // MemoryRouter를 전역 변수로 설정
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

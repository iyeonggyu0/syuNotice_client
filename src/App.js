import ScrollToTop from "./hooks/scrollToTop";
import ApplyPage from "./pages/Apply/ApplyPage.js";
import ApplyPage1 from "./pages/Apply/ApplyPage_1.js";
import ApplyPage2 from "./pages/Apply/ApplyPage_2.js";
import ApplyPage3 from "./pages/Apply/ApplyPage_3.js";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./style/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route>
          {/* 환영인사 */}
          <Route path="/apply/0" element={<ApplyPage />} />

          {/* 학사공지 */}
          <Route path="/apply/1" element={<ApplyPage1 />} />
          {/* 장학공지 */}
          <Route path="/apply/2" element={<ApplyPage2 />} />
          {/* 사용자 정보 입력 */}
          <Route path="/apply/3" element={<ApplyPage3 />} />

          {/* 삭제 */}
          {/* <Route path="/refusal" element={} /> */}

          {/* 어드민 */}
          {/* <Route path="/admin" element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

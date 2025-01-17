import ScrollToTop from "./hooks/scrollToTop";
import ApplyPage from "./pages/Apply/ApplyPage.js";
import ApplyPage1 from "./pages/Apply/ApplyPage_1.js";
import ApplyPage2 from "./pages/Apply/ApplyPage_2.js";
import ApplyPage3 from "./pages/Apply/ApplyPage_3.js";
import ApplyPage4 from "./pages/Apply/ApplyPage_4.js";
import ApplyPage5 from "./pages/Apply/ApplyPage_5.js";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./style/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RefusalPage from "./pages/Refusal.js";
import AdminPage from "./pages/Admin/index.js";
import Error404 from "./pages/ErrorPage.js";
import ApplyPage6 from "./pages/Apply/ApplyPage_6.js";
import AdminLoginPage from "./pages/Admin/login.js";
import KaKaoPage from "./pages/KaKao.js";

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
          {/* 행사사공지 */}
          <Route path="/apply/3" element={<ApplyPage3 />} />
          {/* 개인키워드 설정 */}
          <Route path="/apply/4" element={<ApplyPage4 />} />
          {/* 사용자 정보 입력 */}
          <Route path="/apply/5" element={<ApplyPage5 />} />
          {/* 사용자 정보 입력 */}
          <Route path="/apply/6" element={<ApplyPage6 />} />

          {/* 삭제 */}
          <Route path="/d" element={<RefusalPage />} />

          {/* 문의 */}
          <Route path="/kakao" element={<KaKaoPage />} />

          {/* 어드민 */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

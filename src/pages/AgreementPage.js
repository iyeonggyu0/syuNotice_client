import styled from "styled-components";
import MainLayOut from "../layout";

export const AgreementPageMainStyle = styled.section`
  width: 85vw;
  max-width: 1080px;
  margin: 0 auto;

  padding: 200px;

  & > p:nth-child(1) {
    font-size: 1.75rem;
    margin-bottom: 12px;
  }

  & > p:nth-child(2) {
    color: darkgray;
  }

  & .article {
    font-size: 0.9rem;
    line-height: 250%;
    margin-top: 70px;
  }

  & .article p {
    margin-bottom: 30px;
  }

  & .article span {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const AgreementPage = () => {
  return (
    <MainLayOut>
      <AgreementPageMainStyle className="">
        <p>회원가입 약관 안내</p>
        <p>아래의 회원가입 약관은 '단체표준종합정보센터'의 회원가입 약관을 참고하여 작성됨</p>
        <div className="article">
          <p>
            <span>제 1조 (목적)</span>
            <br />이 약관은 삼육대학교 공지 안내 서비스(이하 "서비스")의 이용 조건 및 절차, 서비스 이용자의 권리, 의무 및 책임사항과 기타 필요한 사항을 규정함을
            목적으로 합니다.
          </p>

          <p>
            <span>제 2조 (서비스의 성격 및 목적)</span>
            <br />
            1. <b>서비스의 성격</b>
            <br />
            본 서비스는 삼육대학교 학생들에게 학교 공지사항을 안내하기 위해 운영됩니다.
            <br />
            2. <b>서비스 대상</b>
            <br />본 서비스는 삼육대학교 재학생을 주요 대상으로 합니다.
          </p>

          <p>
            <span>제 3조 (회원가입 및 인증)</span>
            <br />
            1. <b>회원가입 의무</b>
            <br />
            서비스를 이용하기 위해서는 회원가입이 필수입니다.
            <br />
            2. <b>회원가입 절차</b>
            <br />
            회원가입 시 휴대폰 인증 절차를 통해 본인 확인을 진행합니다.
            <br />
            3. <b>수집 정보</b>
            <br />
            회원가입 시 이름, 학번, 전화번호를 필수적으로 수집합니다.
          </p>

          <p>
            <span>제 4조 (개인정보의 수집 및 활용)</span>
            <br />
            1. <b>수집 목적</b>
            <br />
            수집된 개인정보는 서비스 운영 및 학교 공지사항 안내를 위해 활용됩니다.
            <br />
            2. <b>제 3자 제공</b>
            <br />
            서비스 운영을 위해 '문자온' 서비스에 전화번호가 제공됩니다.
            <br />
            3. <b>개인정보의 즉시 삭제</b>
            <br />
            회원탈퇴 시 회원정보는 즉시 삭제되며, 별도의 보관기간을 두지 않습니다.
          </p>

          <p>
            <span>제 5조 (서비스 이용)</span>
            <br />
            1. <b>서비스 제공 내용</b>
            <br />
            회원가입 후 매주 삼육대학교 홈페이지에 게시된 공지사항이 등록된 휴대폰 번호로 안내됩니다.
            <br />
            2. <b>게시물 및 오류 관리</b>
            <br />
            서비스 내 유저가 생성하는 게시물은 존재하지 않으며, 오류는 '카카오톡 문의하기'를 통해 접수됩니다.
          </p>

          <p>
            <span>제 6조 (이용 제한)</span>
            <br />
            1. <b>이용 제한 사유</b>
            <br />
            다음과 같은 경우 서비스 이용이 제한되거나 회원탈퇴 처리될 수 있습니다.
            <br />
            - 실 사용자 정보와 일치하지 않는 정보를 기재한 경우
            <br />
            2. <b>분쟁 해결</b>
            <br />본 서비스와 관련한 분쟁 발생 시, 서울 법원을 관할 법원으로 지정합니다.
          </p>

          <p>
            <span>제 7조 (운영 기록의 활용)</span>
            <br />
            1. <b>운영 기록 활용</b>
            <br />
            민감정보(이름, 학번, 전화번호)를 제외한 방문 인원 및 서비스 사용 인원 등의 운영 기록은 서비스 제작자의 포트폴리오로 활용될 수 있습니다.
          </p>

          <p>
            <span>제 8조 (저작권 및 기타 사항)</span>
            <br />
            1. <b>저작권 관리</b>
            <br />본 서비스는 사용자 생성 콘텐츠가 없으므로 별도의 저작권 관련 정책은 없습니다.
          </p>

          <p>
            <b>부칙</b>
            <br />
            1. 이 약관은 2025년 1월 18일부터 시행됩니다.
            <br />
            2. 약관 변경 시 사전 공지 후 적용됩니다.
          </p>
        </div>
      </AgreementPageMainStyle>
    </MainLayOut>
  );
};
export default AgreementPage;

import { useEffect, useState } from "react";
import MainLayOut from "../../layout";
import Error404 from "../ErrorPage.js";
import { decrypt } from "../../util/crypto";
import { AdminPageMainStyle } from "./style.js";
import axios from "axios";

const AdminPage = () => {
  const [admin, setAdmin] = useState(false);
  // 2. 데이터 가져오기 함수
  useEffect(() => {
    const itemStr = localStorage.getItem("adminLoginKey");

    // 키가 없으면 null 반환
    if (!itemStr) {
      return setAdmin(false);
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    // 만료 시간이 지났으면 null 반환
    if (now.getTime() > item.expiry) {
      localStorage.removeItem("adminLoginKey");
      return setAdmin(false);
    }

    if (decrypt(item.value, process.env.REACT_APP_ADMIN_HC) === process.env.REACT_APP_COOKIE) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);

  useEffect(() => {
    // 이용자 수
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/admin/user-num`)
      .then((res) => {
        if (res.status === 200) {
          setUserNum({ value: res.data.value, console: res.data.console });
        }
      })
      .catch((err) => console.error(err.data));

    // 남은 문자 수 / 이용단가
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/admin/remaining-msg`)
      .then((res) => {
        if (res.status === 200) {
          setRemainderMsg({ value: res.data.value1, console: {} });
          setMsgPrice({ value: res.data.value2, console: {} });
        }
      })
      .catch((err) => console.error(err.data));

    // 저장된 전체 공지 / 이번주 공지
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/admin/notice-num`)
      .then((res) => {
        if (res.status === 200) {
          setAllNoticeNum({ value: res.data.NoticeList.value, console: res.data.NoticeList.console });
          setWeekNoticeNum({ value: res.data.nowWeekNoticeList.value, console: res.data.nowWeekNoticeList.console });

          setNoticeAll({ value: res.data.weekNoticeList_all.value, console: res.data.weekNoticeList_all.console });
          setNotice_1({ value: res.data.weekNoticeList_1.value, console: res.data.weekNoticeList_1.console });
          setNotice_2({ value: res.data.weekNoticeList_2.value, console: res.data.weekNoticeList_2.console });
          setNotice_3({ value: res.data.weekNoticeList_3.value, console: res.data.weekNoticeList_3.console });
          setNotice_4({ value: res.data.weekNoticeList_4.value, console: res.data.weekNoticeList_4.console });
          set_notice_scholarship({ value: res.data.weekNoticeList_scholarship.value, console: res.data.weekNoticeList_scholarship.console });
          set_notice_event({ value: res.data.weekNoticeList_event.value, console: res.data.weekNoticeList_event.console });
        }
      })
      .catch((err) => console.error(err.data));

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/admin/usertag-num`)
      .then((res) => {
        if (res.status === 200) {
          setKeyWordNum({ value: res.data.value, console: res.data.console });
        }
      })
      .catch((err) => console.error(err.data));
  }, []);

  const onClickConsole = (data) => {
    console.log(decrypt(data.console, ""));
  };

  const [userNum, setUserNum] = useState({ value: 0, console: {} });

  const [remainderMsg, setRemainderMsg] = useState({ value: 0, console: {} });
  const [msgPrice, setMsgPrice] = useState({ value: 0, console: {} });

  const [keyWordNum, setKeyWordNum] = useState({ value: 0, console: {} });

  const [allNoticeNum, setAllNoticeNum] = useState({ value: 0, console: {} });
  const [weekNoticeNum, setWeekNoticeNum] = useState({ value: 0, console: {} });

  const [noticeAll, setNoticeAll] = useState({ value: 0, console: {} });
  const [notice_1, setNotice_1] = useState({ value: 0, console: {} });
  const [notice_2, setNotice_2] = useState({ value: 0, console: {} });
  const [notice_3, setNotice_3] = useState({ value: 0, console: {} });
  const [notice_4, setNotice_4] = useState({ value: 0, console: {} });

  const [notice_scholarship, set_notice_scholarship] = useState({ value: 0, console: {} });
  const [notice_event, set_notice_event] = useState({ value: 0, console: {} });

  // 메시지 발송로그
  const onClickMsgLog = async (e) => {
    e.preventDefault();
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/admin/msg-log`)
      .then((res) => console.log(res.data.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {!admin && <Error404 />}
      {admin && (
        <MainLayOut>
          <AdminPageMainStyle>
            <h1>ADMIN</h1>
            <div>
              <div>
                <p>가입자 수</p>
                <p>
                  {userNum.value} 명 <span onClick={() => onClickConsole(userNum)}>(콘솔)</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>남은 문자 메시지</p>
                <p>{remainderMsg.value} 명</p>
              </div>
              <div>
                <p>단문 문자 단가</p>
                <p>{msgPrice.value} 원</p>
              </div>
              <div>
                <p>메시지</p>
                <p>
                  <span onClick={onClickMsgLog}>발송로그</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>설정된 키워드</p>
                <p>
                  {keyWordNum.value} 건 <span onClick={() => onClickConsole(keyWordNum)}>(콘솔)</span>
                </p>
              </div>
              <div>
                <p>평균 설정 키워드</p>
                <p>{Math.round(keyWordNum.value / userNum) || 0} 건</p>
              </div>
            </div>
            <div>
              <div>
                <p>저장된 전체 공지</p>
                <p>
                  {allNoticeNum.value} 개 <span onClick={() => onClickConsole(allNoticeNum)}>(콘솔)</span>
                </p>
              </div>
              <div>
                <p>이번 주 전체 공지</p>
                <p>
                  {weekNoticeNum.value} 개 <span onClick={() => onClickConsole(weekNoticeNum)}>(콘솔)</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>학사공지</p>
                <p>
                  {noticeAll.value} <span onClick={() => onClickConsole(noticeAll)}>(콘솔)</span>
                </p>
              </div>
              <div>
                <p>학사공지 / 수업</p>
                <p>
                  {notice_1.value} <span onClick={() => onClickConsole(notice_1)}>(콘솔)</span>
                </p>
              </div>
              <div>
                <p>학사공지 / 학적</p>
                <p>
                  {notice_2.value} <span onClick={() => onClickConsole(notice_2)}>(콘솔)</span>
                </p>
              </div>
              <div>
                <p>학사공지 / 등록</p>
                <p>
                  {notice_3.value} <span onClick={() => onClickConsole(notice_3)}>(콘솔)</span>
                </p>
              </div>
              <div>
                <p>학사공지 / 채플</p>
                <p>
                  {notice_4.value} <span onClick={() => onClickConsole(notice_4)}>(콘솔)</span>
                </p>
              </div>
              <div>
                <p>장학공지</p>
                <p>
                  {notice_scholarship.value} <span onClick={() => onClickConsole(notice_scholarship)}>(콘솔)</span>
                </p>
              </div>
              <div>
                <p>행사공지</p>
                <p>
                  {notice_event.value} <span onClick={() => onClickConsole(notice_event)}>(콘솔)</span>
                </p>
              </div>
            </div>
          </AdminPageMainStyle>
        </MainLayOut>
      )}
    </div>
  );
};
export default AdminPage;

import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const { Kakao } = window;

const KaKaoshareButton = ({ data }) => {
  const url = "https://catsmbti.netlify.app/";
  const resultURL = window.location.href;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("d75b5957d8555f6affd5bec886e7b3a9");
    // 카카오초기화 = 나의 플랫폼 키
  }, []);
  const shareKaKao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 ${data.name}입니다.`,
        imageUrl: `${url}&{data.image}`,
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "테스트 하러가쉴?",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return <Button onClick={shareKaKao}>카카오톡 공유하기</Button>;
};

export default KaKaoshareButton;

import React from 'react';

import { AboutLayout, TextBox, Image } from '../styles/About';

import { AboutImage } from '../assets/images';

export default function AboutPage() {
  return (
    <AboutLayout>
      <TextBox>
        <h1>About Us</h1>
        <h3>
          이 서비스는 영국에서 시작되었습니다.
          이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.
        </h3>
        <p>
          이 서비스는 영국에서 시작되었습니다.
          이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.
          지금부터는 아무 소리나 써보려고 합니다.
          뭔가 그럴 듯하게 어바웃페이지처럼 해보려고 하는데,
          실패한 거 같습니다. 디자이너분들 존경존경 내 CSS 코드는 엉망엉망
        </p>

      </TextBox>
      <Image
        src={AboutImage}
        alt="About"
      />
    </AboutLayout>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./InformationModal.css";
import InformationToggle from "../../images/StartPage/InformationToggle.svg";
import InformationXButton from "../../images/StartPage/InformationXButton.svg";

function InformationModal({ isInformationOpen, closeInformationModal }) {
  return (
    <div
      style={{
        display: isInformationOpen ? "block" : "none",
      }}
    >
      <div className="InformationToggleOut"></div>
      <div className="InformationToggle">
        <img src={InformationToggle} alt="InformationToggle" />
        <div className="InformationXBtn" onClick={closeInformationModal}>
          <img src={InformationXButton} alt="InformationXButton" />
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Pagination]}
        className="swiper-pagination"
        style={{
          position: "absolute",
          top: 146,
          left: -1,
          right: 0,
          bottom: 0,
          width: "300px",
          height: "490px",
        }}
      >
        <SwiperSlide className="Swiper">
          <div className="Friend_T">나랑 친구하자!</div>
          <div className="Friend_C">
            MAIMU는 3월 4일부터 3월 31일까지 <br /> 새학기 친구들이 마이무와
            함께 남겨준 <br /> 나의 첫인상을 확인하는 서비스예요!
          </div>
          <div className="HowToUse_T">MAIMU는 어떻게 이용하나요?</div>
          <div className="HowToUse_C">
            <ul>
              <li>가입하고 내 프로필 설정해요</li>
              <li>
                사물함 별로 그룹을 만들고 친구들에게 링크를 <br />
                공유해요
              </li>
              <li>
                사물함 안에는 친구들이 남겨준 내 첫인상이 적<br />힌 마이무가
                들어있어요
              </li>
              <li>31일 전까지는 마이무를 확인할 수 없어요</li>
              <li>3월 4일 이후부터 마이무를 건넬 수 있습니다</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="WhatFlavor_T">MAIMU는 무슨 맛이 있나요?</div>
          <div className="WhatFlavor_C1">친구가 나에게 주고 싶은...</div>
          <div className="WhatFlavor_C2">
            <ul>
              <li>석류 - 우리 사이 당도 0~33% (수줍…)</li>
              <li>유자 - 우리 사이 당도 34~66% (데헷)</li>
              <li>매실 - 우리 사이 당도 67~99% (끼야호)</li>
            </ul>
          </div>
          <div className="WhoMade_T1">누가 만든 서비스인가요?</div>
          <div className="WhoMade_T2">@maimu.official</div>
          <div className="WhoMade_C">
            <ul>
              <li>
                MAIMU는 홍익대, 이화여대, 고려대, 세종대,
                <br /> 서울여대 학생 7명으로 구성된 대학생팀 ‘수감
                <br />
                자들(Wednesday’s Potatoes)’이 만든 서비
                <br />
                스예요
              </li>
              <li>IT 연합동아리 ‘코테이토’에서 탄생한 팀이에요</li>
            </ul>
          </div>
          <div className="Date">2023. 11. 29</div>
          <div className="MadeBy">수감자들</div>
        </SwiperSlide>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

export default InformationModal;

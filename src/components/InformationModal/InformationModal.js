import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <div className="InformationToggleOut">
        <div className="InformationToggle">
          <img src={InformationToggle} alt="InformationToggle" />
          <div className="InformationXBtn" onClick={closeInformationModal}>
            <img src={InformationXButton} alt="InformationXButton" />
          </div>
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
          position: "fixed",
          top: 176,
          left: 0,
          right: 0,
          bottom: 0,
          width: "300px",
          height: "490px",
        }}
      >
        <SwiperSlide className="Swiper">
          <div className="SwiperContainer">
            <div className="Friend_T SwiperTitle">
              나랑 친구하자!<div className="Friend_T_Underbar"></div>
            </div>
            <div className="Friend_C SwiperContent">
              MAIMU는 3월 4일부터 3월 31일까지 <br /> 새학기 친구들이 마이무와
              함께 남겨준 <br /> 나의 첫인상을 확인하는 서비스예요!
            </div>
            <div className="HowToUse_T SwiperTitle">
              MAIMU는 어떻게 이용하나요?
              <div className="HowToUse_T_Underbar"></div>
            </div>
            <div className="HowToUse_C SwiperContent">
              <ul>
                <li>가입하고 내 프로필 설정해요</li>
                <li>사물함 별로 그룹을 만들고 친구들에게 링크를 공유해요</li>
                <li>
                  사물함 안에는 친구들이 남겨준 내 첫인상이 적힌 마이무가
                  들어있어요
                </li>
                <li>31일 전까지는 마이무를 확인할 수 없어요</li>
                <li>3월 4일 이후부터 마이무를 건넬 수 있습니다</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="Swiper">
          <div className="SwiperContainer">
            <div className="WhatFlavor_T SwiperTitle">
              MAIMU는 무슨 맛이 있나요?
              <div className="WhatFlavor_T_Underbar"></div>
            </div>
            <div className="WhatFlavor_C1 SwiperContent">
              친구가 나에게 주고 싶은...
            </div>
            <div className="WhatFlavor_C2 SwiperContent">
              <ul>
                <li>석류 - 우리 사이 당도 0~33% (수줍…)</li>
                <li>유자 - 우리 사이 당도 34~66% (데헷)</li>
                <li>매실 - 우리 사이 당도 67~99% (끼야호)</li>
              </ul>
            </div>
            <div className="WhoMade_T1 SwiperTitle">
              누가 만든 서비스인가요?<div className="WhoMade_T_Underbar"></div>
            </div>
            <a
              className="InstaLink"
              href="https://www.instagram.com/maimu.official/?igsh=cm1lYWhuNTB4eTY2&utm_source=qr"
            >
              @maimu.official
            </a>
            <div className="WhoMade_C SwiperContent">
              <ul>
                <li>
                  MAIMU는 홍익대, 이화여대, 고려대, 세종대, 서울여대 학생
                  8명으로 구성된 대학생 팀 ‘수감자들(Wednesday’s Potatoes)’이
                  만든 서비스입니다.
                </li>
                <li>IT 연합동아리 ‘코테이토’에서 탄생한 팀입니다.</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

export default InformationModal;

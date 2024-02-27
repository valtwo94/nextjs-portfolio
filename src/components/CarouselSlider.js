'use client'

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const slides = [
    "https://via.placeholder.com/600x300?text=Slide+1",
    "https://via.placeholder.com/600x300?text=Slide+2",
    "https://via.placeholder.com/600x300?text=Slide+3",
];

const CarouselSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const totalSlides = slides.length;

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const startAutoPlay = () => {
        const newIntervalId = setInterval(goToNextSlide, 5000);
        setIntervalId(newIntervalId);
    };

    const stopAutoPlay = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    useEffect(() => {
        startAutoPlay(); // Start autoplay on component mount

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []); // Run effect only once on component mount

    return (
        <S.SliderContainer>
            <S.SliderContent style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <S.Slide key={index}>
                        <img src={slide} alt={`Slide ${index + 1}`} />
                    </S.Slide>
                ))}
            </S.SliderContent>
            <S.PrevButton onClick={() => { stopAutoPlay(); goToPrevSlide(); }}>이전</S.PrevButton>
            <S.NextButton onClick={() => { stopAutoPlay(); goToNextSlide(); }}>다음</S.NextButton>
        </S.SliderContainer>
    );
};

const S = {
    SliderContainer: styled.div`
    width: 100vw;
    position: relative;
    right: calc((100vw - 1024px)/2);
    overflow: hidden;
  `,

    SliderContent: styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
  `,

    Slide: styled.div`
    min-width: 100%;
    img {
      width: 100%;
      height: 480px;
    }
  `,

    PrevButton: styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: calc((100vw - 1024px) / 2);
    transform: translateY(-50%);
    padding: 12px;
    background-color: var(--floating-button-color);
    border-radius: 80px;
    z-index: 1;
    box-shadow: var(--floating-button-shadow);
  `,

    NextButton: styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    padding: 12px;
    right: calc((100vw - 1024px) / 2);
    transform: translateY(-50%);
    z-index: 1;
    background-color: var(--floating-button-color);
    border-radius: 80px;
    box-shadow: var(--floating-button-shadow);
  `,
};

export default CarouselSlider;

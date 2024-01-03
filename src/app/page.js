"use client";

import Image from "next/image";
import "../components/index.css";
import { useEffect } from "react";
import Grid from "./grid";

export default function Home() {
  useEffect(() => {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.display = 'grid';

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const boxSize = 30; 
    const numBoxesX = Math.ceil(screenWidth / boxSize);
    const numBoxesY = Math.ceil(screenHeight / boxSize);
    const totalBoxes = numBoxesX * numBoxesY; 

    gridContainer.style.gridTemplateRows = `repeat(${numBoxesY}, 30px)`;
    gridContainer.style.gridTemplateColumns = `repeat(${numBoxesX}, 30px)`;
    gridContainer.style.gap = '1px';

    function createBoxes(num) {
      for (let i = 0; i < num; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.background = 'black';
        box.style.height = boxSize;
        box.style.width = boxSize;
        box.style.border = '1px solid black';
        gridContainer.appendChild(box);
      }
    }
    
    createBoxes(totalBoxes);

    const imageSources = ['/chrome.svg', '/desktop.svg', '/mobile.svg'];
    const colours = ["#FCD34D", "#D1D5DB", "#fca5a5"];
    const animationLists = ['translateY(-10%)', 'translateY(10%)', 'translateY(10%)']

    let currentIndex = 0;
    const body = document.body;
    const h1span = document.getElementById('header-h1-span');
    const ticketButton = document.getElementById('ticket-button');
    const span = document.querySelectorAll('#span');

    const imageElement = document.getElementById('gartcod');
    const daysTimer = document.getElementById('days');
    const hoursTimer = document.getElementById('hours');
    const minutesTimer = document.getElementById('minutes');
    const secondsTimer = document.getElementById('seconds');
    const timing = document.getElementById('timing');

    function changeImage() {
      currentIndex = (currentIndex + 1) % imageSources.length;
      imageElement.src = imageSources[currentIndex];
      h1span.style.color = colours[currentIndex];
      ticketButton.style.backgroundColor = colours[currentIndex];
      span[0].style.color = colours[currentIndex];
      span[1].style.color = colours[currentIndex];
      span[3].style.color = colours[currentIndex];
      span[2].style.color = colours[currentIndex];
      span[2].style.transform = animationLists[currentIndex];
      body.style.backgroundImage = `radial-gradient(farthest-side at 50% -300%, ${colours[currentIndex]}, black)`
    }

    changeImage();
    setInterval(changeImage, 2000);


    const eventDate = new Date(new Date().getTime() + (20 * 24 * 60 * 60 * 1000)); 
    function getTimeDifference() {
      const currentDate = new Date(); 

      const difference = eventDate.getTime() - currentDate.getTime();

      return difference > 0 ? difference : 0;
    }

    function updateTimer() {
      const timeDifference = getTimeDifference();
      const seconds = Math.floor((timeDifference / 1000) % 60);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      daysTimer.innerHTML = days;
      hoursTimer.innerHTML = hours;
      minutesTimer.innerHTML = minutes;
      secondsTimer.innerHTML = seconds;
    }
    updateTimer();

    setInterval(updateTimer, 1000);

    document.addEventListener('DOMContentLoaded', function () {

      const imageElement = document.getElementsByClassName('tool');

      imageElement.classList.add('move-image');

      setTimeout(function () {
        imageElement.classList.remove('move-image');
      }, 1000); 
    });
  }, []);

  return (
    <div class="MainContainer">
      <Grid />
      <div class="tool">
        <Image src="/designer.cf165e6f.svg" alt="designer gif" width={100} height={100}/>
      </div>
      <div class="body-container">
        <div class="main-container"> 
          <div class="header">
            <h1 id="header-h1-span" class="header-h1">
              <Image class="gartcod-img" id="gartcod-img" src='/gartcod-without-bg.webp' width={90} height={90}/><span> for </span> <Image src='/chrome.svg' class="gartcod-google" id="gartcod" width={90} height={90} /> & Cloud gaming
            </h1>
          </div>
          <div class="main"><h1>Join us on the lunch of gartcod by </h1><Image src="/provoke_logo.webp" alt="provoke logo" width={50} height={100} /></div>
          <div class="footer">
            <div class="time">
              <div class="timing"><p id="days">31 </p><span id="span">DAYS</span></div>
              <div class="timing"><p id="hours">31 </p> <span id="span">HOURS</span></div>
              <div class="timing"><p id="minutes">31 </p> <span id="span">MINUTES</span></div>
              <div class="timing"><p id="seconds">31 </p> <span id="span">SECONDS</span></div>
            </div>
            <div class="ticket">
              <button id="ticket-button">Claim Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client";

import React, { useEffect } from 'react';
import "../components/index.css";

const Grid = () => {
  useEffect(() => {
    const gridContainer = document.querySelector('.grid-container');
    console.log(gridContainer)
    gridContainer.style.display = 'grid';
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const boxSize = 30; 
    const numBoxesX = Math.ceil(screenWidth / boxSize);
    const numBoxesY = Math.ceil(screenHeight / boxSize);
    const totalBoxes = numBoxesX * numBoxesY;

    gridContainer.style.gridTemplateRows = `repeat(20, 30px)`;
    gridContainer.style.gridTemplateColumns = `repeat(20, 30px)`;
    gridContainer.style.gap = '1px';

    function createBoxes(num) {
      for (let i = 0; i < num; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.background = 'black';
        box.style.height = boxSize;
        box.style.width = boxSize;
        box.style.border = 'none';
        gridContainer.appendChild(box);
      }
    }
    createBoxes(totalBoxes);
  }, []);
  return (
    <div className="grid-container"></div>
  )
}

export default Grid 
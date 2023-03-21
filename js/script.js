// Copyright (c) 2023 Lily C All rights reserved
//
// Created by: Lily C
// Created on: 03/202023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  let base = parseInt(document.getElementById('base-of-rectangle').value);
  let height = parseInt(document.getElementById('height-of-rectangle').value);

  // process
  let area = base * height / 2;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}

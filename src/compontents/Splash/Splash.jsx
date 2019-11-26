import React, { useState, useRef } from "react";
import P5Wrapper from "../P5Wrapper";

const HEIGHT_SCALE = 341;
const WIDTH_SCALE = 544;
const STROKE_WIDTH = 21;
const ANIMATION_LENGTH = 3; //seconds
const DELAY_AFTER_ANIMATION_LENGTH = 1.5; //seconds
const FADE_LENGTH = 1.5; //seconds
const isDarkMode = false; // DARK MODE window.matchMedia("(prefers-color-scheme: dark)").matches;
const LOGO_WIDTH = window.innerWidth > 400 ? 300 : window.innerWidth * 0.75;

function Splash() {
  const [shouldDisplay, setShouldDisplay] = useState(true);
  const [fadeComplete, setFadeComplete] = useState(false);

  let sketch = useRef(p5 => {
    let boxWidth;
    let time = 0;
    let scale = 1;
    // let finishing = false;
    const COMPLETE_TIME = ANIMATION_LENGTH * 60;

    p5.setup = () => {
      p5.createCanvas(LOGO_WIDTH, LOGO_WIDTH * (HEIGHT_SCALE / WIDTH_SCALE));
      p5.noStroke();
      p5.angleMode(p5.DEGREES);

      boxWidth = LOGO_WIDTH * (STROKE_WIDTH / WIDTH_SCALE);
    };

    p5.draw = () => {
      if (time <= COMPLETE_TIME + 1) time++;
      if (time === COMPLETE_TIME) {
        setTimeout(() => {
          setShouldDisplay(false);
          // finishing = true;
          setTimeout(() => {
            setFadeComplete(true);
          }, FADE_LENGTH * 1000);
        }, DELAY_AFTER_ANIMATION_LENGTH * 1000);
      }
      // if (time > COMPLETE_TIME && finishing) {
      //   scale += 0.05;
      // }
      p5.scale(scale);
      let percentComplete = time / COMPLETE_TIME;
      p5.background(isDarkMode ? 0 : 255);
      p5.fill(isDarkMode ? 255 : 0);
      drawT(percentComplete);
      drawUpsidedownT(percentComplete);
      drawSlant(percentComplete);
      drawCross(percentComplete);
    };

    const drawT = pc => {
      let { width, height } = p5;
      p5.rect(0, 0, width * ((pc * 222) / WIDTH_SCALE), boxWidth);

      let verticleHeight = height * ((pc * 301) / HEIGHT_SCALE);
      let maxVerticleHeight = height * (301 / HEIGHT_SCALE);
      p5.rect(
        width * (101 / WIDTH_SCALE),
        maxVerticleHeight - verticleHeight,
        boxWidth,
        verticleHeight
      );
      p5.rect(
        width * (101 / WIDTH_SCALE),
        height * (320 / HEIGHT_SCALE),
        boxWidth,
        boxWidth
      );
    };

    const drawUpsidedownT = pc => {
      let { width, height } = p5;

      let horizontalWidth = width * ((pc * 222) / WIDTH_SCALE);
      p5.rect(
        width - horizontalWidth,
        height * (320 / HEIGHT_SCALE),
        horizontalWidth,
        boxWidth
      );
      p5.rect(
        width * (422 / WIDTH_SCALE),
        height * (40 / HEIGHT_SCALE),
        boxWidth,
        height * ((pc * 301) / HEIGHT_SCALE)
      );
      p5.rect(width * (422 / WIDTH_SCALE), 0, boxWidth, boxWidth);
    };

    const drawSlant = pc => {
      let { width, height } = p5;
      let centerX = width / 2;
      let centerY = height / 2;

      p5.rectMode(p5.CENTER);
      p5.push();
      p5.translate(centerX, centerY);
      p5.rotate(45);
      p5.rect(0, 0, pc * LOGO_WIDTH * 0.8285, boxWidth);
      p5.pop();
      p5.rectMode(p5.CORNER);
    };

    const drawCross = pc => {
      let { width, height } = p5;
      let center = width / 2;
      let topLeftDistFromCenter = center - width * (141 / WIDTH_SCALE);
      let bottomLeftDistFromCenter = center - width * (162 / WIDTH_SCALE);
      let bottomRightDistFromCenter = width * (407 / WIDTH_SCALE) - center;
      let topRightDistFromCenter = width * (386 / WIDTH_SCALE) - center;
      p5.beginShape();
      p5.vertex(
        center - pc * topLeftDistFromCenter,
        height * (160 / HEIGHT_SCALE)
      );
      p5.vertex(
        center - pc * bottomLeftDistFromCenter,
        height * (181 / HEIGHT_SCALE)
      );
      p5.vertex(
        center + bottomRightDistFromCenter * pc,
        height * (181 / HEIGHT_SCALE)
      );
      p5.vertex(
        center + topRightDistFromCenter * pc,
        height * (160 / HEIGHT_SCALE)
      );
      p5.endShape();
    };
  });

  let fadeStyle = shouldDisplay
    ? {}
    : {
        animationDuration: `${FADE_LENGTH}s`,
        animationName: "fadeOut",
        animationFillMode: "both"
      };

  if (!fadeComplete) {
    return (
      <div
        style={{
          backgroundColor: isDarkMode ? "black" : "white",
          display: "table",
          position: "fixed",
          padding: 0,
          margin: 0,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 1,
          zIndex: 100001,
          ...fadeStyle
        }}
      >
        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
          <P5Wrapper sketch={sketch.current} />
        </div>
      </div>
    );
  }
  return null;
}

export default Splash;

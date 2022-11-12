const bgImage = document.querySelector(".bg-image");
const loadingText = document.querySelector(".loading");

let acc = 0;

const blurImage = () => {
  acc++;

  if (acc > 99) {
    clearInterval(interval);
  }

  loadingText.innerHTML = `${acc}%`;
  loadingText.style.opacity = scale(acc, 0, 100, 1, 0);
  bgImage.style.filter = `blur(${scale(acc, 0, 100, 30, 0)}px)`;
};

let interval = setInterval(blurImage, 40);

const scale = (num, in_Min, in_Max, out_Min, out_Max) => {
  return ((num - in_Min) * (out_Max - out_Min)) / (in_Max - in_Min) + out_Min;
};

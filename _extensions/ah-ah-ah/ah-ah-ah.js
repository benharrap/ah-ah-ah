window.RevealAhAhAh = function () {
  return {
    id: "RevealAhAhAh",
    init: function (deck) {

      const img = document.createElement("img");
      img.src = "ah-ah-ah.gif";
      img.id = "ah-ah-ah-img";

      const audio = document.createElement("audio");
      audio.src = "ah-ah-ah.mp3";
      audio.id = "ah-ah-ah-audio";
      audio.preload = "auto";

      document.body.appendChild(img);
      document.body.appendChild(audio);

      audio.addEventListener("ended", function () {
        img.classList.remove("ah-ah-ah-visible");
      });

      deck.addKeyBinding({ keyCode: 77, key: "M", description: "Play ah-ah-ah" }, function () {
        const maxX = window.innerWidth  - img.offsetWidth;
        const maxY = window.innerHeight - img.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        img.style.left = randomX + "px";
        img.style.top  = randomY + "px";

        audio.currentTime = 0;
        audio.play();
        img.classList.add("ah-ah-ah-visible");
      });
    },
  };
};
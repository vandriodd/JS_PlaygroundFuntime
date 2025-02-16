const startButton = document.querySelector(".start");
const finishButton = document.querySelector(".finish");

if (!startButton || !finishButton) {
  throw new Error("No se encontraron los botones");
}

startButton.addEventListener("click", async () => {
  const media = await navigator.mediaDevices.getDisplayMedia({
    video: { frameRate: { ideal: 30 } },
  });
  const mediarecorder = new MediaRecorder(media, {
    mimeType: "video/mp4",
  });
  mediarecorder.start();

  finishButton.addEventListener("click", () => {
    const [video] = media.getVideoTracks();
    video.stop();
    mediarecorder.stop();
  });

  mediarecorder.addEventListener("dataavailable", (e) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(e.data);
    link.download = "screen-recording.mp4";
    link.click();
  });
});

finishButton.addEventListener("mouseenter", (e) => {
  let relX = e.pageX - finishButton.offsetLeft;
  let relY = e.pageY - finishButton.offsetTop;

  finishButton.querySelector(".effect").style.left = `${relX}px`;
  finishButton.querySelector(".effect").style.top = `${relY}px`;
});

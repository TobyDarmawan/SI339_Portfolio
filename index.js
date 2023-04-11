const progressTracker = document.getElementById('progress-tracker');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = () => {
  const position =
    document.body.scrollTop || document.documentElement.scrollTop;
  const progress = (position / height) * 100
  progressTracker.style.width = `${progress}%`;
};
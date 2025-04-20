// components/LottieToast.js
import { Player } from '@lottiefiles/react-lottie-player';

const LottieToast = ({ animationData, message }) => (
  <div className="flex items-center gap-4">
    <Player
      autoplay
      loop={false}
      src={animationData}
      style={{ height: '60px', width: '60px' }}
    />
    <p className="text-sm font-medium">{message}</p>
  </div>
);

export default LottieToast;

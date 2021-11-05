import Lottie from 'react-lottie'
import AstronautAnimation from './astronaut.json'

export function Astronaut() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AstronautAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div>
            <Lottie 
                options={defaultOptions}
                height={380}
                width={380}
            />
        </div>
    )
}
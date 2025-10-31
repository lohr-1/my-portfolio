import Dither from "./Dither";

export default function Wallpaper() {
  return (
    <div className="wallpaper">
      <div style={{ width: '100%', height: '100vh', position: 'absolute', inset: 0 }}>
        <Dither
          waveColor={[0.36, 0.5, 0.36]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      <div className="wallpaper__title">
        <div className="wallpaper__aka">aka</div>
        <div className="wallpaper__lohr">lohr</div>
      </div>
    </div>
  );
}

import { FC } from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader: FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="canvas-load">
        <p style={{fontSize: 14, color: '#f1f1f1', fontWeight: 800, marginTop: 40}}>{progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
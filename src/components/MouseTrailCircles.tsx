import { useState, useEffect, useRef } from 'react';
import './mouse.css';

// Define interface for circle object
interface Circle {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

function MouseTrailCircles() {
  // Type the state as an array of Circle
  const [circles, setCircles] = useState<Circle[]>([]);
  // Type the ref as a number
  const lastCircleTimeRef = useRef<number>(0);

  useEffect(() => {
    // Type the event as MouseEvent
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastCircleTimeRef.current >= 1) {
        const newCircle: Circle = {
          id: now,
          x: event.clientX,
          y: event.clientY,
          createdAt: now,
        };
        setCircles((prev) => [...prev, newCircle]);
        lastCircleTimeRef.current = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setCircles((prevCircles) =>
        prevCircles.filter((circle) => now - circle.createdAt < 3000)
      );
    }, 1000); // Interval set to 1000ms as in your code

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mouse-container">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="mouse-circle"
          style={{
            left: `${circle.x - 90}px`,
            top: `${circle.y - 30}px`,
          }}
        />
      ))}
    </div>
  );
}

export default MouseTrailCircles;
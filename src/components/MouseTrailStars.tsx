import { useState, useEffect, useRef } from 'react';
import './mouse.css';

// Define interface for star object
interface Star {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

function MouseTrailStars() {
  // Type the state as an array of Star
  const [stars, setStars] = useState<Star[]>([]);
  // Type the ref as a number
  const lastStarTimeRef = useRef<number>(0);

  useEffect(() => {
    // Type the event as MouseEvent
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastStarTimeRef.current >= 1) {
        const newStar: Star = {
          id: now,
          x: event.clientX,
          y: event.clientY,
          createdAt: now,
        };
        setStars((prev) => [...prev, newStar]);
        lastStarTimeRef.current = now;
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
      setStars((prevStars) =>
        prevStars.filter((star) => now - star.createdAt < 3000)
      );
    }, 100); // Changed to 100ms for smoother removal

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="star-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="mouse-star"
          style={{
            left: `${star.x - 10}px`, // Center 20x20px star
            top: `${star.y - 10}px`,
          }}
        />
      ))}
    </div>
  );
}

export default MouseTrailStars;
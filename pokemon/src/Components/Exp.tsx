import React from 'react';

interface ExpProps {
  value: number | undefined;

}

const Exp: React.FC<ExpProps> = ({ value }) => {
  const getColor = (value: number | undefined): string => {
    if (value === undefined || value < 0 || value > 310) {
      return '#fff'; // White color for values outside the range or undefined value
    } else if (value <= 100) {
      return `rgb(${255 - Math.round((255 / 100) * value)}, 255, 0)`; // Gradual color change from white to yellowish (RGB: 255, 255, 0)
    } else if (value <= 200) {
      return `rgb(0, ${Math.round((255 / 100) * (value - 100))}, 0)`; // Gradual color change from yellowish to green (RGB: 0, 255, 0)
    } else if (value <= 270) {
      return `rgb(0, 0, ${Math.round((255 / 70) * (value - 200))})`; // Gradual color change from green to blue (RGB: 0, 0, 255)
    } else {
      return 'red'; // Red color for values greater than 270
    }
  };

  const getStyle = (value: number | undefined): React.CSSProperties => {
    const width = value !== undefined ? `${(value / 310) * 100}%` : '0%';
    const color = getColor(value);
    return {
      width,
      backgroundColor: color,
    };
  };

  return (
    <div className="Exp">
      <div className="Exp-bar" style={getStyle(value)}></div>
      <span className="Exp-text">{value}</span>
    </div>
  );
};

export default Exp;

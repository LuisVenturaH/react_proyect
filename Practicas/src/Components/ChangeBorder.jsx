import { useState } from "react";

export default function ChangeBorder({ children }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const borderStyle = {
    border: hovered ? `2px solid violet` : `2px solid white`,
    borderRadius: '16px',
    padding: '10px',
    margin: '10px',
  };

  return (
    <div
      style={borderStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </div>
  );
}

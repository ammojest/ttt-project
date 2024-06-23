import React, { MouseEventHandler } from "react";

const Square = ({
  value,
  onSquareClick,
}: {
  value: number;
  onSquareClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      onClick={onSquareClick}
      className="bg-blue-900 border-black border-2 text-white text-7xl p-5 size-32"
    >
      {value}
    </button>
  );
};

export default Square;

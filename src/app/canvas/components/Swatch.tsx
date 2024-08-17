"use client";

import React from "react";

interface SwatchProps {
  setToolType: (
    toolType: "pencil" | "line" | "rectangle" | "circle" | "eraser"
  ) => void;
  setColor: (color: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const Swatch: React.FC<SwatchProps> = ({
  setToolType,
  setColor,
  undo,
  redo,
  canUndo,
  canRedo,
}) => {
  const tools = [
    { name: "Pencil", type: "pencil" },
    { name: "Line", type: "line" },
    { name: "Rectangle", type: "rectangle" },
    { name: "Circle", type: "circle" },
    { name: "Eraser", type: "eraser" },
  ] as const;

  const colors = [
    "#000000", // Black
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
  ];

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        {tools.map((tool) => (
          <button
            key={tool.type}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => setToolType(tool.type)}
          >
            {tool.name}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        {colors.map((color) => (
          <button
            key={color}
            className="w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            style={{ backgroundColor: color }}
            onClick={() => setColor(color)}
          />
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={undo}
          disabled={!canUndo}
        >
          Undo
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={redo}
          disabled={!canRedo}
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default Swatch;

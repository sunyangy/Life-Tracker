import React from "react";
import { addDays, isBefore, isSameDay, isLeapYear } from "date-fns";

interface LifeGridProps {
  year?: number;
}

const LifeGrid = ({ year = new Date().getFullYear() }: LifeGridProps) => {
  const startDate = new Date(year, 0, 1);
  const totalDays = isLeapYear(startDate) ? 366 : 365;
  const today = new Date();

  const boxes = Array.from({ length: totalDays }, (_, i) => {
    const date = addDays(startDate, i);
    const isPast = isBefore(date, today) || isSameDay(date, today);
    return {
      date,
      isPast,
    };
  });

  return (
    <div className="my-4">
      <div className="text-center text-2xl font-bold mb-8">{year}</div>
      <div className="grid grid-cols-10 sm:grid-cols-15 md:grid-cols-20 gap-1">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border rounded-sm relative group ${
              box.isPast ? "bg-green-500" : "bg-white"
            }`}
          >
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
              {box.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeGrid;

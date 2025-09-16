import React from "react";

interface BadgeProps {
  items: { id: number; label: string }[];
}

const Badge = ({ items }: BadgeProps) => {
  return (
    <div className="flex items-center gap-2 border border-blue-200 rounded-full px-3 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <p className="text-[13px] font-bold">{item.label}</p>
          {index < items.length - 1 && (
            <div className="h-1 w-1 rounded-full bg-white" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Badge;

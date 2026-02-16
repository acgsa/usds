"use client";

import React, { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  content?: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
}

export function Tabs({ items, defaultTab }: TabsProps) {
  const [active, setActive] = useState(defaultTab || items[0]?.id);
  const activeItem = items.find((i) => i.id === active);

  return (
    <div>
      <div className="tabs">
        {items.map((item) => (
          <button
            key={item.id}
            className={`tab ${active === item.id ? "tab-active" : ""}`}
            onClick={() => setActive(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      {activeItem?.content && (
        <div style={{ padding: "var(--space-md) 0" }}>{activeItem.content}</div>
      )}
    </div>
  );
}

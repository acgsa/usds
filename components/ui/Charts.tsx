"use client";

import React, { useState, useRef, useCallback } from "react";
import { Button } from "./Button";

/* Donut chart: segments use --chart-1 through --chart-5 so they adapt to light/dark. */
export interface DonutSegment {
  label: string;
  value: number;
  colorVar: string; /* e.g. "var(--chart-1)" */
}

interface DonutChartProps {
  title: string;
  segments: DonutSegment[];
  size?: number;
}

function getSegmentIndexFromAngle(angleDeg: number, segments: DonutSegment[], total: number): number {
  let acc = 0;
  for (let i = 0; i < segments.length; i++) {
    const start = (acc / total) * 360;
    acc += segments[i].value;
    const end = (acc / total) * 360;
    if (angleDeg >= start && angleDeg < end) return i;
  }
  return 0;
}

export function DonutChart({ title, segments, size = 160 }: DonutChartProps) {
  const total = segments.reduce((s, d) => s + d.value, 0);
  const strokeWidth = Math.max(24, size * 0.2);
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = -circumference / 4; /* start at 12 o'clock */
  const segmentCircles = segments.map((seg) => {
    const length = (seg.value / total) * circumference;
    const dashArray = `${length} ${circumference - length}`;
    const dashOffset = offset;
    offset -= length;
    return { colorVar: seg.colorVar, dashArray, dashOffset };
  });

  const [hovered, setHovered] = useState<{ index: number; x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const cx = 0.5;
      const cy = 0.5;
      const dx = x - cx;
      const dy = y - cy;
      const angleRad = Math.atan2(dy, dx);
      const angleDeg = (360 + 90 - (angleRad * 180) / Math.PI) % 360;
      const index = getSegmentIndexFromAngle(angleDeg, segments, total);
      setHovered({ index, x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    [segments, total]
  );

  const handleMouseLeave = useCallback(() => setHovered(null), []);

  return (
    <div className="chart-card chart-card-donut">
      <div className="chart-card-title">{title}</div>
      <div className="chart-card-content chart-donut-wrap">
        <div
          ref={cardRef}
          style={{ position: "relative" as const, display: "inline-block" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            ref={svgRef}
            className="chart-donut"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            aria-hidden
          >
            {segmentCircles.map((s, i) => (
              <circle
                key={i}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={s.colorVar}
                strokeWidth={strokeWidth}
                strokeDasharray={s.dashArray}
                strokeDashoffset={s.dashOffset}
                strokeLinecap="butt"
              />
            ))}
          </svg>
          {hovered !== null && (
            <div
              className="chart-kpi-card"
              style={{
                left: hovered.x + 12,
                top: hovered.y + 12,
              }}
            >
              <div className="chart-kpi-card-title">{segments[hovered.index].label}</div>
              <div className="chart-kpi-card-row">
                <span
                  className="chart-kpi-card-bullet"
                  style={{ background: segments[hovered.index].colorVar }}
                />
                <span className="chart-kpi-card-label">Total</span>
                <span className="chart-kpi-card-value">
                  {segments[hovered.index].value.toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="chart-legend">
          {segments.map((seg, i) => (
            <div key={i} className="chart-legend-item">
              <span
                className="chart-legend-swatch"
                style={{ background: seg.colorVar }}
              />
              <span className="chart-legend-label">{seg.label}</span>
              <span className="chart-legend-value">
                {seg.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface BarChartItem {
  label: string;
  value: number;
}

interface BarChartProps {
  title: string;
  items: BarChartItem[];
}

export function BarChart({ title, items }: BarChartProps) {
  const max = Math.max(...items.map((d) => d.value), 1);
  const barMaxHeight = 120;
  const [hovered, setHovered] = useState<{ index: number; x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((e: React.MouseEvent, index: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setHovered({
      index,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent, index: number) => updatePosition(e, index),
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent, index: number) => {
      if (hovered?.index === index) updatePosition(e, index);
    },
    [hovered?.index, updatePosition]
  );

  const handleMouseLeave = useCallback(() => setHovered(null), []);

  return (
    <div className="chart-card chart-card-bar" ref={cardRef}>
      <div className="chart-card-title">{title}</div>
      <div className="chart-card-content chart-bar-wrap">
        <div className="chart-bars">
          {items.map((item, i) => (
            <div
              key={i}
              className="chart-bar-group"
              onMouseEnter={(e) => handleMouseEnter(e, i)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="chart-bar"
                style={{
                  height: `${(item.value / max) * barMaxHeight}px`,
                }}
              />
              <div className="chart-bar-labels">
                <span className="chart-bar-value">
                  {item.value.toLocaleString()}
                </span>
                <span className="chart-bar-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        {hovered !== null && (
          <div
            className="chart-kpi-card"
            style={{
              left: hovered.x + 12,
              top: hovered.y + 12,
            }}
          >
            <div className="chart-kpi-card-title">{items[hovered.index].label}</div>
            <div className="chart-kpi-card-row">
              <span className="chart-kpi-card-bullet" style={{ background: "var(--chart-bar)" }} />
              <span className="chart-kpi-card-label">Total</span>
              <span className="chart-kpi-card-value">
                {items[hovered.index].value.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* Small KPI card for dashboards/charts: label + trend icon, value, change text */
export interface SmallKpiCardProps {
  label: string;
  value: string | number;
  changePercent: number;
  trend: "increase" | "decrease";
}

export function SmallKpiCard({ label, value, changePercent, trend }: SmallKpiCardProps) {
  const isIncrease = trend === "increase";
  const valueStr = typeof value === "number" ? value.toLocaleString() : value;
  const changeText = `${changePercent}% ${trend}`;
  return (
    <div className="kpi-card-small">
      <div className="kpi-card-small-header">
        <span className="kpi-card-small-label">{label}</span>
        <span
          className="kpi-card-small-trend-icon"
          aria-hidden
          style={{ color: isIncrease ? "var(--color-success)" : "var(--color-error)" }}
        >
          {isIncrease ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <g transform="scale(1, -1) translate(0, -24)">
                <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </g>
            </svg>
          )}
        </span>
      </div>
      <div className="kpi-card-small-value">{valueStr}</div>
      <div
        className="kpi-card-small-change"
        style={{ color: isIncrease ? "var(--color-success)" : "var(--color-error)" }}
      >
        {changeText}
      </div>
    </div>
  );
}

/* Completion State / data tracker: horizontal segmented bar with labels and hover card */
/** Subtle texture for accessibility (distinguish without relying on color alone). */
export type CompletionSegmentTexture = "stripes" | "stripes-alt" | "dots" | "crosshatch";

export interface CompletionSegment {
  label: string;
  percent: number;
  colorVar: string;
  /** Darker color on hover (e.g. --red-400 → --red-600). If omitted, no color change. */
  hoverColorVar?: string;
  /** Optional subtle texture overlay for accessibility. */
  texture?: CompletionSegmentTexture;
}

interface CompletionTrackerProps {
  title: string;
  /** Optional description shown beneath the title, above the chart. Rendered with text-sm. */
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  segments: CompletionSegment[];
  /** Total applications; used to compute count in hover card. Default 150000. */
  totalApplications?: number;
}

export function CompletionTracker({ title, description, actionLabel = "View report", onAction, segments, totalApplications = 150000 }: CompletionTrackerProps) {
  const total = segments.reduce((s, d) => s + d.percent, 0) || 1;
  const [hovered, setHovered] = useState<{ index: number; x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const updateHover = useCallback(
    (e: React.MouseEvent, index: number) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setHovered({ index, x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    []
  );

  return (
    <div className="chart-card chart-card-tracker" ref={cardRef}>
      <div className="completion-tracker-header">
        <div className="chart-card-title" style={{ marginBottom: 0 }}>{title}</div>
        {actionLabel && (
          <Button variant="primary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
      {description && <p className="completion-tracker-desc">{description}</p>}
      <div className="completion-tracker-bar-wrap">
        <div className="completion-tracker-bar">
          {segments.map((seg, i) => (
            <div
              key={i}
              className={`completion-tracker-segment${seg.texture ? ` completion-tracker-segment--${seg.texture}` : ""}`}
              style={{
                background: hovered?.index === i && seg.hoverColorVar ? seg.hoverColorVar : seg.colorVar,
                width: `${(seg.percent / total) * 100}%`,
              }}
              onMouseEnter={(e) => updateHover(e, i)}
              onMouseMove={(e) => updateHover(e, i)}
              onMouseLeave={() => setHovered(null)}
            >
              {seg.texture && <div className="completion-tracker-segment-texture" aria-hidden />}
            </div>
          ))}
        </div>
        <div className="completion-tracker-labels">
          {segments.map((seg, i) => (
            <div
              key={i}
              className="completion-tracker-label-cell"
              style={{ width: `${(seg.percent / total) * 100}%` }}
              onMouseEnter={(e) => updateHover(e, i)}
              onMouseMove={(e) => updateHover(e, i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="completion-tracker-pct">{seg.percent}%</span>
              <span className="completion-tracker-name">{seg.label}</span>
            </div>
          ))}
        </div>
      </div>
      {hovered !== null && (() => {
        const seg = segments[hovered.index];
        const count = Math.round(totalApplications * seg.percent / 100);
        return (
          <div
            className="chart-kpi-card"
            style={{ left: hovered.x + 12, top: hovered.y + 12 }}
          >
            <div className="chart-kpi-card-title">{seg.label}</div>
            <div className="chart-kpi-card-row">
              <span
                className="chart-kpi-card-bullet"
                style={{ background: seg.colorVar }}
              />
              <span className="chart-kpi-card-value">{count.toLocaleString()} applications</span>
              <span className="chart-kpi-card-value">{seg.percent}%</span>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

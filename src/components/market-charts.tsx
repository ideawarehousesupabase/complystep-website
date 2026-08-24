import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BLUE = "#2554F0";
const GRID = "rgba(15,22,38,.06)";
const MUTED = "#5B6478";

export function PainPointsChart() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    Chart.defaults.font.family = "Inter, sans-serif";
    Chart.defaults.font.size = 11;
    Chart.defaults.color = MUTED;
    const chart = new Chart(ref.current, {
      type: "bar",
      data: {
        labels: [
          "Manual Review Hrs",
          "FCA Withdrawals Surge",
          "No In-House Legal",
          "Post-Launch Drift",
        ],
        datasets: [
          {
            data: [52.8, 97.5, 80, 64.2],
            backgroundColor: BLUE,
            borderRadius: 6,
            barPercentage: 0.55,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 } } },
          y: { grid: { color: GRID }, ticks: { callback: (v) => `${v}%` } },
        },
      },
    });
    return () => chart.destroy();
  }, []);

  return <canvas ref={ref} />;
}

export function MarketGrowthChart() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = new Chart(ref.current, {
      type: "line",
      data: {
        labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
        datasets: [
          {
            label: "Market Size ($B)",
            data: [15.8, 19.5, 24.1, 29.8, 36.7, 45.3],
            borderColor: BLUE,
            backgroundColor: "rgba(37,84,240,.08)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: BLUE,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: GRID }, ticks: { callback: (v) => `$${v}B` } },
        },
      },
    });
    return () => chart.destroy();
  }, []);

  return <canvas ref={ref} />;
}

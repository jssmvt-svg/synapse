import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { buildSaturationCurve } from "../library-data/o2-saturation";
import { useLang } from "../i18n";

const DATA = buildSaturationCurve();

export function OxygenSaturationChart() {
  const { lang } = useLang();

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={DATA} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis
            dataKey="pO2"
            label={{ value: "pO₂ (torr)", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            domain={[0, 100]}
            label={{
              value: "Saturation (%)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip formatter={(value) => `${value}%`} labelFormatter={(v) => `pO₂ = ${v} torr`} />
          <Legend />
          <ReferenceArea x1={25} x2={40} fill="#e15b6e" fillOpacity={0.08} />
          <ReferenceLine x={100} stroke="#5b6ee1" strokeDasharray="4 4" label={{ value: lang === "fr" ? "Poumons" : "Lungs", position: "top", fontSize: 11 }} />
          <ReferenceLine x={30} stroke="#e15b6e" strokeDasharray="4 4" label={{ value: lang === "fr" ? "Tissus" : "Tissues", position: "top", fontSize: 11 }} />
          <Line
            type="monotone"
            dataKey="hemoglobine"
            name={lang === "fr" ? "Hémoglobine (P₅₀ ≈ 26 torr)" : "Hemoglobin (P50 ≈ 26 torr)"}
            stroke="#5b6ee1"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="myoglobine"
            name={lang === "fr" ? "Myoglobine (P₅₀ ≈ 2 torr)" : "Myoglobin (P50 ≈ 2 torr)"}
            stroke="#f4a94e"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="hint">
        {lang === "fr"
          ? "La courbe sigmoïde de l'hémoglobine traduit sa coopérativité positive : elle se sature efficacement dans les poumons (pO₂ élevée) et relargue son O₂ dans les tissus (pO₂ basse, zone en rouge)."
          : "Hemoglobin's sigmoid curve reflects positive cooperativity: it saturates efficiently in the lungs (high pO₂) and releases O₂ in the tissues (low pO₂, red zone)."}
      </p>
    </div>
  );
}

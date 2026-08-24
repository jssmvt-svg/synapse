// Équation de Hill pour la saturation en O2, source des valeurs : Chapitre 7 —
// Hémoglobine (MedByJes / Berg, Biochemistry 9e éd.). Hb : P50 ≈ 26 torr,
// coefficient de Hill n ≈ 2,8 (coopérativité positive, courbe sigmoïde).
// Mb : P50 ≈ 2 torr, n = 1 (pas de coopérativité, courbe hyperbolique).
export function hillSaturation(pO2: number, p50: number, n: number): number {
  return Math.pow(pO2, n) / (Math.pow(p50, n) + Math.pow(pO2, n));
}

export interface SaturationPoint {
  pO2: number;
  hemoglobine: number;
  myoglobine: number;
}

const HB_P50 = 26;
const HB_HILL_N = 2.8;
const MB_P50 = 2;
const MB_HILL_N = 1;

export function buildSaturationCurve(maxPO2 = 100, points = 41): SaturationPoint[] {
  const step = maxPO2 / (points - 1);
  return Array.from({ length: points }, (_, i) => {
    const pO2 = i * step;
    return {
      pO2: Math.round(pO2 * 10) / 10,
      hemoglobine: Math.round(hillSaturation(pO2, HB_P50, HB_HILL_N) * 1000) / 10,
      myoglobine: Math.round(hillSaturation(pO2, MB_P50, MB_HILL_N) * 1000) / 10,
    };
  });
}

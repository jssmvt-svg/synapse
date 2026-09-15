export interface CountryCode {
  code: string;
  label: string;
}

// Liste volontairement courte : les pays les plus pertinents pour les
// étudiants Synapse (France, Roumanie — UMFT — et pays francophones proches)
// en tête, suivis d'une sélection plus large.
export const COUNTRY_CODES: CountryCode[] = [
  { code: "+33", label: "France (+33)" },
  { code: "+40", label: "Roumanie (+40)" },
  { code: "+32", label: "Belgique (+32)" },
  { code: "+41", label: "Suisse (+41)" },
  { code: "+352", label: "Luxembourg (+352)" },
  { code: "+1", label: "Canada / USA (+1)" },
  { code: "+212", label: "Maroc (+212)" },
  { code: "+213", label: "Algérie (+213)" },
  { code: "+216", label: "Tunisie (+216)" },
  { code: "+221", label: "Sénégal (+221)" },
  { code: "+225", label: "Côte d'Ivoire (+225)" },
  { code: "+237", label: "Cameroun (+237)" },
  { code: "+377", label: "Monaco (+377)" },
  { code: "+49", label: "Allemagne (+49)" },
  { code: "+44", label: "Royaume-Uni (+44)" },
  { code: "+34", label: "Espagne (+34)" },
  { code: "+39", label: "Italie (+39)" },
  { code: "+351", label: "Portugal (+351)" },
];

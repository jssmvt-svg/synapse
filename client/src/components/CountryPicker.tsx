import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import { countryOptions } from "../countryCodes";

/** Minuscules sans accents : « arabie », « Arabie » et « arábie » se retrouvent. */
function fold(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

interface Props {
  /** Code ISO du pays sélectionné. */
  value: string;
  onChange: (iso: string) => void;
  locale: string;
  label: string;
  placeholder: string;
  emptyText: string;
}

/**
 * Sélecteur d'indicatif avec recherche : l'étudiant tape le nom de son pays
 * (ou l'indicatif, « 966 » / « +966 ») au lieu de parcourir 226 entrées.
 */
export function CountryPicker({ value, onChange, locale, label, placeholder, emptyText }: Props) {
  const options = useMemo(() => countryOptions(locale), [locale]);
  const selected = options.find((c) => c.iso === value);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const matches = useMemo(() => {
    const q = fold(query.trim());
    if (!q) return options;
    const digits = q.replace(/^\+/, "");
    return options.filter(
      (c) => fold(c.label).includes(q) || (/^[0-9]+$/.test(digits) && c.code.slice(1).startsWith(digits)),
    );
  }, [options, query]);

  function choose(iso: string) {
    onChange(iso);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, matches.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      // Entrée choisit le pays en surbrillance au lieu d'envoyer le formulaire.
      if (open && matches[active]) {
        e.preventDefault();
        choose(matches[active].iso);
      }
    } else if (e.key === "Escape") {
      setQuery("");
      setOpen(false);
    }
  }

  return (
    <div className="country-picker">
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-label={label}
        aria-expanded={open}
        aria-controls="country-picker-list"
        autoComplete="off"
        value={open ? query : selected?.label ?? ""}
        placeholder={open ? placeholder : undefined}
        onFocus={() => {
          setQuery("");
          setActive(0);
          setOpen(true);
        }}
        onBlur={() => setOpen(false)}
        onChange={(e) => {
          setQuery(e.target.value);
          setActive(0);
          setOpen(true);
        }}
        onKeyDown={onKeyDown}
      />
      {open && (
        <ul
          id="country-picker-list"
          role="listbox"
          className="country-picker-list"
          // Le champ est dans un <label> : sans ça, le clic sur un pays redonnerait le focus au champ et rouvrirait la liste.
          onClick={(e) => e.preventDefault()}
        >
          {matches.length === 0 && <li className="country-picker-empty">{emptyText}</li>}
          {matches.map((c, i) => (
            <li
              key={c.iso}
              role="option"
              aria-selected={c.iso === value}
              className={`country-picker-option${i === active ? " is-active" : ""}`}
              // mousedown (et non click) : se déclenche avant le blur qui ferme la liste.
              onMouseDown={(e) => {
                e.preventDefault();
                choose(c.iso);
              }}
              onMouseEnter={() => setActive(i)}
            >
              {c.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

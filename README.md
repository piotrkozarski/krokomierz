# 🩵 KROKOMIERZ – prototyp modułu "Bezpieczna Rodzina"

**Cel projektu:** zbudowanie klikalnego prototypu modułu Krokomierz zgodnie ze specyfikacją LOCON  
i makietami `docs/krokomierz-makiety.html`.

---

## 📂 Struktura
- `docs/` – źródła: specyfikacja i makiety
- `prompts/` – prompty do użycia w Cursorze
- `.cursorrules` – reguły projektu dla AI
- `.cursorignore` – co AI ma ignorować
- `src/` – tu powstanie prototyp

---

## ⚙️ Jak rozpocząć w Cursorze (v2.x)
1. Otwórz tylko folder `krokomierz/`  
2. Otwórz plik `.cursorrules` (AI zacznie go czytać automatycznie)  
3. Otwórz `prompts/01_bootstrap.md` i użyj go jako pierwszego promptu  
4. Model: wybierz **GPT-5** (ikona modelu w prawym dolnym rogu)  
5. Po wygenerowaniu projektu uruchom:
   ```bash
   pnpm i && pnpm dev
   ```
---

## 🧩 Etapy pracy
| Etap | Plik promptu | Cel |
|------|---------------|------|
| 1 | `01_bootstrap.md` | Szkielet aplikacji + routing + mocki |
| 2 | `02_fill-ui.md` | Wypełnienie UI zgodnie z makietami |
| 3 | `03_interactions.md` | Logika, interakcje i modale |

---

📄 Źródła:
- `docs/LOCON-KROKOMIERZ-311025-095616.pdf`
- `docs/krokomierz-makiety.html`
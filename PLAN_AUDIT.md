# Thailand 2026 Route Fix Audit

Updated after deeper transport analysis for the June 13 and June 18 route logic.

## Main correction
The old plan mixed in an unrealistic/simple “private driver south to Chom Thong” style route. The corrected plan now uses the public-transport backbone:

Ban Rak Thai / Malee Guesthouse → Mae Hong Son Bus Terminal → Chiang Mai Arcade Bus Terminal 2 → Chang Phueak Bus Terminal → Chom Thong / Wat Phra That Si Chom Thong → Nok Chan Mee Na.

## June 13 best route
1. 06:00–06:30 — Leave Ban Rak Thai / Malee Guesthouse by hotel taxi or local songthaew.
2. 07:00–08:00 — Catch Prem Pracha van/bus from Mae Hong Son Bus Terminal to Chiang Mai Arcade Bus Terminal 2.
3. 13:00–14:30 — Move from Arcade to Chang Phueak Bus Terminal by Grab/Bolt/red songthaew.
4. Before 16:00 — Take yellow songthaew/local bus from Chang Phueak to Chom Thong / Wat Phra That Si Chom Thong.
5. Evening — Chom Thong to Nok Chan Mee Na by hotel pickup/local taxi/songthaew.

## June 18 best route
Nok Chan Mee Na → Chom Thong → Chang Phueak Bus Terminal → Mae Rim / Mon Jam.

## Practical rule
June 13 is possible only if the Mae Hong Son → Chiang Mai leg starts early. If leaving Mae Hong Son at 09:00, the Chom Thong yellow songthaew becomes risky because the listed operating window ends around 16:00.

## Files updated
- src/App.jsx
- src/data/trip.js
- src/data/regions.js
- index.html corrected back to Thailand 2026 React entry
- public/sw.js and dist/sw.js updated to cache the new build asset
- dist rebuilt successfully with Vite

# Estudio de viabilidad — Narración de secciones con VibeVoice

**Fecha:** 2026-07-09 · **Estado:** estudio previo, sin implementación
**Feature deseada:** narrar por voz las secciones del portafolio (hero, skills, about, proyectos)
**Pregunta central:** ¿es viable con VibeVoice sin incurrir en costos computacionales recurrentes?

---

## TL;DR — Recomendación

**Viable, con una condición arquitectónica: pre-generar el audio, nunca inferir en runtime.**
El contenido del portafolio es estático; el audio también puede serlo. Con pre-generación,
el costo computacional es **puntual (~$0.35–1.40 por regeneración completa en RunPod)** y el
costo recurrente es solo ancho de banda de archivos estáticos (~6–10 MB, despreciable en
Vercel/Cloudflare). El riesgo real no es el costo: es la **calidad del español** (voz
"experimental" en VibeVoice) y el **disclaimer de Microsoft** contra uso comercial sin
desarrollo adicional. De ahí el plan de validación de la §6 antes de escribir una línea
de código de la feature.

Bonus estratégico: bien ejecutada, esta feature es un **caso de estudio en sí misma** del
posicionamiento "IA lista para producción con criterio de costos" — el pipeline de
generación documentado vale tanto como la feature.

---

## 1. Qué es VibeVoice (verificado contra el repo, 2026-07-09)

Fuente: https://github.com/microsoft/VibeVoice (activo, ~50k estrellas, MIT License,
última actualización marzo 2026 — integración de VibeVoice-ASR en HF Transformers).

| Modelo | Parámetros | Capacidad | Relevancia aquí |
|---|---|---|---|
| VibeVoice-TTS-1.5B | 1.5B | Hasta 90 min de audio, 4 hablantes | **El candidato** (pre-generación) |
| VibeVoice-Realtime-0.5B | 0.5B | Streaming, ~300 ms de latencia, ~10 min | Solo si hubiera TTS dinámico (no aplica) |
| VibeVoice-ASR-7B | 7B | Transcripción 60 min/pasada | No aplica (es ASR, no TTS) |

- **Idiomas TTS:** inglés y chino de primera clase; **español entre 9 voces
  "experimentales"** (DE, FR, IT, JP, KR, NL, PL, PT, **ES**). ⚠️ Punto crítico: la mitad
  de la narración sería en español.
- **Ejecución:** GPU requerida (VRAM no documentada en el repo; reportes de comunidad
  ubican el 1.5B en el rango de una GPU de 24 GB con margen — validar en fase 0).
  Inferencia vía HF Transformers; streaming experimental en vLLM.
- **Licencia y riesgo legal/reputacional:** MIT, pero el repo advierte explícitamente el
  riesgo de deepfakes y dice **"not recommended using VibeVoice in commercial or
  real-world applications" sin desarrollo adicional**. Para un portafolio personal
  narrando texto propio con voces predeterminadas (sin clonación), el riesgo ético es
  bajo, pero el disclaimer debe citarse en el caso de estudio y pesa contra usarlo si la
  calidad no convence.

## 2. La decisión que domina el costo: pre-generación vs. runtime

El texto de las secciones cambia solo cuando se edita `src/data/` — es contenido de
build, no de request. Por tanto:

| Enfoque | Costo computacional | Complejidad | Veredicto |
|---|---|---|---|
| **Pre-generar en cada cambio de contenido** (script offline → archivos `.opus` en `public/audio/` o R2) | Puntual: minutos de GPU alquilada por regeneración | Baja: un script + un reproductor `<audio>` | ✅ **Recomendado** |
| TTS en runtime (serverless GPU / API por request) | Recurrente, por visitante; cold starts de GPU serverless | Alta: endpoint, caché, rate limiting | ❌ Injustificable para texto estático |

Nota de plataforma: **Vercel no tiene GPU** — la generación ocurre fuera (RunPod) y el
sitio solo sirve archivos. Esto encaja con el criterio ya usado en KaraHero (inferencia
local/nube evaluada por costo y viabilidad de hardware).

## 3. Estimación de costos (pre-generación)

Volumen estimado: hero + 8 skills + about (3 fases) + 10 resúmenes de proyecto
≈ 2 000–2 500 palabras por idioma ≈ **13–17 min de audio × 2 idiomas ≈ 30 min**.

- **Generación (RunPod, precios verificados 2026-07-09):** RTX A5000 24 GB $0.27/h ·
  L4 $0.39/h · RTX 4090 $0.69/h. Incluso asumiendo generación a 0.5× tiempo real +
  setup, una regeneración completa cabe en **1–2 h de pod ≈ $0.35–1.40**. Serverless
  (4090 $1.10/h facturado por segundo) es alternativa si el script se ejecuta poco.
- **Almacenamiento/tráfico:** voz mono Opus a 48–64 kbps ≈ 0.4 MB/min → **~12 MB
  totales** por los dos idiomas. Servido por Vercel/Cloudflare: gratis a esta escala.
- **Comparativa API (plan B para español):** TTS comercial (Azure/OpenAI/ElevenLabs)
  cuesta del orden de centavos a ~$1 por regeneración de este volumen — mismo orden de
  magnitud, sin GPU que administrar, con español de calidad de producción. **El costo no
  es el diferenciador entre VibeVoice y una API: lo es la calidad ES y el aprendizaje.**

## 4. Implicaciones UX / frontend (costo de página, no de cómputo)

- Reproductor por sección: `<audio preload="none">` + botón — **cero impacto en LCP**;
  el audio solo se descarga si el visitante lo pide. Nada de autoplay (bloqueado por
  navegadores y hostil al usuario).
- Accesibilidad: la narración **suma** (a11y auditiva), pero no sustituye el texto — el
  contenido sigue siendo HTML server-rendered (lo ganado en el PR #4 no se toca).
- El scroll-snap actual convive bien: un pequeño control fijo por sección.

## 5. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Español "experimental" suena artificial | Alto (mitad del contenido) | Fase 0 valida con texto real; plan B: API TTS solo para ES, VibeVoice para EN |
| Disclaimer de Microsoft (no comercial/real-world sin más desarrollo) | Medio | Uso personal no comercial + citarlo; si incomoda, plan B total con API |
| Contenido cambia y el audio queda desfasado | Medio | Script de regeneración documentado + hash del texto fuente en el nombre del archivo; check en CI que avisa si el hash no coincide |
| VRAM real del 1.5B mayor a lo esperado | Bajo | Fase 0 lo mide; A40 48 GB ($0.44/h) como respaldo |
| Peso de página | Bajo | `preload="none"`, Opus 48 kbps, un archivo por sección |

## 6. Plan de validación (fase 0 — antes de implementar)

1. **Prueba de calidad (1–2 h, ~$1):** pod RunPod con VibeVoice-TTS-1.5B; generar 3
   muestras reales: hero EN, hero ES, resumen de Verde ES. Escuchar y decidir.
2. **Medir:** VRAM pico, tiempo de generación por minuto de audio, tamaño de salida.
3. **Comparar:** las mismas 3 muestras con una API TTS (calidad ES de referencia).
4. **Criterios go/no-go:**
   - GO si el ES es natural (sin acento robótico notorio) y la regeneración completa
     cuesta < $2 y < 2 h de trabajo.
   - GO PARCIAL (híbrido EN=VibeVoice / ES=API) si solo falla el español.
   - NO-GO si ambas fallan en calidad → posponer; el Web Speech API del navegador queda
     como degradación aceptable de costo cero (calidad variable, sin control de voz).

## 7. Esbozo de implementación (solo si fase 0 da GO)

```
scripts/generate-narration.mjs   ← extrae textos de src/data, llama al backend TTS,
                                   escribe public/audio/<seccion>.<lang>.<hash>.opus
src/components/ui/narrator.tsx   ← isla client:visible: botón play/pausa por sección
src/data/narration.ts            ← manifiesto { sección → archivo, duración, hash }
```

Estimación: 1 día de pipeline + 0.5 día de UI, después de la fase 0.

---

*Estudio elaborado el 2026-07-09 con datos verificados del repo de VibeVoice y precios
públicos de RunPod del mismo día. Actualizar precios/estado del repo si pasan >3 meses.*

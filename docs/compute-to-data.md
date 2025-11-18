---
title: "Compute-to-Data (C2D)"
sidebar_label: "Compute-to-Data"
---

# Compute-to-Data (C2D)

Compute-to-Data permite ejecutar algoritmos cerca del dato sin mover los datos fuera de su dominio de control. En lugar de descargar el dataset, el algoritmo “visita” una sala de datos segura, procesa la información y solo devuelve resultados (métricas, agregados, modelos entrenados).

¿Por qué es bueno?
- Soberanía y privacidad: los datos sensibles no se exponen ni se copian.
- Cumplimiento: auditorías y trazabilidad del acceso y del cómputo.
- Reutilización: múltiples algoritmos pueden operar sobre el mismo dataset sin duplicación.

Ejemplo de uso
- Análisis de suelos en parcelas de Azores: algoritmos de confianza calculan indicadores agronómicos; únicamente los resultados salen de la sala de datos.

Seguridad y confianza
- Algoritmos de confianza: catálogo curado, firmas y verificación de procedencia.
- Auditoría de algoritmos: revisión de código/imagen, escaneo de vulnerabilidades, registros de ejecución y políticas policy.json.
- Políticas: control granular por propietario (quién, qué, cuándo, para qué) y ventanas temporales.

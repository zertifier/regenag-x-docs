---
title: "Compute-to-Data (C2D)"
sidebar_label: "Compute-to-Data"
---

# Compute-to-Data (C2D)

Compute-to-Data permet executar algoritmes a prop de la dada sense moure les dades fora del seu domini de control. En lloc de descarregar el dataset, l'algoritme “visita” una sala de dades segura, processa la informació i només retorna resultats (mètriques, agregats, models entrenats).

Per què és bo
- Sobirania i privadesa: les dades sensibles no s'exposen ni es copien.
- Compliment: auditories i traçabilitat de l'accés i del còmput.
- Reutilització: múltiples algoritmes poden operar sobre el mateix dataset sense duplicació.

Exemple
- Anàlisi de sòls en parcel·les de les Açores: algoritmes de confiança calculen indicadors agronòmics; només els resultats surten de la sala de dades.

Seguretat i confiança
- Algoritmes de confiança: catàleg curat, signatures i verificació de procedència.
- Auditoria d'algoritmes: revisió de codi/imatge, escaneig de vulnerabilitats, registres d'execució i polítiques policy.json.
- Polítiques: control granular pel propietari (qui, què, quan, propòsit) i finestres temporals.

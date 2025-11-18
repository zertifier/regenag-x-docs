---
title: "Compute-to-Data (C2D)"
sidebar_label: "Compute-to-Data"
---

# Compute-to-Data (C2D)

Compute-to-Data lets algorithms run close to the data without moving data out of its control domain. Instead of downloading the dataset, the algorithm “visits” a secure data room, processes information, and only returns results (metrics, aggregates, trained models).

Why it’s good
- Sovereignty and privacy: sensitive data is neither exposed nor copied.
- Compliance: audits and traceability of access and compute.
- Reuse: multiple algorithms can operate on the same dataset without duplication.

Example
- Soil analysis in Azores fields: trusted algorithms compute agronomic indicators; only results exit the data room.

Security and trust
- Trusted algorithms: curated catalog, signatures and provenance verification.
- Algorithm audit: code/image review, vulnerability scanning, execution logs and policy.json policies.
- Policies: owner‑controlled granularity (who, what, when, purpose) and time windows.

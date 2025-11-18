---
title: "Marketplace access policies (policy.json)"
sidebar_label: "Policies (policy.json)"
---

# Marketplace access policies (policy.json)

In data and service marketplaces (Ocean / Ocean Enterprise), each asset can define its usage rules via declarative policies (e.g., `policy.json`). These policies determine who can buy/consume, under which conditions, and with what level of access.

What you can express
- Granular access: specific fields, columns, or time ranges.
- Purpose restrictions: research, commercial use, model training, etc.
- Time windows and quotas: number of runs, duration, expiry.
- Identity and compliance requirements: minimum VCs, roles, jurisdictions.

Operational flexibility
- No redeploy changes: update rules without modifying the dataset or algorithm.
- Auditability: authorization decisions and consumptions are recorded.
- Delegation: owners can delegate policy management to a trusted manager.

In our data space, policy.json applies to datasets (read/compute) and to algorithms (who can execute and with which parameters), enabling “pay‑per‑use” and “subscription” models while respecting data sovereignty.

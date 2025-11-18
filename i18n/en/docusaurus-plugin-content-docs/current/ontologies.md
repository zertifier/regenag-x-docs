---
title: "Ontologies and Smart Data Models"
sidebar_label: "Ontologies and models"
---

# Ontologies and why they are useful

Ontologies provide agreed vocabularies to describe data in a uniform, machine‑readable way. In a data space, this eases integration across heterogeneous sources, advanced querying, and algorithm reuse.

Benefits
- Flexibility: you can add new classes/properties without breaking integrations.
- Machine readability: enables reasoning, validation, and automatic discoverability by AI agents.
- Reuse: standard models speed up onboarding of new actors and use cases.

Example: Smart Data Models (https://smartdatamodels.org) offers open schemas for domains like agri, energy, or mobility. In our environment, we combine SAREF/ETSI with Smart Data Models to represent sensors, observations, and soil properties.

Rapid extensibility
- Versioned repository of mappings and models.
- Agile inclusion of new ontologies (e.g., RML to go from CSV/JSON to RDF) and validation with SHACL.

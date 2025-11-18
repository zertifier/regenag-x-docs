---
title: "Políticas de acceso en el mercado (policy.json)"
sidebar_label: "Políticas (policy.json)"
---

# Políticas de acceso en el mercado (policy.json)

En los mercados de datos y de servicios (Ocean / Ocean Enterprise), cada activo puede definir sus reglas de uso mediante políticas declarativas (p. ej., `policy.json`). Estas políticas determinan quién puede comprar/consumir, bajo qué condiciones y con qué nivel de acceso.

Qué se puede expresar:
- Acceso granular: campos, columnas o rangos temporales específicos.
- Restricciones de propósito: investigación, uso comercial, entrenamiento de modelos, etc.
- Ventanas de tiempo y cuotas: número de ejecuciones, duración, caducidad.
- Requisitos de identidad y conformidad: VCs mínimas, roles, jurisdicciones.

Flexibilidad operativa
- Cambios sin redeploy: actualizar reglas sin modificar el dataset ni el algoritmo.
- Auditoría: las decisiones de autorización y los consumos quedan registrados.
- Delegación: el propietario puede delegar gestión de políticas a un gestor de confianza.

En nuestro dataspace, policy.json se aplica tanto a datasets (lectura/compute) como a algoritmos (quién puede ejecutar y con qué parámetros), habilitando modelos de negocio “pago por uso” y “suscripción” respetando la soberanía del dato.

---
title: "Interoperabilidad de espacios de datos agroalimentarios"
sidebar_label: "Historia de éxito en interoperabilidad"
---

# Historias de éxito: Interoperabilidad

Esta historia de éxito en el sector porcino explora las oportunidades de intercambio de datos que ofrecen los espacios de datos, especialmente en lo que respecta a cómo se podrían reducir las barreras de intercambio de datos garantizando que los originadores de datos mantengan el control de sus datos. Por lo tanto, la implementación del espacio de datos se basa en el ecosistema Gaia-X Pontus-X, utilizando una infraestructura basada en Web3 y blockchain que proporciona Soberanía de Datos por Diseño. Además, como Pontus-X se basa en Gaia-X, sus bloques de construcción se utilizan para facilitar la federación del espacio de datos, especialmente la Gaia-X Digital Clearing House (GXDCH). Concretamente:

- Todos los participantes se identifican utilizando autodescripciones validadas por el servicio de Cumplimiento GXDCH, que se basa en el marco de confianza proporcionado por el Registro GXDCH. Además, el servicio GXDCH Notary se utiliza para generar una Credencial Verificable con el número de registro legal para todos los participantes. Las autodescripciones conformes para los participantes son:
  - Universitat de Lleida (UdL).
  - Centre of Swine Studies of Catalonia (CEP).
- Los conjuntos de datos y los servicios disponibles a través del espacio de datos también presentan autodescripciones, que también son validadas por GXDCH Cumplimiento, por ejemplo:
  - Servicio de Análisis de Datos Exploratorios.
- Las autodescripciones de conjuntos de datos y servicios, después de que se haya comprobado el cumplimiento, se anuncian a través del GXDCH Credentials Event Service (CES) para que puedan incluirse en catálogos federados. Por ejemplo: https://ces-development.lab.gaia-x.eu/credentials-events/0b041d31-e306-4a54-96d1-a4f9ef818877

El caso de uso está a cargo de la Universitat de Lleida (UdL) en cooperación con el Centre of Swine Studies of Catalonia (CEP), una granja porcina experimental gestionada por un consorcio formado por la Diputació de Lleida, el Consejo Regional de La Noguera, el Ayuntamiento de Torrelameu y la Universitat de Lleida. El papel del CEP es principalmente como originador de datos, dispuesto a compartir a través del espacio de datos los datos generados como resultado de los diferentes experimentos realizados en la granja porcina. Para el CEP, es crucial que puedan mantener el control de los datos que aportan, especialmente cuando es generado por terceros como fabricantes de máquinas de alimentación automática probando sus productos en el CEP.

Además, los mecanismos de monetización proporcionados por Pontus-X se están probando para evaluar diferentes mecanismos de incentivos que hacen que el caso de uso sea sostenible más allá de la fase actual de prueba de concepto.

Actualmente, se ofrecen dos servicios, basados en datos proporcionados por CEP. Primero, basado en imágenes de videovigilancia de uno de los corrales del CEP, un algoritmo de evaluación del bienestar animal realiza la segmentación y el seguimiento automático de imágenes para identificar y rastrear los movimientos de los cerdos. Además, también es posible monitorear las visitas de los cerdos a áreas de interés definidas como la máquina de alimentación automática o el cuenco del bebedero. Esto permite la generación automática de métricas que pueden usarse para la evaluación del bienestar animal.

La soberanía de los datos está garantizada por diseño a través de una Sala de Datos implementada usando "Compute-to-Data". El algoritmo visita la secuencia de imágenes dentro de la sala de datos, donde se analizan, y solo las métricas calculadas salen de la sala. En consecuencia, no hay fuga de ninguna imagen desde dentro de la granja. Simplemente se copian a la sala de datos y se destruyen después del cálculo sin salir de ella. Un conjunto de datos de muestra, que tiene el consentimiento del CEP para ser "visitado" por el algoritmo de evaluación del bienestar, está disponible en línea.

El segundo servicio apoya el enfoque "Pago por uso" al compartir datos a través de un espacio de datos. En lugar de requerir que los editores integren los datos basados en esquemas existentes, lo que causa una sobrecarga inicial significativa, el paradigma de pago por uso favorece un enfoque incremental. De esta manera, se reducen las barreras de entrada y se facilita el intercambio de datos.

Los datos se publican en forma tabular, por ejemplo, los generados por las máquinas de alimentación automática del CEP. La integración semántica es proporcionada por un algoritmo que implementa RML, una extensión del estándar R2RML W3C, que además de mapear desde bases de datos relacionales a datos semánticos RDF, también proporciona mapeos desde fuentes de datos CSV, TSV, XML y JSON a RDF.

Además, la soberanía de los datos está garantizada por diseño a través de la Sala de Datos. Los datos mapeados no salen de la sala, se procesan y luego se almacenan en un Gráfico de Conocimiento que permanece dentro de la sala. De esta manera, permanece bajo el control del originador de datos, el Centre of Swine Studies of Catalonia (CEP).

Más tarde, el CEP puede decidir otorgar acceso a algoritmos de confianza para visitar la Sala de Datos y cortar el Gráfico de Conocimiento para extraer los datos semánticamente integrados relevantes para sus cálculos. También en este caso, la soberanía de los datos está garantizada ya que solo los resultados de la computación, como las agregaciones o los modelos entrenados con IA, pueden salir de la sala, no los datos originales o subconjuntos de los mismos.

Actualmente, el CEP puede compartir directamente sus datos tabulares existentes sobre peso diario de cerdos y datos de máquinas de alimentación automática. Estos datos permanecen bajo su control, ya que el CEP puede decidir qué algoritmos pueden visitarlo en la Sala de Datos. Por ejemplo, un algoritmo de análisis de datos exploratorios para construir resúmenes de los datos.

Además, el algoritmo RML Mapper proporciona mapeos para los formatos de datos de peso diario y máquina de alimentación automática del CEP que hacen posible seguir el enfoque incremental y por niveles propuesto por el paradigma de pago por uso. Mapea este tipo de datos CSV a datos semánticos RDF basados en vocabularios y ontologías bien establecidas que facilitan la integración de datos, incluso entre casos de uso y sectores de actividad.

El mapeo implementado por este algoritmo genera datos RDF basados en la ontología de referencia de aplicaciones inteligentes (SAREF), un vocabulario compatible con el European Telecommunications Standards Institute (ETSI) que facilita la integración de datos en el dominio de las aplicaciones inteligentes.

Por ejemplo, para los datos de peso diario de cerdos:

| ID de animal | Fecha       | Peso (g) |
|--------------|-------------|----------|
| 982091062894196 | 2021-03-16 | 16300    |

Y los datos de la máquina de alimentación automática:

| Corral | ID de animal   | Fecha       | Hora (s) | Duración | Alimentación (g) | Peso (g) |
|--------|-----------------|-------------|----------|----------|------------------|----------|
| 4      | 982091062894196 | 2021-03-17 | 10:46    | 50       | 14               | 16500    |

El mapeo RML genera el gráfico de datos semánticos RDF que integra ambas fuentes de datos.

## Notas al pie

1. https://compliance.lab.gaia-x.eu
2. https://compliance.lab.gaia-x.eu/development/docs
3. https://registry.lab.gaia-x.eu/development/docs
4. https://registrationnumber.notary.lab.gaia-x.eu/development/docs
5. https://ces-development.lab.gaia-x.eu/q/swagger-ui/
6. [en línea]
7. [en línea]
8. [en línea]

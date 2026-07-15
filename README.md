# Bangkok Fire Response and Inspection Prioritization

An uncertainty-aware spatial decision-system prototype for studying
fire-response accessibility and inspection-priority patterns in Bangkok.

## Project status

Repository initialization and data-source audit.

## Intended use

This project supports exploratory research and portfolio demonstration.
It is not an operational fire-risk assessment, regulatory inspection system,
or prediction of whether an individual property will experience a fire.

## Initial research question

Which areas of Bangkok combine:

- high public exposure
- concentrations of relevant establishments
- historical fire incidence
- constrained road accessibility
- longer estimated access from fire stations
- incomplete or uncertain evidence?

## Planned system

1. Reproducible spatial-data ingestion
2. PostGIS geospatial database
3. Descriptive incident and exposure analysis
4. Road-network accessibility model
5. Transparent prioritization model
6. Uncertainty and missing-data assessment
7. Interactive web map
8. Retrospective case studies

## Technology

- Python
- FastAPI
- PostgreSQL/PostGIS
- Vite
- TypeScript
- MapLibre GL JS
- Docker Compose
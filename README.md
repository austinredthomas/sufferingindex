# Suffering Index Lite

A simple web app that visualizes data related to human suffering so we can better understand where the world needs help.

## Features

- Flask backend serving structured data via REST API
- Simple frontend to visualize global/regional suffering indicators
- Fully containerized via Docker and Docker Compose
- CI/CD pipeline using GitHub Actions
- (Planned) Logging & monitoring with CloudWatch or Prometheus/Grafana

## Sample Dataset

Initial dataset:  
Underlying Cause of Death, Homicide, 2023 (Source: [CDC](https://wonder.cdc.gov))

## Tech Stack

| Component        | Tech                                |
|------------------|-------------------------------------|
| Backend          | Flask                               |
| Frontend         | React                               |
| Containerization | Docker, Docker Compose              |
| CI/CD            | GitHub Actions -> Docker Hub        |
| Cloud Provider   | Digital Ocean Droplet               |
| Monitoring       | Prometheus, Grafana                 |

## Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/austinredthomas/sufferingindex.git
cd sufferingindex
docker compose -f docker-compose.prod.yml up --build
```

The backend will be available at http://localhost:5000/data
The frontend at http://localhost:3000

## Deployment

This app is deployed via GitHub Actions to Docker Hub.

## Monitoring

Coming soon:
Basic request logging and performance metrics exposed to [Grafana / Prometheus].

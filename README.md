# Suffering Index Lite

A simple web app that visualizes data related to human suffering – mortality rates, violence, or poverty – so we can better understand where the world hurts the most.

This project exists to practice modern DevOps workflows while working on something with meaning.

## Features

- Flask backend serving structured data via REST API
- Simple frontend to visualize global/regional suffering indicators
- Fully containerized via Docker and Docker Compose
- (Planned) CI/CD pipeline using GitHub Actions
- (Planned) Infrastructure provisioned with Terraform (AWS)
- (Planned) Logging & monitoring with CloudWatch or Prometheus/Grafana

## Sample Dataset

Initial dataset:  
Underlying Cause of Death, Homicide, 2023 (Source: [CDC](https://wonder.cdc.gov))

More datasets planned:
- Infant mortality
- Overdose deaths by US state
- Global poverty rates

## Tech Stack

| Component        | Tech                                |
|------------------|-------------------------------------|
| Backend          | Flask                               |
| Frontend         | React                               |
| Containerization | Docker, Docker Compose              |
| CI/CD            | GitHub Actions -> Docker Hub        |
| Infra-as-Code    | Terraform                           |
| Cloud Provider   | AWS (EC2, S3, etc.)                 |
| Monitoring       | CloudWatch, Prometheus, Grafana     |

## Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/yourusername/suffering-index.git
cd suffering-index
docker-compose up --build
```

The backend will be available at http://localhost:5000/data
The frontend at http://localhost:3000

## Deployment

This app is deployed via GitHub Actions to Docker Hub.

## Monitoring

Coming soon:
Basic request logging and performance metrics exposed to [CloudWatch / Prometheus].

## Learning Goals

This project was created to practice:

    CI/CD pipelines

    Secure deployment and secrets management

    Observability and logging

## License

MIT License.

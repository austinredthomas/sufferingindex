# Suffering Index Lite

A simple web app that visualizes data related to human suffering – mortality rates, violence, or poverty – so we can better understand where the world hurts the most.

This project exists to practice modern DevOps workflows while working on something with meaning.

## ✨ Features

- Flask (or FastAPI) backend serving structured data via REST API
- Simple frontend to visualize global/regional suffering indicators
- Fully containerized via Docker and Docker Compose
- CI/CD pipeline using GitHub Actions
- Infrastructure provisioned with Terraform (AWS)
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
| Backend          | Flask or FastAPI                    |
| Frontend         | HTML/CSS + JS or React              |
| Containerization | Docker, Docker Compose              |
| CI/CD            | GitHub Actions                      |
| Infra-as-Code    | Terraform                           |
| Cloud Provider   | AWS (EC2, S3, etc.)                 |
| Monitoring       | CloudWatch, Prometheus, Grafana     |

## Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/yourusername/suffering-index-lite.git
cd suffering-index-lite
docker-compose up --build
```

The backend will be available at http://localhost:5000/data
The frontend at http://localhost:3000 (if using React)

## Deployment

This app is deployed via GitHub Actions to [Render/EC2/other].

To deploy your own version:

```bash
# Deploy infrastructure
terraform init
terraform apply

# Push changes to main
git push origin main
```

## Monitoring

Coming soon:
Basic request logging and performance metrics exposed to [CloudWatch / Prometheus].

## Learning Goals

This project was created to practice:

    Infrastructure-as-code with Terraform

    CI/CD pipelines

    Secure deployment and secrets management

    Observability and logging

    Building with purpose

## Contributing

Open to suggestions for new datasets or better infra patterns. Feel free to fork and PR!

## License

MIT License.

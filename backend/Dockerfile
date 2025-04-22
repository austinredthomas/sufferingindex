# Use official Python slim image
FROM python:3.11-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app
COPY . .

# Expose port (Flask default is 5000)
EXPOSE 5000

# Run your Flask app
CMD ["python", "app.py"]

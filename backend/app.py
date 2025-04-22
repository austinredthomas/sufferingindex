from flask import Flask, jsonify, send_from_directory
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/data")
def get_data():
    with open("data/mortality_data.json") as f:
        data = json.load(f)
    return jsonify(data)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
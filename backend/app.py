from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS so frontend can call it

@app.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.get_json()
    text = data.get('text', '')
    encrypted = ''.join([chr(ord(char) + 3) for char in text])
    return jsonify({'result': encrypted})

@app.route('/decrypt', methods=['POST'])
def decrypt():
    data = request.get_json()
    text = data.get('text', '')
    decrypted = ''.join([chr(ord(char) - 3) for char in text])
    return jsonify({'result': decrypted})

if __name__ == '__main__':
    app.run(debug=True)

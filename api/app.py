from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # REMOVE ME

@app.route('/foo')
def foo():
  return {'msg': 'foo'}


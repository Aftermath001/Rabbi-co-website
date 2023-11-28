from flask import Flask,jsonify, request, session
from flask_pymongo import PyMongo
import bcrypt
import jwt 
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS, cross_origin

app = Flask(__name__)
jwt=JWTManager(app)
CORS(app)

app.config ['MONGO_URI'] = 'mongodb+srv://dbAdams:Alvinasiachi@29@cluster0.ei6ajnn.mongodb.net/?retryWrites=true&w=majority'
mongo = PyMongo(app)

app.secret_key = 'secret key'
app.config['JWT_SECRET_KEY'] = 'this-is-secret-key'


@app.route("/")
def hello_world():
    return 'Hello World'


if __name__ == '__main__':
    app.run(debug=True)
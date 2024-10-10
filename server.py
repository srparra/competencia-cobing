from flask import Flask, render_template, jsonify
from time import strftime

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', time="00:00:00")  # Valor inicial para la hora  

@app.route('/current_time')
def current_time():
    current_time = strftime("%H:%M:%S")  # Obtiene la hora actual
    return jsonify({"time": current_time})# Devuelve la hora en formato JSON
   


if __name__ == '__main__':
    app.run(debug=True)
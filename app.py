from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

# Lista de nombres de participantes
participantes = ["Nombre1", "Nombre2", "Nombre3"]  # Agrega más nombres según sea necesario

@app.route('/')
def index():
    return render_template('index.html', participantes=participantes)

@app.route('/seleccionar_participante', methods=['POST'])
def seleccionar_participante():
    nombre_participante = request.form['nombre']
    
    if nombre_participante:
        participante_seleccionado = random.choice(participantes)
        participantes.remove(participante_seleccionado)
        
        return jsonify({'nombre_participante': nombre_participante, 'participante_seleccionado': participante_seleccionado})
    else:
        return jsonify({'error': 'Por favor, ingrese un nombre de participante.'})

if __name__ == '__main__':
    app.run(debug=True)


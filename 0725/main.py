from flask import Flask, request, url_for, redirect, render_template, jsonify

from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['JSON_AS_ASII'] = False
todos = [
    {"id": 1, "task": "吃飯", "completed": False},
    {"id": 2, "task": "睡覺", "completed": False}
]


@app.route('/')
def index():
    return render_template("todo.html")


@app.route('/todos', methods=['GET'])
def get_todos():
    response = jsonify(todos)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/todos', methods=['POST'])
def creat_todo():
    print("get new Todo")
    data = request.form['newTask']
    print(data)
    todo = {"id": len(todos) + 1, "task": data, "completed": False}
    todos.append(todo)
    return redirect(url_for('index'))


@app.route('/todos/<int:todo_id>', methods=['PUT'])
def update_todo(todo_id):
    data = request.form['updateTask']
    todo = next((todo for todo in todos if todo['id'] == todo_id))
    if todo:
        todo['task'] = data
    print('update')
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(port=5500)

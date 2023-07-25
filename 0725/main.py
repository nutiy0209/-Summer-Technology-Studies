# message = input('嗨')
# print(message)
#
# age = int(input("輸入年齡"))
# if age <= 15:
#     print('FBI')
# else:
#     print('老人')
#
# x = 5
# while x >= 0:
#     print(x)
#     x -= 1
#
#
# class Car:
#     def __init__(self, color, seat):
#         self.color = color
#         self.seat = seat
#
#     def drive(self):
#         print(f"my car is {self.color} and {self.seat}")
#

# def count_vowels(input_string):
#     vowels = "aeiouAEIOU"
#     vowel_count = 0
#
#     for char in input_string:
#         if char in vowels:
#             vowel_count += 1
#
#     return vowel_count
#
#
# user_input = input("請輸入一個字串：")
# result = count_vowels(user_input)
# print("該字串中的母音數量為：", result)

from flask import Flask
import json

from flask_cors import CORS

app = Flask(__name__)
CORS(app)
todo = [
    {"id": 1, "task": "吃飯", "completed": False},
    {"id": 2, "task": "睡覺", "completed": False}
]


@app.route("/")
def hello():
    return "hello world"


@app.route('/todo', methods=['GET'])
def get_todo():
    json_todo = json.dumps(todo, ensure_ascii=False).encode('utf8')
    response = app.response_class(json_todo, content_type='application/json; charset=utf-8')
    return response


if __name__ == '__main__':
    app.run(port=5500)

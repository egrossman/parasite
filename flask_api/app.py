import os
from flask import Flask, jsonify, request
import openai
from utils import *


app = Flask(__name__)
prefix = "what are the most important html elements along with element ID to highlight to complete the task:"


@app.route('/analyze_local', methods=['GET'])
def analyze_local():
    data = read_file()
    data = extract_interactive_elements(data)

    print("data: ", data)

    prompt = f"{prefix} book a flight"

    # model = openai(temperature=5, model_name="text-davinci-003")
    openai.api_key = os.environ["OPENAI_API_KEY"]
    resp = openai.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt=f"Website code: {data}\n{prompt}",
        # prompt = "how afd you doing?",
        temperature=0,
        max_tokens=1000,
    )

    # print(resp)
    response_text = resp.choices[0].text if resp else ""

    response_data = {
        'elements': parse_gpt_response(response_text)
    }
    return jsonify(response_data)
    # return ""


@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    url = data.get('url')
    task = data.get('prompt')

    html_content = extract_interactive_elements(get_html(url))
    prompt = f"{prefix}: {task}"



    openai.api_key = os.environ["OPENAI_API_KEY"]
    resp = openai.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt=f"Website code: {html_content}\n{prompt}",
        # prompt = "how afd you doing?",
        temperature=0,
        max_tokens=1000,
    )

    # print(resp)
    response_text = resp.choices[0].text if resp else ""

    response_data = {
        'elements': parse_gpt_response(response_text)
    }
    return jsonify(response_data)

if __name__ == '__main__':
    # configure()
    app.run(debug=True)

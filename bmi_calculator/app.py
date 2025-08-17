from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def bmi_calculator():
    bmi_result = None
    if request.method == 'POST':
        weight = float(request.form['weight'])
        height_cm = float(request.form['height'])
        height_m = height_cm / 100  # convert cm to meters
        bmi_result = round(weight / (height_m ** 2), 2)
    return render_template('index.html', bmi=bmi_result)

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask,request
app = Flask(__name__)
@app.route('/method', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        data = request.form['name']
        return f"Hello, {data}!"
    return '''
        <form method="post">
            Name: <input type="text" name="name">
            <input type="submit" value="Submit">
        </form>
    '''
app.run(debug=True)



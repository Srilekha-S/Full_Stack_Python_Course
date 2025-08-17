from flask import Flask, render_template, request
app = Flask(__name__)
@app.route('/',methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        # Here you would typically process the form data, e.g., save it to a database or send an email
        return f"Thank you {name}, your message has been received!"
    return render_template('form.html')
if __name__ == '__main__':
    app.run(debug=True)
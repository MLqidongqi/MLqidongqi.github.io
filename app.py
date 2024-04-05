from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# 假设公告内容存储在这个变量中
announcement = "这里是公告内容"

@app.route('/')
def index():
    return render_template('index.html', announcement=announcement)

@app.route('/edit', methods=['GET', 'POST'])
def edit_announcement():
    global announcement
    if request.method == 'POST':
        announcement = request.form['announcement']
        return redirect(url_for('index'))
    return render_template('edit_announcement.html')

if __name__ == '__main__':
    app.run(debug=True)

import os
import json
import sys

from flask import request
from flask import render_template
from flask import jsonify
import sendgrid
from sendgrid.helpers.mail import *

from app import app


#support CORS
@app.after_request
def add_crossdomain_header(resp):
    resp.headers['Access-Control-Allow-Origin'] = "*"
    resp.headers['Access-Control-Allow-Methods'] = "POST, GET, OPTIONS, PUT, DELETE, PATCH"
    resp.headers['Access-Control-Allow-Headers'] = "origin, content-type, accept, x-requested-with"

    # without this jason's heroku local buffers forever
    sys.stdout.flush()

    return resp


@app.route("/<path:page>")
@app.route("/")
def index_endpoint(path="index", page=""):
    return render_template(
        'index.html'
    )


@app.route("/feedback", methods=['POST'])
def feedback_endpoint():
    # set content
    data = json.loads(request.data.decode())
    content = Content(
        "text/plain",
        "Email: {} \nProject ID: {} \nIssue: {}".format(data["email"], data["project_id"], data["issue"])
    )
    sg = sendgrid.SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))
    from_email = Email("noreply@citeas.org")
    to_email = To(os.environ.get('FEEDBACK_EMAIL'))
    subject = "CiteAs API Feedback"
    mail = Mail(from_email, to_email, subject, content)
    response = sg.client.mail.send.post(request_body=mail.get())

    if response.status_code == 202:
        return jsonify(success=True)
    else:
        return jsonify('Something went wrong'), 400


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5010))
    app.run(host='0.0.0.0', port=port, debug=True, threaded=True)


















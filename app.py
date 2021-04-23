import os
from flask import Flask
import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration

# error reporting with sentry
sentry_sdk.init(
    dsn=os.environ.get('SENTRY_DSN'),
    integrations=[FlaskIntegration()]
)

app = Flask(__name__)

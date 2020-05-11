Installation and Usage
=====================

This is the front-end application for displaying citations
 built by the CiteAs API. Depending on your use case, 
[installing the back-end API](https://github.com/ourresearch/citeas-api/blob/master/installation.md) may be enough,
as results will appear in JSON format.

### To install the front-end web application:

Install the back-end API using instructions found [here](https://github.com/ourresearch/citeas-api/blob/master/installation.md). 
The app should be running on your local machine with address [http://0.0.0.0:5000]().

Clone the repo into a folder of your choice:

`$ git clone https://github.com/ourresearch/citeas-webapp.git`

Move into the folder

`$ cd citeas-webapp`

Create a virtual environment with Python 2.7:

`$ virtualenv --python=python2.7 venv`

Note: cite-as web app currently runs on Python 2.7.15, which can be downloaded and installed here. Virtualenv can be installed with pip install virtualenv.

Activate the virtual environment:

`$ source venv/bin/activate`

Install the dependencies:

`$ pip install -r requirements.txt`

Install [NPM](https://www.npmjs.com/get-npm) and [grunt](https://gruntjs.com/installing-grunt) if 
you do not already have them on your machine. These tools are used to manage the javascript dependencies.

The web app looks for the regular CiteAs API address at api.citeas.org. We need to change this to our local API instance.
Search and replace every instance of 'http://api.citeas.org' with 'http://0.0.0.0:5000' in these files:
```
static/src/app.js
static/src/cite-page.js
static/src/cite-page.tpl.html
static/src/api.tpl.html
```
Build the updated javascript app by moving into the static folder and running:
```
$ npm install grunt-html2js
$ grunt html2js concat
```
In a separate terminal window, start the app with:

`$ python views.py`

Open the app at the address [http://0.0.0.0:5010](). You can now view citations.
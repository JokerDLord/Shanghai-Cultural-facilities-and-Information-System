"""
The WebGIS application package.
"""

from flask import Flask
app = Flask(__name__)

import webgis.view1
import webgis.view2

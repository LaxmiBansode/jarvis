import os
import eel
from engine.features import *
eel.init("www")
from engine.command import * 

playAssistantSound()
os.system('start msedge.exe --app="http://localhost:8000/index.html " ')

eel.start('index.html' , mode=None , host='localhost', block=True)



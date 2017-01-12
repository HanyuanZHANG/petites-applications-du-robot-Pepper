import time
import sys
import qi
from requests.exceptions import ConnectionError
import json
import requests
import HTMLParser
import random
import socket
import time

class serveur(object):
    def __init__(self):
        self.appli = qi.Application(sys.argv)
        self.appli.start()
        self.session = self.appli.session
        
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.bind(('', 15555))
        
        self.logger = qi.Logger("pythonDialog")
        self.logger.info("ssssssssssssssss")
       
        self.mem = self.session.service("ALMemory")
        
        self.asd = self.session.service("ALSoundDetection")
        self.asd.setParameter("Sensitivity", 0.0)
        
        self.asr = self.session.service("ALSpeechRecognition")
        self.asr.setAudioExpression(False)
        self.asr.pause(True)
        
        
        #detect si parole est fini
        self.subscriberSpeech=self.mem.subscriber("ALTextToSpeech/TextDone")
        self.subscriberSpeech.signal.connect(self.speechFinished)
        
        self.subscriberSpeech=self.mem.subscriber("PythonDialog/ActionFinished")
        self.subscriberSpeech.signal.connect(self.sendActionFnished)
        
        #savoir status initial
        self.basic = self.session.service("ALBasicAwareness")
        #self.basicState=self.basic.isAwarenessRunning()
        
        #self.mem.raiseEvent("pythonDialog/scriptStart",1)

    
    def sendActionFnished(self,action):
        self.client.send("_OK_")
        
    def speechFinished(self, signal):
        print "signal : " + signal
        self.speechFinished=signal
        
        
    def controlMov(self, mouv):
#        if mouv=="Humain":
#            self.mem.raiseEvent("pythonDialog/Action",mouv)
#        elif mouv=="Pepper":
#            self.mem.raiseEvent("pythonDialog/Action",mouv)
        if mouv=="stop":
            if self.basic.isAwarenessRunning()==False:
                self.asr.setAudioExpression(True)
                self.asr.pause(False)
                self.basic.startAwareness()
            self.mem.raiseEvent("pythonDialog/stop",1)
        else:
            print "mouv : " + mouv
            self.mem.raiseEvent("pythonDialog/Action",mouv)
            
            
            
    def listen(self):
        print "start" 
        while True :
            #stop basic awareness
            if self.basic.isAwarenessRunning()==True:
                self.basic.stopAwareness()
                
            response = "a"
            self.sock.listen(5)
            self.client, address = self.sock.accept()
            print "{} connected".format( address )
            while (response != "_QUIT_") and (len(response) != 0):
                response = self.client.recv(4096) 
                response = response.decode('UTF-8')
                #print "get from rocsi : " + response
                while not self.speechFinished:                        
                    time.sleep(1)
                #control les reponses
                if response != "":
                    if response[0]=="R":
                        print "start while"
                        #self.speechFinished=False
                        self.mem.raiseEvent('pythonDialog/tts',response[2:])
                        self.mem.insertData("ALTextToSpeech/TextDone",0)
                        time.sleep(0.5)
                        while self.mem.getData("ALTextToSpeech/TextDone") == 0: 
                            time.sleep(0.5)
                        print "end while"
                        self.client.send("_OK_")
                    elif response[0]=="a":
                        self.controlMov(response[2:])
                        self.client.send("_OK_")
                    elif response[0]=="d":
                        self.controlMov(response[2:])                        
                    elif response[0]=="p":
                        time.sleep(int(response[2:]))
                        self.client.send("_OK_")
                    #print response.decode('UTF-8')
                    #time.sleep(2)
                    #self.client.send("_OK_")
        print "Close"
        #self.client.close()
        #self.sock.close()

                
    def run(self):
        self.listen()
        while True:
            time.sleep(1)
            
            
            

app = serveur()
app.run()

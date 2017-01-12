import time
import sys
import qi
from requests.exceptions import ConnectionError
import json
import requests
import HTMLParser
import random
import socket
import codecs

class naopepper(object):
    def __init__(self):
         
        self.appli = qi.Application(sys.argv)
        self.appli.start()
        self.session = self.appli.session
        self.logger = qi.Logger("NaoPepper")
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        #self.socket.connect(("nao.local", 15555))
        self.socket.connect(("roci.local", 15555))
        
        self.mem  = self.session.service("ALMemory")
        self.audioDevice = self.session.service("ALAudioDevice")
        
        self.basic = self.session.service("ALBasicAwareness")
        self.basicState=self.basic.isAwarenessRunning()
          
        self.subscriberQuestion=self.mem.subscriber("NaoPepper/Start")
        self.subscriberQuestion.signal.connect(self.sendAndReceive)

        self.subscriberBasic=self.mem.subscriber("NaoPepper/DefautState")
        self.subscriberBasic.signal.connect(self.setDefautAwareness)

       
        self.subscriberSpeech=self.mem.subscriber("ALTextToSpeech/TextDone")
        self.subscriberSpeech.signal.connect(self.getSignal)
        
        
        self.speechFinish=True

  
    def setDefautAwareness(self,var):    # the converstion ends here. And go back to the state original.
        if self.basic.isAwarenessRunning()!=self.basicState and self.basicState==False:
            self.basic.stopAwareness()
        if self.basic.isAwarenessRunning()!=self.basicState and self.basicState==True:
            self.basic.startAwareness()
        self.socket.send("a:stop")     # send the message to nao to stop nao.
            
    def getSignal(self,signal):
        self.speechFinish=signal
        
        
    def sendAndReceive(self,question):

        if self.basic.isAwarenessRunning()==True:
            self.basic.stopAwareness() 
        fSourceFile = codecs.open(question, 'r', 'UTF-8')
        for sTemp in fSourceFile:
            sTemp = sTemp.encode('UTF-8')
            if sTemp[0] == "Q":
                print sTemp[2:]
                
                while self.mem.getData('ALTextToSpeech/TextDone')==0: #wait until the robot finish the talk, then send the phase to robot
                    time.sleep(0.5)
                self.mem.raiseEvent('NaoPepper/NaoSay',sTemp[2:])  #robot start talk 
                self.mem.insertData('ALTextToSpeech/TextDone', 0)
                self.speechFinish=False
                time.sleep(0.5)
                print("demarre while")
                
                while self.mem.getData('ALTextToSpeech/TextDone')==0:#wait until the robot finish the talk, then continue reading the file
                    time.sleep(0.5)
                print("fin du while")
                
            elif sTemp[0] == "R":
                self.socket.send(sTemp[:-2])
                r=self.socket.recv(1024)
            
            elif sTemp[0] == "d":
                self.socket.send(sTemp[:-2])
                r=self.socket.recv(1024)
    
            elif sTemp[0] == "D":
                self.mem.raiseEvent('NaoPepper/Action',sTemp[2:-2])
                self.mem.raiseEvent('NaoPepper/ActionFinished', 0)
                while self.mem.getData('NaoPepper/ActionFinished')==0:
                    time.sleep(0.5)    
           
            elif sTemp[0] == "a":
                self.socket.send(sTemp[:-2])
                r=self.socket.recv(1024)
                
            elif sTemp[0] == "p":
                self.socket.send(sTemp[:-2])
                r=self.socket.recv(1024)
                                
            elif sTemp[0]=="A":       # Pepper's action
                # "v" for vlomue
                if(sTemp[2]!="v"):
                    self.mem.raiseEvent('NaoPepper/Action',sTemp[2:-2])
                    print(self.mem.getData('NaoPepper/Action'))
                # v-xxx : lower the volume by xxx
                elif(sTemp[3]=="-"):
                    self.audioDevice.setOutputVolume(self.audioDevice.getOutputVolume() - int(sTemp[4:-2]))
                # v+xxx : raise the volume by xxx
                elif(sTemp[3]=="+"):
                    self.audioDevice.setOutputVolume(self.audioDevice.getOutputVolume() + int(sTemp[4:-2]))
                # vxxx : set volume to xxx
                else:
                    self.audioDevice.setOutputVolume(int(sTemp[3:-2]))
                                   
            elif sTemp[0]=="P":       #Pepper pause for 2s
                time.sleep(int(sTemp[2:-2]))
                print(int(sTemp[2:-2]))
                
        fSourceFile.close()        

            

        phase = 1 + int(self.mem.getData('NaoPepper/Phase'))   
        print (phase)
        self.mem.insertData('NaoPepper/Phase', str(phase))
        print ("phase sent, raising event")
        self.mem.raiseEvent('NaoPepper/NextPhase',"1")  #go to the next phase
      
    def run(self):
        while True:
            time.sleep(0.1)
            
            
        


app = naopepper()
app.run()

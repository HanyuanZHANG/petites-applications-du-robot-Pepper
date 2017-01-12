#!/usr/bin/env python
# coding: utf-8

import socket
import time

socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket.bind(('', 15555))


while True :
	response = "a"
	socket.listen(5)
	client, address = socket.accept()
	print "{} connected".format( address )
	while (response != "_QUIT_") and (len(response) != 0):
			response = client.recv(255)
			if response != "":
					print response.decode('UTF-8')
			time.sleep(2)
			client.send("_OK_")

print "Close"
client.close()
socket.close()

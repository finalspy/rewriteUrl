#!/bin/bash

#set -xeuo pipefail

node app.js &
sleep 0.2
node app1.js &
sleep 0.2
node app2.js &
sleep 0.200
node app3.js &
sleep 0.2
node app4.js &
sleep 0.2

tail -f /dev/null

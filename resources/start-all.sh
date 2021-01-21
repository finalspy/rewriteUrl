#!/bin/bash

set -xeuo pipefail

node app1.js &
node app2.js &
node app3.js &
node app4.js &

tail -f /dev/null
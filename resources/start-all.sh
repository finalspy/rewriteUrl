#!/bin/bash

set -xeuo pipefail

node app1.js &
node app2.js &

tail -f /dev/null
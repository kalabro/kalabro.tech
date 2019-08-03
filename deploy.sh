#!/bin/bash

set -e
set -x

gatsby build
rsync -avz public/ root@176.112.206.27:/var/www/html/kalabro.tech/

echo "Successfully deployed: https://kalabro.tech/"
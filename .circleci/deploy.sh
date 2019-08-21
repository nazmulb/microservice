#!/bin/bash
set -e

docker pull nazmulb/microservice
docker run -d -p 8082:8082 --name nazmul_micro nazmulb/microservice

sleep 5
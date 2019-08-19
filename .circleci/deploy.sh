#!/bin/bash
set -e

docker pull nazmulb/microservice
docker run --rm -d -p 8082:8082 --name nazmul_micro nazmulb/microservice
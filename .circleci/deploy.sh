#!/bin/bash
set -e

docker pull nazmulb/microservice
docker run --rm -d -p 8082:8080 --name nazmul_micro nazmulb/microservice
docker exec nazmul_micro bash -c 'curl http://localhost:8082/about'
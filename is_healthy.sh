#!/bin/bash
set -e

docker exec nazmul_micro bash -c 'curl http://localhost:8082/about'

sleep 5

curl http://localhost:8082/about
#!/bin/bash
set -e

i=0
until wget -q --tries=20 --retry-connrefused --waitretry=1 --read-timeout=20 --timeout=15 -t 0 --spider http://localhost:8082
do
  if [ $((++i)) -gt 30 ]; then
    echo "Timed out waiting for monolith";
    exit 1;
  fi
  echo "Waiting for Monolith app ..."
  sleep 5
done
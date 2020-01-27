#!/bin/sh
export DOCKER_MACHINE_IP=$(docker-machine ip)
exec docker-compose up --build -d
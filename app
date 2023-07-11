#!/bin/bash

#Docker
#docker compose down -v
#docker build -t javatest .
#docker compose up

fonctiondetest() {
   echo "Hello world !" $1
}

clean() {
    docker compose down -v
}

run() {
    clean
    docker build -t maboke-client . --target dev
    docker compose up
}

build() {
    clean
    docker build -t maboke-client . --target prod
    docker compose up
}

builddev() {
    clean
    docker build -t maboke-client . --target dev-production-stage
    docker compose up
}

test() {
    clean
    docker build -t maboke-client . --target test 
    docker compose up
}

if [[ "$1" == "default" ]];then
fonctiondetest
elif [[ "$1" == "test" ]];then
test
elif [[ "$1" == "run" ]];then
run
elif [[ "$1" == "build" ]];then
build
elif [[ "$1" == "builddev" ]];then
builddev
elif [[ "$1" == "clean" ]];then
clean
fi
#run
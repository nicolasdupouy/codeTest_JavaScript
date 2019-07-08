# README

## Docker

### Build, run and test the image

    docker build --tag=nicolasdupouy/node-docker:version1 .
    docker run -p 9000:3000 nicolasdupouy/node-docker:version1
    curl localhost:9000

---------------------------

### Manage container

#### Get Container ID

    docker container ls

#### Connect

    docker exec -it <containerId> /bin/bash

#### Stop it

    docker stop <containerId>

---------------------------

### Docker Hub

#### Login

    docker login

#### Tag the image and push it

    docker tag nicolasdupouy/node-docker nicolasdupouy/node-docker:version1
    docker push nicolasdupouy/node-docker:version1

---------------------------

## Using Docker compose

### Build and run local build

    docker-compose -f docker-compose_LOCAL.yml build
    docker-compose -f docker-compose_LOCAL.yml up

### Build and run the image pushed to the Docker Hub

    docker-compose build
    docker-compose up

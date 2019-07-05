# README

## Build and run
### Build the Docker image
    docker build --tag=nicolasdupouy/node-docker:version1 .

### Run the Docker image
    docker run -p 9000:3000 nicolasdupouy/node-docker:version1

### Test connection
    curl localhost:9000

---------------------------
## Manage container
### Get Container ID
    docker container ls

### Connect
    docker exec -it <containerId> /bin/bash

### Stop it
    docker stop <containerId>

---------------------------
## Docker hub
### Login
    docker login
### Tag the image and push it
    docker tag nicolasdupouy/node-docker nicolasdupouy/node-docker:version1
    docker push nicolasdupouy/node-docker:version1
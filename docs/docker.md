# Docker

The app can be run as a [docker](https://docs.docker.com/engine/install/) container.

## Build
First build a docker image using the following command.
```bash
# run the command in the root folder of the project
docker build --tag google-drive-download:1.0 .
```

## Run
To run the app locally:
```bash
# after builing images you can run this command to start
# the app. Then head to http://localhost:3000 in browser.
docker run \
--publish 3000:3000 \
--env-file=.env --detach \
--name gdrive google-drive-download:1.0
```

## Clean up
To remove everything and clear space:
```bash
# stop a running container
docker stop container_id
# stop all containers
docker stop $(docker ps -a -q)

# remove a container
docker rm container_id
# remove all containers
docker rm $(docker ps -a -q)

# remove an image
docker rmi image_id
# remove all images
docker rmi $(docker images -a -q)
```

> For more info goto [docker docs](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes).


[Build Steps :arrow_left:](./build.md) |
[Home :house:](../README.md)

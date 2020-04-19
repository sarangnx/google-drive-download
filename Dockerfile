FROM node:alpine

# Create a folder for code
WORKDIR /app

# install npm dependencies
COPY package.json yarn.lock ./
RUN apk add python make g++ && yarn

# Heroku does not respect the expose
# given in dockerfile. But this can be
# used for local testing.
EXPOSE 3000

# Copy the code to workdir
COPY . .

# Build the app
RUN yarn build

# start the server
CMD ["yarn", "start"]

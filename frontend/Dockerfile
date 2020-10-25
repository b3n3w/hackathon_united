# ---- Base ----
FROM node:latest as base
WORKDIR /opt/handshake2/frontend
COPY package*.json ./


# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install
# copy production node_modules aside
COPY . .
#RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN npm run build-prod

# ---- Test ----
#FROM dependencies AS test
#COPY . .
#RUN  npm run lint && npm run setup && npm run test


# ---- Release ----
# use nginx as release image base, but its not used actually, because of an
# already installed nginx instance on the server which will be used
FROM nginx:latest AS release
# copy production www
COPY --from=dependencies /opt/handshake2/frontend/www /usr/share/nginx/html

# ---- Base ----
FROM node:latest as base
WORKDIR /opt/handshake2/backend
COPY package*.json ./


# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN npm install

# ---- Test ----
#FROM dependencies AS test
#COPY . .
#RUN  npm run lint && npm run setup && npm run test


# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /opt/handshake2/backend/prod_node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 9000
# Entrypoint: start backend
CMD ["npm","start"]

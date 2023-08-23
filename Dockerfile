
FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

FROM nginxinc/nginx-unprivileged 
USER root

#copy output
COPY --from=build /usr/local/app/build /usr/share/nginx/html

#run scripts to update environemtn specific app-configs
COPY --chmod=+x ./docker-files/setConfiguration.sh /docker-entrypoint.d/setConfiguration.sh
COPY ./docker-files/app-configs /docker-entrypoint.d/app-configs
COPY ./docker-files/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

#CMD [ "/entryScript.sh" ]
# build environment
FROM node:16.14.0 as build
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build --mode=production

# production environment
FROM nginx:1.21.6-alpine
## add permissions for nginx user
COPY --from=build /app/build /usr/share/nginx/html
COPY .docker/nginx/ /etc/nginx/
COPY  .docker/scripts/ /etc/scripts/

# Create non-root user. Set ui to 9999 to avoid conflicts with host OS just in case
#RUN adduser --disabled-password --uid 9999 --gecos "" apprunner
 
#Set the non-root as owner
#RUN chown -R apprunner.apprunner /usr/share/nginx/html \
#    && chown -R apprunner:apprunner /etc/nginx/conf.d
 
# Change the user from root to non-root- From now on, all Docker commands are run as non-root user (except for COPY)
#USER 9999


EXPOSE 5000
CMD ["sh","/etc/scripts/startup.sh"]

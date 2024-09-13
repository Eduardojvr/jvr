FROM node:10.4.0 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


FROM nginx:stable-alpine as production-stage

# Copia os arquivos do frontend
COPY --from=build-stage /app/front /usr/share/nginx/html

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia a nova configuração do Nginx
COPY default.conf /etc/nginx/conf.d

# Copia os certificados SSL
COPY codenge.crt /etc/nginx/certificados/codenge.crt
COPY codenge.key /etc/nginx/certificados/codenge.key

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]

FROM node:10.4.0 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build  # Adicionar o comando de build para gerar a versão final da aplicação

FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html  # Supondo que o build gere os arquivos em /dist
RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/default.conf  # Certifique-se que o arquivo 'default.conf' exista no contexto do build

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM node:10-alpine

RUN mkdir -p /root/Documentos/WebApp/beneficiarios/ORTCA-Beneficiarios

WORKDIR /root/Documentos/WebApp/beneficiarios/ORTCA-Beneficiarios/

COPY package*.json ./


COPY . .

RUN npm install



EXPOSE 3002

CMD ["npm", "run", "start"]
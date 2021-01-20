FROM node:14.15.4-slim

COPY resources/ .

RUN chmod +x start-all.sh && npm install

EXPOSE 8081 8082 8083 8084
CMD ["bash", "-c", "npm start" ]
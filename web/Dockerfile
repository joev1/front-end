FROM node:buster
ENV REACT_APP_API_URL=http://localhost:4000
WORKDIR /app
COPY ./entrypoint.sh /app
ENTRYPOINT ["bash", "/app/entrypoint.sh"]
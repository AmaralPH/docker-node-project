FROM nginx

# o html exibido pelo nginx está na pasta "/usr/share/nginx/html"
COPY html /usr/share/nginx/html

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]
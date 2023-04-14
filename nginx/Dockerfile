FROM nginx

# remove configuração default do nginx
RUN rm /etc/nginx/conf.d/default.conf

# copia configuração do nginx para a pasta de configuração
COPY nginx.conf /etc/nginx/conf.d

# RUN mkdir /var/www/html -p && touch /var/www/html/index.js

# o html exibido pelo nginx está na pasta "/usr/share/nginx/html"
# COPY html /usr/share/nginx/html

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]
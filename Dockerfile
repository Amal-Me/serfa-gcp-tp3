FROM php:apache

COPY ./html /var/www/html
#com

CMD ["apache2-foreground"]
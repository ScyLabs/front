install:
	docker-compose up -d \
	&& docker-compose exec apache symfony composer install --no-dev --prefer-dist --optimize-autoloader \
	&& docker-compose exec apache composer clear-cache \
	&& docker-compose exec apache symfony console doctrine:migrations:migrate \
	&& docker-compose exec apache symfony console d:s:u --force \
	&& docker-compose exec apache symfony console d:f:l
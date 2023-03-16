up:
	docker-compose up

down:
	docker-compose down
#
#test_run:
#	docker-compose exec fpm vendor/bin/phpunit
#
rebuild:
	docker-compose up -d --build && docker-compose up

run-tests:
	docker-compose exec vite npm run test

run-local:
	npm run dev

install-local:
	npm install


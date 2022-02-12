# Makefile

install:
	npm ci

gendiff:
	node gendiff.js -h

publish:
	npm publish --dry-run

lint:
	npx eslint .

link:
	sudo npm link

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test
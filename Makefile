install:
	npm install

start:
	npm run babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npm run eslint src

brain-even:
	npm run babel-node src/bin/brain-even.js

brain-calc:
	npm run babel-node src/bin/brain-calc.js

brain-gcd:
	npm run babel-node src/bin/brain-gcd.js
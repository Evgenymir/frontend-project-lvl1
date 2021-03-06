install:
	npm install

start:
	npm run babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npm run eslint .

brain-even:
	npm run babel-node src/bin/brain-even.js

brain-calc:
	npm run babel-node src/bin/brain-calc.js

brain-gcd:
	npm run babel-node src/bin/brain-gcd.js

brain-progression:
	npm run babel-node src/bin/brain-progression.js

brain-prime:
	npm run babel-node src/bin/brain-prime.js
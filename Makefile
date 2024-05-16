smoke-test:
	yarn build
	node examples/smoke-test.mjs

test:
	yarn & yarn test

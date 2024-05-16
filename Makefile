smoke-test:
	yarn build
	node examples/smoke_test.mjs

test:
	yarn & yarn test

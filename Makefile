gen:
	graphql-codegen --config ./.graphqlconfig.yml

make:
	docker-compose up --build

frontend:
	cd frontend && yarn dev
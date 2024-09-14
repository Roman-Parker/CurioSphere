# Variables
NPM = npm
SEQUELIZE = npx sequelize-cli

# Target for installing dependencies
install:
	@echo "Installing frontend and backend dependencies..."
	$(NPM) run setup

# Target for running database migrations
migrate:
	@echo "Running database migrations..."
	$(SEQUELIZE) db:migrate

# Target for creating a new migration file
migration:
	@echo "Creating a new migration file..."
	$(SEQUELIZE) migration:generate --name $(name)

# Target for starting the development environment
start:
	@echo "Starting the development environment..."
	$(NPM) run dev

# Target to clean environment (optional, if needed)
clean:
	@echo "Cleaning up environment..."
	rm -rf node_modules

# Target for rebuilding everything (install, migrate, start)
build: install migrate start

# Help target to list available commands
help:
	@echo "Makefile commands:"
	@echo "  install        - Install frontend and backend dependencies"
	@echo "  migrate        - Run database migrations"
	@echo "  migration name - Create a new migration file with the specified name"
	@echo "  start          - Start the development environment"
	@echo "  clean          - Clean the environment (e.g., remove node_modules)"
	@echo "  build          - Install, migrate, and start the development environment"
	@echo "  help           - Show this help message"

# Default target
.DEFAULT_GOAL := help

.PHONY: install migrate migration start clean build help

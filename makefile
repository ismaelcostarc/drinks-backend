RED=\033[31m
GREEN=\033[32m
YELLOW=\033[33m
RESET=\033[0m

build:
	@echo "$(YELLOW)Installing dependencies...$(RESET)"
	@npm install
	@echo "$(YELLOW)Copying .env...$(RESET)"
	@cp .env.example .env
	@echo "$(YELLOW)Running migrations...$(RESET)"
	@node ace migration:run
	${MAKE} serve

serve:
	@echo "$(YELLOW)Starting containers...$(RESET)"
	@docker-compose -f docker-compose.yml up -d

stop:
	@echo "$(YELLOW)Stopping containers...$(RESET)"
	@docker-compose -f docker-compose.yml stop
	@echo "$(GREEN)All done!$(RESET)"

migrate:
	@echo "$(YELLOW)Running migrations...$(RESET)"
	@node ace migration:run
	@echo "$(GREEN)All done!$(RESET)"
provider "aws" {
  region = "us-west-2"
}

resource "aws_ecs_cluster" "ecs_cluster" {
  name = "omega-cluster"
}

resource "aws_ecs_task_definition" "backend" {
  family                   = "omega-backend-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"

  container_definitions = jsonencode([
    {
      name      = "backend"
      image     = "mydockerhubuser/my-backend-app:latest"
      essential = true
      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
        }
      ]
      environment = [
        {
          name  = "DB_HOST"
          value = "mydb.cffnrxqboh2a.us-west-2.rds.amazonaws.com"
        },
        {
          name  = "DB_PORT"
          value = "5432"
        },
        {
          name  = "DB_NAME"
          value = "omega"
        },
        {
          name  = "DB_USER"
          value = "omegauser"
        },
        {
          name  = "DB_PASS"
          value = "omegapass"
        }
      ]
    }
  ])
}

resource "aws_ecs_service" "backend_service" {
  name            = "omega-backend-service"
  cluster         = aws_ecs_cluster.ecs_cluster.id
  task_definition = aws_ecs_task_definition.backend.arn
  desired_count   = 1
  launch_type     = "FARGATE"
  network_configuration {
    subnets         = ["subnet-abc123", "subnet-def456"]
    security_groups = ["sg-01234567"]
  }
}

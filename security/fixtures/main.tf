terraform {
  required_version = ">= 1.5.0"
}

variable "environment" {
  type    = string
  default = "test"
}

output "environment" {
  value = var.environment
}

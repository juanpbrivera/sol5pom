@login
Feature: Login de Usuario
  Como usuario del sistema
  Quiero poder iniciar sesión
  Para acceder a las funcionalidades de la aplicación

  Background:
    Given que navego a la página de login

  @LoginCredenciales @smoke
  Scenario: Login exitoso con vendedor usando JSON
    When ingreso como "vendedor" usando JSON
    Then debo ver el mensaje de bienvenida

  @LoginCredenciales @smoke
  Scenario: Login exitoso con vendedor usando CSV
    When ingreso como "vendedor" usando CSV
    Then debo ver el mensaje de bienvenida

  @LoginCredenciales @smoke
  Scenario: Login exitoso con aprobador usando CSV
    When ingreso como "aprobador" usando CSV
    Then debo ver el mensaje de bienvenida


  # @LoginCredenciales @smoke
  # Scenario: Login exitoso con credenciales validas
  #   When ingreso el usuario "VendedorBanco"
  #   And ingreso la contraseña "B4nbif$P3rv"
  #   And hago clic en ingresar
  #   Then debo ver el mensaje de bienvenida
  # @LoginCredencialesInvalidas @regression
  # Scenario: Login fallido con credenciales invalidas
  #   When ingreso el usuario "invalid@example.com"
  #   And ingreso la contraseña "WrongPass"
  #   And hago clic en ingresar
  #   Then debo ver un mensaje de error de credenciales
  # @LoginCredenciales @smoke
  # Scenario: Login sin exito cuando es fuera de hora
  #   When ingreso el usuario "VendedorBanco"
  #   And ingreso la contraseña "B4nbif$P3rv"
  #   And hago clic en ingresar
  #   Then debo ver el mensaje de error "× Inicio Sesión."

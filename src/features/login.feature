@login
Feature: Login de Usuario
  Como usuario del sistema
  Quiero poder iniciar sesión
  Para acceder a las funcionalidades de la aplicación

  Background:
    Given que navego a la página de login

  @LoginCredenciales @smoke
  Scenario: Login exitoso con credenciales válidas
    When ingreso el usuario "VendedorBanco"
    And ingreso la contraseña "B4nbif$P3rv"
    And hago clic en ingresar
    Then debo ver el mensaje de bienvenida

  @LoginCredencialesInvalidas @regression
  Scenario: Login fallido con credenciales inválidas
    When ingreso el usuario "invalid@example.com"
    And ingreso la contraseña "WrongPass"
    And hago clic en ingresar
    Then debo ver un mensaje de error de credenciales
    And el mensaje de error debe contener "Credenciales inválidas"
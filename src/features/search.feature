@bdd @smoke @search
Feature: Búsqueda y navegación en Demo Web Shop

  Background:
    Given abro la Home

  @positive
  Scenario: Buscar un producto existente
    When busco "laptop" desde el header
    # Then el título contiene "Search"
  #   And la URL contiene "/search"
  #   And veo algún resultado que contiene "laptop"

  # @session
  # Scenario: Navegación básica sin errores de consola
  #   When navego a "/books"
  #   Then el título contiene "Books"
  #   And no hay errores de consola durante la navegación

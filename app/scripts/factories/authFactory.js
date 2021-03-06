'use strict';
angular.module('softvApp')
  .factory('authFactory', function ($http, $q, $window, globalService, $localStorage, PermPermissionStore, $location, $base64,ngNotify) {
    var factory = {};
    var paths = {
      getAuthentication: '/DameSessionW/GetDameSessionWList',
      login: '/Usuario/LogOn'
    };

    factory.getAuthentication = function (token) {
      var deferred = $q.defer();
      var Parametros = {
        'Id': 0,
        'Codigo': token
      };
      var config = {
        headers: {
          'Authorization': token
        }
      };
      $http.post(globalService.getUrl() + paths.getAuthentication, JSON.stringify(Parametros), config).then(function (response) {
        console.log(response);
        if (response.data.GetDameSessionWListResult.Codigo) {
          $localStorage.currentUser = {
            token: response.data.GetDameSessionWListResult.Codigo,
            token1: token,
            usuario: response.data.GetDameSessionWListResult.Usuario,
            sucursal: response.data.GetDameSessionWListResult.IdSucursal,
            idUsuario: response.data.GetDameSessionWListResult.IdUsuario,
            maquina: response.data.GetDameSessionWListResult.IpMaquina,
            tipoUsuario: response.data.GetDameSessionWListResult.TipoUser,
            Menu: response.data.GetDameSessionWListResult.Menu
          };
          $window.location.reload();
        } else {
          $location.path('/auth/');
        }
      }).catch(function (data) {
        deferred.reject(data);
      });

      return deferred.promise;
    };



    factory.login = function (user, password) {
      var token = $base64.encode(user + ':' + password);
      var deferred = $q.defer();
      var Parametros = {};
      var config = {
        headers: {
          'Authorization': 'Basic ' + token
        }
      };
      $http.post(globalService.getUrl() + paths.login, JSON.stringify(Parametros), config)
        .then(function (response) {
          console.log(response);
          if (response.data.LogOnResult.Token) {
            $localStorage.currentUser = {
              token: response.data.LogOnResult.Codigo,
              token1: token,
              usuario: response.data.LogOnResult.Usuario,
              sucursal: response.data.LogOnResult.IdSucursal,
              idUsuario: response.data.LogOnResult.IdUsuario,
              maquina: response.data.LogOnResult.IpMaquina,
              tipoUsuario: response.data.LogOnResult.TipoUser,
              Menu: response.data.LogOnResult.Menu
            };
            console.log($localStorage.currentUser);
            deferred.resolve(true);
          } else {
            deferred.resolve(false);
          }
        })
        .catch(function (response) {
          ngNotify.set('Autenticación inválida, credenciales no válidas.', 'error');
          deferred.reject(response.statusText);
        });
      return deferred.promise;
    };


    return factory;
  });

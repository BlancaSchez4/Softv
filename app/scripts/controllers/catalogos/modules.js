'use strict';

angular
    .module('softvApp')
    .config(function ($stateProvider) {
        var states = [
            {
                name: 'home.catalogos',
                abstract: true,
                template: '<div ui-view></div>'
            },
            {
                name: 'home.catalogos.estados',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO ESTADOS',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/estados',
                templateUrl: 'views/catalogos/Estados.html',
                controller: 'EstadosCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.ciudades',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO CIUDADES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/ciudades',
                templateUrl: 'views/catalogos/Ciudades.html',
                controller: 'CiudadesCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.plazas',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO PLAZAS',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/plazas',
                templateUrl: 'views/catalogos/Plazas.html',
                controller: 'PlazasCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.plaza_nueva',
                data: {
                    pageTitle: 'SOFTV | NUEVA PLAZA',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/plazas/nueva',
                templateUrl: 'views/catalogos/PlazaForm.html',
                controller: 'PlazaAddCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.plaza_editar',
                data: {
                    pageTitle: 'SOFTV | EDITAR PLAZA'
                },
                url: '/catalogo/plazas/editar/:id',
                templateUrl: 'views/catalogos/PlazaForm.html',
                controller: 'PlazaUpdateCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.localidades',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO LOCALIDADES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/localidades',
                templateUrl: 'views/catalogos/Localidades.html',
                controller: 'LocalidadesCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.distribuidores',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO DISTRIBUIDORES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/distribuidores',
                templateUrl: 'views/catalogos/Distribuidores.html',
                controller: 'DistribuidoresCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.colonias',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO COLONIAS',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/colonias',
                templateUrl: 'views/catalogos/Colonias.html',
                controller: 'ColoniasCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.tipos_colonias',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO TIPOS DE COLONIAS',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/tipos_colonias',
                templateUrl: 'views/catalogos/TiposColonias.html',
                controller: 'TiposColoniasCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.calles',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO CALLES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/calles',
                templateUrl: 'views/catalogos/Calles.html',
                controller: 'CallesCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.clientes',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO CLIENTES',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/clientes',
                templateUrl: 'views/catalogos/Clientes.html',
                controller: 'ClientesCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.cliente_nuevo',
                data: {
                    pageTitle: 'SOFTV | NUEVO CLIENTE',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/clientes/nuevo',
                templateUrl: 'views/catalogos/ClienteNuevo.html',
                controller: 'ClienteNuevoCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.cliente_editar',
                data: {
                    pageTitle: 'SOFTV | EDITAR CLIENTE'
                },
                url: '/catalogo/clientes/Editar/:id',
                templateUrl: 'views/catalogos/ClienteNuevo.html',
                controller: 'ClienteEditarCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.servicios',
                data: {
                    pageTitle: 'SOFTV | CATÁLOGO SERVICIOS',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/servicios',
                templateUrl: 'views/catalogos/Servicios.html',
                controller: 'ServiciosCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.servicio_nuevo',
                data: {
                    pageTitle: 'SOFTV | NUEVO SERVICIO',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/servicios/nuevo',
                templateUrl: 'views/catalogos/ServicioForm.html',
                controller: 'ServicioAddCtrl',
                controllerAs: '$ctrl'
            },
            {
                name: 'home.catalogos.servicio_editar',
                data: {
                    pageTitle: 'SOFTV | EDITAR SERVICIO',
                    permissions: {
                        options: {
                            reload: false
                        }
                    }
                },
                url: '/catalogo/servicios/editar/:id',
                templateUrl: 'views/catalogos/ServicioForm.html',
                controller: 'ServicioUpdateCtrl',
                controllerAs: '$ctrl'
            },
        ];
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });
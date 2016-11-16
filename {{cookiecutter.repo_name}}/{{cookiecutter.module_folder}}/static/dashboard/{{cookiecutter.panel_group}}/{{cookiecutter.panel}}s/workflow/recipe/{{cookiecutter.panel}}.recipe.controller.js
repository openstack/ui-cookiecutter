/**
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name {{cookiecutter.panel}}RecipeController
   * @ngController
   * @description
   * Controller for the {{cookiecutter.panel}} recipe step in create/update workflow
   */
  angular
    .module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s')
    .controller(
      'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.workflow.{{cookiecutter.panel}}RecipeController',
      {{cookiecutter.panel}}RecipeController);

  {{cookiecutter.panel}}RecipeController.$inject = [
    '$q',
    'horizon.app.core.openstack-service-api.{{cookiecutter.api_module}}',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.model',
    'horizon.framework.util.i18n.gettext'
  ];

  function {{cookiecutter.panel}}RecipeController($q, api, model, gettext) {
    var ctrl = this;

    ctrl.schema = {
      type: 'object',
      properties: {
        size: {
          title: gettext('Size'),
          type: 'string',
          default: 'M'
        },
        temperature: {
            title: gettext('Temperature'),
            type: 'string',
            default: 'H'
          },
        base: {
          title: gettext('Base'),
          type: 'string'
        },
        flavor: {
          title: gettext('Flavor'),
          type: 'string'
        },
        topping: {
          title: gettext('Topping'),
          type: 'string'
        }
      },
      required: ['base']
    };

    ctrl.form = [
      {
        type: 'section',
        htmlClass: 'row',
        items: [
          {
            type: 'section',
            htmlClass: 'col-sm-12',
            items: [
              {
                key: 'size',
                type: 'radiobuttons',
                titleMap: [
                  // if get options from API, call $scope.$broadcast('schemaFormRedraw')
                  {value: 'S', name: gettext('Small')},
                  {value: 'M', name: gettext('Medium')},
                  {value: 'L', name: gettext('Large')},
                  {value: 'XL', name: gettext('Extra Large')}
                ]
              },
              {
                key: 'temperature',
                type: 'radiobuttons',
                titleMap: [
                  // if get options from API, call $scope.$broadcast('schemaFormRedraw')
                  {value: 'H', name: gettext('Hot')},
                  {value: 'I', name: gettext('Ice')}
                ]
              },
              {
                key: 'base',
                type: 'select',
                titleMap: [
                  // if get options from API, call $scope.$broadcast('schemaFormRedraw')
                  {value: 'blend', name: gettext('House Blend'), group: gettext('Coffee')},
                  {value: 'mandheling', name: gettext('Mandheling'), group: gettext('Coffee')},
                  {value: 'colombia', name: gettext('Colombia'), group: gettext('Coffee')},
                  {value: 'espresso', name: gettext('Espresso'), group: gettext('Coffee')},
                  {value: 'earl_gray', name: gettext('Earl Gray'), group: gettext('Tea')},
                  {value: 'darjeeling', name: gettext('Darjeeling'), group: gettext('Tea')},
                  {value: 'orange_pekoe', name: gettext('Orange Pekoe'), group: gettext('Tea')}
                ]
              },
              {
                key: 'flavor',
                type: 'select',
                titleMap: [
                  // if get options from API, call $scope.$broadcast('schemaFormRedraw')
                  {value: 'chocolate', name: gettext('Chocolate')},
                  {value: 'mocha', name: gettext('Mocha')},
                  {value: 'strawberry', name: gettext('Strawberry')},
                  {value: 'blueberry', name: gettext('Blueberry')},
                  {value: 'raspberry', name: gettext('Raspberry')}
                ]
              },
              {
                key: 'topping',
                type: 'checkboxes',
                titleMap: [
                  // if get options from API, call $scope.$broadcast('schemaFormRedraw')
                  {value: 'clushed_nuts', name: gettext('Clushed Nuts')},
                  {value: 'whip_cream', name: gettext('Whip Cream')},
                  {value: 'mixed_serial', name: gettext('Mixed Serial')}
                ]
              }
            ]
          }
        ]
      }
    ];

    ctrl.model = model.spec;

    if (model.type === 'update') {
      var deferred = api.get{{cookiecutter.panel_func}}(model.spec.id);
      deferred.then(onLoad);

      function onLoad(response) {
        ctrl.model.size = model.spec.size = response.data.size;
        ctrl.model.temperature = model.spec.temperature = response.data.temperature;
        ctrl.model.base = model.spec.base = response.data.base;
        ctrl.model.flavor = model.spec.flavor = response.data.flavor;
        ctrl.model.topping = model.spec.topping = response.data.topping;
      }
    }
  }
})();

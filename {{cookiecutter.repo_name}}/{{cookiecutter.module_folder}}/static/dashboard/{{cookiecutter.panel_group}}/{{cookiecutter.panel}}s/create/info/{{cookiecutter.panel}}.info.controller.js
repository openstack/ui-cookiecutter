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
   * @name create{{cookiecutter.panel_func}}InfoController
   * @ngController
   * @description
   * Controller for the {{cookiecutter.panel}} info step in create workflow
   */
  angular
    .module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s')
    .controller('create{{cookiecutter.panel_func}}InfoController', create{{cookiecutter.panel_func}}InfoController);

  create{{cookiecutter.panel_func}}InfoController.$inject = [
    '$q',
    '$scope',
    'horizon.dashboard.{{cookiecutter.panel_group}}.basePath',
    'horizon.app.core.openstack-service-api.{{cookiecutter.api_module}}',
    'horizon.framework.util.i18n.gettext'
  ];

  function create{{cookiecutter.panel_func}}InfoController($q, $scope, basePath, api, gettext) {
    var ctrl = this;

    var createInfoSchema = {
      type: 'object',
      properties: {
        name: {
          title: gettext('Name'),
          type: 'string'
        },
        description: {
          title: gettext('Description'),
          type: 'string'
        },
        enabled: {
          title: gettext('Enabled'),
          type: 'boolean',
          default: true
        },
        size: {
          title: gettext('Size'),
          type: 'string',
          default: 'M'
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
      required: ['name', 'base']
    };

    var createInfoForm = [
      {
        type: 'section',
        htmlClass: 'row',
        items: [
          {
            type: 'section',
            htmlClass: 'col-sm-12',
            items: [
              // info tab
              {
                key: 'name',
                placeholder: gettext('Name of the {{cookiecutter.panel}} to create.')
              },
              {
                key: 'description',
                type: 'textarea'
              },
              {
                key: 'enabled',
                type: 'checkboxes',
                titleMap: [
                  {value: true, name: ''},
                ]
              },
              // spec tab
              {
                key: 'size',
                type: 'radiobuttons'
                titleMap: [
                  // get options from API
                  {value: 'S', name: gettext('Small')},
                  {value: 'M', name: gettext('Medium')},
                  {value: 'L', name: gettext('Large')},
                  {value: 'XL', name: gettext('Extra Large')}
                ]
              },
              {
                key: 'base',
                type: 'select'
                titleMap: [
                  // get options from API
                ]
              },
              {
                key: 'flavor',
                type: 'select'
                titleMap: [
                  // get options from API
                ]
              },
              {
                key: 'topping',
                type: 'checkboxes'
                titleMap: [
                  // get options from API
                ]
              }
            ]
          }
        ]
      }
    ];

    ctrl.schema = createInfoSchema;
    ctrl.form = createInfoForm;
    ctrl.model = model.spec;
  }
})();

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
   * @name {{cookiecutter.panel}}InfoController
   * @ngController
   * @description
   * Controller for the {{cookiecutter.panel}} info step in create/update workflow
   */
  angular
    .module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s')
    .controller(
      'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.workflow.{{cookiecutter.panel}}InfoController',
      {{cookiecutter.panel}}InfoController);

  {{cookiecutter.panel}}InfoController.$inject = [
    '$q',
    'horizon.app.core.openstack-service-api.{{cookiecutter.api_module}}',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.model',
    'horizon.framework.util.i18n.gettext'
  ];

  function {{cookiecutter.panel}}InfoController($q, api, model, gettext) {
    var ctrl = this;

    ctrl.schema = {
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
        }
      },
      required: ['name']
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
                key: 'name',
                placeholder: gettext('Name of the {{cookiecutter.panel}} to create.')
              },
              {
                key: 'description',
                type: 'textarea'
              },
              {
                key: 'enabled',
                type: 'checkbox',
                titleMap: [
                  {value: true, name: ''}
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
        ctrl.model.name = model.spec.name = response.data.name;
        ctrl.model.description = model.spec.description = response.data.description;
        ctrl.model.enabled = model.spec.enabled = response.data.enabled;
      }
    }
  }
})();

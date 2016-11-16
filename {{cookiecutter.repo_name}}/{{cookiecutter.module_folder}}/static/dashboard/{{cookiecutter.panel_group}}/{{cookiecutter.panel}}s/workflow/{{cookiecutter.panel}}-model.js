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
   * @ngdoc model
   * @name horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.model
   * @description Service for the {{cookiecutter.panel}} model
   */
  angular
    .module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s')
    .factory('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.model', model);

  model.$inject = [
    'horizon.app.core.openstack-service-api.{{cookiecutter.api_module}}'
  ];

  function model(api) {
    var model = {
      // params
      spec: {},
      type: '',

      // methods
      init: init,
      save: save
    };

    function init(type, id) {
      model.type = type;
      // Reset model
      model.spec = {
        id: id,
        name: null,  // text required
        description: null,  // textarea
        enabled: true,  // checkbox
        size: 'M',  // radio
        temperature: 'H',  // radio
        base: null,  // select required
        flavor: null,  // select
        topping: null  // checkboxes
      };
    }

    function save() {
      var finalSpec = angular.copy(model.spec);
      cleanNullProperties(finalSpec);

      var id = finalSpec.id;
      delete finalSpec.id;
      if (model.type === 'create') {
        delete finalSpec.id;
        return api.create{{cookiecutter.panel_func}}(finalSpec);
      } else {
        return api.update{{cookiecutter.panel_func}}(id, finalSpec);
      }
    }

    function cleanNullProperties(finalSpec) {
      // Initially clean fields that don't have any value.
      for (var key in finalSpec) {
        if (finalSpec.hasOwnProperty(key) && finalSpec[key] === null) {
          delete finalSpec[key];
        }
      }
    }

    return model;
  }
})();

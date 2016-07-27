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

  angular
    .module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s')
    .factory('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.{{cookiecutter.panel}}Model', {{cookiecutter.panel}}Model);

  {{cookiecutter.panel}}Model.$inject = [
    'horizon.app.core.openstack-service-api.{{cookiecutter.api_module}}'
  ];

  function {{cookiecutter.panel}}Model(api) {
    var model = {
      newSpec: {},

      // API methods
      init: init,
      create{{cookiecutter.panel_func}}: create{{cookiecutter.panel_func}}
    };

    function initNewSpec() {
      model.newSpec = {
        name: null,
      };
    }

    function init() {
      // Reset the new {{cookiecutter.panel_func}} spec
      initNewSpec();
    }

    function create{{cookiecutter.panel_func}}() {
      var finalSpec = angular.copy(model.newSpec);

      cleanNullProperties(finalSpec);

      return api.create{{cookiecutter.panel_func}}(finalSpec);
    }

    function cleanNullProperties(finalSpec) {
      // Initially clean fields that don't have any value.
      // Not only "null", blank too.
      for (var key in finalSpec) {
        if (finalSpec.hasOwnProperty(key) && finalSpec[key] === null
             || finalSpec[key] === "") {
          delete finalSpec[key];
        }
      }
    }

    return model;
  }
})();

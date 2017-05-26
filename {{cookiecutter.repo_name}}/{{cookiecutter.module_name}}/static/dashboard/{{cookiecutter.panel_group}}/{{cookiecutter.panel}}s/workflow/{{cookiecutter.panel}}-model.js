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
  ];

  function model() {
    var model = {
      // params
      "spec": {},

      // methods
      "init": init,
      "cleanProperties": cleanProperties
    };

    function init() {
      // initialize model
      model.spec = {
        "id": "",
        "name": "",  // text required
        "description": "",  // textarea
        "enabled": true,  // checkbox
        "size": "M",  // radio
        "temperature": "H",  // radio
        "base": "",  // select
        "flavor": "",  // select
        "topping": ""  // checkboxes
      };
    }

    function cleanProperties() {
      delete model.spec.id;
      delete model.spec.tabs;
    }

    return model;
  }
})();


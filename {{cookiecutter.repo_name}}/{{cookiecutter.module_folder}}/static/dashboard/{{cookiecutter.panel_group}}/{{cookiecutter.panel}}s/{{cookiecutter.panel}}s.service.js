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
  "use strict";

  angular.module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s')
    .factory('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.service',
      service);

  service.$inject = [
    '$filter',
    'horizon.app.core.openstack-service-api.{{cookiecutter.api_module}}'
  ];

  /*
   * @ngdoc factory
   * @name horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.service
   *
   * @description
   * This service provides functions that are used through the {{cookiecutter.panel_func}}s
   * features.  These are primarily used in the module registrations
   * but do not need to be restricted to such use.  Each exposed function
   * is documented below.
   */
  function service($filter, api) {
    return {
      getPromise: getPromise,
      urlFunction: urlFunction
    };

    function getPromise(params) {
      return api.get{{cookiecutter.panel_func}}s(params).then(modifyResponse);

      function modifyResponse(response) {
        return {data: {items: response.data.items.map(addTrackBy)}};

        function addTrackBy(item) {
          item.trackBy = item.id;
          return item;
        }
      }
    }

    function urlFunction(item) {
      return 'project/ngdetails/OS::{{cookiecutter.api_name}}::{{cookiecutter.panel_func}}/' + item.id;
    }
  }
})();


/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function() {
  "use strict";

  describe('{{cookiecutter.panel_func}}s service', function() {
    var service;
    beforeEach(module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s'));
    beforeEach(inject(function($injector) {
      service = $injector.get('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.service');
    }));

    describe('getPromise', function() {
      it("provides a promise", inject(function($q, $injector, $timeout) {
        var api = $injector.get('horizon.app.core.openstack-service-api.{{cookiecutter.api_module}}');
        var deferred = $q.defer();
        spyOn(api, 'get{{cookiecutter.panel_func}}s').and.returnValue(deferred.promise);
        var result = service.getPromise({});
        deferred.resolve({
          data:{
            items: [{id: 123, name: 'resource1'}]
          }
        });
        $timeout.flush();
        expect(api.get{{cookiecutter.panel_func}}s).toHaveBeenCalled();
        expect(result.$$state.value.data.items[0].name).toBe('resource1');
      }));
    });

    describe('urlFunction', function() {
      it("get url", inject(function() {
        var result = service.urlFunction({id:"123abc"});
        expect(result).toBe("project/ngdetails/OS::{{cookiecutter.api_name}}::{{cookiecutter.panel_func}}/123abc");
      }));
    });

  });

})();


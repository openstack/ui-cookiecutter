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
   * @ngdoc overview
   * @ngname horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.actions
   *
   * @description
   * Provides all of the actions for {{cookiecutter.panel_func}}s.
   */
  angular.module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.actions', ['horizon.framework', 'horizon.dashboard.{{cookiecutter.panel_group}}'])
   .run(register);

  register.$inject = [
    'horizon.framework.conf.resource-type-registry.service',
    'horizon.framework.util.i18n.gettext',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.create.service',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.delete.service',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.resourceType',
  ];

  function register{{cookiecutter.panel_func}}Actions(
    registry,
    gettext,
    create{{cookiecutter.panel_func}}Service,
    delete{{cookiecutter.panel_func}}Service,
    resourceType)
  {
    var {{cookiecutter.panel}}sResourceType = registry.getResourceType(resourceType);
    {{cookiecutter.panel}}sResourceType.itemActions
      .append({
        id: 'delete{{cookiecutter.panel_func}}Action',
        service: delete{{cookiecutter.panel_func}}Service,
        template: {
          type: 'delete',
          text: gettext('Delete {{cookiecutter.panel_func}}')
        }
      });

    {{cookiecutter.panel}}sResourceType.batchActions
      .append({
        id: 'create{{cookiecutter.panel_func}}Action',
        service: create{{cookiecutter.panel_func}}Service,
        template: {
          type: 'create',
          text: gettext('Create {{cookiecutter.panel_func}}')
        }
      })
      .append({
        id: 'batchDelete{{cookiecutter.panel_func}}Action',
        service: delete{{cookiecutter.panel_func}}Service,
        template: {
          type: 'delete-selected',
          text: gettext('Delete {{cookiecutter.panel_func}}s')
        }
      });
  }

})();

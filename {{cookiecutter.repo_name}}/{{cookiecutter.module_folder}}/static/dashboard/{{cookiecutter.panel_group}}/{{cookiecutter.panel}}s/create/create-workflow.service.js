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
    .factory('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.workflow', {{cookiecutter.panel}}Workflow);

  {{cookiecutter.panel}}Workflow.$inject = [
    'horizon.dashboard.{{cookiecutter.panel_group}}.basePath',
    'horizon.app.core.workflow.factory',
    'horizon.framework.util.i18n.gettext'
  ];

  function {{cookiecutter.panel}}Workflow(basePath, dashboardWorkflow, gettext) {
    return dashboardWorkflow({
      title: gettext('Create {{cookiecutter.panel_func}}'),

      steps: [
        {
          title: gettext('Info'),
          templateUrl: basePath + '{{cookiecutter.panel}}s/create/info/info.html',
          helpUrl: basePath + '{{cookiecutter.panel}}s/create/info/info.help.html',
          formName: '{{cookiecutter.panel}}InfoForm'
        }
      ],

      btnText: {
        finish: gettext('Create')
      },

      btnIcon: {
        finish: 'fa fa-check'
      }
    });
  }
})();

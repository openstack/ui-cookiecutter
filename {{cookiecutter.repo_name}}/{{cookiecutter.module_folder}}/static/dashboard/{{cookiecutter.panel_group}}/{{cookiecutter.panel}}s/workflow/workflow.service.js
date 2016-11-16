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
   * @ngdoc workflow
   * @name horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.workflow
   * @description Service for the create/update workflow
   */
  angular
    .module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s')
    .factory('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.workflow', workflow);

  workflow.$inject = [
    'horizon.app.core.workflow.factory',
    'horizon.dashboard.{{cookiecutter.panel_group}}.basePath',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.model',
    'horizon.framework.util.i18n.gettext'
  ];

  function workflow(workflowFactory, basePath, model, gettext) {
	var workflow = {
      // params
      type: '',

      // methods
	  init: init,
	  save: save
	};

    function init(type, id) {
      var title, btnText;
      workflow.type = type;
      if (type === 'create') {
        title = gettext('Create {{cookiecutter.panel_func}}');
        btnText = gettext('Create');
        model.init('create');
      } else if (type === 'update') {
        title = gettext('Update {{cookiecutter.panel_func}}');
        btnText = gettext('Update');
        model.init('update', id);
      }

      return workflowFactory({
        title: title,
        steps: [
          {
            title: gettext('Info'),
            templateUrl: basePath + '{{cookiecutter.panel}}s/workflow/info/info.html',
            helpUrl: basePath + '{{cookiecutter.panel}}s/workflow/info/info.help.html',
            formName: '{{cookiecutter.panel}}InfoForm'
          },
          {
            title: gettext('Recipe'),
            templateUrl: basePath + '{{cookiecutter.panel}}s/workflow/recipe/recipe.html',
            helpUrl: basePath + '{{cookiecutter.panel}}s/workflow/recipe/recipe.help.html',
            formName: '{{cookiecutter.panel}}RecipeForm'
          }
        ],
        btnText: {
          finish: btnText
        },
        btnIcon: {
          finish: 'fa fa-check'
        }
      });
    }

    function save(){
      return model.save();
    }

    return workflow;
  }
})();

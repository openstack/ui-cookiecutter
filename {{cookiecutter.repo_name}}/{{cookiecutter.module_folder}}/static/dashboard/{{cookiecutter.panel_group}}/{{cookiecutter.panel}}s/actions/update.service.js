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
   * @name horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.update.service
   * @description Service for the {{cookiecutter.panel}} update modal
   */
  angular
    .module('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s')
    .factory('horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.update.service', updateService);

  updateService.$inject = [
    '$location',
    'horizon.app.core.openstack-service-api.{{cookiecutter.api_module}}',
    'horizon.app.core.openstack-service-api.policy',
    'horizon.framework.util.actions.action-result.service',
    'horizon.framework.util.i18n.gettext',
    'horizon.framework.util.q.extensions',
    'horizon.framework.widgets.toast.service',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.events',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.model',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.resourceType',
    'horizon.dashboard.{{cookiecutter.panel_group}}.{{cookiecutter.panel}}s.workflow'
  ];

  function updateService(
    $location, api, policy, actionResult, gettext, $qExtensions,
    toast, events, model, resourceType, workflow
  ) {

    var message = {
      success: gettext('{{cookiecutter.panel_func}} %s was successfully updated.')
    };

    var service = {
      initAction: initAction,
      perform: perform,
      allowed: allowed
    };

    var id;

    return service;

    //////////////

    // fixme: include this function in your service
    // if you plan to emit events to the parent controller,
    // otherwise remove it
    function initAction() {
    }

    // fixme: if newScope is unnecessary, remove it
    /* eslint-disable no-unused-vars */
    function perform(selected, newScope) {
      // modal title, buttons
      var title, submitText, submitIcon;
      title = gettext("Update {{cookiecutter.panel_func}}");
      submitText = gettext("Update");
      submitIcon = "fa fa-check";
      model.init();

      // load current data
      id = selected.id;
      var deferred = api.get{{cookiecutter.panel_func}}(id);
      deferred.then(onLoad);

      function onLoad(response) {
        model.spec.id = response.data.id;
        model.spec.name = response.data.name;
        model.spec.description = response.data.description;
        model.spec.enabled = response.data.enabled;
        model.spec.size = response.data.size;
        model.spec.temperature = response.data.temperature;
        model.spec.base = response.data.base;
        model.spec.flavor = response.data.flavor;
        model.spec.topping = response.data.topping;
      }

      var result = workflow.init(title, submitText, submitIcon, model.spec);
      return result.then(submit);
    }

    function allowed() {
      return $qExtensions.booleanAsPromise(true);
      // fixme: if you need to set policy, change as follow
      //return policy.ifAllowed({ rules: [['{{cookiecutter.panel}}', 'update_{{cookiecutter.panel}}']] });
    }

    function submit() {
      model.cleanProperties();
      return api.update{{cookiecutter.panel_func}}(id, model.spec).then(success);
    }

    function success(response) {
      response.data.id = response.data.uuid;
      toast.add('success', interpolate(message.success, [response.data.id]));
      var result = actionResult.getActionResult()
                   .updated(resourceType, response.data.id);
      if (result.result.failed.length === 0 && result.result.updated.length > 0) {
        $location.path('/{{cookiecutter.dashboard}}/{{cookiecutter.panel}}s');
      } else {
        return result.result;
      }
    }
  }
})();

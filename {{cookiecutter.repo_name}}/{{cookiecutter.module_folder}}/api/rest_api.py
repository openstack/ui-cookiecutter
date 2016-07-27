#    Licensed under the Apache License, Version 2.0 (the "License"); you may
#    not use this file except in compliance with the License. You may obtain
#    a copy of the License at
#
#         http://www.apache.org/licenses/LICENSE-2.0
#
#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
#    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
#    License for the specific language governing permissions and limitations
#    under the License.

from django.views import generic

from {{cookiecutter.module_folder}}.api import client

from openstack_dashboard.api.rest import urls
from openstack_dashboard.api.rest import utils as rest_utils


def change_to_id(obj):
    """Change key named 'uuid' to 'id'

    API returns objects with a field called 'uuid' many of Horizons
    directives however expect objects to have a field called 'id'.
    """
    obj['id'] = obj.pop('uuid')
    return obj


@urls.register
class {{cookiecutter.panel_func}}(generic.View):
    """API for retrieving a single {{cookiecutter.panel_func}}"""
    url_regex = r'{{cookiecutter.api_module}}/{{cookiecutter.panel}}s/(?P<id>[^/]+)$'

    @rest_utils.ajax()
    def get(self, request, id):
        """Get a specific {{cookiecutter.panel}}"""
        return change_to_id(client.{{cookiecutter.panel}}_show(request, id).to_dict())


@urls.register
class {{cookiecutter.panel_func}}s(generic.View):
    """API for {{cookiecutter.panel_func}}s"""
    url_regex = r'{{cookiecutter.api_module}}/{{cookiecutter.panel}}s/$'

    @rest_utils.ajax()
    def get(self, request):
        """Get a list of the {{cookiecutter.panel_func}}s for a project.

        The returned result is an object with property 'items' and each
        item under this is a {{cookiecutter.panel_func}}.
        """
        result = client.{{cookiecutter.panel}}_list(request)
        return {'items': [change_to_id(n.to_dict()) for n in result]}

    @rest_utils.ajax(data_required=True)
    def delete(self, request):
        """Delete one or more {{cookiecutter.panel_func}}s by id.

        Returns HTTP 204 (no content) on successful deletion.
        """
        for id in request.DATA:
            client.{{cookiecutter.panel}}_delete(request, id)

    @rest_utils.ajax(data_required=True)
    def post(self, request):
        """Create a new {{cookiecutter.panel_func}}.

        Returns the new {{cookiecutter.panel_func}} object on success.
        """
        new_resource = client.{{cookiecutter.panel}}_create(request, **request.DATA)
        return rest_utils.CreatedResponse(
            '/api/{{cookiecutter.api_module}}/{{cookiecutter.panel}}/%s' % new_resource.uuid,
            new_resource.to_dict())

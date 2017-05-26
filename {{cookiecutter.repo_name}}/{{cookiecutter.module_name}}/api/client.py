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


from __future__ import absolute_import

import logging

from {{cookiecutter.api_module}}client.v1 import client as {{cookiecutter.api_module}}_client

from horizon import exceptions
from horizon.utils.memoized import memoized
from openstack_dashboard.api import base

# for stab, should remove when use CLI API
import copy
from datetime import datetime
import uuid


LOG = logging.getLogger(__name__)

ATTRIBUTES = ['name', 'description', 'enabled', 'size', 'temperature',
              'base', 'flavor', 'topping']

STUB_DATA = {}


# for stab, should be removed when use CLI API
class StubResponse(object):

    def __init__(self, info):
        self._info = info

    def __repr__(self):
        reprkeys = sorted(k for k in self.__dict__.keys() if k[0] != '_')
        info = ", ".join("%s=%s" % (k, getattr(self, k)) for k in reprkeys)
        return "<%s %s>" % (self.__class__.__name__, info)

    def to_dict(self):
        return copy.deepcopy(self._info)


@memoized
def apiclient(request):
    api_url = ""

    try:
        api_url = base.url_for(request, '{{cookiecutter.panel}}')
    except exceptions.ServiceCatalogException:
        LOG.debug('No {{cookiecutter.panel_func}} Management service is configured.')
        return None

    LOG.debug('{{cookiecutter.api_module}}client connection created using the token "%s" and url'
              '"%s"' % (request.user.token.id, api_url))
    c = {{cookiecutter.api_module}}_client.Client(
        username=request.user.username,
        project_id=request.user.tenant_id,
        input_auth_token=request.user.token.id,
        api_url=api_url)
    return c


def {{cookiecutter.panel}}_create(request, **kwargs):
    args = {}
    for (key, value) in kwargs.items():
        if key in ATTRIBUTES:
            args[str(key)] = value
        else:
            raise exceptions.BadRequest(
                "Key must be in %s" % ",".join(ATTRIBUTES))
    # created = apiclient(request).{{cookiecutter.panel}}s.create(**args)

    # create dummy response
    args["uuid"] = uuid.uuid1().hex
    args["created_at"] = datetime.now().isoformat()
    created = StubResponse(args)
    for k in args:
        setattr(created, k, args[k])
    STUB_DATA[created.uuid] = created

    return created


def {{cookiecutter.panel}}_update(request, id, **kwargs):
    args = {}
    for (key, value) in kwargs.items():
        if key in ATTRIBUTES:
            args[str(key)] = value
        else:
            raise exceptions.BadRequest(
                "Key must be in %s" % ",".join(ATTRIBUTES))
    # updated = apiclient(request).{{cookiecutter.panel}}.update(id, **args)

    # update dummy response
    args["uuid"] = id
    args["updated_at"] = datetime.now().isoformat()
    updated = StubResponse(args)
    for k in args:
        setattr(updated, k, args[k])
    STUB_DATA[updated.uuid] = updated

    return updated


def {{cookiecutter.panel}}_delete(request, id):
    # deleted = apiclient(request).{{cookiecutter.panel}}s.delete(id)
    deleted = STUB_DATA.pop(id)

    return deleted


def {{cookiecutter.panel}}_list(
        request, limit=None, marker=None, sort_key=None,
        sort_dir=None, detail=True):

    # list = apiclient(request).{{cookiecutter.panel_func}}s.list(limit, marker, sort_key,
    #                                             sort_dir, detail)
    list = [STUB_DATA[data] for data in STUB_DATA]
    return list


def {{cookiecutter.panel}}_show(request, id):
    # show = apiclient(request).{{cookiecutter.panel}}s.get(id)
    show = STUB_DATA.get(id)
    return show

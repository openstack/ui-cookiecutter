===============================
{{ cookiecutter.call_by_name }}
===============================

{{ cookiecutter.project_short_description}}

* Free software: Apache license
* Source: http://git.openstack.org/cgit/{{ cookiecutter.repo_group }}/{{ cookiecutter.repo_name }}
* Bugs: http://bugs.launchpad.net/{{ cookiecutter.launchpad_project }}

Features
--------

* TODO

Enabling in DevStack
--------------------

Add this repo as an external repository into your ``local.conf`` file::

    [[local|localrc]]
    enable_plugin {{ cookiecutter.module_name }} https://github.com/{{ cookiecutter.repo_group }}/{{ cookiecutter.repo_name }}

Manual Installation
-------------------

Begin by cloning the Horizon and {{ cookiecutter.call_by_name }} repositories::

    git clone https://github.com/openstack/horizon
    git clone https://github.com/{{ cookiecutter.repo_group }}/{{ cookiecutter.repo_name }}

Create a virtual environment and install Horizon dependencies::

    cd horizon
    python tools/install_venv.py

Set up your ``local_settings.py`` file::

    cp openstack_dashboard/local/local_settings.py.example openstack_dashboard/local/local_settings.py

Open up the copied ``local_settings.py`` file in your preferred text
editor. You will want to customize several settings:

-  ``OPENSTACK_HOST`` should be configured with the hostname of your
   OpenStack server. Verify that the ``OPENSTACK_KEYSTONE_URL`` and
   ``OPENSTACK_KEYSTONE_DEFAULT_ROLE`` settings are correct for your
   environment. (They should be correct unless you modified your
   OpenStack server to change them.)

Install {{ cookiecutter.call_by_name }} with all dependencies in your virtual environment::

    tools/with_venv.sh pip install -e ../{{ cookiecutter.repo_name }}/

And enable it in Horizon::

    ln -s ../{{ cookiecutter.repo_name }}/{{ cookiecutter.module_folder }}/enabled/_90_project_{{ cookiecutter.panel_group }}_panelgroup.py openstack_dashboard/local/enabled
    ln -s ../{{ cookiecutter.repo_name }}/{{ cookiecutter.module_folder }}/enabled/_91_project_{{ cookiecutter.panel_group }}_{{ cookiecutter.panel }}s_panel.py openstack_dashboard/local/enabled

To run horizon with the newly enabled {{ cookiecutter.call_by_name }} plugin run::

    ./run_tests.sh --runserver 0.0.0.0:8080

to have the application start on port 8080 and the horizon dashboard will be
available in your browser at http://localhost:8080/

Release Notes
=============

.. toctree::
  :glob:
  :maxdepth: 1

  releases/*

Source Code Reference
=====================

.. toctree::
  :glob:
  :maxdepth: 1

  sourcecode/autoindex



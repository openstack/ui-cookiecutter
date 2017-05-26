===============
ui-cookiecutter
===============

Cookiecutter template for an OpenStack Dashboard UI plugin project. This
generate UI plugin project using Horizon Angular framework and the generated
project includes sample panel with CRUD operations.

See also https://github.com/audreyr/cookiecutter.

* Free software: Apache license
* pbr_: Set up to use Python Build Reasonableness
* hacking_: Enforces the OpenStack Hacking Guidelines
* eslint_: Enfoces the JavaScript Guidelines
* testrepository_: Runs tests using testrepository
* OpenStack-Infra_: Ready for OpenStack Continuous Integration testing
* Tox_ testing: Setup to easily test for Python 2.7, 3.4
* karma_ testing: Setup to easily test for JavaScript
* Sphinx_ docs: Documentation ready for generation and publication
* reno_ : Sphinx extension for Release Notes

Usage
-----

Generate a Python package project::

    cookiecutter https://github.com/openstack/ui-cookiecutter.git

This command prompts interactive input. Please check these parameters::

* "repo_group": The name for the git repo group. e.g. "openstack"
* "repo_name": The name for the git repo. e.g. "cafe-ui", This is used as python package name too.
* "launchpad_project": The name of the project on launchpad. e.g. "cafe-ui",
* "project_short_description": The short descriptions for your UI. e.g. "Cafe User Interface",
* "help_name": The name for the help. e.g. "Cafe-UI",
* "call_by_name": The name of this UI to write texts such as README or Help. e.g. "Cafe UI",
* "module_name": The name of the python module. e.g. "cafe_ui"
* "dashboard": The slug of the "dashboard" you want to add this plugin into. e.g. "project",
* "panel_group": The slug for the "panel_group". e.g. "cafe",
* "panel_group_name": The caption for the "panel_group". e.g. "Cafe",
* "panel": The slug of the "panel", in singular. e.g. "drink",
* "panel_func": The function name for the "panel", in singular. e.g. "Drink",
* "api_module": The name of the API service module. e.g. "cafe",
* "api_name": The caption for the "api_module". e.g. "Cafe"

If you want to generate without interactive input, you can use example values for these parameters as follow::

   cookiecutter https://github.com/openstack/ui-cookiecutter.git --no-inputs

Run with OpenStack Horizon::

    cd <repo_name>
    pip install
    cp <repo_name>/<module_name>/enabled/_90_project_<panel_group>_panelgroup.py <horizon-dir>/openstack_dashboard/local/enabled
    cp <repo_name>/<module_name>/enabled/_91_project_<panel_group>_<panel>s.py <horizon-dir>/openstack_dashboard/local/enabled

then reboot the Horizon.

OpenStack projects require a working git repo for pbr to work, on newer
versions of cookiecutter (>= 0.7.0 released 2013-11-09) this inital commit will
be done automatically. Otherwise you will need to init a repo and commit to it
before doing anything else::

    cd $repo_name
    git init
    git add .
    git commit -a

Then::

* Add the project to the OpenStack Infrastructure


.. _pbr: http://docs.openstack.org/developer/pbr
.. _hacking: https://git.openstack.org/cgit/openstack-dev/hacking/plain/HACKING.rst
.. _eslint: http://eslint.org/
.. _OpenStack-Infra: http://docs.openstack.org/infra/system-config
.. _testrepository: https://testrepository.readthedocs.org/
.. _Tox: http://testrun.org/tox/
.. _karma: https://github.com/karma-runner/karma
.. _Sphinx: http://sphinx-doc.org/
.. _reno: http://docs.openstack.org/developer/reno/


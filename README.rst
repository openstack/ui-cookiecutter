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

Run with OpenStack Horizon::

    cd <repo_name>
    pip install
    cp <repo_name>/<module_folder>/enabled/_90_project_<panel_group>_panelgroup.py <horizon-dir>/openstack_dashboard/local/enabled
    cp <repo_name>/<module_folder>/enabled/_91_project_<panel_group>_<panel>s.py <horizon-dir>/openstack_dashboard/local/enabled

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


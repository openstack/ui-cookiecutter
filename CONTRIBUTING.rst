If you would like to contribute to the development of OpenStack, you must
follow the steps in this page:

   http://docs.openstack.org/infra/manual/developers.html

If you already have a good understanding of how the system works and your
OpenStack accounts are set up, you can skip to the development workflow
section of this documentation to learn how changes to OpenStack should be
submitted for review via the Gerrit tool:

   http://docs.openstack.org/infra/manual/developers.html#development-workflow

Pull requests submitted through GitHub will be ignored.

Bugs should be filed on Launchpad, not GitHub:

   https://bugs.launchpad.net/ui-cookiecutter


For developers and reviewers
----------------------------

To develop or review ui-cookiecutter, you can setup the environment as follows::

#. install cookiecutter

    pip install cookiecutter

#. clone ui-cookiecutter git repository

    git clone https://github.com/openstack/ui-cookiecutter.git

#. create change for develop or cherry-pick / checkout for reviewing

#. generate plugin as follows and check the change

    cookiecutter <local repository>/ [--no-input]

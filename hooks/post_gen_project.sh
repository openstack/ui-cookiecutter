#!/usr/bin/env sh

if ! [ ${IGNORE_GIT} ]; then
    git init
    git add .
    git commit -a -m "Initial UI-Cookiecutter Commit."
fi
#!/bin/bash

rm -rf ./www
yarn build:prod
firebase deploy
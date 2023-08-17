#!/bin/bash
echo "APP_ENVIRONMENT=$APP_ENVIRONMENT"

config_file_env="/docker-entrypoint.d/app-configs/app-config.$APP_ENVIRONMENT.js"
config_file="/usr/share/nginx/html/app-config.js"

if [ -f $config_file_env ]
then
    cp $config_file_env $config_file
    echo "coppied contents of $config_file_env to $config_file"
else
    echo "$config_file_env does not exist"
fi
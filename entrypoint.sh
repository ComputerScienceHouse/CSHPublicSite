#!/bin/bash

sssd -i &
echo "Running: $@"
$@

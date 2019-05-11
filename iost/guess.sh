#!/bin/bash
iwallet \
 --server localhost:30002 \
 --account admin \
 --chain_id 1020 \
 call "$1" "guess" "[\"$2\"]"
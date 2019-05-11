#!/bin/bash
scaf compile main

iwallet \
 --server localhost:30002 \
 --account admin \
 --chain_id 1020 \
  publish ./build/main.js ./build/main.json
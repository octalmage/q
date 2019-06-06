#!/bin/bash
# https://developers.iost.io/docs/en/4-running-iost-node/LocalServer.html
export IOST_HOST="http://localhost:30001"
docker run -it --rm -p 30000-30003:30000-30003 iostio/iost-node
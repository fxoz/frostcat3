#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/

cd /home/frostcat
screen -dmS fc /root/.bun/bin/bun start >> /home/frostcat/startup.log 2>&1

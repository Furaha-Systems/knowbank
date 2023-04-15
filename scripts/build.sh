#!/bin/bash

npm update -g
npm install -g pnpm
pnpm install
pnpm run build

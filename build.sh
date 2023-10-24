#!/usr/bin/env sh

bun install && bun run build && docker build -t waltid/vc-repository . && docker push waltid/vc-repository

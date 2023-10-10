#!/bin/bash
start_api() {
    cd api && pnpm run dev
}

start_app() {
    cd app && pnpm run dev
}

start_api & start_app && fg
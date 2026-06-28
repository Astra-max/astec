#!/bin/bash

red=$(tput setaf 1)
green=$(tput setaf 5)
reset=$(tput sgr0)

/**
 * Handles ping server
 */
function ping_server() {
	curl -o server-call.log "http://localhost:5500/api" 2> server-call.log || > /dev/null
}

ping_server

/**
 * Handles start server
 */
function start_server() {
	echo "[#] ${green}Restarting the server....${reset}"
	cd backend/ && npm run dev &
	client
}

/**
 * Handles client
 */
function client() {
	echo "[#] ${green}backend server running....${reset}"
	echo "[#] ${green}starting client server....${reset}"
	cd new-app/ && npm start 2> /dev/null
}

/**
 * Handles server call
 */
function server_call() {
	if cat server-call.log | grep "Failed" > /dev/null
	then
	echo "[!] ${red}server offline${reset}"
	start_server
	else
	client
	fi
}

server_call

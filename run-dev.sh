#! /bin/sh
# PROJECT_PATH = "/Users/chen/code/react/Aday"
# cd JAVA_HOME
# shutdown the pre process
node_name=$(lsof -i:8080|tail -1|awk '"$1"!=""{print $2}')
npm_name=$(lsof -i:8081|tail -1|awk '"$1"!=""{print $2}')
if [ -z $node_name ]
then
	    kill -9 $node_name
        echo "Process name=$name($id) kill!"
        node ./server/node_server.js
        echo "node_server is running" 
elif  [ -z $npm_name ]
then
        
        kill -9 $npm_name
        echo "Process name=$name($id) kill!"
        open npm-dev.sh
        echo "npm is running"
else
		echo "No process can be used to killed!"
		node ./server/node_server.js 
		echo "node_server is running"
		open npm-dev.sh
		echo "npm is running"
fi


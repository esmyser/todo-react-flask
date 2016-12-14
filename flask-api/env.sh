#!/bin/bash
function run()
{
    case $1 in
        dev ) 
            ;;
        prod ) 
            export FLASK_APP='app.py'
            export DATABASE_URL='postgres://nzqtmpvzrcpbzl:711be0f24cdafd5d66457c4beef4ffe234bd6a44f2b3b28962758c77612e9a7a@ec2-54-235-153-124.compute-1.amazonaws.com:5432/d5vuk62aknhe1g'
            ;;
    esac
}
run $1
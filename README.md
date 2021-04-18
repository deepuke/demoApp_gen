# demoApp_gen
Typescript, Webpack, Jest, npm, node


## Docker setup 
    Basic helps cmd : docker --help / docker

    Always used cmds
    docker 
        CMD: 
            pull, run, ps, stats, network, images, start, stop
        Flags : 
            -d = ditach mode 
            -p = port of the host can be set  
                .e.g  "docker run -p<host-port>:<container-port>
            -a = all containers
            -e = ENV param setups
            --name <name>
        debug:
            logs <id|name>
            exec -it <id|name> /bin/bash 
        

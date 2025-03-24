if [[ $1 == "start" ]]; then
    echo "DATABASE_URL=postgresql://$2:$3@localhost:5432/$4?schema=public
MERCADO_PAGO_ACCESS_TOKEN=$5
PORT=$6
    
DB_USER=$2
DB_PASSWORD=$3
DB=$4

    " > .env && docker-compose up -d
else
    echo "./start.sh start <user> <password> <db> <mercado_pago_acess_token> <port_server>"
fi
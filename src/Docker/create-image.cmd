docker build --no-cache -f SQL\Dockerfile.PostgreSql -t pr/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t pr/app ../..

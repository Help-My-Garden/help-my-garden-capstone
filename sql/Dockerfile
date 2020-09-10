FROM mysql
#Make sure to update this to match your project.
COPY project.sql /docker-entrypoint-initdb.d/
COPY ./dump.sql /dump.sql
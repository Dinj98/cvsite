# Start with Node.js 22 as the base image
FROM node:22

# Install basic development tools and MySQL
RUN apt update && apt install -y less man-db sudo default-mysql-server

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Create directory for MySQL data
RUN mkdir -p /var/lib/mysql /var/run/mysqld \
    && chown -R mysql:mysql /var/lib/mysql /var/run/mysqld \
    && chmod 777 /var/run/mysqld

# Set up MySQL
RUN mysqld --initialize-insecure

# Expose MySQL port
EXPOSE 3306

# Start MySQL and your Node.js application
CMD service mysql start && tail -f /dev/null

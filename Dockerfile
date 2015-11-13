FROM centos:7
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
RUN nvm install node
ADD . /opt/node-test
WORKDIR /opt/node-test
RUN node .

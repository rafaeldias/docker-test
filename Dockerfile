FROM centos:7
#install nodejs
RUN yum install -y epel-release
RUN yum install -y nodejs

#add workdir
ADD . /opt/node-test
WORKDIR /opt/node-test

#config app
EXPOSE 3000
CMD node .

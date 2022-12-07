# Container image
FROM ubuntu:22.04

RUN apt update
RUN apt upgrade -y

ARG DEBIAN_FRONTEND=noninteractive
USER root
RUN apt install -y curl unzip xvfb libxi6 libgtk-3-dev libgconf-2-4 libdbus-glib-1-2 gnupg wget ffmpeg

# RUN apt install -y curl unzip 

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get install --yes nodejs

RUN apt install -y firefox 

#---------------------------
# Dependencies for headless
#---------------------------

RUN apt-get update && \
    headlessDeps=' \
      imagemagick \
      xvfb \
    ' && \
    apt-get install -y --no-install-recommends $headlessDeps && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/*

#============================================
# Dumping Browser name and version for config
#============================================
# RUN echo "firefox" > /opt/selenium/browser_name

# Copies entrypoint script
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
RUN chmod +x entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
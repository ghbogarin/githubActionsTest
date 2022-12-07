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

ARG GECKODRIVER_VERSION=latest
RUN GK_VERSION=$(if [ ${GECKODRIVER_VERSION:-latest} = "latest" ]; then echo "0.32.0"; else echo $GECKODRIVER_VERSION; fi) \
  && echo "Using GeckoDriver version: "$GK_VERSION \
  && wget --no-verbose -O /tmp/geckodriver.tar.gz https://github.com/mozilla/geckodriver/releases/download/v$GK_VERSION/geckodriver-v$GK_VERSION-linux64.tar.gz \
  && rm -rf /opt/geckodriver \
  && tar -C /opt -zxf /tmp/geckodriver.tar.gz \
  && rm /tmp/geckodriver.tar.gz \
  && mv /opt/geckodriver /opt/geckodriver-$GK_VERSION \
  && chmod 755 /opt/geckodriver-$GK_VERSION \
  && ln -fs /opt/geckodriver-$GK_VERSION /usr/bin/geckodriver


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

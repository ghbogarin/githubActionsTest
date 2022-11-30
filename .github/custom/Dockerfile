# Container image
FROM ubuntu:20.04

RUN apt update
RUN apt upgrade -y

ARG DEBIAN_FRONTEND=noninteractive
USER root
RUN cat /etc/hosts
RUN apt install -y curl unzip xvfb libxi6 libgtk-3-dev libgconf-2-4 libdbus-glib-1-2 gnupg wget ffmpeg

# RUN apt install -y curl unzip 

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get install --yes nodejs


# Install Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list && \
  apt-get update -y && \
  apt-get install -y google-chrome-stable

#===============
# Gecko Driver
#===============

ENV GECKODRIVER_VERSION 0.31.0
RUN apt-get update && \
    apt-get install -y --no-install-recommends unzip && \
    apt-get install -y --no-install-recommends \
      bzip2 \
      libgconf-2-4 \
      libglib2.0-dev \
      libnss3-dev \
      libxi6 \
      xvfb \
    && \
    rm -rf /var/lib/apt/lists/* \
            /var/cache/apt/* && \
    wget https://github.com/mozilla/geckodriver/releases/download/v$GECKODRIVER_VERSION/geckodriver-v$GECKODRIVER_VERSION-linux64.tar.gz && \
    tar -zxvf geckodriver-v$GECKODRIVER_VERSION-linux64.tar.gz && \
    mv geckodriver /usr/local/bin/ && \
    chmod +x /usr/local/bin/geckodriver && \
    rm geckodriver-v$GECKODRIVER_VERSION-linux64.tar.gz && \
    apt-get purge -y --auto-remove bzip2

#==========
# Firefox
#==========

RUN wget https://ftp.mozilla.org/pub/firefox/releases/106.0.2/linux-x86_64/en-GB/firefox-106.0.2.tar.bz2
RUN tar xjf firefox-106.0.2.tar.bz2
RUN mv firefox /opt
RUN ln -s /opt/firefox/firefox /usr/local/bin/firefox
RUN wget https://raw.githubusercontent.com/mozilla/sumo-kb/main/install-firefox-linux/firefox.desktop -P /usr/local/share/applications

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


RUN cat /etc/hosts


#============================================
# Dumping Browser name and version for config
#============================================
# RUN echo "firefox" > /opt/selenium/browser_name

# Copies entrypoint script
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
RUN chmod +x entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
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

ENV FF_LANG="en-US" \
    FF_BASE_URL="https://archive.mozilla.org/pub" \
    FF_PLATFORM="linux-x86_64" \
    FF_INNER_PATH="firefox/releases" \
    FF_VERSION="105.0.1"

ENV FF_COMP="firefox-${FF_VERSION}.tar.bz2"
ENV FF_URL="${FF_BASE_URL}/${FF_INNER_PATH}/${FF_VERSION}/${FF_PLATFORM}/${FF_LANG}/${FF_COMP}"

RUN apt-get update && \
    apt-get install -y --no-install-recommends unzip && \
    apt-get install -y --no-install-recommends \
      bzip2 \
    && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/* && \
    wget "${FF_URL}" \
      -O /tmp/firefox-linux.tar.bz2 && \
    tar -xvf /tmp/firefox-linux.tar.bz2 -C /opt && \

    ln -s /opt/firefox/firefox /usr/bin/firefox && \
    chmod +x /usr/bin/firefox && \
    rm /tmp/firefox-linux.tar.bz2 && \
    apt-get purge -y --auto-remove bzip2


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
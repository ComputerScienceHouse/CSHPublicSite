# syntax=docker/dockerfile:1

FROM debian:bookworm-slim AS builder
ARG HUGO_VERSION=0.163.3
RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates curl \
    && curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-amd64.tar.gz" \
       | tar -xz -C /usr/local/bin hugo \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /site
COPY . /site/
RUN hugo --gc --minify --destination /site/public \
    && rm -f /site/public/.hugo_build.lock

FROM httpd:2.4
RUN apt-get update \
    && apt-get install -y --no-install-recommends sssd libnss-sss libpam-sss \
    && rm -rf /var/lib/apt/lists/*
RUN rm -rf /usr/local/apache2/htdocs/*
COPY --from=builder /site/public/ /usr/local/apache2/htdocs/
COPY httpd-suffix.conf /usr/local/apache2/conf/httpd-suffix.conf
RUN cat /usr/local/apache2/conf/httpd-suffix.conf >> /usr/local/apache2/conf/httpd.conf
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

VOLUME ["/users"]

EXPOSE 80
ENTRYPOINT ["/usr/bin/bash", "/entrypoint.sh"]
CMD ["httpd-foreground"]

FROM docker.io/jekyll/builder as builder

RUN gem install bundler:2.2.3

RUN mkdir /site; \
    chown -R jekyll:jekyll /site
WORKDIR /site

COPY Gemfile Gemfile.lock /site/
RUN bundle install

COPY . /site/

RUN bundle exec rake build:production 

FROM docker.io/httpd:2.4

RUN apt update && apt install -y sssd

RUN rm -rf /usr/local/apache2/htdocs/*
COPY --from=builder /site/_site/ /usr/local/apache2/htdocs/
COPY httpd-suffix.conf httpd-suffix.conf
RUN cat httpd-suffix.conf >> /usr/local/apache2/conf/httpd.conf
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/usr/bin/bash", "/entrypoint.sh"]
CMD ["httpd-foreground"]

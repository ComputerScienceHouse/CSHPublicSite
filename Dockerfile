FROM jekyll/builder as builder

RUN gem install bundler:2.2.3

RUN mkdir /site; \
    chown -R jekyll:jekyll /site
WORKDIR /site

COPY Gemfile Gemfile.lock /site/
RUN bundle install

COPY . /site/
RUN bundle exec rake build:production 

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /site/_site/ /usr/share/nginx/html


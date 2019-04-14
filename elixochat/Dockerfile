FROM elixir:1.8.1

WORKDIR /app

RUN mix local.hex --force

COPY ./ /app

RUN mix do compile

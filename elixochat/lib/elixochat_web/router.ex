defmodule ElixochatWeb.Router do
  use ElixochatWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ElixochatWeb do
    pipe_through :api
  end
end

defmodule ElixochatWeb.RoomChannel do
  use Phoenix.Channel

  def join("room:lobby", _message, socket) do
    {:ok, socket}
  end

  def handle_in("SEND_MESSAGE", %{"message" => message}, socket) do
    broadcast!(socket, "NEW_MESSAGE", %{message: message})
    {:noreply, socket}
  end
end

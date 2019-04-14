defmodule ElixochatWeb.RoomChannel do
  use Phoenix.Channel

  def join("room:" <> room_name, _message, socket) do
    send(self(), {:after_join, room_name})
    {:ok, socket}
  end

  def handle_info({:after_join, room_name}, socket) do
    push(socket, "JOINED_ROOM", %{room_name: room_name})
    {:noreply, socket}
  end

  def handle_in("SEND_MESSAGE", %{"message" => message}, socket) do
    "room:" <> room_name = socket.topic
    broadcast!(socket, "NEW_MESSAGE", %{message: message, room_name: room_name})
    {:noreply, socket}
  end
end

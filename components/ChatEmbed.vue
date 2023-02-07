<template>
  <div class="w-full rounded-xl h-80 bg-gray-700 relative">
    <span
      v-if="connected && authenticated"
      class="bg-primary absolute top-0 right-0 font-bold rounded-xl p-2"
      >CONNECTED!</span
    >
    <span
      v-else-if="error"
      class="bg-red-500 absolute top-0 right-0 font-bold rounded-xl p-2"
      >ERROR!</span
    >
    <span
      v-else
      class="bg-yellow-500 absolute top-0 right-0 font-bold rounded-xl p-2"
      >CONNECTING</span
    >

    <div class="flex flex-col h-full">
      <div class="flex-1 overflow-y-auto space-y-2">
        <div v-for="message in messages" class="px-2">
          <span class="font-bold">{{ message.username }}: </span>
          <span>{{ message.content }}</span>
        </div>
      </div>

      <form class="flex" @submit.prevent="sendMessage">
        <input
          v-model="content"
          type="text"
          class="w-full rounded-xl rounded-r-none p-2 text-black"
          placeholder="Type a message..."
          :disabled="!authenticated"
        />
        <button
          type="submit"
          class="bg-primary rounded-l-none rounded-xl w-40 p-2"
          :disabled="!authenticated"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
  data() {
    return {
      sockets: null,
      connected: false,
      authenticated: true,
      error: false,
      content: "",
      messages: [],
    };
  },
  async mounted() {
    if (!this.$store.state.token) {
      await this.$store.dispatch("token");
    }

    this.sockets = io("https://api.pacificprofit.us");

    this.sockets.on("connect", () => {
      this.connected = true;
      this.sockets.emit("authenticate", this.$store.state.token);
    });

    this.sockets.on("disconnect", () => {
      this.connected = false;
      this.authenticated = false;
    })

    this.sockets.on("authenticated", () => {
      this.authenticated = true;
    });

    this.sockets.on("message", (data) => {
      this.messages.push(data);
    });

    this.sockets.on("error", (err) => {
      console.error(err);
      this.error = true;
    })
  },
  methods: {
    sendMessage() {
      if (this.content && this.content.length > 0)
        this.sockets.emit("message", this.content);

      this.content = "";
    },
  },
};
</script>

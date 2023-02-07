<template>
  <div
    class="rounded-xl bg-[#212B36] p-4 flex flex-col border relative"
    :class="deal.important ? 'border-red-500' : 'border-primary'"
  >
    <span
      v-if="deal.important"
      class="bg-red-500 absolute top-0 right-0 font-extrabold rounded-xl p-2"
      >HOT PRICE!</span
    >

    <img :src="deal.image" class="w-60 h-60 mx-auto rounded-xl p-2" />

    <p class="font-bold text-4xl text-center">{{ deal.discounted }}</p>
    <p class="font-lg text-2xl text-center">
      {{ deal.title.substring(0, 30) }}..
    </p>

    <div class="my-2">
      <p
        class="text-lg whitespace-nowrap overflow-hidden text-ellipsis"
        v-for="k in Object.keys(deal).filter(
          (k) =>
            k !== 'image' && k !== 'url' && k !== 'ASIN' && k !== 'important'
        )"
      >
        <b>{{ k.charAt(0).toUpperCase() + k.slice(1) }}: </b>{{ deal[k] }}
      </p>
    </div>

    <button
      class="mt-auto w-3/4 h-10 rounded-full mx-auto block self-end"
      @click="redirect(deal.url)"
      :class="deal.important ? 'bg-red-500' : 'bg-primary'"
    >
      Shop Now!
    </button>
  </div>
</template>

<script>
export default {
  props: {
    deal: {
      type: Object,
      required: true,
    },
  },
  methods: {
    redirect(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

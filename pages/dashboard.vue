<template>
    <div class="min-h-[100vh] w-full bg-[#202020] text-white">
        <div class="p-10 md:space-x-36 flex">
            <div class="h-full space-y-4 hidden md:block">
                <h1 class="font-bold text-2xl">Deals</h1>
                <div class="ml-4">
                    <h2 class="font-bold text-lg">Amazon</h2>
                    <ul class="list-disc list-inside">
                        <li class="cursor-pointer" v-for="(item, i) in amazonCategories" :key="i"
                            @click="selected(item, 'amazon')">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <div class="ml-4">
                    <h2 class="font-bold text-lg">Amazon Warehouse</h2>
                    <ul class="list-disc list-inside">
                        <li class="cursor-pointer" v-for="(item, i) in amazonWarehouseCategories" :key="i"
                            @click="selected(item, 'warehouse')">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="w-full md:w-2/3 space-y-6" v-if="!select">
                <div class="w-full">
                    <h1 class="font-bold text-2xl">
                        <font-awesome-icon icon="fa-solid fa-newspaper" class="mr-2" />
                        Latest Announcements
                    </h1>

                    <div class="ml-10 w-full text-xl" v-for="(announcement, index) in announcements" :key="index">
                        <p class="w-full flex">
                        <p class="whitespace-nowrap overflow-hidden text-ellipsis" :aria-label="announcement.content">{{
                            announcement.content
                        }}</p>
                        <p class="ml-20 font-thin">{{ new Date(announcement.date).toLocaleDateString() }}</p>
                        </p>
                    </div>
                </div>

                <div class="w-full space-y-6">
                    <h1 class="font-bold text-2xl">
                        <font-awesome-icon icon="fa-solid fa-bell" class="mr-2" />
                        Resellable flips
                    </h1>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between">
                        <div class="rounded-xl bg-[#212B36] p-4 flex flex-col border relative border-primary"
                            v-for="flip in flips">
                            <img :src="flip.image" class="w-60 h-60 mx-auto rounded-xl p-2" />

                            <p class="font-bold text-4xl text-center">${{ flip.price }}</p>
                            <p class="font-lg text-2xl text-center">{{ flip.name }}</p>

                            <div class="my-2">
                                <p class="text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                                    <b>Site Name: </b>{{ flip.site }}
                                </p>
                                <p class="text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                                    <b>Possible Profit: </b>{{ flip.profit }}
                                </p>
                                <p class="text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                                    <b>Risk Factor: </b>{{ flip.risk }}
                                </p>
                            </div>

                            <button class="mt-auto w-3/4 h-10 rounded-full mx-auto block self-end bg-primary"
                                @click="redirect(flip.link)">
                                Shop Now!
                            </button>
                        </div>
                    </div>
                </div>

                <ChatEmbed />

            </div>

            <div v-else class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Deal v-for="deal in deals" :key="deal.id" :deal="deal" />
            </div>
        </div>
    </div>
</template>

<script>
import Deal from "@/components/Deal.vue";
import axios from "axios";
import ChatEmbed from "@/components/ChatEmbed.vue";

export default {
    components: {
        Deal,
        ChatEmbed
    },
    data() {
        return {
            select: null,
            flips: [],
            deals: [],
            amazonCategories: [],
            amazonWarehouseCategories: [],
            announcements: [],
        };
    },
    async mounted() {
        const { data } = await axios.get("https://api.pacificprofit.us/auth/user");
        if (!data.user) return this.$router.push("/login");
        if (!data.user.premium) return this.$router.push("/premium");

        axios.get("https://api.pacificprofit.us/announcements").then((res) => {
            this.announcements = res.data.announcements;
        });

        axios.get("https://api.pacificprofit.us/categories").then((res) => {
            this.amazonCategories = res.data.amazon;
            this.amazonWarehouseCategories = res.data.warehouse;
        });

        axios.get("https://api.pacificprofit.us/flips").then((res) => {
            this.flips = res.data.flips;
        });
    },
    methods: {
        selected(item, site) {
            this.select = site;

            axios
                .post("https://api.pacificprofit.us/scraper", {
                    category: site,
                    name: item,
                })
                .then((res) => {
                    this.deals = res.data.deals.map(deal => {
                        deal.date = new Date(deal.date).toLocaleDateString();
                        return deal;
                    });
                });
        },
        redirect(url) {
            window.open(url, "_blank");
        },
    },
};
</script>
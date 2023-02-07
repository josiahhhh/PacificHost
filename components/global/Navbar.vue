<template>
    <header id="top">
        <div id="mcder-mobNav" class="mcder-mobNav-overlay">
            <div class="mcder-mobNav-overlay-content">
                <a @click="closeMobNav()" href="#top">Home</a>
                <a @click="closeMobNav()" href="#perks">Perks</a>
                <a @click="closeMobNav()" href="#pricing">Pricing</a>
                <a @click="closeMobNav()" href="#faq">FAQs</a>
                <a @click="closeMobNav()" href="#reviews">Testimonials</a>
                <a @click="
    closeMobNav();
openLoginModal();
                " class="btn btn-primary" href="#">Login</a>
                <a @click="
    closeMobNav();
openRegisterModal();
                " class="btn btn-primary" href="#">Sign Up</a>
            </div>
        </div>
        <nav id="mainNav">
            <div class="navbar container">
                <div class="logobrand">
                    <img src="/img/logo.svg" alt="Logo" />
                    <p><span>Pacific</span>Profit</p>
                </div>
                <div class="nav">
                    <div class="mobNavBar mob-vis" @click="openMobNav()">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <a href="#top">Home</a>
                    <a href="#perks">Perks</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQs</a>
                    <a href="#reviews">Testimonials</a>
                    <div id="openLoginModal" @click="openLoginModal()" class="highlight btn btn-primary" href="">
                        Login
                    </div>
                    <div id="openLoginModal" @click="openRegisterModal()" class="highlight btn btn-secondary" href="">
                        Sign Up
                    </div>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="hero" data-aos="fade-right">
                <div class="prehead">Lorem ipsum dolor sit</div>
                <h1>Lorem ipsum dolor sit amet cons</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus
                    beatae tempora consequuntur itaque laudantium nam natus veritatis quam
                    odio!
                </p>
                <div class="buttonrow flex">
                    <a class="btn btn-primary" href="#">Subscribe Now</a><a href="#">Learn More</a>
                </div>
            </div>
        </div>
    </header>
    <ModulesRegisterModal @close-modal="closeRegisterModal()" />
    <ModulesLoginModal @close-modal="closeLoginModal()" />
</template>

<script setup lang="ts">
function openMobNav() {
    document.getElementById("mcder-mobNav")!.style.height = "100%";
}

function closeMobNav() {
    document.getElementById("mcder-mobNav")!.style.height = "0%";
}

function openLoginModal() {
    document.getElementById("loginModal")?.classList.add("flex");
    document.body?.classList.add("modal-open");
}

function closeLoginModal() {
    document.getElementById("loginModal")?.classList.remove("flex");
    document.body?.classList.remove("modal-open");
}

function openRegisterModal() {
    document.getElementById("registerModal")?.classList.add("flex");
    document.body?.classList.add("modal-open");
}

function closeRegisterModal() {
    document.getElementById("registerModal")?.classList.remove("flex");
    document.body?.classList.remove("modal-open");
}

</script>

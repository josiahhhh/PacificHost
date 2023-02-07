<template>
  <section id="stats">
    <div class="container">
      <div class="statItem">
        <img class="sml-blob" src="/img/blob.svg" alt="" />
        <div class="statNum">
          <span class="autoCount">
            <vue3-autocounter
              ref="counter"
              :startAmount="0"
              :endAmount="50"
              :duration="3"
              suffix="+"
              separator=","
              decimalSeparator="."
              :decimals="2"
              :autoinit="true"
              @finished="alert(`Counting finished!`)"
            />
          </span>
        </div>
        <div class="statDesc">Customers</div>
      </div>
      <div class="statItem">
        <img class="sml-blob" src="/img/blob.svg" alt="" />
        <div class="statNum">
          <span class="autoCount">
            <vue3-autocounter
              ref="counter"
              :startAmount="0"
              :endAmount="15000"
              :duration="3"
              prefix="$"
              separator=","
              decimalSeparator="."
              :decimals="2"
              :autoinit="true"
              @finished="alert(`Counting finished!`)"
            /> </span
          >+
        </div>
        <div class="statDesc">Saved</div>
      </div>
      <div class="statItem">
        <img class="sml-blob" src="/img/blob.svg" alt="" />
        <div class="statNum">
          <span class="autoCount"
            ><vue3-autocounter
              ref="counter"
              :startAmount="0"
              :endAmount="95"
              :duration="3"
              separator=","
              decimalSeparator="."
              :decimals="2"
              :autoinit="true"
              @finished="alert(`Counting finished!`)" /></span
          >%
        </div>
        <div class="statDesc">Satisfaction Rate</div>
      </div>
    </div>
  </section>
  <section id="perks">
    <img class="blob" src="/img/blob.svg" alt="" />
    <div class="container flex-col">
      <div class="sectionTitleCont" data-aos="fade-up">
        <div class="sectionTitle">
          What makes us <span class="primary">unique</span>?
        </div>
        <div class="sectionSubtitle">
          Our prices are balanced on what you'll get, nothing less nothing more
        </div>
      </div>
    </div>
    <div class="perkList container">
      <div class="perkItem" data-aos="fade-up">
        <img class="perkImg" src="/img/features/discount.svg" alt="" />
        <div class="perkName">Huge Discounts</div>
        <div class="perkDesc">Get up to 100% off on your favorite items</div>
      </div>
      <div class="perkItem" data-aos="fade-up">
        <img class="perkImg" src="/img/features/notification.svg" alt="" />
        <div class="perkName">Get Notifications</div>
        <div class="perkDesc">Get notifications when a new item is out</div>
      </div>
      <div class="perkItem" data-aos="fade-up">
        <img class="perkImg" src="/img/features/value.svg" alt="" />
        <div class="perkName">Resell Value</div>
        <div class="perkDesc">Know what item can be reselled and its value</div>
      </div>
      <div class="perkItem" data-aos="fade-up">
        <img class="perkImg" src="/img/features/error.svg" alt="" />
        <div class="perkName">Price Errors</div>
        <div class="perkDesc">
          Be the first to know when an item is mistakenly priced
        </div>
      </div>
    </div>
  </section>
  <section id="aboutus">
    <img class="blob" src="/img/blob.svg" alt="" />
    <div class="container">
      <div class="aboutusInfo flex-col" data-aos="fade-right">
        <div class="sectionTitleCont text-left">
          <div class="sectionTitle">
            How does it <span class="primary">Work</span>
          </div>
          <div class="sectionSubtitle">
            Learn more about what we do and who we are
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          autem distinctio, reprehenderit odit enim voluptates explicabo totam,
          qui dolorum eos libero laudantium ipsa, odio dolor exercitationem
          iure. Maiores, commodi voluptatibus.
        </p>
      </div>
      <div class="aboutusImg" data-aos="flip-left">
        <img src="/img/aboutus.png" alt="" />
        <img src="/img/aboutus.png" alt="" />
      </div>
    </div>
  </section>
  <section id="pricing">
    <div class="container flex-col">
      <div class="sectionTitleCont" data-aos="fade-up">
        <div class="sectionTitle">Our <span class="primary">Pricing</span></div>
        <div class="sectionSubtitle">
          Our prices are balanced on what you'll get, nothing less nothing more
        </div>
      </div>
      <div class="pricingCont flex">
        <div class="pricingItem" data-aos="fade-up">
          <div class="priceName">Basic</div>
          <div class="pricePrice">$10 <span>/month</span></div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <a class="priceBtn" href="#">Buy Now</a>
        </div>
        <div class="pricingItem" data-aos="fade-up">
          <div class="priceName">Basic</div>
          <div class="pricePrice">$10<span>/month</span></div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <a class="priceBtn" href="#">Buy Now</a>
        </div>
        <div class="pricingItem" data-aos="fade-up">
          <div class="priceName">Basic</div>
          <div class="pricePrice">$10<span>/month</span></div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <a class="priceBtn" href="#">Buy Now</a>
        </div>
        <div class="pricingItem" data-aos="fade-up">
          <div class="priceName">Basic</div>
          <div class="pricePrice">$10<span>/month</span></div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <div class="pricePoint">Lorem ipsum dolor</div>
          <a class="priceBtn" href="#">Buy Now</a>
        </div>
      </div>
    </div>
  </section>
  <section id="faq">
    <img class="blob" src="/img/blob.svg" alt="" />
    <div class="container flex-col">
      <div class="sectionTitleCont" data-aos="fade-up">
        <div class="sectionTitle">
          Frequently <span class="primary">Asked</span> Questions
        </div>
        <div class="sectionSubtitle">Any Questions? Answered</div>
      </div>
      <div class="faqCont flex">
        <div class="faqAccordian" data-aos="fade-up">
          <Accordion
            title="Lorem ipsum dolor sit amet."
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Accordion
            title="Lorem ipsum dolor sit amet."
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Accordion
            title="Lorem ipsum dolor sit amet."
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Accordion
            title="Lorem ipsum dolor sit amet."
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </div>
  </section>
  <section id="reviews">
    <div class="container flex-col">
      <div class="sectionTitleCont" data-aos="fade-up">
        <div class="sectionTitle">
          What our <span class="primary">Customers</span> Say
        </div>
        <div class="sectionSubtitle">See what our clients says about us</div>
      </div>
      <div class="owl-carousel" data-aos="fade-up">
        <Carousel :items-to-show="2.5" :wrap-around="true">
          <Slide v-for="slide in 10" :key="slide" :wrap-around="true">
            <div class="reviewItem flex-col">
              <img class="reviewImg" src="/img/reviews/a.png" />
              <div class="rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
                ><i class="fa-solid fa-star"></i>
              </div>
              <div class="review">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                libero cupiditate recusandae aliquam ducimus eveniet incidunt
                modi sapiente inventore magnam!
              </div>
              <img class="reviewerImg" src="img/reviews/1.png" alt="" />
              <div class="reviewer">- John Doe</div>
            </div>
          </Slide>
          <div class="reviewItem flex-col">
            <img class="reviewImg" src="img/reviews/a.png" />
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i>
            </div>
            <div class="review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              libero cupiditate recusandae aliquam ducimus eveniet incidunt modi
              sapiente inventore magnam!
            </div>
            <img class="reviewerImg" src="img/reviews/1.png" alt="" />
            <div class="reviewer">- John Doe</div>
          </div>
          <div class="reviewItem flex-col">
            <img class="reviewImg" src="img/reviews/a.png" />
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i>
            </div>
            <div class="review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              libero cupiditate recusandae aliquam ducimus eveniet incidunt modi
              sapiente inventore magnam!
            </div>
            <img class="reviewerImg" src="img/reviews/1.png" alt="" />
            <div class="reviewer">- John Doe</div>
          </div>
          <div class="reviewItem flex-col">
            <img class="reviewImg" src="img/reviews/a.png" />
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i>
            </div>
            <div class="review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              libero cupiditate recusandae aliquam ducimus eveniet incidunt modi
              sapiente inventore magnam!
            </div>
            <img class="reviewerImg" src="img/reviews/1.png" alt="" />
            <div class="reviewer">- John Doe</div>
          </div>
          <div class="reviewItem flex-col">
            <img class="reviewImg" src="img/reviews/a.png" />
            <div class="rating">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i>
            </div>
            <div class="review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              libero cupiditate recusandae aliquam ducimus eveniet incidunt modi
              sapiente inventore magnam!
            </div>
            <img class="reviewerImg" src="img/reviews/1.png" alt="" />
            <div class="reviewer">- John Doe</div>
          </div>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Vue3autocounter from "vue3-autocounter";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,

    "vue3-autocounter": Vue3autocounter,
  },
};
</script>

<style>
.carousel__item {
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

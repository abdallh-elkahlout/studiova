<template>
  <v-card class="pricing-card pa-8">
    <div class="card-head">
      <v-card-title>{{ title }}</v-card-title>
      <v-chip v-if="popular" class="popular-chip">most popular</v-chip>
    </div>

    <div class="priceSection d-flex">
      <div class="oldPrice" v-if="oldPrice">
        {{ oldPrice }}
      </div>
      <div class="price">{{ price }}$ <span class="per">/month</span></div>
    </div>

    <p class="desc">
      {{ description }}
      experience.
    </p>

    <v-divider class="my-5" />

    <p class="includes">What’s Included:</p>

    <v-list lines="one">
      <v-list-item v-for="(item, i) in features" :key="i">
        <template #prepend>
          <v-img
            src="/images/icons/check.png"
            width="28"
            height="28"
            class="me-3"
          />
        </template>
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-card-actions>
      <div class="btn">
        <span class="btn-text">Subscribe Now</span>
        <v-img
          class="img"
          src="/images/svgs/arrow-icon.svg"
          width="60"
          height="60"
        />
      </div>
    </v-card-actions>
  </v-card>
</template>
<script setup>
defineProps({
  title: String,
  price: Number,
  oldPrice: Number,
  description: String,
  features: {
    type: Array,
    required: true,
  },
  popular: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.pricing-card {
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-head {
  min-height: 48px;
  display: flex;
  align-items: center;
}

.badge-placeholder {
  width: 110px;
  height: 32px;
}

.popular-chip {
  background: black;
  color: white;
  font-size: 14px;
}

.price {
  font-size: 38px;
  font-weight: 800;
}
.oldPrice {
  font-size: 38px;
  font-weight: 800;
  margin-right: 15px;
  text-decoration: line-through;
  color: #858c8f;
}

.per {
  font-size: 18px;
  color: #858c8f;
}

.desc {
  font-size: 18px;
  color: #1f2a2e;
  margin-top: 10px;
}

.includes {
  font-size: 18px;
  font-weight: 500;
}

.v-card-actions {
  margin-top: auto;
}
.btn {
  background-color: #c1ff72;
  text-transform: none;
  margin-top: 40px;
  margin-left: 15px;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  height: 65px;
  width: 340px;
  padding: 2px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.btn:hover {
  background-color: black;
  color: white;
  border: white 1px solid;
  font-size: 17px;
}
.btn-text,
.btn .img {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.btn .btn-text {
  font-size: 20px;
  transform: translateX(40px);
}
.btn .img {
  transform: translateX(50px);
}
.btn:hover .btn-text {
  transform: translateX(120px);
}
.btn:hover .img {
  transform: translateX(-190px);
  content: url("/images/svgs/arrow.png");
}
</style>

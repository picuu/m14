<script setup></script>

<template>
  <div class="q-pa-md">
    <q-card>
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton class="post-image-skeleton" square />

      <q-card-actions align="right" class="q-gutter-md">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<style scoped>
.q-card {
  width: 100%;
  box-shadow: none;
}

.post-image-skeleton {
  height: auto;
  width: 100%;
  aspect-ratio: 1;
}
</style>

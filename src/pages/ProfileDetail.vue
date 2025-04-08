<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { SecondaryHeader } from 'components'
import { useUser, useUserPosts } from '../composables'

const { userId } = defineProps({
  userId: String,
})

const router = useRouter()
const { user, getUser } = useUser()
const { userPosts: posts, getUserPosts } = useUserPosts()

getUser(userId)
getUserPosts(userId)

const username = computed(() => user.value.firstName.toLowerCase())
const fullName = computed(() => `${user.value.firstName} ${user.value.lastName}`)
const followers = () => Math.floor(Math.random() * 999)
const following = () => Math.floor(Math.random() * 399)

const postsAmount = computed(() => posts.value.data.length)

const handlePostClick = (postId) => router.push(`/post/${postId}`)
</script>

<template>
  <q-page>
    <template v-if="'id' in user && 'data' in posts">
      <SecondaryHeader :title="username" />

      <main class="main">
        <section class="user-info">
          <header class="user-info--header">
            <q-avatar size="88px">
              <q-img :src="user.picture" spinner-color="white" :alt="user.firstName" />
            </q-avatar>

            <div class="user-header--actions">
              <div class="username">
                <h1>{{ username }}</h1>
                <q-btn icon="more_horiz" />
              </div>

              <div class="buttons">
                <q-btn class="account-button button-primary" label="Follow" />
                <q-btn class="account-button button-secondary" label="Message" />
                <q-btn class="account-button button-mini" icon="person_add" size="xs" />
              </div>
            </div>
          </header>

          <div class="user-info--bio">
            <h2>{{ fullName }}</h2>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit quisquam quia accusantium.<br />
              <span class="tagged-user">@tag_user24</span>
            </p>
          </div>
        </section>

        <section class="user-social">
          <div class="user-social--item">
            <span class="num">{{ postsAmount }}</span>
            <span class="text">posts</span>
          </div>

          <div class="user-social--item">
            <span class="num">{{ followers() }}</span>
            <span class="text">followers</span>
          </div>

          <div class="user-social--item">
            <span class="num">{{ following() }}</span>
            <span class="text">following</span>
          </div>
        </section>

        <section class="user-posts">
          <header class="user-posts--header">
            <div><q-icon name="apps" size="1.75rem" class="icon" /></div>
            <div><q-icon name="movie_filter" size="1.75rem" class="icon" /></div>
            <div><q-icon name="assignment_ind" size="1.75rem" class="icon" /></div>
          </header>

          <main v-if="posts.data.length > 0" class="user-posts--content">
            <q-card
              v-for="post in posts.data"
              :key="post.id"
              square
              flat
              tag="article"
              class="user-post"
              @click="() => handlePostClick(post.id)"
            >
              <q-img :src="post.image" spinner-color="white" :alt="post.tags.join(' ')" ratio="1" />
            </q-card>
          </main>

          <main v-else class="user-posts--content no-content">
            <article class="no-posts-alert">
              <div class="no-posts-icon"></div>
              <h3>There are no posts yet</h3>
            </article>
          </main>
        </section>
      </main>
    </template>

    <template v-else>
      <q-inner-loading :showing="true">
        <q-spinner-gears size="50px" color="light" />
      </q-inner-loading>
    </template>
  </q-page>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  /* gap: 0.6rem; */
  padding-top: 1.25rem;
}

.user-info {
  padding: 0 1rem 0.3rem;
  border-bottom: 1px solid rgba(255 255 255 / 0.15);

  & .user-info--header {
    display: grid;
    grid-template-columns: 110px 1fr;
  }

  & .user-header--actions {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 1.75rem;

    & .username {
      display: flex;
      align-items: last baseline;
    }

    & .username h1 {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1;
    }

    & .buttons {
      display: flex;
      flex-wrap: nowrap;
      gap: 0.5rem;
    }
  }

  & .user-info--bio {
    display: flex;
    flex-direction: column;

    & h2 {
      margin: 0;
      margin-bottom: 0.25rem;
      font-size: 0.85rem;
      font-weight: 600;
      line-height: 1;
    }

    & p {
      font-size: 0.85rem;
      line-height: 1.25;
    }

    & .tagged-user {
      color: rgb(92, 182, 241);
      cursor: pointer;
    }
  }
}

.account-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.9rem;
  background-color: #363636;
  border: none;
  border-radius: 0.5rem;
  font-family: system-ui, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  text-transform: none;
  line-height: 1;

  &.button-primary {
    flex-grow: 1;
    background-color: rgb(0, 149, 246);
    color: #fff;
  }

  &.button-primary:hover {
    background-color: rgb(24, 119, 242);
  }

  &.button-secondary {
    flex-grow: 1;
  }

  &.button-secondary:hover,
  &.button-mini:hover {
    filter: brightness(0.6);
  }

  &.button-mini {
    width: fit-content;
    padding: 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }
}

.user-social {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  justify-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255 255 255 / 0.15);

  & .user-social--item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    /* padding-block: 0.25rem; */

    & .text {
      color: #636363;
    }
  }
}

.user-posts--header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255 255 255 / 0.025);

  & div {
    display: grid;
    place-items: center;
    padding-block: 1rem;
    width: 100%;
    cursor: pointer;
  }

  & div:first-of-type {
    color: rgb(0, 149, 246);
    border-top: 1px solid #fff;
  }
}

.user-posts--content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;

  & .user-post img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  &.no-content {
    display: initial;
  }
}

.no-posts-alert {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding-top: 3rem;

  & .no-posts-icon {
    width: 62px;
    height: 62px;
    background-image: url('../assets/ig-sprite.png');
    background-repeat: no-repeat;
    background-position: -128px -269px;
  }

  & h3 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
  }
}
</style>

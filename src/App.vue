<script setup>
import { reactive, ref } from 'vue'
import ContactsLists from '@/components/ContactsList.vue'
import FilterSearch from '@/components/FilterSearch.vue'
import FormComponent from '@/components/FormComponent.vue'

const contacts = reactive([
  {
    id: Symbol(),
    name: 'Carlos Capó',
    phone: 123456789
  },
  {
    id: Symbol(),
    name: 'John Doe',
    phone: 987654321
  }
])

const filter = ref('')

const handleNewContact = contact => {
  contacts.push(contact)
}
</script>

<template>
  <main>
    <h1>Contact list</h1>

    <FormComponent @addContact="handleNewContact" />
    <FilterSearch v-model="filter" />
    <ContactsLists :contacts="contacts" :filter="filter" />
  </main>

  <footer>
    <small>Carlos Capó</small>
  </footer>
</template>

<style>
main {
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>

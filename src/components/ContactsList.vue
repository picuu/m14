<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  contacts: Array,
  filter: String
})

const filteredContacts = computed(() => {
  return props.contacts
    .toSorted((a, b) => a.name.localeCompare(b.name))
    .filter(contact => contact.name.toLowerCase().includes(props.filter.toLowerCase()))
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th class="contact-phone-header">Phone 📞</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="filteredContacts.length === 0">
        <td class="error-msg" colspan="2">No contacts found</td>
      </tr>
      <tr v-else v-for="contact in filteredContacts" :key="contact.id">
        <td class="contact-name">{{ contact.name }}</td>
        <td class="contact-phone">{{ contact.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  max-width: 425px;
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: rgba(25 220 150 / 0.25);
  color: #eee;
}

th,
td {
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}

th {
  text-align: left;
}

.contact-name {
  font-weight: bold;
}

.contact-phone-header {
  width: 175px;
}

tbody tr:nth-child(odd) {
  background-color: rgba(25 220 150 / 0.05);
}

tbody tr:hover {
  background-color: rgba(25 220 150 / 0.1);
}

tbody tr td:first-child {
  border-right: 1px solid #ccc;
}

.error-msg {
  background-color: rgba(250 25 25 / 0.05);
  border-right: none !important;
  text-align: center;
  color: red;
}
</style>

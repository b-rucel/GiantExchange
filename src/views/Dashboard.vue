<template>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Portfolio" active>
        <b-row>
          <b-col cols="12">
            <h1 class="header-transaction">List of transaction</h1>
          </b-col>
          <b-col cols="12">
            <TransactionTable/>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Funds">
        Tab Contents 2
      </b-tab>
      <b-tab title="Activities">
        Tab Contents 3
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import TransactionTable from '@/components/page-components/Dashboard/TransactionTable.vue';

export default {
  name: 'Dashboard',
  components: {
    TransactionTable,
  },
  data: () => ({

  }),

  methods: {

  },
};
</script>

<style scoped>
  .header-transaction {
    padding-bottom: 30px;
    padding-left: 12px;
  }
</style>

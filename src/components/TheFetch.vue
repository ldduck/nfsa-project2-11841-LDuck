<script>
export default {
  name: 'TheFetch',
  data() {
    return {
      theData: {},
      tempData: {},
      resultSet: [],
      tempResultSet: [],
      currentPage: 1,
      total: 0,
      imgURL: 'https://media.nfsacollection.net/',
      query: 'https://api.collection.nfsa.gov.au/search?limit=25&query=',
      searchString: 'war'
    }
  },

  methods: {
    fetchData() {
      let queryString = this.query + this.searchString + '&page=' + this.currentPage
      fetch(queryString)
        .then((response) => {
          response.json().then((res) => {
            this.$data.tempData = { ...this.$data.tempData, ...res }
            this.$data.tempResultSet = this.$data.tempResultSet.concat(res.results)
            this.$data.total = res.meta.count.total
            if (this.$data.total > 0) {
              if (this.currentPage * 25 < 500 && this.currentPage * 25 < this.$data.total) {
                this.currentPage++
                this.fetchData()
              } else {
                this.$data.theData = this.$data.tempData
                this.$data.tempData = {}
                this.$data.resultSet = this.$data.tempResultSet
                this.$data.tempResultSet = []
                this.currentPage = 1
              }
            } else {
              console.log('no results')
            }
          })
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<template>
  <div class="search">
    <h1 class="green">{{ msg }}</h1>

    <input v-model="searchString" placeholder="query" />
    <button @click="fetchData">fetch data</button>

    <p>Total: {{ total }}</p>

    <ul role="list" class="list-v">
      <li v-for="(result, index) in resultSet" :key="result[index]">
        <p>{{ result['title'] }}</p>
        <p>{{ result['name'] }}</p>
        <img
          v-if="result['preview'] && result['preview'][0]"
          v-bind:src="imgURL + result['preview'][0]['filePath']"
          v-bind:alt="result['name']"
          v-bind:title="result['name']"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>

<script>
export default {
  name: 'TheFetch',
  props: {
    msg: String
  },

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
      searchString: 'search'
    }
  },

  methods: {
    fetchData() {
      // Construct the query string using the current search parameters and page number
      let queryString =
        this.query + this.searchString + '&page=' + this.currentPage + '&hasMedia=yes'

      // Make a fetch request to the constructed query string
      fetch(queryString)
        .then((response) => {
          // Convert the response to JSON
          response.json().then((res) => {
            // Merge the new data into tempData
            this.$data.tempData = { ...this.$data.tempData, ...res }
            // Append the new results to tempResultSet
            this.$data.tempResultSet = this.$data.tempResultSet.concat(res.results)
            // Update the total count of results
            this.$data.total = res.meta.count.total

            // Check if there are any results
            if (this.$data.total > 0) {
              // Check if we need to fetch more pages (limit to 500 results or total results)
              if (this.currentPage * 25 < 500 && this.currentPage * 25 < this.$data.total) {
                // Increment the page number
                this.currentPage++
                // Fetch the next page of data
                this.fetchData()
              } else {
                // If no more pages to fetch, move tempData to theData
                this.$data.theData = this.$data.tempData
                // Clear tempData
                this.$data.tempData = {}
                // Move tempResultSet to resultSet
                this.$data.resultSet = this.$data.tempResultSet
                // Clear tempResultSet
                this.$data.tempResultSet = []
                // Reset the page number
                this.currentPage = 1
              }
            } else {
              // Log if no results were found
              console.log('no results')
            }
          })
        })
        .catch((err) => {
          // Log any errors that occur during the fetch
          console.error(err)
        })
    }
  }
}
</script>

<template>
  <div>
    <input class="searchContainer" id="searchBar" v-model="searchString" placeholder="query" />
    <button class="searchContainer" id="fetchButton" @click="fetchData">Click me!</button>

    <p>Total: {{ total }}</p>

    <ul role="list" class="list-v">
      <li v-for="(result, index) in resultSet" :key="result[index]">
        <h2>{{ result['title'] }}</h2>
        <p>{{ result['name'] }}</p>
        <p>{{ result['id'] }}</p>
        <p>{{ result['subMedium'] }}</p>

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
.searchContainer {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
#fetchButton {
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}
#fetchButton:hover {
  background-color: #555;
  cursor: pointer;
}
#fetchButton:active {
  transform: scale(0.95);
  transition: transform 0.1s;
}
#searchBar {
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  width: 50%;
  font-size: 1.2em;
}

.list-v {
  list-style-type: none;
  padding: 0;
}
</style>

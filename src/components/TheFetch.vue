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
    <div class="searchContainer">
      <input class="searchContainer" id="searchBar" v-model="searchString" placeholder="query" />
      <button class="searchContainer" id="fetchButton" @click="fetchData">Click me!</button>
    </div>

    <p>Total: {{ total }}</p>

    <div v-if="resultSet.length === 0">
      <p>No results found</p>
    </div>
    <div>
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
  </div>
</template>

<style scoped>
/* search bar and button styling */
.searchContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
  flex-direction: column;
  padding: 4em;

  border-bottom: 2px solid green;
}
#fetchButton {
  background-color: #ffffff;
  color: green;
  border: 2px solid green;

  padding: 20px 50px;
  font-weight: bold;
  font-size: 30px;
  margin: auto;
  box-shadow: 0.5rem 0.5rem green;
}
#fetchButton:hover {
  background-color: green;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0.5rem 0.5rem #ffffff;
}
#fetchButton:active {
  transform: scale(0.95);
  transition: transform 0.1s;
}
#searchBar {
  padding: 10px 25px;
  width: 50%;
  text-align: center;

  font-weight: bold;
  font-size: 1em;
  border: 2px solid green;
  color: green;
}
#searchBar:active {
  transform: scale(0.95);
  transition: transform 0.1s;
}
#searchBar:focus {
  outline: none;
}

/* list and content styling */
.list-v {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
}
.list-v img {
  width: 50%;
  height: auto;
  margin: 1em;
  border: 2px solid green;
  /* box-shadow: 0.5rem 0.5rem green; */
}
.list-v h2 {
  /* color: green; */
  font-size: 1.5em;
  font-weight: bold;
}
</style>

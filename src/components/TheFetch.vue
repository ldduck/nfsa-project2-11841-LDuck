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
      searchString: 'I want to find...'
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
      <button class="searchContainer" id="fetchButton" @click="fetchData">search</button>
    </div>
    <div id="resultsInfo">
      <p>Total Results: {{ total }}</p>

      <div v-if="resultSet.length === 0">
        <p>No results found</p>
      </div>
    </div>
    <div class="resultListing">
      <ul role="list" class="list-v">
        <li v-for="(result, index) in resultSet" :key="result[index]">
          <h2 class="resultTitle">{{ result['title'] }}</h2>
          <div>
            <p>{{ result['name'] }}</p>
            <p>{{ result['id'] }}</p>
            <p>{{ result['subMedium'] }}</p>
          </div>

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
  box-shadow: 0.5rem 0.5rem green;

  padding: 20px 50px;
  font-weight: bold;
  font-size: 1.8em;
  margin: auto;
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

  font-weight: regular;
  font-size: 1.3em;
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
#resultsInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
  padding: 1em;
}

/* list and content styling */
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style: none;
  gap: 1em;
}
li {
  max-width: 400px;
  margin: 1em;
  padding: 1em;
  border: 2px solid green;
}
img {
  display: inline-block;
  max-width: 100%;

  border: 2px solid green;
  /* box-shadow: 0.5rem 0.5rem green; */
}
.resultListing {
  border-bottom: 2px solid green;
}

.resultTitle {
  /* color: green; */
  font-size: 1.5em;
  font-weight: bold;
}
/* media queries */
@media (max-width: 1080px) {
  #searchBar {
    width: 100%;
  }
  #fetchButton {
    padding: 10px 25px;
  }
}
</style>

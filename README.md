## Introduction

For this project, we created a functional web application that retrieves data from the NSFA (National Film and Sound Archive of Australia) collection using their API.

## Research and Planning

Initial research primarily involved investigating different frameworks and libraries that could help develop different data visualisations. In particular, a Tag Cloud, Word Cloud, or Bubble Chart that visualises data in interactive methods. Additional secondary planning involved refreshing my basic Javascript and working through online exercises like [Codedex](https://www.codedex.io/) and in-class examples on how to use Vue. Initially, I did not want to overcomplicate the process by considering additional APIs, I wanted to properly work with the NFSA API before adding others. Later on, however, I became more comfortable with the idea of adding additional APIs if one was required.

## Design Decisions

When creating this application, I was determined to utilise interesting data visuals and a simplistic UI to minimise user friction moments. This idea comes with the bonuses of being simple to code and keeping users focused on the content. As discussed later in this rationale, creating data visuals did not work out as intended and a change in how data was displayed was forced, due to developer skill issues and creeping time constraints.

As a result, I focused on creating a simple but working API query and rendered outputs onto my web application. Utilising the in-class tutorials made this section swiftly completed.
When styling the website, I still chose to keep it simple. Inspired by brutalist websites such as [The Brutalist Report](https://brutalist.report/) and "brutalist" (considered brutalist under the brutalist trend) websites like [anytype](https://anytype.io/).

## Implementation and Development

Development was spread over 2 main VSC folders/projects. The first utilised typescript, which caused a significant amount of unexplainable errors as well as supporting a layer of complexity to JavaScript that I likely did not have the skills to utilise properly. Most of my attempts to integrate Tag Clouds through data visualisation libraries such as [D3 by Observable](https://d3js.org/) were on this application.

Due to the aforementioned reasoning, I chose to create a new Vue project without typescript and copied over what I could from the old project. This change was late in the assessment timeline, as such my GitHub commits on this repo will not reflect the entire development journey.

_(I am happy to supply a link to the repo of my first project if additional commit history is needed.)_

My project is a Vue.js project that lets the user search words and get potentially related from the NFSA API and displays it. Currently, it simply searches the database for any data that contains the search words AND contains preview media. Containing preview media is important for reliably displaying visual data.

My application makes use of two main views, a home landing page to inform visitors of the application purpose, and the main search and content display page. This display page was intended for a tag cloud akin to my prototype, however after multiple attempts and many hours of working time, I was unable to understand or utilise D3 effectively to display API-pulled data. However, I am confident that without time constraints and by working on my Javascript fundamentals I would have gotten there.

## Challenges

By far the two biggest obstacles during development were my aforementioned difficulties using the D3 library and my general JavaScript capabilities.

When attempting to utilise D3 I often met unknown errors I didn't know how to fix or VSC not showing errors but not displaying anything despite that. Throughout this process I also resorted to 1:1 copy and pasting examples, connecting them properly through Vue in an attempt to display anything so I could perhaps understand what was wrong, but to no avail no matter what guide was followed. Due to the encroaching due date, I decided to abandon the idea of a Tag Cloud/Word Cloud for the time being and focus on displaying the data I wanted differently.

While this problem was not resolved, It did allow me to gain an immense amount of first-hand knowledge on how libraries work and familiarity with back-end interactions in general. It also humbled me by forcing me to refocus on starting small with website development fundamentals and then work my way up in complexity.

## Conclusion

While the project outcome is a far cry from the intended prototype, I learned a significant amount and drastically improved my coding ability throughout development. The Application is simple in form and function but it does the job as a minimum viable product.

In the future, I would love to continue improving my skills so I can properly utilise D3 for data visualisation. Additionally, adding filters to target and sort entries from specific years would improve usability and user experience significantly.

---

### Additional Resources:

#### D3 Resources

- (https://medium.com/@jhren/d3-data-visualization-in-javascript-use-d3-js-to-create-a-bubble-chart-3fba181faacd)
- https://blog.logrocket.com/data-visualization-vue-js-d3/
- https://d3js.org/getting-started
- https://observablehq.com/@d3/bubble-chart/2

#### Word Cloud Resources

- https://d3-graph-gallery.com/wordcloud.html
- https://www.npmjs.com/package/vuewordcloud

#### Misc Resources

- [W3Schools Vue Tutorials](https://www.w3schools.com/vue/)
- [Vue.js official guides](https://vuejs.org/tutorial/#step-1)
- [MDN Vue getting started](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)

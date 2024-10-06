<script>
export default {
  name: 'landingComponent'
}
</script>

<template>
  <div class="infoContainer">
    <h1 class="infoTitle">National Film and Sound Archive of Australia</h1>
    <div class="lineBreak"></div>
    <h3 class="infoSubtitle">
      The National Film and Sound Archive of Australia (NFSA) is Australia’s national audiovisual
      cultural institution. We collect, preserve and share Australia’s audiovisual culture.
    </h3>

    <div class="infoBody">
      <p>
        Australians were early adopters of film and sound technologies, and the appetite to make,
        enjoy and discuss audiovisual culture remains strong.
      </p>
      <p>
        From our earliest recordings in the 1890s to the latest games and immersive digital
        productions, the NFSA collection represents not only our technical and artistic
        achievements, but also our stories, obsessions and myths; our triumphs and sorrows; who we
        were, are, and want to be. Our memories, preserved with the uncanny immediacy of recorded
        sound and motion pictures.
      </p>
    </div>
  </div>
</template>

<style scoped>
.infoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-bottom: 2px solid green;
}
.infoTitle {
  padding: 20px;
  margin: 1em auto;
  width: 50%;
  text-align: center;

  line-height: 150%;
  font-size: 3em;
  font-weight: bold;

  color: green;
}
.lineBreak {
  width: 100%;
  border-bottom: 2px solid green;
  margin: 1em auto;
}
.infoSubtitle {
  padding: 10px;
  margin: 1em auto;
  width: 80%;
  text-align: center;
  line-height: 150%;

  font-family: 'Chivo', sans-serif;
  font-size: 1.5em;
  font-weight: bold;
}
.infoBody {
  margin: 1em auto;
  width: 80%;
  text-align: center;
  line-height: 120%;

  font-family: 'Chivo', sans-serif;
  color: #666;
}

/* media queries */
@media (max-width: 1024px) {
  h1 {
    font-size: 2rem;
  }
}
</style>

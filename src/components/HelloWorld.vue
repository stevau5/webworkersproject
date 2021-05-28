<template>
  <div>

    <div>Web Workers Testing</div>
    <div>sum: {{sum}}</div>
    <button @click="doComplexCalculation()"> Perform complex calculation </button>
    
    <div>
      <button @click="showHelloWorld()"> show UI stuff </button>
    </div>
    <div>
      <h1 v-show="ifButtonHasBeenClicked">Hello World {{(amountOfTimesClicked)}}</h1>
    </div>

    <div>
      <button @click="showVueLogo()"> add a vue logo </button>
    </div>
    <div v-show="ifOtherButtonHasBeenClicked">
      <img v-for="(i, index) in loop" :key=index alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
import Worker from "worker-loader!./index.worker.js";
const worker = new Worker()
export default {
  name: 'HelloWorld',
  data() {
    return {
      loop: [1],
      sum: 0,
      ifButtonHasBeenClicked: false,
      ifOtherButtonHasBeenClicked: false,
      amountOfTimesClicked: 0,
    }
  },
  methods: {
    showHelloWorld() {
      this.ifButtonHasBeenClicked = true
      this.amountOfTimesClicked += 1
    },
    showVueLogo() {
      this.ifOtherButtonHasBeenClicked = true
      this.loop.push(1)
    },
    doComplexCalculation() {
      // WW
      worker.postMessage("DoSomething");
      worker.onmessage = e => {
        this.sum = e.data
      }

      // Slow Op
      // for (let i = 0; i < 10000000; i++) {
      //   this.sum += i
      // }
    }
  }
}
</script>

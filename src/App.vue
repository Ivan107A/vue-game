<template>
  <div class="app row justify-content-center align-items-center">
    <div class="col-sm-3 roundBlock">
      <ul>
        <li
          class="red"
          :class="{ 'red-click': redBlock === true }"
          @click="() => click(0)"
          data-tile="1"
        ></li>
        <li
          class="blue"
          :class="{ 'blue-click': blueBlock }"
          @click="() => click(1)"
          data-tile="2"
        ></li>
        <li
          class="yellow"
          :class="{ 'yellow-click': yellowBlock }"
          @click="() => click(2)"
          data-tile="3"
        ></li>
        <li
          class="green"
          :class="{ 'green-click': greenBlock }"
          @click="() => click(3)"
          data-tile="4"
        ></li>
      </ul>
    </div>
    <div class="col-sm-4">
      <h1 class="text-info">Round: {{ round }}</h1>
      <button class="btn btn-primary" @click="startGame">Старт</button>
      <div v-if="lose" class="alert alert-danger mt-3">
        Вы проиграли.
      </div>
      <hr />
      <div>
        <h3>Уровень сложности:</h3>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="radio1"
            value="simple"
            v-model="level"
            checked
          />
          <label class="form-check-label" for="radio1">
            Легкий
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="radio2"
            value="middle"
            v-model="level"
          />
          <label class="form-check-label" for="radio2">
            Средний
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id="radio3"
            value="hard"
            v-model="level"
          />
          <label class="form-check-label" for="radio3">
            Сложный
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sound1 from './sounds/1.ogg';
import sound2 from './sounds/2.ogg';
import sound3 from './sounds/3.ogg';
import sound4 from './sounds/4.ogg';

export default {
  name: 'App',
  components: {},
  data: () => ({
    round: 0,
    level: 'simple',
    steps: [],
    userSteps: [],
    redBlock: false,
    blueBlock: false,
    yellowBlock: false,
    greenBlock: false,
    lose: false,
  }),
  methods: {
    addStep() {
      this.steps.push(Math.floor(Math.random() * Math.floor(4)));
      this.round++;
    },
    drawStep(step) {
      const speed =
        this.level === 'simple'
          ? 1500
          : this.level === 'middle'
          ? 1000
          : this.level === 'hard' && 400;

      if (step === 0) {
        this.redBlock = true;
        new Audio(sound1).play();
        setTimeout(() => (this.redBlock = false), speed - 300);
      }
      if (step === 1) {
        this.blueBlock = true;
        new Audio(sound2).play();
        setTimeout(() => (this.blueBlock = false), speed - 300);
      }
      if (step === 2) {
        this.yellowBlock = true;
        new Audio(sound3).play();
        setTimeout(() => (this.yellowBlock = false), speed - 300);
      }
      if (step === 3) {
        this.greenBlock = true;
        new Audio(sound4).play();
        setTimeout(() => (this.greenBlock = false), speed - 300);
      }
    },
    drawSteps(steps) {
      const speed =
        this.level === 'simple'
          ? 1500
          : this.level === 'middle'
          ? 1000
          : this.level === 'hard' && 400;
      let itemStart = 0;

      this.steps.forEach((step) => {
        setTimeout(() => {
          if (step === 0) {
            setTimeout(() => {
              this.redBlock = true;
              new Audio(sound1).play();
            }, itemStart);
            setTimeout(() => (this.redBlock = false), speed + itemStart - 300);
          }
          if (step === 1) {
            setTimeout(() => {
              this.blueBlock = true;
              new Audio(sound2).play();
            }, itemStart);
            setTimeout(() => (this.blueBlock = false), speed + itemStart - 300);
          }
          if (step === 2) {
            setTimeout(() => {
              this.yellowBlock = true;
              new Audio(sound3).play();
            }, itemStart);
            setTimeout(
              () => (this.yellowBlock = false),
              speed + itemStart - 300
            );
          }
          if (step === 3) {
            setTimeout(() => {
              this.greenBlock = true;
              new Audio(sound4).play();
            }, itemStart);
            setTimeout(
              () => (this.greenBlock = false),
              speed + itemStart - 300
            );
          }
          itemStart += speed;
        }, 300);
      });
    },
    startGame() {
      this.steps = [];
      this.round = 0;
      this.lose = false;

      this.addStep();

      this.drawSteps(this.steps);
    },
    click(step) {
      if (this.round === 0) return false;
      this.userSteps.push(step);
      this.drawStep(step);
      if (this.check() === false) {
        this.exit();
      } else if (this.check() === true) {
        setTimeout(() => this.nextRound(), 1000);
      }
    },
    check() {
      for (let i = 0; i < this.userSteps.length; i++) {
        if (this.userSteps[i] !== this.steps[i]) {
          return false;
        }
      }
      if (this.userSteps.length === this.steps.length) {
        return true;
      } else if (this.userSteps.length < this.steps.length) {
        return 'continue';
      }
    },
    exit() {
      this.round = 0;
      this.steps = [];
      this.userSteps = [];
      this.lose = true;
    },
    nextRound() {
      this.userSteps = [];
      this.addStep();
      this.drawSteps(this.steps);
    },
  },
};
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';

.app {
  height: 100vh;
  width: 100%;
}

.roundBlock {
  width: 302px;
  height: 295px;
}

.roundBlock ul {
  margin: 0;
  padding: 0;
}

.red:hover,
.blue:hover,
.yellow:hover,
.green:hover {
  border: 2px solid black;
}

.red,
.blue,
.yellow,
.green {
  opacity: 0.6;
  height: 290px;
  -webkit-border-radius: 150px 150px 150px 150px;
  border-radius: 150px 150px 150px 150px;
  position: absolute;
  text-indent: 10000px;
}

.red {
  background: #ff5643;
  clip: rect(0px, 300px, 150px, 150px);
  width: 296px;
}

.blue {
  background: dodgerblue;
  clip: rect(0px, 150px, 150px, 0px);
  width: 300px;
}

.yellow {
  background: #feef33;
  clip: rect(150px, 150px, 300px, 0px);
  width: 300px;
}

.green {
  background: #bede15;
  clip: rect(150px, 300px, 300px, 150px);
  width: 296px;
}

.red-click {
  background: red;
  border: 2px solid black;
}

.blue-click {
  background: blue;
  border: 2px solid black;
}

.yellow-click {
  background: #b7aa0a;
  border: 2px solid black;
}

.green-click {
  background: green;
  border: 2px solid black;
}
</style>

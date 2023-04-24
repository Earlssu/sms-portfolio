/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 950;
canvas.height = 925;

class InputHandler {
  // 사용자 입력에 따라 캐릭터 이동 및 상호작용
}

class Player {
  constructor() {
    this.width = 950;
    this.height = 925;
    this.x = 0;
    this.y = 0;
    this.image = document.getElementById("playerImage");
    this.frameX = 0;
    this.maxFrame = 3;
    this.frameY = 0;
    this.fps = 20;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
  }

  draw(context) {
    // if (this.frameX === 0) {
    //   context.drawImage(
    //     this.image,
    //     125,
    //     100,
    //     this.height,
    //     this.width,
    //     this.x,
    //     this.y,
    //     this.width,
    //     this.height
    //   );
    // } else {
    //   context.drawImage(
    //     this.image,
    //     this.frameX * this.width,
    //     this.frameY * this.height,
    //     this.height,
    //     this.width,
    //     this.x,
    //     this.y,
    //     this.width,
    //     this.height
    //   );
    // }
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.height,
      this.width,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    // sprite animation
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX >= this.maxFrame) this.frameX = 0;
      else this.frameX++;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }
}

class Background {
  // 배경 클래스
}

function displayStatusText() {
  // 사용자가 볼 수 있는 텍스트를 추가
}

const player = new Player(canvas.width, canvas.height);
let lastTime = 0;

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
  player.update(deltaTime);
  console.log(player.frameX);
}

animate(0);

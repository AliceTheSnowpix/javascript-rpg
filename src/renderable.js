import missingIMG from './images/missing.png';

export default class Renderable {
    constructor(image = missingIMG) {
        this.img = new Image();
        this.img.src = image
    }

    draw(ctx) {
        ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height);
    }
}
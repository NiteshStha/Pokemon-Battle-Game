class ViewPort {
  constructor(width, height, canvasElement) {
    this.width = width;
    this.height = height;
    this.canvasElement = canvasElement;
  }

  //Create the Canvas Size
  createViewPort() {
    this.canvasElement.width = this.width;
    this.canvasElement.height = this.height;
  }
}

import {
  Box3,
  BufferGeometry,
  Intersection,
  Matrix4,
  PlaneGeometry,
  Quaternion,
  Raycaster,
  Vector2,
  Vector3,
} from "three";
import { CSS3DSprite } from "three/examples/jsm/renderers/CSS3DRenderer.js";

export class VisCSS3DSprite extends CSS3DSprite {
  private geometry: BufferGeometry;
  private _width: number;
  private _height: number;

  private cacheBox = new Box3();
  private cachePosition = new Vector3();
  private cacheQuaternion = new Quaternion();
  private cacheScale = new Vector3();

  private cacheMatrix4 = new Matrix4();
  private rotateMatrix4 = new Matrix4();

  constructor(element: HTMLElement = document.createElement("div")) {
    const root = document.createElement("div");
    const width = 50;
    const height = 50;
    root.style.width = `${width}px`;
    root.style.height = `${height}px`;
    root.appendChild(element);

    element.classList.add("vis-css3d", "vis-css3d-sprite");

    super(root);

    this.geometry = new PlaneGeometry(width, height);
    this.geometry.computeBoundingBox();

    this._width = width;
    this._height = height;

    //@ts-ignore
    this.type = "CSS3DSprite";
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this.geometry.dispose();
    this.geometry = new PlaneGeometry(value, this._height);
    this.geometry.computeBoundingBox();
    this.element.style.width = `${value}px`;
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this.geometry.dispose();
    this.geometry = new PlaneGeometry(this._width, value);
    this.geometry.computeBoundingBox();
    this.element.style.height = `${value}px`;
    this._height = value;
  }

  raycast(raycaster: Raycaster, intersects: Intersection[]) {
    const box = this.cacheBox.copy(this.geometry.boundingBox!);

    this.matrixWorld.decompose(
      this.cachePosition,
      this.cacheQuaternion,
      this.cacheScale
    );

    const rotateMatrix4 = this.rotateMatrix4.lookAt(
      this.position,
      raycaster.camera.position,
      this.up
    );

    this.cacheQuaternion.setFromRotationMatrix(rotateMatrix4);

    this.cacheMatrix4.compose(
      this.cachePosition,
      this.cacheQuaternion,
      this.cacheScale
    );

    box.applyMatrix4(this.cacheMatrix4);

    if (raycaster.ray.intersectsBox(box)) {
      intersects.push({
        distance: raycaster.ray.origin.distanceTo(this.position),
        object: this,
        point: this.position,
      });
    }
  }
}

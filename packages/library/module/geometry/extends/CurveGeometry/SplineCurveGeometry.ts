import { CatmullRomCurve3, Vector3 } from "three";
import { CurveGeometry } from "./CurveGeometry";

export class SplineCurveGeometry extends CurveGeometry {
  constructor(path: Vector3[] = [], divisions = 36, space = true) {
    super(path, divisions, space);
    //@ts-ignore
    this.type = "SplineCurveGeometry";

    if (!path.length) {
      console.warn(`SplineCurveGeometry path length at least 1.`);
      return;
    }

    const splineCurve = new CatmullRomCurve3(path);

    this.setFromPoints(
      space
        ? splineCurve.getSpacedPoints(divisions)
        : splineCurve.getPoints(divisions)
    );
  }
}

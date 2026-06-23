import { resources } from "../../../utils/resources";
import { Group, Mesh } from "three";
import gsap from "gsap";
import { sceneWeights } from "../../../animations/scenes";
import { scene } from "../../core/scene";
import { getContactMaterial } from "../../common/materials";
import { shadow } from "./shadow";
import { sizes } from "../../../utils/sizes";

import type { Object3D } from "three";

const group = new Group();
group.position.set(1, -13, 0);
group.rotation.set(0, -0.8, 0);

const position = {
  portrait: { x: 2.35, y: -13.65, z: 0 },
  landscape: { x: 1, y: -13, z: 0 },
};

let objects: {
  base: Mesh;
} | null = null;

const init = () => {
  initObjects();
  shadow.init();
  gsap.ticker.add(tick);
};

const initObjects = () => {
  if (objects) return;
  const resource = resources.items["contact-model"];

  objects = {
    base: resource.scene.children.find((child: Object3D) => child.name === "base"),
  };

  Object.values(objects).forEach((object) => {
    const mat = getContactMaterial();
    object.material = mat;

    group.add(object);
  });

  scene.instance.add(group);
};

const tick = () => {
  group.visible = sceneWeights.contact > 0.001;
  const target = sizes.isLandscape ? position.landscape : position.portrait;
  group.position.set(target.x, target.y, target.z);
};

const destroy = () => {
  gsap.ticker.remove(tick);
  shadow.destroy();
};

export const contact = { init, tick, destroy, group };

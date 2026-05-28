import { resources } from "../../../utils/resources";
import { room } from ".";
import { getShadowMaterial } from "../../common/materials";
import { colors, getBackgroundColor, getShadowColor } from "../../common/colors";
import { Color } from "three";

import type { Object3D } from "three";

const init = () => {
  initObjects();
};

const initObjects = () => {
  const resource = resources.items["room-model"];
  const texture = resources.items["room-shadow-texture"];
  texture.flipY = false;

  const mesh = resource.scene.children.find((child: Object3D) => child.name === "shadow-catcher");
  if (!mesh) return;

  mesh.material = getShadowMaterial();
  mesh.onBeforeRender = () => {
    mesh.material.uniforms.uTexture.value = texture;
    mesh.material.uniforms.uColorBackground.value = getBackgroundColor().clone().convertLinearToSRGB();
    mesh.material.uniforms.uColorShadow.value = getShadowColor().clone().convertLinearToSRGB();
  };

  mesh.renderOrder = -1000;

  room.group.add(mesh);
};

const destroy = () => {};

export const shadow = { init, destroy };

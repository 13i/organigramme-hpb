// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import P5 from "p5";
import App from "./lib/app";
import Scene from "./lib/scene";
import Holding from "./lib/shape/holding";

import * as Config from "./data.json";
import { Profiler } from "inspector";

interface Profile {
  name: string;
  position: string;
  photo: string;
  bio: string;
};

interface Brand {
  name: string;
  logo: string;
  profile: Profile;
  url: string;
  photos: string[];
}

interface JsonConfig {
  brands: Brand[]
}

const OrganigrammeHPB = (p5: P5) => {

  const config: JsonConfig = Config;

  const shapes: Shape[] = [];

  p5.setup = () => {
    const canvas = p5.createCanvas(200, 200);
    canvas.parent("app");

    p5.background("white");

    shapes.push(new Holding());

    if (OrganigrammeHPB.config['brands']) {
      for (let brand of OrganigrammeHPB.config['brands']) {

      }
    }


  };

  p5!: P5,
    init: () => {
      const t = OrganigrammeHPB;

      t.p5 = new P5();

      return t;
    }
};

OrganigrammeHPB['init'] = () => {

};

export default OrganigrammeHPB;


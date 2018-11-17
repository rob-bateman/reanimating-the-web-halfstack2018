// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Notes,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Markdown,
  S,
  Appear,
  Table,
  TableItem,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableBody,
  Layout,
  Fill,
  Fit,
  CodePane,
  Code,
  Image,
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import theme

//import createTheme from "spectacle/lib/themes/default";
import createTheme from "spectacle-theme-nova";

import 'spectacle-theme-nova/syntax/prism.nova.css';
import 'spectacle-theme-nova/syntax/prism-typescript'

// Require CSS
require("normalize.css");

const theme = createTheme();

const inline = { position:'absolute', left:'45%', top:'-50px', margin:50 };
const gutter = '25px';
const images = {
  nyan: require('../assets/nyancat.gif'),
  background: require('../assets/Blue-Computer-Backgrounds2.jpg'),
  underpants: require('../assets/underpants-gnomes-business-plan2.png'),
  boxgloves: require('../assets/boxgloves-large.jpg'),
  sparkle: require('../assets/sparkle.gif'),
  sparklestars: require('../assets/sparklestars.gif'),
  icantbelieveitsjs: require('../assets/i-cant-believe-its-js.png'),
  html5logo: require('../assets/HTML5_logo.png'),
  futurama: require('../assets/Futurama accomplish nothing-5482.png'),
  showreel1: require('../assets/showreel_2014-5270.png'),
  showreel2: require('../assets/433042501_1280x720-5261.jpg'),
  showreel3: require('../assets/darkorbit3d-5252.jpg'),
  showreel4: require('../assets/515686742_1280x720-5264.jpg'),
  showreel5: require('../assets/chess_game.png'),
  showreel6: require('../assets/heineken_game.png'),
  showreel7: require('../assets/elvenar-3D-battlefield-5258.jpg'),
  pepperflash: require('../assets/Pepper-Flash-Player-5447.jpg'),
  webgllogo: require('../assets/2000px-WebGL_Logo_light.svg.png'),
  typescriptlogo: require('../assets/uRLunzU-5492.png'),
  awayjslogo: require('../assets/awayjslogo-5276.png'),
  awayjsexamples1: require('../assets/demos/Screenshot 2018-02-27 00.13.56-5687.png'),
  awayjsexamples2: require('../assets/demos/Screenshot 2018-02-27 00.14.42-5690.png'),
  awayjsexamples3: require('../assets/demos/Screenshot 2018-02-27 00.16.41-5695.png'),
  awayjsexamples4: require('../assets/demos/Screenshot 2018-02-27 00.17.07-5730.png'),
  awayjsexamples5: require('../assets/demos/Screenshot 2018-02-27 00.15.13-5694.png'),
  awayjsexamples6: require('../assets/demos/Screenshot 2018-02-27 00.17.23-5691.png'),
  awayjsexamples7: require('../assets/demos/Screenshot 2018-02-27 00.14.17-5688.png'),
  awayjsexamples8: require('../assets/demos/Screenshot 2018-02-27 00.15.47-5692.png'),
  awayjsexamples9: require('../assets/demos/Screenshot 2018-02-27 00.18.25-5689.png'),
  icycle1: require('../assets/pasted-image-1335.jpg'),
  icycle2: require('../assets/icycle_01-1397.png'),
  icycle3: require('../assets/icycle_02-1404.png'),
  icycle4: require('../assets/Screenshot 2016-09-03 23.30.30-2929.png'),
  dennis: require('../assets/Icycle2_AwayJS-1439.png'),
  dennis_tris: require('../assets/Icycle2_AwayJS-1439_tris.png'),
  icycle1_tris: require('../assets/Screenshot 2016-09-01 02.57.01-2343.png'),
  drawing: require('../assets/Screenshot 2018-02-27 12.26.36-6202.png'),
  sunflower: require('../assets/sunflower.png'),
  sunflower_screenshot1: require('../assets/Screenshot 2018-02-27 11.41.47-5973.png'),
  sunflower_screenshot2: require('../assets/Screenshot 2018-02-27 11.43.39-5978.png'),
  sunflower_screenshot3: require('../assets/Screenshot 2018-02-27 11.48.42-5987.png'),
  shumway: require('../assets/shumway_flash_logo-6110.png'),
  mathswhizz: require('../assets/maths-whizz_with_cubes_on_top-6037.png'),
  mathswhizz_screenshot1: require('../assets/Screenshot 2018-02-27 11.59.12-6044.png'),
  mathswhizz_screenshot2: require('../assets/Screenshot 2018-02-27 12.00.02-6056.png'),
  mathswhizz_screenshot3: require('../assets/Screenshot 2018-02-27 12.00.54-6064.png'),
  vr_headset: require('../assets/maxresdefault.jpg'),
  svg_lotr: require('../assets/lotr_interaction.gif'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide bgDarken='0.7' bgImage={images.background}>
          <Notes>
           <h4>Introduction</h4>
            <ol>
              <li>Open source work at the Away Foundation</li>
              <li>Interest in interative 2D &amp; 3D</li>
            </ol>
            <h4>Agenda</h4>
            <ol>
              <li>Bit of background</li>
              <li>Starting point for AwayJS</li>
              <li>Progression</li>
              <li>Future Plans</li>
            </ol>
          </Notes>
          <Heading size={1} fit>Reanimating the Web</Heading>
          <Heading size={3}>
            <Link href="https://www.twitter.com/robnet">
              @robnet
            </Link>
          </Heading>
        </Slide>
        <Slide bgImage={images.futurama}>
          <Notes>
            <h4>Background</h4>
            <ol>
              <li>Not a nostalgia trip</li>
              <li>No tech is immortal</li>
              <li>Technique more important than tricks</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgImage={images.showreel1}>
        </Slide>
        <Slide bgImage={images.showreel2}>
        </Slide>
        <Slide bgImage={images.showreel3}>
        </Slide>
        <Slide bgImage={images.showreel4}>
        </Slide>
        <Slide bgImage={images.showreel5}>
        </Slide>
        <Slide bgImage={images.showreel6}>
        </Slide>
        <Slide bgImage={images.showreel7}>
        </Slide>
        <Slide bgImage={images.pepperflash}>
          <Notes>
            <h4>Sea change</h4>
            <ol>
              <li>How do we improve</li>
              <li>What do we use</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgImage={images.boxgloves}>
          <Notes>
            <h4>The problem</h4>
            <ol>
              <li>HTML is a black box</li>
              <li>The rate of improvement is slow</li>
              <li>Legacy complicates everything</li>
            </ol>
          </Notes>
          <Appear>
            <Heading textColor="white" padding="40% 0px 0px 0px" size={1}>Not a Graphics Language</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Notes>
            <h4>The Ronseal of APIs</h4>
            <ol>
              <li>Access to the GPU</li>
              <li>It has the initials GL ffs</li>
              <li>Speed Speed Speed</li>
            </ol>
          </Notes>
          <Image src={images.webgllogo}/>
          <Appear>
            <Image style={inline} src={images.sparkle} height="500px" />
          </Appear>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>Favourite job</h4>
            <ol>
              <li>Best platform?</li>
              <li>Best adaption?</li>
              <li>Best presentation?</li>
            </ol>
          </Notes>
          <Heading size={1}>Conversion</Heading>
        </Slide>
        <Slide bgImage={images.typescriptlogo}>
          <Appear>
            <Image src={images.icantbelieveitsjs} height="400px"/>
          </Appear>
        </Slide>
        <Slide>
          <Image src={images.awayjslogo} height="300px"/>
          <Heading size={3} padding="20px">
            <Link href="https://github.com/awayjs">http://github.com/awayjs</Link>
          </Heading>
        </Slide>
        <Slide>
          <Layout>
            <Link href="../awayjs-examples-bin/AWDSuzanne.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples1} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_AWDViewer.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples2} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_PerelithKnight.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples3} height="180px"/></Link>
          </Layout>
          <Layout>
            <Link href="../awayjs-examples-bin/CubePrimitive.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples4} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_Globe.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples5} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/ObjLoaderMasterChief.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples6} height="180px"/></Link>
          </Layout>
          <Layout>
            <Link href="../awayjs-examples-bin/Basic_Fire.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples7} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_MonsterHeadShading.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples8} height="180px"/></Link>
            <Link href="../awayjs-examples-bin/Intermediate_ParticleExplosions.html" margin="0px 10px 0px 10px"><Image src={images.awayjsexamples9} height="180px"/></Link>
          </Layout>
          <Heading size={3} padding="20px">
            <Link href="http://awayjs.github.io/awayjs-examples">awayjs.github.io/awayjs-examples</Link>
          </Heading>
        </Slide>
        {/* <Slide>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>This is an item</TableItem>
                <TableItem>This too</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>This is the next item</TableItem>
                <TableItem>Seems like I am the last one...</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide> */}
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>New direction</h4>
            <ol>
              <li>High-res performance</li>
              <li>Under-represented</li>
            </ol>
          </Notes>
          <Heading size={1}>Vectors</Heading>
        </Slide>
        <Slide bgImage={images.icycle1}>
          <Notes>
            <h4>Compilation step</h4>
            <ol>
              <li>Code conversion (AS2 -> JS)</li>
              <li>Shape conversion (Bezier -> vertex buffer</li>
            </ol>
          </Notes>
        </Slide>
        <Slide bgImage={images.icycle2}>
        </Slide>
        <Slide bgImage={images.icycle3}>
        </Slide>
        <Slide>
        <Layout>
          <Image src={images.dennis} height="500px"/>
          <Image src={images.dennis_tris} height="500px"/>
        </Layout>
        <Heading size={3} padding="20px">
            <Link href="../awayjs-examples-bin/AWD3ViewerMinimal.html">Tessellations whatcha want</Link>
        </Heading>
        </Slide>
        <Slide bgImage={images.icycle4} align="center flex-end">
          <Heading size={3} padding="30px">
            <Link href="../icycle_web_bin/index.html">Icycle 2</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>2D and 3D together</h4>
            <ol>
              <li>Universal interactive model</li>
              <li>Flexibile content arrangement</li>
            </ol>
          </Notes>
          <Heading size={1}>Generalisation</Heading>
        </Slide>
        <Slide bgImage={images.drawing}>
          <Heading size={3} padding="30px">
            <Link href="../awayjs-examples-bin/AWDBasicTests.html">Drawing API</Link>
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.sunflower} height="200px" padding="20px"/>
          <Layout>
            <Link href="../sprint_5/Mo.html" margin="30px"><Image src={images.sunflower_screenshot1} height="200px"/></Link>
            <Link href="../sprint_5/Fo.html" margin="30px"><Image src={images.sunflower_screenshot2} height="200px"/></Link>
            <Link href="../sprint_5/So.html" margin="30px"><Image src={images.sunflower_screenshot3} height="200px"/></Link>
          </Layout>
          <Heading size={3} padding="20px">
            <Link href="https://www.sunflowerlearning.com">http://www.sunflowerlearning.com/</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>Speed improvements to download and runtime</h4>
            <ol>
              <li>Tesslation on the fly</li>
              <li>Dynamic caching of shapes &amp; fonts</li>
            </ol>
          </Notes>
          <Heading size={1}>Optimisation</Heading>
        </Slide>
        <Slide bgImage={images.shumway}>
        </Slide>
        <Slide>
          <Image src={images.mathswhizz} height="300px" padding="20px"/>
          <Layout>
            <Link href="../mw_swf_bin/tests.html?folder=MWFirst10lessons&swf=1" margin="30px"><Image src={images.mathswhizz_screenshot1} height="200px"/></Link>
            <Link href="../mw_swf_bin/tests.html?folder=MWFirst10lessons&swf=5" margin="30px"><Image src={images.mathswhizz_screenshot2} height="200px"/></Link>
            <Link href="../mw_swf_bin/tests.html?folder=MWFirst10lessons&swf=8" margin="30px"><Image src={images.mathswhizz_screenshot3} height="200px"/></Link>
          </Layout>
          <Heading size={3} padding="20px">
            <Link href="https://www.whizz.com">http://www.whizz.com</Link>
          </Heading>
        </Slide>
        <Slide bgDarken='0.7'  bgImage={images.nyan}>
          <Notes>
            <h4>AwayJS application focus</h4>
            <ol>
              <li>WebVR content with AwayJS interfaces</li>
              <li>Abstracting an SVG loader</li>
            </ol>
          </Notes>
          <Heading size={1}>Future</Heading>
        </Slide>
        <Slide bgImage={images.vr_headset}>
        </Slide>
        <Slide bgImage={images.svg_lotr}>
        </Slide>
        <Slide bgDarken='0.7' bgImage={images.background}>
          <Heading size={1}>Thank you</Heading>
          <Heading size={3} padding="20px">
            <Link href="https://github.com/awayjs">http://github.com/awayjs</Link>
          </Heading>
          <Heading size={3}>
            <Link href="https://www.twitter.com/robnet">
              @robnet
            </Link>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

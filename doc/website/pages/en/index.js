/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const Button = props => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('introduction.html')}>Introduction</Button>
            <Button href={docUrl('install.html')}>Getting started</Button>
            <Button href="https://clarus.github.io/coq-of-ocaml/examples/tezos/">
              Examples
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom paddingTop"
        style={{textAlign: 'center'}}>
        <h2>
          Developed at{' '}
          <a
            href="https://www.nomadic-labs.com/"
            target="_blank"
          >
            Nomadic Labs
          </a>
        </h2>
        <MarkdownBlock>
          We develop `coq-of-ocaml` at [Nomadic Labs](https://www.nomadic-labs.com/). This project initially started as part of a [PhD](http://www.theses.fr/2018USPCC068) at the university of [Paris&nbsp;7](https://u-paris.fr/). We use `coq-of-ocaml` to formally verify the implementation of the crypto-currency [Tezos](https://tezos.com/). We are open to other applications for software verification.
        </MarkdownBlock>
        <Button href="mailto:contact@nomadic-labs.com">
          Contact us
        </Button>
      </div>
    );

    // const TryOut = () => (
    //   <Block id="try">
    //     {[
    //       {
    //         content:
    //           'To make your landing page more attractive, use illustrations! Check out ' +
    //           '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
    //           'The illustrations you see on this page are from unDraw.',
    //         image: `${baseUrl}img/undraw_code_review.svg`,
    //         imageAlign: 'left',
    //         title: 'Wonderful SVG Illustrations',
    //       },
    //     ]}
    //   </Block>
    // );

    // const Description = () => (
    //   <Block background="dark">
    //     {[
    //       {
    //         content:
    //           'This is another description of how this project is useful',
    //         image: `${baseUrl}img/undraw_note_list.svg`,
    //         imageAlign: 'right',
    //         title: 'Description',
    //       },
    //     ]}
    //   </Block>
    // );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: '[Formally verify](https://en.wikipedia.org/wiki/Formal_verification) program implementations with the [Coq](https://coq.inria.fr/) proof system. Prevent bugs right from the start. For critical applications.',
            image: `${baseUrl}img/undraw_through_the_desert.svg`,
            imageAlign: 'right',
            title: 'Safe programming',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Translate the functional core of OCaml including functions, pattern-matching, records,...',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'top',
            title: 'Functional OCaml',
          },
          {
            content: 'Import modules, functors and first-class modules using polymorphic records.',
            image: `${baseUrl}img/undraw_logistics.svg`,
            imageAlign: 'top',
            title: 'Module system',
          },
          {
            content: 'Generate some Coq even in case of errors.',
            image: `${baseUrl}img/undraw_convert.svg`,
            imageAlign: 'top',
            title: 'Progressive imports',
          },
        ]}
      </Block>
    );

    // const Showcase = () => {
    //   if ((siteConfig.users || []).length === 0) {
    //     return null;
    //   }

    //   const showcase = siteConfig.users
    //     .filter(user => user.pinned)
    //     .map(user => (
    //       <a href={user.infoLink} key={user.infoLink}>
    //         <img src={user.image} alt={user.caption} title={user.caption} />
    //       </a>
    //     ));

    //   const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

    //   return (
    //     <div className="productShowcaseSection paddingBottom">
    //       <h2>Who is Using This?</h2>
    //       <p>This project is used by all these people</p>
    //       <div className="logos">{showcase}</div>
    //       <div className="more-users">
    //         <a className="button" href={pageUrl('users.html')}>
    //           More {siteConfig.title} Users
    //         </a>
    //       </div>
    //     </div>
    //   );
    // };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
          <FeatureCallout />
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;

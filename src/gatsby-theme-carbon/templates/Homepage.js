import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';

// Component to be shadowed
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => (
  <p>
    Inclusive, flexible <br />and consistent
  </p>
);

const FirstRightText = () => (
  <p>
    Carbon is IBM’s <strong>open-source</strong> design system for products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.
  </p>
);

const SecondLeftText = () => <p>Ready to contribute?</p>;

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, and ideas. If you’re interested in contributing,
    check out our contribution guidelines to get started.
    <br />
    <a
      css={({ typeStyles }) => typeStyles.bodyShort02}
      href="https://www.carbondesignsystem.com/contributing/governance"
    >
      Start contributing →
    </a>
  </p>
);

const BannerText = () => (
  <h1>
    Connor
    <br />
    Design System
  </h1>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;

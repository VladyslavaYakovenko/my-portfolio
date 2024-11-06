import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Nyere <GradientText>Prosjekter</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Dashboard"
        description="The dashboard provides a quick summary of business performance, showing KPIs like total sales, quotes, orders, and products. It includes charts for monthly visitor trends, weekly financials, and website traffic breakdowns. Customer stats and feedback ratings give insights into user engagement and satisfaction."
        link="https://luminous-swan-3c9163.netlify.app/"
        img={{ src: '/assets/images/dashboard.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>React</Tags>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.ROSE}>SCSS</Tags>
            <Tags color={ColorTags.BLUE}>Typescript</Tags>
          </>
        }
      />
      <Project
        name="Beauty Salon Landing Page"
        description="Landing Page for beauty salon with responsive design for all screens, from mobile to dekstop."
        link="https://dulcet-lily-5ffe5d.netlify.app/"
        img={{ src: '/assets/images/landing.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.ROSE}>SCSS</Tags>
            <Tags color={ColorTags.YELLOW}>Javascript</Tags>
          </>
        }
      />
      <Project
        name="Plants Shop Landing Page"
        description="Plant Shop is a user-friendly website that allows customers to browse, select, and purchase a variety of plants effortlessly. The clean layout and intuitive navigation make shopping for greenery a seamless experience."
        link="https://plant-shop-mavka.netlify.app/"
        img={{ src: '/assets/images/plants-shop.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.BLUE}>CSS</Tags>
          </>
        }
      />

      <Project
        name="UI Kit"
        description="The website showcases a UI kit that features a collection of design components like buttons, inputs, and typography elements. It serves as a comprehensive resource for developers and designers to explore and utilize reusable UI components."
        link="https://gleeful-fox-6b0cc4.netlify.app/"
        img={{ src: '/assets/images/ui-kit.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.BLUE}>CSS</Tags>
          </>
        }
      />
      <Project
        name="Javascript Challenges"
        description="JavaScript application that dynamically generates and displays the results of various utility functions when the webpage loads."
        link="https://phenomenal-hotteok-52ec0c.netlify.app/"
        img={{
          src: '/assets/images/js.jpeg',
          alt: 'Javascript Challenges',
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Javascript</Tags>
            <Tags color={ColorTags.ORANGE}>HTML</Tags>
            <Tags color={ColorTags.BLUE}>CSS</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

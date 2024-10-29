import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hei hei, Jeg heter <GradientText>Vladyslava</GradientText> 👋
        </>
      }
      description={
        <>
          Jeg er en nybegynner innen frontend-utvikling med kunnskap i HTML, CSS
          og JavaScript. Jeg forbedrer meg kontinuerlig, jobber med prosjekter
          og ønsker å lage brukervennlige og moderne grensesnitt. Jeg ser etter
          muligheter for å få praksis og utvikle meg gjennom reelle prosjekter.
        </>
      }
      avatar={
        <img
          className="h-40 w-40 rounded-full"
          src="/assets/images/image.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/vladyslava-y-3643ab258/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/VladyslavaYakovenko">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="GitHub icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };

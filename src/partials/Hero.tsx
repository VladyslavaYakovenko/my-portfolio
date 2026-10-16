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
          Jeg er en frontend-utvikler med over to års erfaring med å bygge
          moderne, responsive og brukervennlige webapplikasjoner. Jeg liker å
          løse tekniske utfordringer, skrive vedlikeholdbar kode og utvikle
          intuitive brukergrensesnitt. Jeg er alltid motivert for å lære mer og
          skape gode digitale løsninger.
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

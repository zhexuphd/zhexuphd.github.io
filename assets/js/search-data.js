// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "peer-reviewed publications and working papers are listed in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-service",
          title: "service",
          description: "doing my best to keep up with academic service duties.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "teaching is always fun for me.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-中文",
          title: "中文",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/chinese/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-successfully-defended-my-phd-dissertation-at-the-university-of-cologne",
          title: 'Successfully defended my PhD dissertation at the University of Cologne.',
          description: "",
          section: "News",},{id: "news-awarded-the-walter-benjamin-grant-by-the-german-research-foundation-dfg-221-400",
          title: 'Awarded the Walter Benjamin Grant by the German Research Foundation (DFG) (€221,400).',
          description: "",
          section: "News",},{id: "news-excited-to-join-the-department-of-media-and-communication-at-lmu-munich-as-a-research-associate",
          title: 'Excited to join the Department of Media and Communication at LMU Munich as...',
          description: "",
          section: "News",},{id: "news-i-am-at-the-london-school-of-economics-and-political-science-lse-as-a-visiting-scholar-hosted-by-prof-dr-lilie-chouliaraki",
          title: 'I am at the London School of Economics and Political Science (LSE) as...',
          description: "",
          section: "News",},{id: "news-selected-to-participate-in-the-2026-knowledge-frontiers-symposium-organized-by-the-alexander-von-humboldt-foundation-and-the-british-academy-in-bonn-germany",
          title: 'Selected to participate in the 2026 Knowledge Frontiers Symposium, organized by the Alexander...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

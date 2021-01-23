export interface IConfig {
  username: string;
  hideClock: boolean;
  hideFooter: boolean;
  hideGreeter: boolean;
  hideHeader: boolean;
  hideSearch: boolean;
  resources: IResource[];
}

export interface IResource {
  category: string;
  links: { text: string; url: string }[];
}

export const defaultConfig = {
  username: 'marcjmiller',
  hideClock: false,
  hideFooter: false,
  hideGreeter: false,
  hideHeader: false,
  hideSearch: false,
  resources: [
    {
      category: 'heading 1',
      links: [
        { text: 'link 1', url: 'http://www.google.com' },
        { text: 'link 2', url: 'http://www.google.com' },
        { text: 'link 3', url: 'http://www.google.com' },
      ],
    },
    {
      category: 'heading 2',
      links: [
        { text: 'link 1', url: 'http://www.google.com' },
        { text: 'link 2', url: 'http://www.google.com' },
        { text: 'link 3', url: 'http://www.google.com' },
        { text: 'link 4', url: 'http://www.google.com' },
        { text: 'link 5', url: 'http://www.google.com' },
      ],
    },
    {
      category: 'heading 3',
      links: [
        { text: 'link 1', url: 'http://www.google.com' },
        { text: 'link 2', url: 'http://www.google.com' },
        { text: 'link 3', url: 'http://www.google.com' },
      ],
    },
    {
      category: 'heading 4',
      links: [
        { text: 'link 1', url: 'http://www.google.com' },
        { text: 'link 2', url: 'http://www.google.com' },
        { text: 'link 3', url: 'http://www.google.com' },
        { text: 'link 4', url: 'http://www.google.com' },
      ],
    },
    {
      category: 'heading 5',
      links: [
        { text: 'link 1', url: 'http://www.google.com' },
        { text: 'link 2', url: 'http://www.google.com' },
        { text: 'link 3', url: 'http://www.google.com' },
        { text: 'link 4', url: 'http://www.google.com' },
        { text: 'link 5', url: 'http://www.google.com' },
        { text: 'link 6', url: 'http://www.google.com' },
      ],
    },
  ],
};

const loadDefaultConfigToLocalStorage = () => {
  localStorage.setItem('config', JSON.stringify(defaultConfig));
};

export const parseLocalConfigOrUseDefault = (useDefault?: boolean) => {
  if (useDefault) {
    return JSON.parse(JSON.stringify(defaultConfig));
  }

  if (localStorage.getItem('config') === '') {
    loadDefaultConfigToLocalStorage();
  }

  return JSON.parse(localStorage.getItem('config')!);
};

const config = parseLocalConfigOrUseDefault();

export default config;

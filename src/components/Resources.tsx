import { IResource } from '../config/config';

interface OwnProps {
  resources: IResource[];
}

const Resources = ({ resources }: OwnProps) => {
  return (
    <div className={'resource-container flex flex-row justify-around w-9/12'} data-testid={'resource-container'}>
      {resources.map((resource, resourceKey) => (
        <div
          className={'resource bg-gray-300 dark:bg-gray-800 rounded-lg px-12 py-4 font-medium'}
          data-testid={'resource'}
          key={`resource-${resourceKey}`}
        >
          <div className={'resource-header pb-2'}>{resource.category}</div>
          {resource.links.map((link, linkKey) => {
            return (
              <div className={'resource-link text-sm font-thin'} key={`link-${linkKey}`}>
                <a href={link.url}>{link.text}</a>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Resources;

import { IResource } from '../config';

interface OwnProps {
  resources: IResource[];
  editResources: boolean;
  toggleEditResources: () => void;
}

const Resources = ({ resources }: OwnProps) => {
  return (
    <div className={'resource-container'} data-testid={'resource-container'}>
      {resources.map((resource, resourceKey) => (
        <div className={'resource'} data-testid={'resource'} key={`resource-${resourceKey}`}>
          <div className={'resource-header'}>{resource.category}</div>
          {resource.links.map((link, linkKey) => {
            return (
              <div className={'resource-link'} key={`link-${linkKey}`}>
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

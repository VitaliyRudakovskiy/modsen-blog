const isLinkActive = (linkPath: string, currentPath: string) => {
  let newPath = currentPath.replace(/\/en|\/ru/, '');
  newPath = newPath || '/';
  return newPath === linkPath;
};

export default isLinkActive;

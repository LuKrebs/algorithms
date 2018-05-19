// Problem description
// https://leetcode.com/problems/subdomain-visit-count/description/

var subdomainVisits = cpdomains => {
  var cpdomainsAsArray = [];
  var uniqueAccess = {};
  var uniqueAccessAsArray = [];

  cpdomains.map(cpdomain => {
    cpdomain = cpdomain.split(" ");
    url = cpdomain[1].split(".");

    if (url.length == 2) {
      cpdomainsAsArray.push({
        domain: {
          name: `${url[0]}.${url[1]}`,
          visits: cpdomain[0],
        },
        extension: {
          name: `${url[1]}`,
          visits: cpdomain[0]
        }
      });
    }
    else if (url.length == 3) {
      cpdomainsAsArray.push({
        subdomain: {
          name: `${url[0]}.${url[1]}.${url[2]}`,
          visits: cpdomain[0],
        },
        domain: {
          name: `${url[1]}.${url[2]}`,
          visits: cpdomain[0],
        },
        extension: {
          name: `${url[2]}`,
          visits: cpdomain[0]
        }
      });
    }
  });

  cpdomainsAsArray.map(({ subdomain, domain, extension }) => {
    if (subdomain)
      if (!uniqueAccess[subdomain.name])
        uniqueAccess[subdomain.name] = parseInt(subdomain.visits);
      else
        uniqueAccess[subdomain.name] += parseInt(subdomain.visits);

    if (!uniqueAccess[domain.name])
      uniqueAccess[domain.name] = parseInt(domain.visits);
    else
      uniqueAccess[domain.name] += parseInt(domain.visits);

    if (!uniqueAccess[extension.name])
      uniqueAccess[extension.name] = parseInt(extension.visits);
    else
      uniqueAccess[extension.name] += parseInt(extension.visits);

  });

  Object.keys(uniqueAccess).forEach(key => uniqueAccessAsArray.push(`${uniqueAccess[key]} ${key}`));

  return uniqueAccessAsArray

};

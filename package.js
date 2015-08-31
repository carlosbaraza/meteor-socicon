Package.describe({
  name: 'carlosbaraza:meteor-socicon',
  version: '2.4.0',
  summary: 'Social network icons font',
  git: 'https://github.com/carlosbaraza/meteor-socicon.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('socicon-font-v2.4/socicon.eot', 'client');
  api.addFiles('socicon-font-v2.4/socicon.svg', 'client');
  api.addFiles('socicon-font-v2.4/socicon.ttf', 'client');
  api.addFiles('socicon-font-v2.4/socicon.woff', 'client');
  api.addFiles('socicon-font-v2.4/socicon.woff2', 'client');
  api.addFiles('socicon-font-v2.4/socicon.css', 'client');
  api.addFiles('socicon-config.css', 'client');
});

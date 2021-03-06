import path from 'path';
import debug from './utils/debug';

export const isDev = global.toolkitCli.isDev;

export const rootForProject = './';
export const rootForRequire = process.cwd();
export const rootForToolkit = path.resolve(__dirname, '../');

debug('rootForProject', rootForProject);
debug('rootForRequire', rootForRequire);
debug('rootForToolkit', rootForToolkit);

// eslint-disable-next-line global-require
const pkg = require(path.resolve(rootForRequire, 'package.json')) || {};
export const vendorModules = pkg.toolkitSettings && pkg.toolkitSettings.vendor ?
  pkg.toolkitSettings.vendor : [];

// eslint-disable-next-line global-require
export const babelConfig = require(path.resolve(__dirname, '../babelrc.js'));

// environment variables & defaults
export const env = {
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 2000,
  PROXY_HOST: process.env.PROXY_HOST || 'localhost',
  PROXY_PORT: process.env.PROXY_PORT || 3000,
  VERBOSE_LOGGING: process.env.VERBOSE_LOGGING || false,
};

export const userEnv = {
  // NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  // API_DOMAIN: JSON.stringify(process.env.API_DOMAIN),
  // COOKIE_DOMAIN: JSON.stringify(process.env.COOKIE_DOMAIN),
};

const clientRoot = path.resolve(rootForProject, 'src/client');
const serverRoot = path.resolve(rootForProject, 'src/server');
const buildFolder = path.resolve(rootForProject, 'build');
export const PATHS = {
  publicFilesFolder: path.resolve(serverRoot, 'public-files'),
  manifestRootAssetPath: './src/client',
  manifest: path.resolve(buildFolder, 'manifest.json'),
  clientRoot,
  serverRoot,
  clientAppEntryPoint: path.resolve(clientRoot, 'app.js'),
  buildFolder,
  templateLocation: path.resolve(serverRoot, 'views/layout.hbs'),
};

const devNamingConvention = '[name]';
export const prodNamingConvention = '[name].[chunkhash]';
export const namingConvention = isDev ? devNamingConvention : prodNamingConvention;

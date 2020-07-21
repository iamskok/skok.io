// Check if code block feature is enabled
// based on local and global configurations

const isFeatureEnabled = (localConfig, globalConfig = false) =>
  localConfig !== undefined
    ? localConfig === true || localConfig === "true"
    : globalConfig

export default isFeatureEnabled

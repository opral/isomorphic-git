export const worthWalking = (filepath, root) => {
  if (
    filepath === '.' ||
    root == null ||
    root.length === 0 ||
    root === '.' ||
    root === filepath
  ) {
    return true
  }
  if (root.length > filepath.length) {
    return root.startsWith(filepath + '/')
  } else {
    return filepath.startsWith(root + '/')
  }
}

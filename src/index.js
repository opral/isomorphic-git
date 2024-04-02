import './typedefs.js'

import { STAGE } from './api/STAGE.js'
import { TREE } from './api/TREE.js'
import { WORKDIR } from './api/WORKDIR.js'
import { abortMerge } from './api/abortMerge.js'
import { add } from './api/add.js'
import { addNote } from './api/addNote.js'
import { addRemote } from './api/addRemote.js'
import { annotatedTag } from './api/annotatedTag.js'
import { branch } from './api/branch.js'
import { checkout } from './api/checkout.js'
import { clone } from './api/clone.js'
import { commit } from './api/commit.js'
import { currentBranch } from './api/currentBranch.js'
import { deleteBranch } from './api/deleteBranch.js'
import { deleteRef } from './api/deleteRef.js'
import { deleteRemote } from './api/deleteRemote.js'
import { deleteTag } from './api/deleteTag.js'
import { expandOid } from './api/expandOid.js'
import { expandRef } from './api/expandRef.js'
import { fastForward } from './api/fastForward.js'
import { fetch } from './api/fetch.js'
import { findMergeBase } from './api/findMergeBase.js'
import { findRoot } from './api/findRoot.js'
import { getConfig } from './api/getConfig.js'
import { getConfigAll } from './api/getConfigAll.js'
import { getRemoteInfo } from './api/getRemoteInfo.js'
import { getRemoteInfo2 } from './api/getRemoteInfo2.js'
import { hashBlob } from './api/hashBlob.js'
import { indexPack } from './api/indexPack.js'
import { init } from './api/init.js'
import { isDescendent } from './api/isDescendent.js'
import { isIgnored } from './api/isIgnored.js'
import { listBranches } from './api/listBranches.js'
import { listFiles } from './api/listFiles.js'
import { listNotes } from './api/listNotes.js'
import { listRemotes } from './api/listRemotes.js'
import { listServerRefs } from './api/listServerRefs.js'
import { listTags } from './api/listTags.js'
import { log } from './api/log.js'
import { merge } from './api/merge.js'
import { packObjects } from './api/packObjects.js'
import { pull } from './api/pull.js'
import { push } from './api/push.js'
import { readBlob } from './api/readBlob.js'
import { readCommit } from './api/readCommit.js'
import { readNote } from './api/readNote.js'
import { readObject } from './api/readObject.js'
import { readTag } from './api/readTag.js'
import { readTree } from './api/readTree.js'
import { remove } from './api/remove.js'
import { removeNote } from './api/removeNote.js'
import { renameBranch } from './api/renameBranch.js'
import { resetIndex } from './api/resetIndex.js'
import { resolveRef } from './api/resolveRef.js'
import { setConfig } from './api/setConfig.js'
import { status } from './api/status.js'
import { statusMatrix } from './api/statusMatrix.js'
import { tag } from './api/tag.js'
import { updateIndex } from './api/updateIndex.js'
import { version } from './api/version.js'
import { walk } from './api/walk.js'
import { writeBlob } from './api/writeBlob.js'
import { writeCommit } from './api/writeCommit.js'
import { writeObject } from './api/writeObject.js'
import { writeRef } from './api/writeRef.js'
import { writeTag } from './api/writeTag.js'
import { writeTree } from './api/writeTree.js'
// BEGIN >>> export of internal api - this is needed to rewrite functions like checkout
// COMMANDS
import { listCommitsAndTags as _listCommitsAndTags } from './commands/listCommitsAndTags'
import { listObjects as _listObjects } from './commands/listObjects'
import { _pack } from './commands/pack'
import { uploadPack as _uploadPack } from './commands/uploadPack'
import { _walk } from './commands/walk.js'
// ERRORS
import * as Errors from './errors/index.js'
// MANAGERs
import { GitConfigManager as _GitConfigManager } from './managers/GitConfigManager'
import { GitIgnoreManager as _GitIgnoreManager } from './managers/GitIgnoreManager'
import { GitIndexManager as _GitIndexManager } from './managers/GitIndexManager'
import { GitRefManager as _GitRefManager } from './managers/GitRefManager'
import { GitRemoteHTTP as _GitRemoteHTTP } from './managers/GitRemoteHTTP'
import { GitRemoteManager as _GitRemoteManager } from './managers/GitRemoteManager'
import { GitShallowManager as _GitShallowManager } from './managers/GitShallowManager'
// MODELS
import { FileSystem as _FileSystem } from './models/FileSystem'
import { GitAnnotatedTag as _GitAnnotatedTag } from './models/GitAnnotatedTag'
import { GitCommit as _GitCommit } from './models/GitCommit'
import { GitConfig as _GitConfig } from './models/GitConfig'
import { GitIndex as _GitIndex } from './models/GitIndex'
import { GitObject as _GitObject } from './models/GitObject'
import { GitPackIndex as _GitPackIndex } from './models/GitPackIndex'
import { GitPktLine as _GitPktLine } from './models/GitPktLine'
import { GitRefSpec as _GitRefSpec } from './models/GitRefSpec'
import { GitRefSpecSet as _GitRefSpecSet } from './models/GitRefSpecSet'
import { GitSideBand as _GitSideBand } from './models/GitSideBand'
import { GitTree as _GitTree } from './models/GitTree'
import { GitWalkerFs as _GitWalkerFs } from './models/GitWalkerFs'
import { GitWalkerIndex as _GitWalkerIndex } from './models/GitWalkerIndex'
import { GitWalkerRepo as _GitWalkerRepo } from './models/GitWalkerRepo'
import { RunningMinimum as _RunningMinimum } from './models/RunningMinimum'
// STORAGE
import { _expandOid } from './storage/expandOid'
import { expandOidLoose as _expandOidLoose } from './storage/expandOidLoose'
// we keep keep the original order from internal-apis.js
// eslint-disable-next-line import/order
import { expandOidPacked as _expandOidPacked } from './storage/expandOidPacked'
import { hasObject as _hasObject } from './storage/hasObject'
import { hasObjectLoose as _hasObjectLoose } from './storage/hasObjectLoose'
import { hasObjectPacked as _hasObjectPacked } from './storage/hasObjectPacked'
import { hashObject as _hashObject } from './storage/hashObject'
import { _readObject } from './storage/readObject'
import { readObjectLoose as _readObjectLoose } from './storage/readObjectLoose'
import { readObjectPacked as _readObjectPacked } from './storage/readObjectPacked'
import { readPackIndex as _readPackIndex } from './storage/readPackIndex'
import { _writeObject } from './storage/writeObject'
import { writeObjectLoose as _writeObjectLoose } from './storage/writeObjectLoose'
// UTILS
import { BufferCursor as _BufferCursor } from './utils/BufferCursor'
import { DeepMap as _DeepMap } from './utils/DeepMap'
import { FIFO as _FIFO } from './utils/FIFO'
import { StreamReader as _StreamReader } from './utils/StreamReader'
import { abbreviateRef as _abbreviateRef } from './utils/abbreviateRef'
import { applyDelta as _applyDelta } from './utils/applyDelta'
import { arrayRange as _arrayRange } from './utils/arrayRange'
import { assertParameter as _assertParameter } from './utils/assertParameter'
// import { asyncIteratorToStream as _asyncIteratorToStream } from './utils/asyncIteratorToStream'
import { basename as _basename } from './utils/basename'
import { calculateBasicAuthHeader as _calculateBasicAuthHeader } from './utils/calculateBasicAuthHeader'
import { collect as _collect } from './utils/collect'
import { compareAge as _compareAge } from './utils/compareAge'
import { comparePath as _comparePath } from './utils/comparePath'
import { compareRefNames as _compareRefNames } from './utils/compareRefNames'
import { compareStats as _compareStats } from './utils/compareStats'
import { compareStrings as _compareStrings } from './utils/compareStrings'
import { compareTreeEntryPath as _compareTreeEntryPath } from './utils/compareTreeEntryPath'
import { deflate as _deflate } from './utils/deflate'
import { dirname as _dirname } from './utils/dirname'
import { emptyPackfile as _emptyPackfile } from './utils/emptyPackfile'
import { extractAuthFromUrl as _extractAuthFromUrl } from './utils/extractAuthFromUrl'
import { filterCapabilities as _filterCapabilities } from './utils/filterCapabilities'
import { flat as _flat } from './utils/flat'
import { flatFileListToDirectoryStructure as _flatFileListToDirectoryStructure } from './utils/flatFileListToDirectoryStructure'
import { forAwait as _forAwait } from './utils/forAwait'
import { formatAuthor as _formatAuthor } from './utils/formatAuthor'
import { formatInfoRefs as _formatInfoRefs } from './utils/formatInfoRefs'
import { fromEntries as _fromEntries } from './utils/fromEntries'
import { fromNodeStream as _fromNodeStream } from './utils/fromNodeStream'
import { fromStream as _fromStream } from './utils/fromStream'
import { fromValue as _fromValue } from './utils/fromValue'
import { getIterator as _getIterator } from './utils/getIterator'
import { listpack as _listpack } from './utils/git-list-pack'
// eslint-disable-next-line camelcase
import { hashObject as _utils_hashObject } from './utils/hashObject'
import { indent as _indent } from './utils/indent'
import { inflate as _inflate } from './utils/inflate'
import { isBinary as _isBinary } from './utils/isBinary'
import { join as _join } from './utils/join'
import { mergeFile as _mergeFile } from './utils/mergeFile'
import { mergeTree as _mergeTree } from './utils/mergeTree'
import { mode2type as _mode2type } from './utils/mode2type'
import { modified as _modified } from './utils/modified'
import { normalizeAuthorObject as _normalizeAuthorObject } from './utils/normalizeAuthorObject'
import { normalizeCommitterObject as _normalizeCommitterObject } from './utils/normalizeCommitterObject'
import { normalizeMode as _normalizeMode } from './utils/normalizeMode'
import { normalizeNewlines as _normalizeNewlines } from './utils/normalizeNewlines'
import { normalizePath as _normalizePath } from './utils/normalizePath'
import { normalizeStats as _normalizeStats } from './utils/normalizeStats'
import { outdent as _outdent } from './utils/outdent'
import { padHex as _padHex } from './utils/padHex'
import { parseAuthor as _parseAuthor } from './utils/parseAuthor'
// import { path as _path } from './utils/pkg'
import { pkg as _pkg } from './utils/pkg'
import { posixifyPathBuffer as _posixifyPathBuffer } from './utils/posixifyPathBuffer'
import { resolveBlob as _resolveBlob } from './utils/resolveBlob'
import { resolveCommit as _resolveCommit } from './utils/resolveCommit'
import { resolveFileIdInTree as _resolveFileIdInTree } from './utils/resolveFileIdInTree'
import { resolveFilepath as _resolveFilepath } from './utils/resolveFilepath'
import { resolveTree as _resolveTree } from './utils/resolveTree'
import { rmRecursive as _rmRecursive } from './utils/rmRecursive'
import { shasum as _shasum } from './utils/shasum'
import { sleep as _sleep } from './utils/sleep'
import { splitLines as _splitLines } from './utils/splitLines'
// import { symbols as _symbols } from './utils/symbols'
import { toHex as _toHex } from './utils/toHex'
import { translateSSHtoHTTP as _translateSSHtoHTTP } from './utils/translateSSHtoHTTP'
// import { types as _types } from './utils/types'
import { unionOfIterators as _unionOfIterators } from './utils/unionOfIterators'
import { worthWalking as _worthWalking } from './utils/worthWalking'
// WIRE
import { parseCapabilitiesV2 as _parseCapabilitiesV2 } from './wire/parseCapabilitiesV2'
import { parseListRefsResponse as _parseListRefsResponse } from './wire/parseListRefsResponse'
import { parseReceivePackResponse as _parseReceivePackResponse } from './wire/parseReceivePackResponse'
import { parseRefsAdResponse as _parseRefsAdResponse } from './wire/parseRefsAdResponse'
// we keep keep the original order from internal-apis.js
// eslint-disable-next-line import/order
import { parseUploadPackRequest as _parseUploadPackRequest } from './wire/parseUploadPackRequest'
import { parseUploadPackResponse as _parseUploadPackResponse } from './wire/parseUploadPackResponse'
import { writeListRefsRequest as _writeListRefsRequest } from './wire/writeListRefsRequest'
import { writeReceivePackRequest as _writeReceivePackRequest } from './wire/writeReceivePackRequest'
import { writeRefsAdResponse as _writeRefsAdResponse } from './wire/writeRefsAdResponse'
import { writeUploadPackRequest as _writeUploadPackRequest } from './wire/writeUploadPackRequest'
// END >>> export of internal api - this is needed to rewrite functions like checkout

// named exports
export {
  Errors,
  STAGE,
  TREE,
  WORKDIR,
  abortMerge,
  add,
  addNote,
  addRemote,
  annotatedTag,
  branch,
  checkout,
  clone,
  commit,
  getConfig,
  getConfigAll,
  setConfig,
  currentBranch,
  deleteBranch,
  deleteRef,
  deleteRemote,
  deleteTag,
  expandOid,
  expandRef,
  fastForward,
  fetch,
  findMergeBase,
  findRoot,
  getRemoteInfo,
  getRemoteInfo2,
  hashBlob,
  indexPack,
  init,
  isDescendent,
  isIgnored,
  listBranches,
  listFiles,
  listNotes,
  listRemotes,
  listServerRefs,
  listTags,
  log,
  merge,
  packObjects,
  pull,
  push,
  readBlob,
  readCommit,
  readNote,
  readObject,
  readTag,
  readTree,
  remove,
  removeNote,
  renameBranch,
  resetIndex,
  updateIndex,
  resolveRef,
  status,
  statusMatrix,
  tag,
  version,
  walk,
  _walk,
  writeBlob,
  writeCommit,
  writeObject,
  writeRef,
  writeTag,
  writeTree,
  _listCommitsAndTags,
  _listObjects,
  _pack,
  _uploadPack,
  _GitConfigManager,
  _GitIgnoreManager,
  _GitIndexManager,
  _GitRefManager,
  _GitRemoteHTTP,
  _GitRemoteManager,
  _GitShallowManager,
  _FileSystem,
  _GitAnnotatedTag,
  _GitCommit,
  _GitConfig,
  _GitIndex,
  _GitObject,
  _GitPackIndex,
  _GitPktLine,
  _GitRefSpec,
  _GitRefSpecSet,
  _GitSideBand,
  _GitTree,
  _GitWalkerFs,
  _GitWalkerIndex,
  _GitWalkerRepo,
  _RunningMinimum,
  _expandOid,
  _expandOidLoose,
  _expandOidPacked,
  _hasObject,
  _hasObjectLoose,
  _hasObjectPacked,
  _hashObject,
  _readObject,
  _readObjectLoose,
  _readObjectPacked,
  _readPackIndex,
  _writeObject,
  _writeObjectLoose,
  _BufferCursor,
  _DeepMap,
  _FIFO,
  _StreamReader,
  _abbreviateRef,
  _applyDelta,
  _arrayRange,
  _assertParameter,
  // _asyncIteratorToStream,
  _basename,
  _calculateBasicAuthHeader,
  _collect,
  _compareAge,
  _comparePath,
  _compareRefNames,
  _compareStats,
  _compareStrings,
  _compareTreeEntryPath,
  _deflate,
  _dirname,
  _emptyPackfile,
  _extractAuthFromUrl,
  _filterCapabilities,
  _flat,
  _flatFileListToDirectoryStructure,
  _forAwait,
  _formatAuthor,
  _formatInfoRefs,
  _fromEntries,
  _fromNodeStream,
  _fromStream,
  _fromValue,
  _getIterator,
  _listpack,
  // eslint-disable-next-line camelcase
  _utils_hashObject,
  _indent,
  _inflate,
  _isBinary,
  _join,
  _mergeFile,
  _mergeTree,
  _mode2type,
  _modified,
  _normalizeAuthorObject,
  _normalizeCommitterObject,
  _normalizeMode,
  _normalizeNewlines,
  _normalizePath,
  _normalizeStats,
  _outdent,
  _padHex,
  _parseAuthor,
  _pkg,
  _posixifyPathBuffer,
  _resolveBlob,
  _resolveCommit,
  _resolveFileIdInTree,
  _resolveFilepath,
  _resolveTree,
  _rmRecursive,
  _shasum,
  _sleep,
  _splitLines,
  _toHex,
  _translateSSHtoHTTP,
  _unionOfIterators,
  _worthWalking,
  _parseCapabilitiesV2,
  _parseListRefsResponse,
  _parseReceivePackResponse,
  _parseRefsAdResponse,
  _parseUploadPackRequest,
  _parseUploadPackResponse,
  _writeListRefsRequest,
  _writeReceivePackRequest,
  _writeRefsAdResponse,
  _writeUploadPackRequest,
}

// default export
export default {
  Errors,
  STAGE,
  TREE,
  WORKDIR,
  add,
  abortMerge,
  addNote,
  addRemote,
  annotatedTag,
  branch,
  checkout,
  clone,
  commit,
  getConfig,
  getConfigAll,
  setConfig,
  currentBranch,
  deleteBranch,
  deleteRef,
  deleteRemote,
  deleteTag,
  expandOid,
  expandRef,
  fastForward,
  fetch,
  findMergeBase,
  findRoot,
  getRemoteInfo,
  getRemoteInfo2,
  hashBlob,
  indexPack,
  init,
  isDescendent,
  isIgnored,
  listBranches,
  listFiles,
  listNotes,
  listRemotes,
  listServerRefs,
  listTags,
  log,
  merge,
  packObjects,
  pull,
  push,
  readBlob,
  readCommit,
  readNote,
  readObject,
  readTag,
  readTree,
  remove,
  removeNote,
  renameBranch,
  resetIndex,
  updateIndex,
  resolveRef,
  status,
  statusMatrix,
  tag,
  version,
  walk,
  _walk,
  writeBlob,
  writeCommit,
  writeObject,
  writeRef,
  writeTag,
  writeTree,
  _listObjects,
  _pack,
  _uploadPack,
  _GitConfigManager,
  _GitIgnoreManager,
  _GitIndexManager,
  _GitRefManager,
  _GitRemoteHTTP,
  _GitRemoteManager,
  _GitShallowManager,
  _FileSystem,
  _GitAnnotatedTag,
  _GitCommit,
  _GitConfig,
  _GitIndex,
  _GitObject,
  _GitPackIndex,
  _GitPktLine,
  _GitRefSpec,
  _GitRefSpecSet,
  _GitSideBand,
  _GitTree,
  _GitWalkerFs,
  _GitWalkerIndex,
  _GitWalkerRepo,
  _RunningMinimum,
  _expandOid,
  _expandOidLoose,
  _expandOidPacked,
  _hasObject,
  _hasObjectLoose,
  _hasObjectPacked,
  _hashObject,
  _readObject,
  _readObjectLoose,
  _readObjectPacked,
  _readPackIndex,
  _writeObject,
  _writeObjectLoose,
  _BufferCursor,
  _DeepMap,
  _FIFO,
  _StreamReader,
  _abbreviateRef,
  _applyDelta,
  _arrayRange,
  _assertParameter,
  // _asyncIteratorToStream,
  _basename,
  _calculateBasicAuthHeader,
  _collect,
  _compareAge,
  _comparePath,
  _compareRefNames,
  _compareStats,
  _compareStrings,
  _compareTreeEntryPath,
  _deflate,
  _dirname,
  _emptyPackfile,
  _extractAuthFromUrl,
  _filterCapabilities,
  _flat,
  _flatFileListToDirectoryStructure,
  _forAwait,
  _formatAuthor,
  _formatInfoRefs,
  _fromEntries,
  _fromNodeStream,
  _fromStream,
  _fromValue,
  _getIterator,
  _listpack,
  _utils_hashObject,
  _indent,
  _inflate,
  _isBinary,
  _join,
  _mergeFile,
  _mergeTree,
  _mode2type,
  _modified,
  _normalizeAuthorObject,
  _normalizeCommitterObject,
  _normalizeMode,
  _normalizeNewlines,
  _normalizePath,
  _normalizeStats,
  _outdent,
  _padHex,
  _parseAuthor,
  _pkg,
  _posixifyPathBuffer,
  _resolveBlob,
  _resolveCommit,
  _resolveFileIdInTree,
  _resolveFilepath,
  _resolveTree,
  _rmRecursive,
  _shasum,
  _sleep,
  _splitLines,
  // _symbols,
  _toHex,
  _translateSSHtoHTTP,
  _unionOfIterators,
  _worthWalking,
  _parseCapabilitiesV2,
  _parseListRefsResponse,
  _parseReceivePackResponse,
  _parseRefsAdResponse,
  _parseUploadPackRequest,
  _parseUploadPackResponse,
  _writeListRefsRequest,
  _writeReceivePackRequest,
  _writeRefsAdResponse,
  _writeUploadPackRequest,
}

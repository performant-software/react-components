// @flow

const SESSION_DEFAULT = '{}';

/**
 * Restores the list session from the passed storage object.
 *
 * @param key
 * @param storage
 *
 * @returns {{}|any}
 */
const restoreSession = (key, storage) => {
  if (!(key && storage)) {
    return {};
  }

  const session = storage.getItem(key) || SESSION_DEFAULT;
  return JSON.parse(session);
};

/**
 * Sets the passed list session on the passed storage object.
 *
 * @param key
 * @param storage
 * @param session
 */
const setSession = (key, storage, session) => {
  if (!(key && storage)) {
    return;
  }

  const currentSession = restoreSession(key, storage);
  storage.setItem(key, JSON.stringify({ ...currentSession, ...session }));
};

export default {
  restoreSession,
  setSession
};

/* eslint-disable no-underscore-dangle */
import CONFIG from '../globals/config';

const CacheHelper = {
  // register cache
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  //   delete old cache
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  //   validate if cache exist
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },

  //   open current cache
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  //   fetch and add new cache
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },

  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
};

export default CacheHelper;

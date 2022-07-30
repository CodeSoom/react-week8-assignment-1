import REGIONS from '@fixtures/regions';
import CATEGORIES from '@fixtures/categories';
import RESTAURANTS from '@fixtures/restaurants';
import RESTAURANT from '@fixtures/restaurant';
import ACCESS_TOKEN from '@fixtures/access-token';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './api';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      async json() { return data; },
    });
  };

  const mockFetchError = () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });
  };

  describe('fetchRegions', () => {
    beforeEach(() => {
      mockFetch(REGIONS);
    });

    it('returns regions', async () => {
      const regions = await fetchRegions();

      expect(regions).toEqual(REGIONS);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(CATEGORIES);
    });

    it('returns categories', async () => {
      const categories = await fetchCategories();

      expect(categories).toEqual(CATEGORIES);
    });
  });

  describe('fetchRestaurants', () => {
    beforeEach(() => {
      mockFetch(RESTAURANTS);
    });

    it('returns restaurants', async () => {
      const restaurants = await fetchRestaurants({
        regionName: '서울',
        categoryId: 1,
      });

      expect(restaurants).toEqual(RESTAURANTS);
    });
  });

  describe('fetchRestaurant', () => {
    beforeEach(() => {
      mockFetch(RESTAURANT);
    });

    it('returns restaurants', async () => {
      const restaurant = await fetchRestaurant({ restaurantId: 1 });

      expect(restaurant).toEqual(RESTAURANT);
    });
  });

  describe('postLogin', () => {
    context('when succeeded', () => {
      beforeEach(() => {
        mockFetch({ accessToken: ACCESS_TOKEN });
      });

      it('returns accessToken', async () => {
        const accessToken = await postLogin({
          email: 'tester@example.com',
          password: '1234',
        });

        expect(accessToken).toEqual(ACCESS_TOKEN);
      });
    });

    context('when failed', () => {
      beforeEach(() => {
        mockFetchError();
      });

      it('throws error', async () => {
        await expect(async () => {
          await postLogin({
            email: 'tester@example.com',
            password: '1234',
          });
        }).rejects.toThrow(new Error('잘못된 요청입니다.'));
      });
    });
  });

  describe('postReview', () => {
    beforeEach(() => {
      mockFetch();
    });

    it('returns nothing', async () => {
      const result = await postReview({
        accessToken: ACCESS_TOKEN,
        restaurantId: 1,
        score: 5,
        description: '맛있어요!',
      });

      expect(result).toBeUndefined();
    });
  });
});

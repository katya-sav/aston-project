import { createSelector as createSelectorBase } from '@reduxjs/toolkit';

import type { RootState } from './store';

export const createSelector = createSelectorBase.withTypes<RootState>();

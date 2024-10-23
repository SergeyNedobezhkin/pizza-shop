import { createEffect, createEvent, createStore, restore, sample } from 'effector';
import { debug } from 'patronum';
// interface categoryState {
//     activeId: number | null;
//     setIdActivated: (activeId: number) => void;
// }

export const setIdActivated = createEvent<number>();

export const $activeId = createStore<number | null>(null);

// export const $category = createStore<Record<string, any>>({
//     activeId: 0,
//     setIdActivated: (activeId: number) => activeId
// });

sample({
    clock: setIdActivated,
    fn: (id) => id,
    target: $activeId
})


export const categoryModel = {
    setIdActivated: setIdActivated,
    categoryActiveId: $activeId
}

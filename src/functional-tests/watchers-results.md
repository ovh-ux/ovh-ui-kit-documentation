# Watchers

## Results
- Empty page: **2**
- Datagrid with local data
    - 25 items/page: **878**
    - 300 items/page: **9 960**
- Datagrid with remote data
    - 25 items/page: **878**
    - 300 items/page: **9 960**

## What could be improved

### Datagrid

Since the datagrid is rendering all rows for a page, even if they are not visible to the user, a lot of watchers are created to maintain synchronized the UI with data. The best solution would be to render only rows that are really shown, and maybe a buffer around for better scrolling, instead of all.

For now, the datagrid has about 33 watchers per row. If we decide to render only visible rows + 5 before + 5 after we could get about 27 rows (17 + 5 + 5) with a monitor that can render the 2160 x 1440 resolution. So, we would have about 891 watchers only to render rows that are really required. This number is still huge but doesn't seem critical, since mobile and desktop can work with around 2000 watchers before performance impact.

In conclusion, the real solution is to get as soon as possible a good virtual scroll solution and work later to reduce the amount of watchers per row.
